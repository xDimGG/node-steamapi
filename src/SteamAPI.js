const SteamID = require('steamid');

const PlayerAchievements = require('./structures/PlayerAchievements');
const PlayerSummary = require('./structures/PlayerSummary');
const PlayerServers = require('./structures/PlayerServers');
const PlayerBadges = require('./structures/PlayerBadges');
const PlayerStats = require('./structures/PlayerStats');
const PlayerBans = require('./structures/PlayerBans');
const RecentGame = require('./structures/RecentGame');
const Friend = require('./structures/Friend');
const Server = require('./structures/Server');
const Game = require('./structures/Game');

const objectify = require('./utils/objectify');
const fetch = require('./utils/fetch');
const { version, name } = require('../package.json');
const reApp = /^\d{1,7}$/;
const reRegion = /^us|es|de|fr|ru|nz|au|uk$/i;
const reID = /^\d{17}$/;

const reProfileBase = String.raw`(?:(?:(?:(?:https?)?:\/\/)?(?:www\.)?steamcommunity\.com)?)?\/?`;
const reCommunityID = RegExp(String.raw`^(\d{17})$`, 'i');
const reSteamID2 = RegExp(String.raw`^(STEAM_\d+:\d+:\d+)$`, 'i');
const reSteamID3 = RegExp(String.raw`^(\[U:\d+:\d+\])$`, 'i');
const reProfileURL = RegExp(String.raw`${reProfileBase}profiles\/(\d{17})`, 'i');
const reProfileID = RegExp(String.raw`${reProfileBase}id\/([a-z0-9_-]{2,32})`, 'i');

const STATUS_SUCCESS = 1;

class SteamAPI {
	/**
	 * Sets Steam key for future use.
	 * @param {string} key Steam key
	 * @param {Object} [options={}] Optional options for caching and warnings `getGameDetails()`
	 * @param {boolean} [options.enabled=true] Whether caching is enabled
	 * @param {number} [options.expires=86400000] How long cache should last for in ms (1 day by default)
	 * @param {boolean} [options.disableWarnings=false] Whether to suppress warnings
	 */
	constructor(key, { enabled = true, expires = 86400000, disableWarnings = false } = {}) {
		this.key = key;
		this.baseAPI = 'https://api.steampowered.com';
		this.baseStore = 'https://store.steampowered.com/api';
		this.headers = { 'User-Agent': `SteamAPI/${version} (https://www.npmjs.com/package/${name})` };
		this.options = { enabled, expires, disableWarnings };
		this.resolveCache = new Map();
		if (enabled) this.cache = new Map();
		if (!key) this._warn('no key provided, some methods won\'t work, go get one from https://goo.gl/DfNy5s');
	}

	/**
	 * Prints a warning
	 * @param {...any} args Message
	 * @returns {void}
	 * @private
	 */
	_warn(...args) {
		if (this.options.disableWarnings) return;
		console.warn('[SteamAPI]', ...args);
	}

	/**
	 * Get custom path that isn't in SteamAPI.
	 * @param {string} path Path to request e.g '/IPlayerService/GetOwnedGames/v1?steamid=76561198378422474'
	 * @param {string} [base=this.baseAPI] Base URL
	 * @param {string} [key=this.key] The key to use
	 * @returns {Promise<Object>} JSON Response
	 */
	get(path, base = this.baseAPI, key = this.key) {
		return fetch(`${base}${path}${path.includes('?') ? '&' : '?'}key=${key}`, this.headers);
	}

	/**
	 * Resolve info based on id, profile, or url.
	 * Rejects promise if a profile couldn't be resolved.
	 * @param {string} info Something to resolve e.g 'https://steamcommunity.com/id/xDim'
	 * @returns {Promise<string>} Profile ID
	 */
	resolve(info) {
		if (!info) return Promise.reject(new TypeError('Invalid/no app provided'));

		// community id match, ex. 76561198378422474
		const communityIDMatch = info.match(reCommunityID);
		if (communityIDMatch !== null)
			return Promise.resolve(communityIDMatch[1]);

		// url, https://steamcommunity.com/profiles/76561198378422474
		const urlMatch = info.match(reProfileURL);
		if (urlMatch !== null)
			return Promise.resolve(urlMatch[1]);

		// Steam 2: STEAM_0:0:209078373
		const steamID2Match = info.match(reSteamID2);
		if (steamID2Match !== null) {
			const sid = new SteamID(steamID2Match[1]);

			return Promise.resolve(sid.getSteamID64());
		}

		// Steam 3: [U:1:418156746]
		const steamID3Match = info.match(reSteamID3);
		if (steamID3Match !== null) {
			const sid = new SteamID(steamID3Match[1]);

			return Promise.resolve(sid.getSteamID64());
		}

		// vanity id, https://steamcommunity.com/id/xDim
		const idMatch = info.match(reProfileID);
		if (idMatch !== null) {
			const id = idMatch[1];
			if (this.resolveCache.has(id)) return Promise.resolve(this.resolveCache.get(id));

			return this
				.get(`/ISteamUser/ResolveVanityURL/v1?vanityurl=${id}`)
				.then(json => json.response.success === STATUS_SUCCESS
					? this.resolveCache.set(id, json.response.steamid).get(id)
					: Promise.reject(new TypeError(json.response.message))
				);
		}

		return Promise.reject(new TypeError('Invalid format'));
	}

	/**
	 * @typedef {App}
	 * @property {number} appid The app's ID
	 * @property {string} name The app's name
	 */

	/**
	 * Get every single app on steam.
	 * @returns {Promise<App[]>} Array of apps
	 */
	getAppList() {
		return this
			.get('/ISteamApps/GetAppList/v2')
			.then(json => json.applist.apps);
	}

	/**
	 * Get featured categories on the steam store.
	 * @returns {Promise<Object[]>} Featured categories
	 */
	getFeaturedCategories() {
		return this
			.get('/featuredcategories', this.baseStore)
			.then(Object.values);
	}

	/**
	 * Get featured games on the steam store
	 * @returns {Promise<Object>} Featured games
	 */
	getFeaturedGames() {
		return this.get('/featured', this.baseStore);
	}

	/**
	 * Get achievements for app id.
	 * @param {string} app App ID
	 * @returns {Promise<Object>} App achievements for ID
	 */
	getGameAchievements(app) {
		if (!reApp.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

		return this
			.get(`/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2?gameid=${app}`)
			.then(json => objectify(json.achievementpercentages.achievements, 'percent'));
	}

	/**
	 * Get details for app id.
	 * <warn>Requests for this endpoint are limited to 200 every 5 minutes</warn>
	 * @param {string} app App ID
	 * @param {boolean} [force=false] Overwrite cache
	 * @param {string} [region=us] Store region
	 * @returns {Promise<Object>} App details for ID
	 */
	getGameDetails(app, force = false, region = 'us') {
		if (!reApp.test(app)) return Promise.reject(TypeError('Invalid/no app provided'));
		if (!reRegion.test(region)) return Promise.reject(TypeError('Invalid region provided'));

		const request = () => this
			.get(`/appdetails?appids=${app}&cc=${region}`, this.baseStore)
			.then(json => json[app].success
				? json[app].data
				: Promise.reject(new Error('No app found'))
			);
		const key = `${app}-${region.toLowerCase()}`;

		if (!force && this.options.enabled && this.cache.has(key) && this.cache.get(key)[0] > Date.now())
			return Promise.resolve(this.cache.get(key)[1]);

		if (this.options.enabled && (!this.cache.has(key) || this.cache.get(key)[0] <= Date.now()))
			return request().then(json => this.cache.set(key, [Date.now() + this.options.expires, json]) && json);

		return request();
	}

	/**
	 * Get news for app id.
	 * @param {string} app App ID
	 * @returns {Promise<Object[]>} App news for ID
	 */
	getGameNews(app) {
		if (!reApp.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

		return this
			.get(`/ISteamNews/GetNewsForApp/v2?appid=${app}`)
			.then(json => json.appnews.count ? json.appnews.newsitems : Promise.reject(new Error('No news found')));
	}

	/**
	 * Get number of current players for app id.
	 * @param {string} app App ID
	 * @returns {Promise<number>} Number of players
	 */
	getGamePlayers(app) {
		if (!reApp.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

		return this
			.get(`/ISteamUserStats/GetNumberOfCurrentPlayers/v1?appid=${app}`)
			.then(json => json.response.result === 1 ? json.response.player_count : Promise.reject(new Error('No app found')));
	}

	/**
	 * Get schema for app id.
	 * @param {string} app App ID
	 * @returns {Promise<Object>} Schema
	 */
	getGameSchema(app) {
		if (!reApp.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

		return this
			.get(`/ISteamUserStats/GetSchemaForGame/v2?appid=${app}`)
			.then(json => json.game ? json.game : Promise.reject(new Error('No app found')));
		// TODO: Schema Class
	}

	/**
	 * Get every server associated with host.
	 * @param {string} host Host to request
	 * @returns {Promise<Server[]>} Server info
	 */
	getServers(host) {
		if (!host) return Promise.reject(new TypeError('No host provided'));

		return this
			.get(`/ISteamApps/GetServersAtAddress/v1?addr=${host}`)
			.then(json => json.response.success
				? json.response.servers.map(server => new Server(server))
				: Promise.reject(new Error(json.response.message))
			);
	}

	/**
	 * Get users achievements for app id.
	 * @param {string} id User ID
	 * @param {string} app App ID
	 * @returns {Promise<PlayerAchievements>} Achievements
	 */
	getUserAchievements(id, app) {
		if (!reID.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));
		if (!reApp.test(app)) return Promise.reject(new TypeError('Invalid/no appid provided'));

		return this
			.get(`/ISteamUserStats/GetPlayerAchievements/v1?steamid=${id}&appid=${app}&l=english`)
			.then(json => json.playerstats.success
				? new PlayerAchievements(json.playerstats)
				: Promise.reject(new Error(json.playerstats.message))
			);
	}

	/**
	 * Get users badges.
	 * @param {string} id User ID
	 * @returns {Promise<PlayerBadges>} Badges
	 */
	getUserBadges(id) {
		if (!reID.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/IPlayerService/GetBadges/v1?steamid=${id}`)
			.then(json => new PlayerBadges(json.response));
	}

	/**
	 * Get users bans.
	 * @param {string|string[]} id User ID(s)
	 * @returns {Promise<PlayerBans|PlayerBans[]>} Ban info
	 */
	getUserBans(id) {
		const arr = Array.isArray(id);
		if ((arr && id.some(i => !reID.test(i))) || (!arr && !reID.test(id))) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/ISteamUser/GetPlayerBans/v1?steamids=${id}`)
			.then(json => json.players.length
				? arr
					? json.players.map(player => new PlayerBans(player))
					: new PlayerBans(json.players[0])
				: Promise.reject(new Error('No players found'))
			);
	}

	/**
	 * Get users friends.
	 * @param {string} id User ID
	 * @returns {Promise<Friend[]>} Friends
	 */
	getUserFriends(id) {
		if (!reID.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/ISteamUser/GetFriendList/v1?steamid=${id}`)
			.then(json => json.friendslist.friends.map(friend => new Friend(friend)));
	}

	/**
	 * Get users groups.
	 * @param {string} id User ID
	 * @returns {Promise<string[]>} Groups
	 */
	getUserGroups(id) {
		if (!reID.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/ISteamUser/GetUserGroupList/v1?steamid=${id}`)
			.then(json => json.response.success
				? json.response.groups.map(group => group.gid)
				: Promise.reject(new Error(json.response.message))
			);
	}

	/**
	 * Get users level.
	 * @param {string} id User ID
	 * @returns {Promise<number>} Level
	 */
	getUserLevel(id) {
		if (!reID.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/IPlayerService/GetSteamLevel/v1?steamid=${id}`)
			.then(json => json.response.player_level);
	}

	/**
	 * Get users owned games.
	 * @param {string} id User ID
	 * @returns {Promise<Game[]>} Owned games
	 */
	getUserOwnedGames(id) {
		if (!reID.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/IPlayerService/GetOwnedGames/v1?steamid=${id}&include_appinfo=1`)
			.then(json => json.response.games ? json.response.games.map(game => new Game(game)) : Promise.reject(new Error('No games found')));
	}

	/**
	 * Get users recent games.
	 * @param {string} id User ID
	 * @returns {Promise<RecentGame[]>} Recent games
	 */
	getUserRecentGames(id) {
		if (!reID.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/IPlayerService/GetRecentlyPlayedGames/v1?steamid=${id}`)
			.then(json => json.response.total_count ? json.response.games.map(game => new RecentGame(game)) : []);
	}

	/**
	 * Gets servers on steamcommunity.com/dev/managegameservers using your key or provided key.
	 * @param {boolean} [hide=false] Hide deleted/expired servers
	 * @param {string} [key=this.key] Key
	 * @returns {Promise<PlayerServers>} Servers
	 */
	getUserServers(hide = false, key) {
		return this
			.get('/IGameServersService/GetAccountList/v1', this.baseAPI, key)
			.then(json => new PlayerServers(json.response, hide));
	}

	/**
	 * Get users stats for app id.
	 * @param {string} id User ID
	 * @param {string} app App ID
	 * @returns {Promise<PlayerStats>} Stats for app id
	 */
	getUserStats(id, app) {
		if (!reID.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));
		if (!reApp.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

		return this
			.get(`/ISteamUserStats/GetUserStatsForGame/v2?steamid=${id}&appid=${app}`)
			.then(json => json.playerstats ? new PlayerStats(json.playerstats) : Promise.reject(new Error('No player found')));
	}

	/**
	 * Get users summary.
	 * @param {string} id User ID
	 * @returns {Promise<PlayerSummary>} Summary
	 */
	getUserSummary(id) {
		const arr = Array.isArray(id);
		if ((arr && id.some(i => !reID.test(i))) || (!arr && !reID.test(id))) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/ISteamUser/GetPlayerSummaries/v2?steamids=${id}`)
			.then(json => json.response.players.length
				? arr
					? json.response.players.map(player => new PlayerSummary(player))
					: new PlayerSummary(json.response.players[0])
				: Promise.reject(new Error('No players found'))
			);
	}
}

module.exports = SteamAPI;
