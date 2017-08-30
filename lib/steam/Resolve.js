const fetch = require('node-fetch');
const API = require('./API');

class Resolve extends API {
  resolve(info) {
    if (!info) throw new Error('no info provided');
    return new Promise(async (resolve, reject) => {
        let steamID,
            steamURL;
        if (/^(?:\/?profiles\/)?\d{17}$/.test(info)) {
            steamID = info.replace(/^(?:\/?profiles\/)?(\d{17})$/, '$1');
        } else if (/^(?:\/?id\/)?\w{2,32}$/.test(info)) {
            steamURL = info.replace(/^(?:\/?id\/)?(\w{2,32})$/, '$1');
        } else {
            const url = parse(info);
            if (url.hostname === 'steamcommunity.com') {
                if (url.path.startsWith('/id/')) {
                    steamURL = url.path.replace(/\/id\//, '');
                } else if (url.path.startsWith('/profiles/')) {
                    steamID = url.path.replace(/\/profiles\//, '');
                } else {
                    return reject('Invalid profile link/id');
                }
            }
        }
        if (steamURL) {
            steamID = await fetch(`https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1?key=${this.key}&vanityurl=${steamURL}`, this.headers)
                .then(res => res.json())
                .then(json => json.response.success === 1 ? json.response.steamid : reject('Invalid profile link/id'))
                .catch(reject);
        }
        resolve(steamID);
    });
  }
}

module.exports = Resolve;