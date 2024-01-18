export default class User {
	/** This user's Steam ID */
	steamID: string;

	constructor(data: any) {
		this.steamID = data.steamID || data.steamid || data.SteamId; // c'mon Valve
	}

	/** The permalink to this user's profile */
	get profileURL(): string {
		return `https://steamcommunity.com/profiles/${this.steamID}`;
	}
}
