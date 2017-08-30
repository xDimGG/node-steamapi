const fetch = require('node-fetch');
const GameNews = require('./GameNews');
const idReg = /^\d{17}$/;

class UserFriends extends GameNews {
  getUserFriends(id) {
    if (!idReg.test(id)) throw new Error('no id provided');
    return new Promise(async (resolve, reject) => {
        const json = await fetch(`https://api.steampowered.com/ISteamUser/GetFriendList/v1?key=${this.key}&steamid=${id}`, this.headers)
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
}

module.exports = UserFriends;