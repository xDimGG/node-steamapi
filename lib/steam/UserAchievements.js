const fetch = require('node-fetch');
const GamePlayers = require('./GamePlayers');
const idReg = /^\d{17}$/;

class UserAchievements extends GamePlayers {
    getUserAchievements(player, app) {
        if (!idReg.test(player)) throw new Error('no player id provided');
        if (!/^\d+$/.test(app)) throw new Error('no appid provided');
        return new Promise(async (resolve, reject) => {
            const json = await fetch(`https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1?key=${this.key}&steamid=${player}&appid=${app}`, this.headers)
                .then(res => res.json())
                .catch(reject);
            if (!json.playerstats.success) return reject('error getting achievements');
            resolve(json.playerstats);
        });
    }
}

module.exports = UserAchievements;