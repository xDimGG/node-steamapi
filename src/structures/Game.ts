const appBase = 'https://steamcdn-a.akamaihd.net/steam/apps';
const cfBase = 'https://cdn.cloudflare.steamstatic.com/steam/apps';

export default class Game {
	/** App ID for this game */
	id: number;

	constructor(data: any) {
		this.id = data.appid;
	}

	/** (might not exist) large sized header used on the store page */
	get headerURL() { return `${cfBase}/${this.id}/header.jpg`; }

	/** (might not exist) medium sized header image */
	get headerMediumURL() { return `${cfBase}/${this.id}/capsule_231x87.jpg`; }

	/** (might not exist) small header image used on user pages */
	get smallHeaderURL() { return `${cfBase}/${this.id}/capsule_184x69.jpg`; }

	/** (might not exist) tiny header image used on app bundles */
	get tinyHeaderURL() { return `${cfBase}/${this.id}/capsule_sm_120.jpg`; }

	// the following URLs are courtesy of
	// https://www.reddit.com/r/steamgrid/comments/d6ha6f/universal_link_for_downloading_games_cover/

	/** (might not exist) game page background */
	get backgroundURL() { return `${appBase}/${this.id}/library_hero.jpg`; }

	/** (might not exist) game cover */
	get coverURL() { return `${appBase}/${this.id}/library_600x900_2x.jpg`; }

	/** (might not exist) transparent game logo*/
	get logoURL() { return `${appBase}/${this.id}/logo.png`; }
}
