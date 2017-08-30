const fetch = require('node-fetch');
const GameSchema = require('./GameSchema');
const idReg = /^\d{17}$/;

class UserStats extends GameSchema {
    getUserStats(player, app) {
        if (!idReg.test(player)) throw new Error('no player id provided');
        if (!/^\d+$/.test(app)) throw new Error('no appid provided');
        return new Promise(async (resolve, reject) => {
            const json = await fetch(`https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v2?key=${this.key}&steamid=${player}&appid=${app}`, this.headers)
                .then(res => res.json())
                .catch(reject);
            if (!json.playerstats) return reject('game not found for user');
            resolve(json.playerstats);
        });
    }
}

module.exports = UserStats;