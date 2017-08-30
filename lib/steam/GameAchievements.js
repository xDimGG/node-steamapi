const fetch = require('node-fetch');
const UserGroups = require('./UserGroups');

class GameAchievements extends UserGroups {
    getGameAchievements(app) {
        if (!/^\d+$/.test(app)) throw new Error('no appid provided');
        return new Promise(async (resolve, reject) => {
            const json = await fetch(`https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2?gameid=${app}`, this.headers)
                .then(res => res.json())
                .catch(reject);
            resolve(json.achievementpercentages.achievements);
        });
    }
}

module.exports = GameAchievements;