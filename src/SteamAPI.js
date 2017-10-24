const fetch = require('./Fetch');
const { version } = require('../package.json');
const idReg = /^\d{17}$/;

class SteamAPI {
	/**
	 * Sets Steam key for future use
	 * @param {string} key Steam key
	 * @param {Object} [cache={}] Optional options for caching `getGameDetails()`
	 * @param {boolean} [cache.enabled=true] Whether to cache or not
	 * @param {number} [cache.expires=86400000] How long cache should last for (ms) [1 day by default]
	 */
	constructor(key, cache = {}) {
		if (!key) console.log('no key provided | some methods may not work | go get one > https://goo.gl/DfNy5s');
		this.baseURL = 'https://api.steampowered.com';
		this.key = key;
		this.headers = {
			'User-Agent': `SteamAPI/${version} https://www.npmjs.com/package/steamapi`
		};
		this.options = {
			enabled: cache.enabled === false ? false : true,
			expires: cache.expires || 86400000
		};
		if (this.options.enabled) this.cache = new Map();
	}

	/**
	 * Get custom path that isn't in SteamAPI
	 * @param {string} path Path to request e.g '/IPlayerService/GetOwnedGames/v1?steamid=76561198378422474'
	 * @returns {Promise<Object>} JSON Response
	 */
	async get(path) {
		return await fetch(`${this.baseURL}${path}${path.includes('?') ? '&' : '?'}key=${this.key}`, this.headers);
	}

	/**
	 * Resolve info based on id|profile|url
	 * @param {string} info Something to resolve e.g 'https://steamcommunity.com/id/xDim'
	 * @returns {Promise<string>} Profile ID
	 */
	async resolve(info) {
		if (!info) throw new Error('no info provided');
		let steamID, steamURL;
		if (/^(?:\/?profiles\/)?\d{17}.*$/.test(info)) {
			steamID = info.replace(/^(?:\/?profiles\/)?(\d{17}).*$/, '$1');
		} else if (/^(?:\/?id\/)?\w{2,32}.*$/.test(info)) {
			steamURL = info.replace(/^(?:\/?id\/)?(\w{2,32}).*$/, '$1');
		} else {
			const url = parse(info);
			if (url.hostname === 'steamcommunity.com') {
				if (url.path.startsWith('/id/')) {
					steamURL = url.path.replace(/\/id\//, '');
				} else if (url.path.startsWith('/profiles/')) {
					steamID = url.path.replace(/\/profiles\//, '');
				} else {
					throw new Error('Invalid profile link/id');
				}
			}
		}
		if (steamURL) {
			const json = await fetch(`${this.baseURL}/ISteamUser/ResolveVanityURL/v1?key=${this.key}&vanityurl=${steamURL}`, this.headers);
			if (json.response.success) {
				steamID = json.response.steamid
			} else {
				throw new Error('Invalid profile link/id')
			}
		}
		return steamID;
	}

	/**
	 * Get every single app on steam
	 * @returns {Promise<Array<Object>>} Objects consisting of appid and name
	 */
	async getAppList() {
		const json = await fetch(`${this.baseURL}/ISteamApps/GetAppList/v2`, this.headers);
		return json.applist.apps;
	}
	
	/**
	 * Get featured categories on the steam store
	 * @returns {Promise<Object>>} Featured categories
	 */
	async getFeaturedCategories() {
		const json = await fetch('https://store.steampowered.com/api/featuredcategories', this.headers);
		return Object.values(json);
	}
	
	/**
	 * Get featured games on the steam store
	 * @returns {Promise<Object>>} Featured games
	 */
	async getFeaturedGames() {
		const json = await fetch('https://store.steampowered.com/api/featured', this.headers);
		return json;
	}

	/**
	 * Get achievements for app id
	 * @param {string} app App ID
	 * @returns {Promise<Array<string>>} App achievements for ID
	 */
	async getGameAchievements(app) {
		if (isNaN(app)) throw new Error('no appid provided');
		const json = await fetch(`${this.baseURL}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2?gameid=${app}`, this.headers);
		return json.achievementpercentages.achievements;
	}

	/**
	 * Get details for app id
	 * <warn>Requests for this endpoint are limited to 200 every 5 minutes</warn> 
	 * @param {string} app App ID
	 * @param {boolean} force Overwrite cache
	 * @returns {Promise<Object>>} App details for ID
	 */
	async getGameDetails(app, force) {
		if (isNaN(app)) throw new Error('no appid provided');
		app = app.toString();
		if (this.options.enabled) {
			if (force || (this.cache.has(app) && this.cache.get(app).expires <= Date.now()) || !this.cache.has(app)) {
				const json = await fetch(`https://store.steampowered.com/api/appdetails?appids=${app}`, this.headers);
				if (!json[app].success) throw new Error('no app found');
				this.cache.set(app, {
					data: json[app].data,
					expires: Date.now() + this.options.expires
				});
			}
		} else {
			const json = await fetch(`https://store.steampowered.com/api/appdetails?appids=${app}`, this.headers);
			if (!json[app].success) throw new Error('no app found');
			return json[app].data;
		}
		return this.cache.get(app).data;
	}

	/**
	 * Get news for app id
	 * @param {string} app App ID
	 * @returns {Promise<Array<Object>>} App news for ID
	 */
	async getGameNews(app) {
		if (isNaN(app)) throw new Error('no appid provided');
		const json = await fetch(`${this.baseURL}/ISteamNews/GetNewsForApp/v2?appid=${app}`, this.headers);
		if (json.appnews.count === 0) throw new Error('no news found');
		return json.appnews.newsitems;
	}

	/**
	 * Get number of current players for app id
	 * @param {string} app App ID
	 * @returns {Promise<number>} Number of players
	 */
	async getGamePlayers(app) {
		if (isNaN(app)) throw new Error('no appid provided');
		const json = await fetch(`${this.baseURL}/ISteamUserStats/GetNumberOfCurrentPlayers/v1?appid=${app}`, this.headers);
		if (json.response.result !== 1) throw new Error('invalid app id');
		return json.response.player_count;
	}

	/**
	 * Get schema for app id
	 * @param {string} app App ID
	 * @returns {Promise<number>} Schema
	 */
	async getGameSchema(app) {
		if (isNaN(app)) throw new Error('no appid provided');
		const json = await fetch(`${this.baseURL}/ISteamUserStats/GetSchemaForGame/v2?key=${this.key}&appid=${app}`, this.headers);
		if (!json.game) throw new Error('game not found');
		return json.game;
	}

	/**
	 * Get every server associated with host
	 * @param {string} host Host to request
	 * @returns {Promise<Array<Object>>} Objects consisting of server info
	 */
	async getServers(host) {
		if (!host) throw new Error('no host provided');
		const json = await fetch(`${this.baseURL}/ISteamApps/GetServersAtAddress/v1?addr=${host}`, this.headers);
		if (!json.response.success) throw new Error('invalid host');
		return json.response.servers.map(server => ({
			address: server.addr,
			appID: server.appid,
			game: server.gamedir,
			gmsindex: server.gmsindex,
			lan: server.lan,
			port: server.gameport,
			region: server.region,
			secure: server.secure,
			specPort: server.specPort
		}));
	}

	/**
	 * Get users achievements for app id
	 * @param {string} id User ID
	 * @param {string} app App ID
	 * @returns {Promise<Object>} Achievements
	 */
	async getUserAchievements(id, app) {
		if (!idReg.test(id)) throw new Error('no user id provided');
		if (isNaN(app)) throw new Error('no appid provided');
		const json = await fetch(`${this.baseURL}/ISteamUserStats/GetPlayerAchievements/v1?key=${this.key}&steamid=${id}&appid=${app}`, this.headers);
		const stats = json.playerstats;
		if (!stats.success) throw new Error('error getting achievements');
		return {
			gameName: stats.gameName,
			steamID: stats.steamID,
			achievements: stats.achievements.map(achievement => ({
				api: achievement.apiname,
				achieved: achievement.achieved ? true : false,
				unlockTime: achievement.unlocktime
			}))
		};
	}

	/**
	 * Get users badges
	 * @param {string} id User ID
	 * @returns {Promise<Array<Object>>} Badges
	 */
	async getUserBadges(id) {
		if (!idReg.test(id)) throw new Error('no id provided');
		const json = await fetch(`${this.baseURL}/IPlayerService/GetBadges/v1?key=${this.key}&steamid=${id}`, this.headers);
		return json.response.badges.map(badge => ({
			appID: badge.appid,
			badgeID: badge.badgeid,
			borderColor: badge.border_color,
			communityItemID: badge.communityitemid,
			completionTime: badge.completion_time,
			level: badge.level,
			scarcity: badge.scarcity,
			xp: badge.xp
		}));
	}

	/**
	 * Get users bans
	 * @param {string} id User ID
	 * @returns {Promise<Object>} Ban info
	 */
	async getUserBans(id) {
		if (!idReg.test(id)) throw new Error('no id provided');
		const json = await fetch(`${this.baseURL}/ISteamUser/GetPlayerBans/v1?key=${this.key}&steamids=${id}`, this.headers);
		const ban = json.players[0];
		return {
			communityBanned: ban.CommunityBanned,
			daysSinceLastBan: ban.DaysSinceLastBan,
			economyBan: ban.EconomyBan,
			numberOfVACBans: ban.NumberOfVACBans,
			numberOfGameBans: ban.NumberOfGameBans,
			steamID: ban.SteamID,
			VACBanned: ban.VACBanned
		};
	}

	/**
	 * Get users friends
	 * @param {string} id User ID
	 * @returns {Promise<Array<Object>>} Friends
	 */
	async getUserFriends(id) {
		if (!idReg.test(id)) throw new Error('no id provided');
		const json = await fetch(`${this.baseURL}/ISteamUser/GetFriendList/v1?key=${this.key}&steamid=${id}`, this.headers);
		return json.friendslist.friends.map(friend => ({
			steamID: friend.steamid,
			relationship: friend.relationship,
			friendSince: friend.friend_since
		}));
	}

	/**
	 * Get users groups
	 * @param {string} id User ID
	 * @returns {Promise<Array<string>>} Groups
	 */
	async getUserGroups(id) {
		if (!idReg.test(id)) throw new Error('no id provided');
		const json = await fetch(`${this.baseURL}/ISteamUser/GetUserGroupList/v1?key=${this.key}&steamid=${id}`, this.headers);
		if (!json.response.success) throw new Error('failed');
		return json.response.groups.map(group => group.gid);
	}

	/**
	 * Get users level
	 * @param {string} id User ID
	 * @returns {Promise<number>} Level
	 */
	async getUserLevel(id) {
		if (!idReg.test(id)) throw new Error('no id provided');
		const json = await fetch(`${this.baseURL}/IPlayerService/GetSteamLevel/v1?key=${this.key}&steamid=${id}`, this.headers);
		return json.response.player_level;
	}

	/**
	 * Get users owned games
	 * @param {string} id User ID
	 * @returns {Promise<Array<Object>>} Owned games
	 */
	async getUserOwnedGames(id) {
		if (!idReg.test(id)) throw new Error('no id provided');
		const json = await fetch(`${this.baseURL}/IPlayerService/GetOwnedGames/v1?key=${this.key}&steamid=${id}`, this.headers);
		return json.response.games.map(game => ({
			appID: game.appid,
			playTime: game.playtime_forever,
			playTime2: game.playtime_2weeks || null
		}));
	}

	/**
	 * Get users recent games
	 * @param {string} id User ID
	 * @returns {Promise<Array<Object>>} Recent games
	 */
	async getUserRecentGames(id) {
		if (!idReg.test(id)) throw new Error('no id provided');
		const json = await fetch(`${this.baseURL}/IPlayerService/GetRecentlyPlayedGames/v1?key=${this.key}&steamid=${id}`, this.headers);
		return json.response.games.map(game => ({
			appID: game.appid,
			logoURL: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${game.appid}/${game.img_logo_url}.jpg`,
			name: game.name,
			iconURL: `https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`,
			playTime: game.playtime_forever,
			playTime2: game.playtime_2weeks
		}));
	}

	/**
	 * Gets servers on steamcommunity.com/dev/managegameservers using your key or provided key
	 * @param {boolean} [hide=false] Hide deleted/expired servers
	 * @param {string} [key=this.key] Key
	 * @returns {Promise<Object>} Servers
	 */
	async getUserServers(hide = false, key = this.key) {
		const json = await fetch(`${this.baseURL}/IGameServersService/GetAccountList/v1?key=${key}`, this.headers);
		const response = json.response;
		return {
			actor: response.actor,
			expires: response.expires,
			banned: response.is_banned,
			lastActionTime: response.last_action_time,
			servers: response.servers.filter(server => hide && !(server.is_deleted || server.is_expired)).map(server => ({
				appID: server.appid,
				deleted: server.is_deleted,
				expired: server.is_expired,
				lastLoginTime: server.rt_last_logon,
				memo: server.memo,
				steamID: server.steamid,
				token: server.login_token
			}))
		};
	}

	/**
	 * Get users stats for app id
	 * @param {string} id User ID
	 * @param {string} app App ID
	 * @returns {Promise<Object>} Stats for app id
	 */
	async getUserStats(id, app) {
		if (!idReg.test(id)) throw new Error('no user id provided');
		if (isNaN(app)) throw new Error('no appid provided');
		const json = await fetch(`${this.baseURL}/ISteamUserStats/GetUserStatsForGame/v2?key=${this.key}&steamid=${id}&appid=${app}`, this.headers);
		if (!json.playerstats) throw new Error('game not found for user');
		return json.playerstats;
	}

	/**
	 * Get users summary
	 * @param {string} id User ID
	 * @returns {Promise<Object>} Summary
	 */
	async getUserSummary(id) {
		if (!idReg.test(id)) throw new Error('no id provided');
		const json = await fetch(`${this.baseURL}/ISteamUser/GetPlayerSummaries/v2?key=${this.key}&steamids=${id}`, this.headers);
		const player = json.response.players[0];
		if (!player) throw new Error('invalid id');
		return {
			avatar: {
				small: player.avatar,
				medium: player.avatarmedium,
				large: player.avatarfull
			},
			commentPermission: player.commentpermission,
			created: player.timecreated,
			lastLogOff: player.lastlogoff,
			nickname: player.personaname,
			personaState: player.personastate,
			personaStateFlags: player.personastateflags,
			primaryGroupID: player.primaryclanid,
			profileState: player.profilestate,
			profileURL: player.profileurl,
			steamID: player.steamid,
			visibilityState: player.communityvisibilitystate
		};
	}
}

module.exports = SteamAPI;