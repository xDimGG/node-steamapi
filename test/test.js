const SteamAPI = require('..');
const { key } = require('./cfg');
const steam = new SteamAPI(key);

const inspect = json => console.dir(json, { depth: null });

steam.resolve('id/DimGG/').then(async id => {
	console.log('resolve');
	console.log(id);

	console.log('getAppList');
	await steam.getAppList().then(inspect);

	console.log('getFeaturedCategories');
	await steam.getFeaturedCategories().then(inspect);
	console.log('getFeaturedGames');
	await steam.getFeaturedGames().then(inspect);

	console.log('getGameAchievements');
	await steam.getGameAchievements(730).then(inspect);
	console.log('getGameDetails');
	await steam.getGameDetails(730).then(inspect);
	console.log('getGameDetails of another region');
	await steam.getGameDetails(730, false, 'es').then(inspect);
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
	await steam.getUserBadges(id).then(inspect);
	console.log('getUserBans');
	await steam.getUserBans(id).then(inspect);
	console.log('getUserFriends');
	await steam.getUserFriends(id).then(inspect);
	console.log('getUserGroups');
	await steam.getUserGroups(id).then(inspect);
	console.log('getUserLevel');
	await steam.getUserLevel(id).then(inspect);
	console.log('getUserOwnedGames');
	await steam.getUserOwnedGames(id).then(inspect);
	console.log('getUserRecentGames');
	await steam.getUserRecentGames(id).then(inspect);
	console.log('getUserServers');
	await steam.getUserServers(true).then(inspect);
	console.log('getUserStats');
	await steam.getUserStats(id, 730).then(inspect);
	console.log('getUserSummary');
	await steam.getUserSummary(id).then(inspect);
}).catch(inspect);
