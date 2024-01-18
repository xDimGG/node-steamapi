import SteamID from 'steamid';
import querystring from 'node:querystring';

import Package from '../package.json' assert { type: 'json' };

import { CacheMap, MemoryCacheMap } from './Cache.js';
import { fetch, toObject } from './Utils.js';
import AppMinimal from './structures/AppMinimal.js';
import Server from './structures/Server.js';

const reApp = /^\d{1,7}$/;
const reID = /^\d{17}$/;

const reProfileBase = String.raw`(?:(?:(?:(?:https?)?:\/\/)?(?:www\.)?steamcommunity\.com)?)?\/?`;
const reCommunityID = RegExp(String.raw`^(\d{17})$`, 'i');
const reSteamID2 = RegExp(String.raw`^(STEAM_\d+:\d+:\d+)$`, 'i');
const reSteamID3 = RegExp(String.raw`^(\[U:\d+:\d+\])$`, 'i');
const reProfileURL = RegExp(String.raw`${reProfileBase}profiles\/(\d{17})`, 'i');
const reProfileID = RegExp(String.raw`${reProfileBase}id\/([a-z0-9_-]{2,32})`, 'i');

const STATUS_SUCCESS = 1;

export interface Options {
	/**
	 * Default language to use for the API when a language is not explicitly provided
	 *
	 * 'english' by default
	 */
	language?: Language;

	/**
	 * Default currency to use for the API when a currency is not explicitly provided
	 *
	 * 'us' by default
	 */
	currency?: Currency;

	/**
	 * Custom headers to send for all API requests
	 *
	 * By default, User-Agent is "SteamAPI/<VERSION> (https://www.npmjs.com/package/steamapi)"
	 */
	headers?: { [key: string]: string };

	/**
	 * URL to use for Steam API requests
	 *
	 * 'https://api.steampowered.com' by default
	 */
	baseAPI?: string,

	/**
	 * URL to use for Steam Store API requests
	 *
	 * 'https://store.steampowered.com/api' by default
	 */
	baseStore?: string,

	/**
	 * Whether to use built-in in-memory caching for gameDetailCache and userResolveCache
	 */
	inMemoryCacheEnabled?: boolean;

	/**
	 * If `inMemoryCacheEnabled` is true, this decides whether to cache API requests for getGameDetails()
	 */
	gameDetailCacheEnabled?: boolean;

	/**
	 * How long to cache getGameDetails() in milliseconds
	 */
	gameDetailCacheTTL?: number;

	/**
	 * If `inMemoryCacheEnabled` is true, this decides whether to cache API requests for resolve()
	 */
	userResolveCacheEnabled?: boolean;

	/**
	 * How long to cache resolve() in milliseconds
	 */
	userResolveCacheTTL?: number;
}

const defaultOptions: Options = {
	language: 'english',
	currency: 'us',
	headers: { 'User-Agent': `SteamAPI/${Package.version} (https://www.npmjs.com/package/${Package.name})` },
	baseAPI: 'https://api.steampowered.com',
	baseStore: 'https://store.steampowered.com/api',
	inMemoryCacheEnabled: true,
	gameDetailCacheEnabled: true,
	gameDetailCacheTTL: 86400000,
	userResolveCacheEnabled: true,
	userResolveCacheTTL: 86400000,
};

// Currencies are used for requests with a currency parameter
export type Currency = 'us' | 'ca' | 'cc' | 'es' | 'de' | 'fr' | 'ru' | 'nz' | 'au' | 'uk';

// Languages supported by Steam
export type Language = 'arabic' | 'bulgarian' | 'schinese' | 'tchinese'
	| 'czech' | 'danish' | 'dutch' | 'english' | 'finnish' | 'french'
	| 'german' | 'greek' | 'hungarian' | 'italian' | 'japanese' | 'koreana'
	| 'norwegian' | 'polish' | 'brazilian' | 'portuguese' | 'romanian' | 'russian'
	| 'latam' | 'spanish' | 'swedish' | 'thai' | 'turkish' | 'ukrainian' | 'vietnamese';

export default class SteamAPI {
	language;
	currency;
	headers;
	baseAPI;
	baseStore;

	gameDetailCache?: CacheMap<string, Object>;
	userResolveCache?: CacheMap<string, string>;

	private key = '';

	/**
	 * Make a new SteamAPI Client
	 * @param key Key to use for API calls. Key can be generated at https://steamcommunity.com/dev/apikey. If you want to make requests without a key, pass in false
	 * @param options Custom options for default language, HTTP parameters, and caching
	 */
	constructor(key: string | false, options: Options = {}) {
		if (key !== false) {
			if (key) {
				this.key = key;
			} else {
				console.warn([
					'no key provided',
					'some methods won\'t work',
					'get one from https://goo.gl/DfNy5s or initialize SteamAPI as new SteamAPI(false) to suppress this warning'
				].join('\n'));
			}
		}

		options = {...defaultOptions, ...options};

		if (options.inMemoryCacheEnabled) {
			if (options.gameDetailCacheEnabled && options.gameDetailCacheTTL)
				this.gameDetailCache = new MemoryCacheMap(options.gameDetailCacheTTL);

			if (options.userResolveCacheEnabled && options.userResolveCacheTTL)
				this.userResolveCache = new MemoryCacheMap(options.userResolveCacheTTL);
		}

		this.language = options.language as Language;
		this.currency = options.currency as Currency;
		this.headers = options.headers as { [key: string]: string };
		this.baseAPI = options.baseAPI as string;
		this.baseStore = options.baseStore as string;
	}

	private testApps(apps: number | number[]): void {
		if (!Array.isArray(apps)) apps = [apps];
		if (apps.some(app => !reApp.test(app.toString())))
			throw new TypeError('Invalid app id provided');
	}

	/**
	 * Used to make any GET request to the Steam API
	 * @param path Path to request e.g '/IPlayerService/GetOwnedGames/v1?steamid=76561198378422474'
	 * @param base Base API URL
	 * @returns Parse JSON
	 */
	get(path: string, params: { [key: string]: string } = {}, base = this.baseAPI) {
		if (this.key) params.key = this.key;
		return fetch(`${base}${path}?${querystring.stringify(params)}`, this.headers);
	}

	/**
	 * Resolve runs through a couple different methods for finding a user's profile ID based on
	 * either their id, username, profile url, vanity url, steamID2, or steamID3.
	 * Rejects promise if a profile couldn't be resolved
	 * @param query Something to resolve like https://steamcommunity.com/id/xDim
	 * @returns Profile ID
	 */
	async resolve(query: string): Promise<string> {
		// community id match, ex. 76561198378422474
		const communityIDMatch = query.match(reCommunityID);
		if (communityIDMatch !== null)
			return communityIDMatch[1];

		// url, https://steamcommunity.com/profiles/76561198378422474
		const urlMatch = query.match(reProfileURL);
		if (urlMatch !== null)
			return urlMatch[1];

		// Steam 2: STEAM_0:0:209078373
		const steamID2Match = query.match(reSteamID2);
		if (steamID2Match !== null) {
			const sid = new SteamID(steamID2Match[1]);

			return sid.getSteamID64();
		}

		// Steam 3: [U:1:418156746]
		const steamID3Match = query.match(reSteamID3);
		if (steamID3Match !== null) {
			const sid = new SteamID(steamID3Match[1]);

			return sid.getSteamID64();
		}

		// vanity id, https://steamcommunity.com/id/xDim
		const idMatch = query.match(reProfileID);
		if (idMatch !== null) {
			const id = idMatch[1];
			const cachedID = this.userResolveCache?.get(id);
			if (cachedID) return cachedID;

			const steamID = await this
				.get(`/ISteamUser/ResolveVanityURL/v1`, { vanityurl: id }) // TODO: consider using url_type paramater
				.then(json =>
					json.response.success === STATUS_SUCCESS
						? json.response.steamid
						: Promise.reject(new TypeError(json.response.message)),
				);

			if (this.userResolveCache) this.userResolveCache.set(id, steamID);

			return steamID;
		}

		throw new TypeError('Invalid format');
	}

	/**
	 * Gets featured categories on Steam store
	 *
	 * <warn>undocumented endpoint -- may be unstable</warn>
	 * @param language The language
	 * @param currency The currency
	 */
	getFeaturedCategories({ language = this.language, currency = this.currency } = {}): Promise<{ [key: string]: any }> {
		// TODO: make class for this
		return this.get('/featuredcategories', { l: language }, this.baseStore);
	}

	/**
	 * Gets featured games on Steam store
	 *
	 * <warn>undocumented endpoint -- may be unstable</warn>
	 * @param language The language
	 * @param currency The currency
	 */
	getFeaturedGames({ language = this.language, currency = this.currency } = {}): Promise<{ [key: string]: any }> {
		// TODO: make class for this
		return this.get('/featured', { l: language, cc: currency }, this.baseStore);
	}

	/**
	 * Get details for app id. If an array of more than one app ID is passed in, the parameter &filters=price_overview
	 * will be added to the request since otherwise the server would respond with null
	 *
	 * Note: a game will not have a price_overview field if it is F2P
	 *
	 * <warn>If the array contains invalid app IDs, they will be filtered out</warn>
	 *
	 * <warn>Requests for this endpoint are limited to 200 every 5 minutes</warn>
	 *
	 * <warn>Not every `currency` is supported. Only the following are valid: `us, ca, cc, es, de, fr, ru, nz, au, uk`.</warn>
	 *
	 * <warn>Not every `language` is supported. A list of available languages can be found [here](https://www.ibabbleon.com/Steam-Supported-Languages-API-Codes.html).</warn>
	 * @param app App ID or array of App IDs
	 * @param options.language Description language
	 * @param options.currency Currency currency
	 * @param options.filters Fields to filter out. Field can be found [here](https://wiki.teamfortress.com/wiki/User:RJackson/StorefrontAPI#appdetails)
	 * @returns If app is number, returns single object. If app is array, returns a mapping of app ids to objects
	 */
	async getGameDetails(
		app: number | number[],
		{ language = this.language, currency = this.currency, filters = [] } = {}
	): Promise<{ [key: string]: any }> {
		const isArr = Array.isArray(app);
		this.testApps(app);

		const key = `${app}-${currency}-${language}`;

		// For now we're not touching the cache if an array of apps is passed
		// TODO: maybe cache apps individually if an array is passed?
		if (!isArr) {
			const cached = this.gameDetailCache?.get(key);
			if (cached) return cached;
		}

		const details = await this
			.get('/appdetails', {
				appids: isArr ? app.join(',') : app.toString(),
				cc: currency,
				l: language,
				filters: isArr && app.length > 1 ? 'price_overview' : filters.join(','),
			}, this.baseStore)
			.then(json => {
				if (json === null) throw new Error('Failed to find app ID');

				// TODO: make a class
				const filtered: { [key: string]: any } = {};
				for (const [k, v] of Object.entries(json))
					if ((v as any).success) {
						const d = (v as any).data;
						// Convert empty arrays to empty objects for consistency
						filtered[k] = Array.isArray(d) && d.length === 0 ? {} : d;
					}

				if (Object.keys(filtered).length === 0) throw new Error('Failed to find app ID');

				return isArr ? filtered : filtered[app];
			});

		if (!isArr) this.gameDetailCache?.set(key, details);

		return details;
	}

	/**
	 * Get every single app on steam
	 *
	 * Note: Original JSON names are being preserved instead of converting
	 * each element to a class here because there are 186311+ games
	 * that would have to be made into a class.
	 * @returns Array of very basic app info (ID + name)
	 */
	async getAppList(): Promise<AppMinimal[]> {
		// TODO: allow a parameter to be passed in to convert these to a class?
		return (await this.get('/ISteamApps/GetAppList/v2')).applist.apps;
	}

	/**
	 * Get every server associated with a particular host
	 * @param host Host to query (IPv4 or IPv4:queryport) 
	 * @returns Info of servers
	 */
	async getServers(host: string): Promise<Server[]> {
		const { response } = await this.get(`/ISteamApps/GetServersAtAddress/v1?addr=${host}`);

		return response.success
			? response.servers.map((server: any) => new Server(server))
			: Promise.reject(new Error(response.message));
	}

	/**
	 * API endpoints to consider adding
	 * https://partner.steamgames.com/doc/webapi/ISteamApps#UpToDateCheck
	 * https://partner.steamgames.com/doc/webapi/ISteamWebAPIUtil#GetServerInfo
	 * https://partner.steamgames.com/doc/webapi/ISteamWebAPIUtil#GetSupportedAPIList (wow)
	 * (undocumented) ISteamApps/GetSDRConfig?key={}&appid={}
	 * (undocumented) IStoreService/GetAppList
	 * https://partner.steamgames.com/doc/webapi/ISteamUserStats#GetGlobalStatsForGame
	 * 
	 *
	 */

	 /**
	  * /IPlayerService/GetOwnedGames takes
	  * steamid
	  * include_appinfo bool
	  * include_played_free_games bool
	  * appids_filter uint32
	  * include_free_sub bool
		* skip_unvetted_apps bool
		* language string
		* include_extended_appinfo bool (include_appinfo must also be true)
	  */

	 /**
		* The following accept language parameter `l`:
		* * ISteamUserStats/GetPlayerAchievements
		* * ISteamUserStats/GetSchemaForGame
		* * IPlayerService/GetOwnedGames (actually `language`)
	  */
}