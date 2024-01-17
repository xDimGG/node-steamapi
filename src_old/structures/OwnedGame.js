const Game = require('./Game');

class RecentGame extends Game {
	constructor(game) {
		super(game);

		this.lastPlayed = game.rtime_last_played;
	}

	/**
	 * @type {Date|null} Date when the player last played this game. Null if they've never played
	 * @readonly
	 */
	get lastPlayedAt() {
		if (this.lastPlayed === 0) return null;

		return new Date(this.lastPlayed * 1000);
	}
}

module.exports = RecentGame;
