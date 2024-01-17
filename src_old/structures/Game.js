const appBase = 'https://steamcdn-a.akamaihd.net/steam/apps';
const communityBase = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps';
const cfBase = 'https://cdn.cloudflare.steamstatic.com/steam/apps';

class Game {
	constructor(game) {
		this.name = game.name;
		this.appID = game.appid;
		this.playTime = game.playtime_forever;
		this.playTime2 = game.playtime_2weeks || 0;

		// img_logo_url used to be a part of the api, now removed, but still documented
		this.logoURL = game.img_logo_url ? `${communityBase}/${this.appID}/${game.img_logo_url}.jpg` : null;
		// tiny app icon
		this.iconURL = `${communityBase}/${this.appID}/${game.img_icon_url}.jpg`;

		// Some of the following URLs aren't guaranteed to exist

		// large sized header used on the store page
		this.headerURL = `${cfBase}/${this.appID}/header.jpg`;
		// medium sized header image
		this.headerMediumURL = `${cfBase}/${this.appID}/capsule_231x87.jpg`;
		// small header image used on user pages
		this.smallHeaderURL = `${cfBase}/${this.appID}/capsule_184x69.jpg`;
		// tiny header image used on app bundles
		this.tinyHeaderURL = `${cfBase}/${this.appID}/capsule_sm_120.jpg`;

		// the following URLs are courtesy of
		// https://www.reddit.com/r/steamgrid/comments/d6ha6f/universal_link_for_downloading_games_cover/

		// game page background
		this.backgroundURL = `${appBase}/${this.appID}/library_hero.jpg`;
		// game cover
		this.backgroundURL = `${appBase}/${this.appID}/library_600x900_2x.jpg`;
		// large transparent logo that appears in user's library
		this.logoURL = `${appBase}/${this.appID}/logo.png`;
	}
}

module.exports = Game;
