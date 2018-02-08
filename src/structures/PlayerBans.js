const Player = require('./Player');

class PlayerBans extends Player {
	constructor(player) {
		super();
		this.steamID = player.SteamId;
		this.communityBanned = player.CommunityBanned;
		this.vacBanned = player.VACBanned;
		this.daysSinceLastBan = player.DaysSinceLastBan;
		this.economyBan = player.EconomyBan;
		this.vacBans = player.NumberOfVACBans;
		this.gameBans = player.NumberOfGameBans;
	}

	/**
	 * @type {Date} Date when the last ban occurred.
	 * @readonly
	 */
	get lastBan() {
		return new Date(Date.now() - (1000 * 60 * 60 * 24 * this.daysSinceLastBan));
	}
}

module.exports = PlayerBans;