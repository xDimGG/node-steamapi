const SteamAPI = require('..');
const { key } = require('./cfg');
const steam = new SteamAPI(key);

const inspect = json => console.log(require('util').inspect(json, { depth: null }));

steam.resolve('xDim').then(async id => {
    console.log('resolve');
    console.log(id);
    console.log('getGameAchievements');
    await steam.getGameAchievements(730).then(inspect).catch(inspect);
    console.log('getGameNews');
    await steam.getGameNews(730).then(inspect).catch(inspect);
    console.log('getGamePlayers');
    await steam.getGamePlayers(730).then(inspect).catch(inspect);
    console.log('getGameSchema');
    await steam.getGameSchema(730).then(inspect).catch(inspect);

    console.log('getUserAchievements');
    await steam.getUserAchievements(id, 730).then(inspect);
    console.log('getUserBans');
    await steam.getUserBans(id).then(inspect);
    console.log('getUserFriends');
    await steam.getUserFriends(id).then(inspect);
    console.log('getUserGroups');
    await steam.getUserGroups(id).then(inspect);
    console.log('getUserStats');
    await steam.getUserStats(id, 730).then(inspect);
    console.log('getUserSummary');
    await steam.getUserSummary(id).then(inspect);
}).catch(inspect);