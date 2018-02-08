const Achievement = require('./Achievement');
const Player = require('./Player');

class PlayerAchievements extends Player {
	constructor(player) {
		super();
		this.steamID = player.steamID;
		this.gameName = player.gameName;
		this.achievements = player.achievements.map(achievement => new Achievement(achievement));
	}
}

module.exports = PlayerAchievements;