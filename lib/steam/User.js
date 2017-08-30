const appReg = /^\d+$/;
const idReg = /^\d{17}$/;

class User extends Resolve {
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

module.exports = User;