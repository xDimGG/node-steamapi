const appReg = /^\d+$/;

class Game {
  getGameAchievements(app) {
    if (!appReg.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2?gameid=${app}`, this.headers)
        .then(res => res.json())
        .catch(reject);
      resolve(json.achievementpercentages.achievements);
    });
  }
  getGameNews(app) {
    if (!appReg.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamNews/GetNewsForApp/v2?appid=${app}`, this.headers)
        .then(res => res.json())
        .catch(reject);
      if (json.appnews.count === 0) return reject('no news found');
      resolve(json.appnews.newsitems);
    });
  }
  getGamePlayers(app) {
    if (!appReg.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetNumberOfCurrentPlayers/v1?appid=${app}&count=1&name[0]`, this.headers)
        .then(res => res.json())
        .catch(reject);
      if (json.response.result !== 1) return reject('invalid app id');
      resolve(json.response.player_count);
    });
  }
  getGameSchema(app) {
    if (!appReg.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetSchemaForGame/v2?key=${this.key}&appid=${app}`, this.headers)
        .then(res => res.json())
        .catch(reject);
      if (!json.game) return reject('game not found');
      resolve(json.game);
    });
  }
}

module.exports = Game;