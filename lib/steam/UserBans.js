const fetch = require('node-fetch');
const UserFriends = require('./UserFriends');
const idReg = /^\d{17}$/;

class UserBans extends UserFriends {
    getUserBans(id) {
        if (!idReg.test(id)) throw new Error('no id provided');
        return new Promise(async (resolve, reject) => {
            const json = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerBans/v1?key=${this.key}&steamids=${id}`, this.headers)
                .then(res => res.json())
                .catch(reject);
            const ban = json.players[0];
            resolve({
                communityBanned: ban.CommunityBanned,
                daysSinceLastBan: ban.DaysSinceLastBan,
                economyBan: ban.EconomyBan,
                numberOfVACBans: ban.NumberOfVACBans,
                numberOfGameBans: ban.NumberOfGameBans,
                steamID: ban.SteamID,
                VACBanned: ban.VACBanned
            });
        });
    }
}

module.exports = UserBans;