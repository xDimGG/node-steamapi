const fetch = require('node-fetch');
const Resolve = require('./Resolve');
const idReg = /^\d{17}$/;

class UserSummary extends Resolve {
  getUserSummary(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
        const json = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2?key=${this.key}&steamids=${id}`, this.headers)
            .then(res => res.json())
            .catch(reject);
        const player = json.response.players[0];
        if (!player) return reject('invalid id');
        resolve({
            avatar: {
                small: player.avatar,
                medium: player.avatarmedium,
                large: player.avatarfull
            },
            commentPermission: player.commentpermission,
            created: player.timecreated,
            lastLogOff: player.lastlogoff,
            nickname: player.personaname,
            personaState: player.personastate,
            personaStateFlags: player.personastateflags,
            primaryGroupID: player.primaryclanid,
            profileState: player.profilestate,
            profileURL: player.profileurl,
            steamID: player.steamid,
            visibilityState: player.communityvisibilitystate
        });
    });
  }
}

module.exports = UserSummary;