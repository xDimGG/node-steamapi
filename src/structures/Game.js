const cdn = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps';

class Game {
	constructor(game) {
		this.name = game.name;
		this.appID = game.appid;
		this.playTime = game.playtime_forever;
		this.playTime2 = game.playtime_2weeks || 0;
		this.logoURL = `${cdn}/${game.appid}/${game.img_logo_url}.jpg`;
		this.iconURL = `${cdn}/${game.appid}/${game.img_icon_url}.jpg`;
	}
}

module.exports = Game;