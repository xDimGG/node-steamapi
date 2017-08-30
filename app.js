const fetch = require('node-fetch');
const { version } = require('./package.json');
const appReg = /^\d+$/;
const idReg = /^\d{17}$/;

class API {
  constructor(data) {
    if (!data) console.log('no key provided | some methods may not work | go get one > https://goo.gl/DfNy5s');
    this.baseURL = 'https://api.steampowered.com';
    this.key = data;
    this.headers = {
      'User-Agent': `SteamAPI/${version} https://github.com/lloti/steampowered-api`
    };
  }
  get(path) {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseURL}${path}${path.includes('?') ? '&' : '?'}key=${this.key}`, this.headers)
        .then(res => res.json())
        .then(resolve)
        .catch(reject);
    });
  }
  resolve(info) {
    if (!info) throw new Error('no info provided');
    return new Promise(async(resolve, reject) => {
      let steamID, steamURL;
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
        steamID = await fetch(`${this.baseURL}/ISteamUser/ResolveVanityURL/v1?key=${this.key}&vanityurl=${steamURL}`, this.headers)
          .then(res => res.json())
          .then(json => json.response.success === 1 ? json.response.steamid : reject('Invalid profile link/id'))
          .catch(reject);
      }
      resolve(steamID);
    });
  }
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
  getUserAchievements(player, app) {
    if (!idReg.test(player)) throw new Error('no player id provided');
    if (!/^\d+$/.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetPlayerAchievements/v1?key=${this.key}&steamid=${player}&appid=${app}`, this.headers)
        .then(res => res.json())
        .catch(reject);
      if (!json.playerstats.success) return reject('error getting achievements');
      resolve(json.playerstats);
    });
  }
  getUserBans(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUser/GetPlayerBans/v1?key=${this.key}&steamids=${id}`, this.headers)
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
  getUserFriends(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUser/GetFriendList/v1?key=${this.key}&steamid=${id}`, this.headers)
        .then(res => res.json())
        .catch(reject);
      const friends = json.friendslist.friends;
      const newFriends = [];
      for (const friend of friends) {
        newFriends.push({
          steamID: friend.steamid,
          relationship: friend.relationship,
          friendSince: friend.friend_since
        });
      }
      resolve(newFriends);
    });
  }
  getUserGroups(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUser/GetUserGroupList/v1?key=${this.key}&steamid=${id}`, this.headers)
        .then(res => res.json())
        .catch(reject);
      if (!json.response.success) return reject('failed');
      resolve(json.response.groups.map(group => group.gid));
    });
  }
  getUserStats(player, app) {
    if (!idReg.test(player)) throw new Error('no player id provided');
    if (!/^\d+$/.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetUserStatsForGame/v2?key=${this.key}&steamid=${player}&appid=${app}`, this.headers)
        .then(res => res.json())
        .catch(reject);
      if (!json.playerstats) return reject('game not found for user');
      resolve(json.playerstats);
    });
  }
  getUserSummary(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUser/GetPlayerSummaries/v2?key=${this.key}&steamids=${id}`, this.headers)
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

module.exports = API;