import SteamAPI from '../dist/index.js';
import { key } from './cfg.mjs';

const steam = new SteamAPI(key);
const inspect = json => console.dir(json, { depth: null });

steam.resolve('id/DimGG/').then(async id => {
	console.log('resolve');
	console.log(id);

	console.log('getAppList');
	await steam.getAppList().then(inspect);
	console.log('getFeaturedCategories');
	await steam.getFeaturedCategories('polish').then(inspect);
	console.log('getFeaturedGames');
	await steam.getFeaturedGames().then(inspect);

	console.log('getGameAchievementPercentages');
	await steam.getGameAchievementPercentages(730).then(inspect);
	console.log('getGameDetails');
	await steam.getGameDetails([730]).then(inspect);
	console.log('getGameDetails of another region');
	await steam.getGameDetails(730, false, 'es').then(inspect);
	console.log('getGameDetails of another region in another language');
	await steam.getGameDetails(730, false, 'es', 'russian').then(inspect);
	console.log('getGameNews');
	await steam.getGameNews(730).then(inspect);
	console.log('getGamePlayers');
	await steam.getGamePlayers(730).then(inspect);
	console.log('getGameSchema');
	await steam.getGameSchema(730).then(inspect);

	console.log('getServers');
	await steam.getServers('216.52.148.47').then(inspect);

	console.log('getUserAchievements');
	await steam.getUserAchievements(id, 730).then(inspect);
	console.log('getUserBadges');
	await steam.getUserBadges(id);
	console.log('getUserBans');
	await steam.getUserBans(id).then(inspect);
	console.log('getUserFriends');
	await steam.getUserFriends(id).then(inspect);
	console.log('getUserGroups');
	await steam.getUserGroups(id).then(inspect);
	console.log('getUserLevel');
	await steam.getUserLevel(id).then(inspect);
	console.log('getUserOwnedGames');
	await steam.getUserOwnedGames(id, {
		includeAppInfo: true,
		includeExtendedAppInfo: true,
		includeFreeGames: true,
		includeFreeSubGames: true,
		includeUnvettedApps: true,
	}).then(inspect);
	console.log('getUserRecentGames');
	await steam.getUserRecentGames(id).then(inspect);
	console.log('getUserServers');
	await steam.getUserServers(true).then(inspect);
	console.log('getUserStats');
	await steam.getUserStats(id, 730).then(inspect);
	console.log('getUserSummary');
	await steam.getUserSummary(['76561198248669594', id]).then(inspect);

	console.log('getServerTime');
	await steam.getServerTime().then(inspect);

	console.log('getCountries');
	const countries = await steam.getCountries();
	console.log(countries[0].countrycode, countries[0].countryname, countries[0].hasstates);

	console.log('getStates');
	const states = await steam.getStates(countries[0].countrycode);
	console.log(states[0].countrycode, states[0].statecode, states[0].statename);

	console.log('getCities');
	const cities = await steam.getCities(countries[0].countrycode, states[0].statecode);
	console.log(cities[0].countrycode, cities[0].statecode, cities[0].cityname, cities[0].cityid);

	console.log('getServerList');
	await steam.getServerList().then(inspect);
}).catch(inspect);
