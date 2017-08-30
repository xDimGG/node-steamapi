const fetch = require('node-fetch');
const UserAchievements = require('./UserAchievements');

class GameSchema extends UserAchievements {
    getGameSchema(app) {
        if (!/^\d+$/.test(app)) throw new Error('no appid provided');
        return new Promise(async (resolve, reject) => {
            const json = await fetch(`https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2?key=${this.key}&appid=${app}`, this.headers)
                .then(res => res.json())
                .catch(reject);
            if (!json.game) return reject('game not found');
            resolve(json.game);
        });
    }
}

module.exports = GameSchema;