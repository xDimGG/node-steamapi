const fetch = require('snekfetch').get;
const { version } = require('./package.json');
const appReg = /^\d+$/;
const idReg = /^\d{17}$/;

class SteamAPI {
  /**
   * Sets Steam key for future use
   * @param {string} key Steam key
   */
  constructor(key) {
    if (!key) console.log('no key provided | some methods may not work | go get one > https://goo.gl/DfNy5s');
    this.baseURL = 'https://api.steampowered.com';
    this.key = key;
    this.headers = {
      'User-Agent': `SteamAPI/${version} https://github.com/lloti/steampowered-api`
    };
  }
  /**
   * Get custom path that isn't in SteamAPI
   * @param {string} path Path to request e.g '/IPlayerService/GetOwnedGames/v1?steamid=76561198378422474'
   * @returns {Promise<object>} JSON Response
   */
  get(path) {
    return new Promise((resolve, reject) => {
      fetch(`${this.baseURL}${path}${path.includes('?') ? '&' : '?'}key=${this.key}`, this.headers)
        .then(res => resolve(res.body))
        .catch(reject);
    });
  }
  /**
   * Resolve info based on id|profile|url
   * @param {string} info Something to resolve e.g 'https://steamcommunity.com/id/xDim'
   * @returns {Promise<string>} Profile ID
   */
  resolve(info) {
    if (!info) throw new Error('no info provided');
    return new Promise(async (resolve, reject) => {
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
          .then(res => res.body.response.success === 1 ? res.body.response.steamid : reject('Invalid profile link/id'))
          .catch(reject);
      }
      resolve(steamID);
    });
  }
  /**
   * Get achievements for app id
   * @param {string} app App ID
   * @returns {Promise<Array<string>>} App achievements for ID
   */
  getGameAchievements(app) {
    if (!appReg.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2?gameid=${app}`, this.headers)
        .then(res => res.body)
        .catch(reject);
      resolve(json.achievementpercentages.achievements);
    });
  }
  /**
   * Get news for app id
   * @param {string} app App ID
   * @returns {Promise<Array<Object>} App news for ID
   */
  getGameNews(app) {
    if (!appReg.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamNews/GetNewsForApp/v2?appid=${app}`, this.headers)
        .then(res => res.body)
        .catch(reject);
      if (json.appnews.count === 0) return reject('no news found');
      resolve(json.appnews.newsitems);
    });
  }
  /**
   * Get number of current players for app id
   * @param {string} app App ID
   * @returns {Promise<number>} Number of players
   */
  getGamePlayers(app) {
    if (!appReg.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetNumberOfCurrentPlayers/v1?appid=${app}`, this.headers)
        .then(res => res.body)
        .catch(reject);
      if (json.response.result !== 1) return reject('invalid app id');
      resolve(json.response.player_count);
    });
  }
  /**
   * Get schema for app id
   * @param {string} app App ID
   * @returns {Promise<number>} Schema
   */
  getGameSchema(app) {
    if (!appReg.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetSchemaForGame/v2?key=${this.key}&appid=${app}`, this.headers)
        .then(res => res.body)
        .catch(reject);
      if (!json.game) return reject('game not found');
      resolve(json.game);
    });
  }
  /**
   * Get users achievements for app id
   * @param {string} id User ID
   * @param {string} app App ID
   * @returns {Promise<Object>} Achievements
   */
  getUserAchievements(id, app) {
    if (!idReg.test(id)) throw new Error('no user id provided');
    if (!/^\d+$/.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetPlayerAchievements/v1?key=${this.key}&steamid=${id}&appid=${app}`, this.headers)
        .then(res => res.body)
        .catch(reject);
      if (!json.playerstats.success) return reject('error getting achievements');
      resolve(json.playerstats);
    });
  }
  /**
   * Get users bans
   * @param {string} id User ID
   * @returns {Promise<Object>} Ban info
   */
  getUserBans(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUser/GetPlayerBans/v1?key=${this.key}&steamids=${id}`, this.headers)
        .then(res => res.body)
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
  /**
   * Get users friends
   * @param {string} id User ID
   * @returns {Promise<Array<Object>>} Friends
   */
  getUserFriends(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUser/GetFriendList/v1?key=${this.key}&steamid=${id}`, this.headers)
        .then(res => res.body)
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
  /**
   * Get users groups
   * @param {string} id User ID
   * @returns {Promise<Array<string>>} Groups
   */
  getUserGroups(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUser/GetUserGroupList/v1?key=${this.key}&steamid=${id}`, this.headers)
        .then(res => res.body)
        .catch(reject);
      if (!json.response.success) return reject('failed');
      resolve(json.response.groups.map(group => group.gid));
    });
  }
  /**
   * Get users stats for app id
   * @param {string} id User ID
   * @param {string} app App ID
   * @returns {Promise<Object>} Stats for app id
   */
  getUserStats(id, app) {
    if (!idReg.test(id)) throw new Error('no user id provided');
    if (!/^\d+$/.test(app)) throw new Error('no appid provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUserStats/GetUserStatsForGame/v2?key=${this.key}&steamid=${id}&appid=${app}`, this.headers)
        .then(res => res.body)
        .catch(reject);
      if (!json.playerstats) return reject('game not found for user');
      resolve(json.playerstats);
    });
  }
  /**
   * Get users summary
   * @param {string} id User ID
   * @returns {Promise<Object>} Summary
   */
  getUserSummary(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
      const json = await fetch(`${this.baseURL}/ISteamUser/GetPlayerSummaries/v2?key=${this.key}&steamids=${id}`, this.headers)
        .then(res => res.body)
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

module.exports = SteamAPI;