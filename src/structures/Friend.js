const Player = require('./Player');

class Friend extends Player {
	constructor(friend) {
		super();
		this.steamID = friend.steamid;
		this.relationship = friend.relationship;
		this.friendSince = friend.friend_since;
	}

	/**
	 * @type {Date} Date when this person was friended.
	 * @readonly
	 */
	get friendedAt() {
		return new Date(this.friendSince * 1000);
	}
}

module.exports = Friend;