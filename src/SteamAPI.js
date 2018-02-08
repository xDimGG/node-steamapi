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
const { version } = require('../package.json');
const appReg = /^\d{1,6}$/;
const idReg = /^\d{17}$/;

class SteamAPI {
	/**
	 * Sets Steam key for future use.
	 * @param {string} key Steam key
	 * @param {Object} [cache={}] Optional options for caching `getGameDetails()`
	 * @param {boolean} [cache.enabled=true] Whether to cache or not
	 * @param {number} [cache.expires=86400000] How long cache should last for (ms) [1 day by default]
	 */
	constructor(key, { enabled = true, expires = 86400000 } = {}) {
		if (!key) console.warn('no key provided | some methods may not work | go get one > https://goo.gl/DfNy5s');
		this.key = key;
		this.baseAPI = 'https://api.steampowered.com';
		this.baseStore = 'https://store.steampowered.com/api';
		this.headers = { 'User-Agent': `SteamAPI/${version} (https://www.npmjs.com/package/steamapi)` };
		this.options = { enabled, expires };
		this.resolveCache = new Map();
		if (enabled) this.cache = new Map();
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
	 * Resolve info based on id|profile|url.
	 * Rejects promise if a profile couldn't be resolved.
	 * @param {string} info Something to resolve e.g 'https://steamcommunity.com/id/xDim'
	 * @returns {Promise<string>} Profile ID
	 */
	resolve(info) {
		if (!info) return Promise.reject(new TypeError('Invalid/no app provided'));

		const profileBaseReg = '(?:(?:(?:(?:https?)?:\\/\\/)?(?:www\\.)?steamcommunity\\.com)?)?\\/?';
		const profileURLReg = RegExp(`${profileBaseReg}(?:profiles\\/)?(\\d{17})`, 'i');
		const profileIDReg = RegExp(`${profileBaseReg}(?:id\\/)?(\\w{2,32})`, 'i');

		if (profileURLReg.test(info))
			return Promise.resolve(info.match(profileURLReg)[1]);

		if (profileIDReg.test(info)) {
			const id = info.match(profileIDReg)[1];
			if (this.resolveCache.has(id)) return this.resolveCache.get(id);

			return this
				.get(`/ISteamUser/ResolveVanityURL/v1?vanityurl=${id}`)
				.then(json => json.response.success
					? this.resolveCache.set(id, json.response.steamid).get(id)
					: Promise.reject(new TypeError('Invalid profile ID'))
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
		if (!appReg.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

		return this
			.get(`/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2?gameid=${app}`)
			.then(json => objectify(json.achievementpercentages.achievements, 'percent'));
	}

	/**
	 * Get details for app id.
	 * <warn>Requests for this endpoint are limited to 200 every 5 minutes</warn> 
	 * @param {string} app App ID
	 * @param {boolean} [force=false] Overwrite cache
	 * @returns {Promise<Object>} App details for ID
	 */
	getGameDetails(app, force = false) {
		if (!appReg.test(app)) return Promise.reject(TypeError('Invalid/no app provided'));

		const request = () => this
			.get(`/appdetails?appids=${app}`, this.baseStore)
			.then(json => json[app].success ? json[app].data : Promise.reject(new Error('No app found')));

		if (!force && this.options.enabled && this.cache.has(app) && this.cache.get(app)[0] > Date.now())
			return Promise.resolve(this.cache.get(app)[1]);

		if (this.options.enabled && (!this.cache.has(app) || this.cache.get(app)[0] <= Date.now()))
			return request().then(json => this.cache.set(app, [Date.now() + this.options.expires, json]) && json);

		return request();
	}

	/**
	 * Get news for app id.
	 * @param {string} app App ID
	 * @returns {Promise<Object[]>} App news for ID
	 */
	getGameNews(app) {
		if (!appReg.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

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
		if (!appReg.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

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
		if (!appReg.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

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
			.then(json => json.response.success ? json.response.servers.map(server => new Server(server)) : Promise.reject(new Error('Invalid host')));
	}

	/**
	 * Get users achievements for app id.
	 * @param {string} id User ID
	 * @param {string} app App ID
	 * @returns {Promise<PlayerAchievements>} Achievements
	 */
	getUserAchievements(id, app) {
		if (!idReg.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));
		if (!appReg.test(app)) return Promise.reject(new TypeError('Invalid/no appid provided'));

		return this
			.get(`/ISteamUserStats/GetPlayerAchievements/v1?steamid=${id}&appid=${app}`)
			.then(json => json.playerstats.success ? new PlayerAchievements(json.playerstats) : Promise.reject(new Error('No app/player found')));
	}

	/**
	 * Get users badges.
	 * @param {string} id User ID
	 * @returns {Promise<PlayerBadges>} Badges
	 */
	getUserBadges(id) {
		if (!idReg.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

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
		if ((arr && id.some(i => !idReg.test(i))) || (!arr && !idReg.test(id))) return Promise.reject(new TypeError('Invalid/no id provided'));

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
		if (!idReg.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

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
		if (!idReg.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/ISteamUser/GetUserGroupList/v1?steamid=${id}`)
			.then(json => json.response.success ? json.response.groups.map(group => group.gid) : Promise.reject(new Error('Failed')));
	}

	/**
	 * Get users level.
	 * @param {string} id User ID
	 * @returns {Promise<number>} Level
	 */
	getUserLevel(id) {
		if (!idReg.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

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
		if (!idReg.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

		return this
			.get(`/IPlayerService/GetOwnedGames/v1?steamid=${id}`)
			.then(json => json.response.games.map(game => new Game(game)));
	}

	/**
	 * Get users recent games.
	 * @param {string} id User ID
	 * @returns {Promise<RecentGame[]>} Recent games
	 */
	getUserRecentGames(id) {
		if (!idReg.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));

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
		if (!idReg.test(id)) return Promise.reject(new TypeError('Invalid/no id provided'));
		if (!appReg.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

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
		if ((arr && id.some(i => !idReg.test(i))) || (!arr && !idReg.test(id))) return Promise.reject(new TypeError('Invalid/no id provided'));

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