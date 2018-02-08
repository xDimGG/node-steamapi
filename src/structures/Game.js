class Game {
	constructor(game) {
		this.appID = game.appid;
		this.playTime = game.playtime_forever;
		this.playTime2 = game.playtime_2weeks || 0;
	}
}

module.exports = Game;