const fetch = require('node-fetch');
const UserSummary = require('./UserSummary');

class GameNews extends UserSummary {
    getGameNews(app) {
        if (!/^\d+$/.test(app)) throw new Error('no appid provided');
        return new Promise((resolve, reject) => {
            fetch(`https://api.steampowered.com/ISteamNews/GetNewsForApp/v2?appid=${app}`).then(async res => {
                const json = await res.json();
                if (json.appnews.count === 0) return reject('no news found');
                resolve(json.appnews.newsitems);
            }).catch(reject);
        });
    }
}

module.exports = GameNews;