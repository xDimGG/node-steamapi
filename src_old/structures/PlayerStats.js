const Player = require('./Player');
const objectify = require('../utils/objectify');

class PlayerStats extends Player {
	constructor(player) {
		super(player);
		this.game = player.gameName;
		if (player.stats)
			this.stats = objectify(player.stats);
		if (player.achievements)
			this.achievements = objectify(player.achievements, 'achieved');
	}
}

module.exports = PlayerStats;
