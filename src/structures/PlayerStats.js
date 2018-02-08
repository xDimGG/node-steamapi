const Player = require('./Player');
const objectify = require('../utils/objectify');

class PlayerStats extends Player {
	constructor(player) {
		super();
		this.steamID = player.steamID;
		this.game = player.gameName;
		this.stats = objectify(player.stats);
		this.achievements = objectify(player.achievements, 'achieved');
	}
}

module.exports = PlayerStats;