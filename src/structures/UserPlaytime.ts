import Game from './Game.js';
import GameInfo from './GameInfo.js';
import GameInfoExtended from './GameInfoExtended.js';

export default class UserPlaytime<G> {
	/** The game with various levels of information based on parameters passed to getUserOwnedGames()  */
	game: G;

	/** The total number of minutes the user has played this game */
	minutes: number;

	/** The number of minutes played in the last 2 weeks */
	recentMinutes: number;

	/** The number of minutes played on Windows (not accurate) */
	windowsMinutes: number;

	/** The number of minutes played on Mac (not accurate) */
	macMinutes: number;

	/** The number of minutes played on Linux (not accurate) */
	linuxMinutes: number;

	/** The number of minutes played while offline */
	disconnectedMinutes: number;

	/** UNIX Timestamp for when the user last played this game if the user has ever launched the game */
	lastPlayedTimestamp?: number;

	constructor(data: any, game: G) {
		this.game = game;
		this.minutes = data.playtime_forever;
		this.recentMinutes = data.playtime_2weeks || 0;
		this.windowsMinutes = data.playtime_windows_forever;
		this.macMinutes = data.playtime_mac_forever;
		this.linuxMinutes = data.playtime_linux_forever;
		this.disconnectedMinutes = data.playtime_disconnected || 0;
		this.lastPlayedTimestamp = data.rtime_last_played;
	}

	/** Date when uaer last played this game */
	get lastPlayedAt() {
		return this.lastPlayedTimestamp === undefined ? undefined : new Date(this.lastPlayedTimestamp * 1000);
	}
}
