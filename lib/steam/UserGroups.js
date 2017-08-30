const fetch = require('node-fetch');
const UserBans = require('./UserBans');
const idReg = /^\d{17}$/;

class UserGroups extends UserBans {
    getUserGroups(id) {
        if (!idReg.test(id)) throw new Error('no id provided');
        return new Promise(async (resolve, reject) => {
            const json = await fetch(`https://api.steampowered.com/ISteamUser/GetUserGroupList/v1?key=${this.key}&steamid=${id}`, this.headers)
                .then(res => res.json())
                .catch(reject);
            if (!json.response.success) return reject('failed');
            resolve(json.response.groups.map(group => group.gid));
        });
    }
}

module.exports = UserGroups;