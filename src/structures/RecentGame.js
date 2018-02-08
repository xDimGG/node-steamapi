const Game = require('./Game');
const cdn = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps';

class RecentGame extends Game {
	constructor(game) {
		super(game);
		this.name = game.name;
		this.logoURL = `${cdn}/${game.appid}/${game.img_logo_url}.jpg`;
		this.iconURL = `${cdn}/${game.appid}/${game.img_icon_url}.jpg`;
	}
}

module.exports = RecentGame;