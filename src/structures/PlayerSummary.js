const Player = require('./Player');

class PlayerSummary extends Player {
	constructor(player) {
		super();
		this.avatar = {
			small: player.avatar,
			medium: player.avatarmedium,
			large: player.avatarfull,
		};
		this.steamID = player.steamid;
		this.url = player.profileurl;
		this.created = player.timecreated;
		this.lastLogOff = player.lastlogoff;
		this.nickname = player.personaname;
		this.realName = player.realname;
		this.primaryGroupID = player.primaryclanid;
		this.personaState = player.personastate;
		this.personaStateFlags = player.personastateflags;
		this.commentPermission = player.commentpermission;
		this.visibilityState = player.communityvisibilitystate;
		this.countryCode = player.loccountrycode;
		this.stateCode = player.locstatecode;
		this.cityID = player.loccityid;
		this.gameServerIP = player.gameserverip;
		this.gameServerSteamID = player.gameserversteamid;
		this.gameExtraInfo = player.gameextrainfo;
		this.gameID = player.gameid;
	}

	/**
	 * @type {Date} Date when this player's account was created.
	 * @readonly
	 */
	get createdAt() {
		return new Date(this.created * 1000);
	}

	/**
	 * @type {Date} Date when this player last logged off.
	 * @readonly
	 */
	get lastLogOffAt() {
		return new Date(this.lastLogOff * 1000);
	}
}

module.exports = PlayerSummary;