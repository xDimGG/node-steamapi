const fetch = require('node-fetch');
const GameAchievements = require('./GameAchievements');

class GamePlayers extends GameAchievements {
    getGamePlayers(app) {
        if (!/^\d+$/.test(app)) throw new Error('no appid provided');
        return new Promise(async (resolve, reject) => {
            const json = await fetch(`https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1?appid=${app}&count=1&name[0]`, this.headers)
                .then(res => res.json())
                .catch(reject);
                if (json.response.result !== 1) return reject('invalid app id');
            resolve(json.response.player_count);
        });
    }
}

module.exports = GamePlayers;