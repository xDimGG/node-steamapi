import Game from './Game.js';

const communityBase = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/apps';

export default class GameInfoBasic extends Game {
	/** Name for this game */
	name: string;

	/** Hash for this game's icon */
	icon: string;

	constructor(data: any) {
		super(data);

		this.name = data.name;
		this.icon = data.img_icon_url;
	}

	/** tiny app icon */
	get iconURL() { return `${communityBase}/${this.id}/${this.icon}.jpg`; }

	/** img_logo_url used to be a part of the api, now removed, but still documented */
	// this.logoURL = game.img_logo_url ? `${communityBase}/${this.id}/${game.img_logo_url}.jpg` : null;
}