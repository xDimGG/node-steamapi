import SteamID from 'steamid';
import querystring from 'node:querystring';

import Package from '../package.json' assert { type: 'json' };

import { CacheMap, MemoryCacheMap } from './Cache.js';
import { fetch, toObject } from './Utils.js';

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
	language?: Language;

	inMemoryCacheEnabled?: boolean;

	gameDetailCacheEnabled?: boolean;
	gameDetailCacheTTL?: number;

	userResolveCacheEnabled?: boolean;
	userResolveCacheTTL?: number;
}

const defaultOptions: Options = {
	language: 'english',

	inMemoryCacheEnabled: true,

	gameDetailCacheEnabled: true,
	gameDetailCacheTTL: 86400000,

	userResolveCacheEnabled: true,
	userResolveCacheTTL: 86400000,
};

export type Currency = 'us' | 'ca' | 'cc' | 'es' | 'de' | 'fr' | 'ru' | 'nz' | 'au' | 'uk';

export type Language = 'arabic' | 'bulgarian' | 'schinese' | 'tchinese'
	| 'czech' | 'danish' | 'dutch' | 'english' | 'finnish' | 'french'
	| 'german' | 'greek' | 'hungarian' | 'italian' | 'japanese' | 'koreana'
	| 'norwegian' | 'polish' | 'brazilian' | 'portuguese' | 'romanian' | 'russian'
	| 'latam' | 'spanish' | 'swedish' | 'thai' | 'turkish' | 'ukrainian' | 'vietnamese';

export default class SteamAPI {
	public baseAPI = 'https://api.steampowered.com';
	public baseStore = 'https://store.steampowered.com/api';
	public headers: { [key: string]: string } = {
		'User-Agent': `SteamAPI/${Package.version} (https://www.npmjs.com/package/${Package.name})`,
	};
	public gameDetailCache?: CacheMap<string, Object>;
	public userResolveCache?: CacheMap<string, string>;

	private key = '';

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
				.get(`/ISteamUser/ResolveVanityURL/v1`, { vanityurl: id })
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
	 */
	getFeaturedCategories(l: Language = 'english'): { [key: string]: any } {
		// TODO: make class for this
		return this.get('/featuredcategories', { l }, this.baseStore);
	}

	/**
	 * Get app's available achievements
	 */
	// getGameAchievements(app: string) Achievement[] {
	// 	if (!reApp.test(app)) return Promise.reject(new TypeError('Invalid/no app provided'));

	// 	return this
	// 		.get(`/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2?gameid=${app}`)
	// 		.then(json => toObject(json.achievementpercentages.achievements, 'percent', 'name'));
	// }
}