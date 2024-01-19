import { ServerRegion } from './Server.js';

/** Game server as returned by getServerList */
export default class GameServer {
	/** Server address of the form IPv4:PORT */
	address: string;

	/** The port this server is running on */
	port: number;

	/** The SteamID of this game server */
	id: string;

	/** Public name of the server */
	name: string;

	/** App ID this server is hosting */
	appID: number;

	/** The directory the game is from */
	gameDir: string;

	/** What version the server is running */
	version: string;

	/** Product string. Not sure what this means. Is often the same as gameDir */
	product: string;

	/** Server region */
	region: ServerRegion;

	/** Number of players in the server */
	players: number;

	/** Max number of players that can join the server */
	maxPlayers: number;

	/** Number of bots in the server */
	bots: number;

	/** What map the game server is on */
	map: string;

	/** Is this server VAC secured */
	secure: boolean;

	/** Is the server running dedicated */
	dedicated: boolean;

	/** What OS the server is running. Typically 'l' or 'w' */
	os: string;

	/** Game specific sv_tags e.g. hidden,reserved,empty,secure */
	tags: string[];

	constructor(data: any) {
		this.address = data.addr;
		this.port = data.gameport;
		this.id = data.steamid;
		this.name = data.name;
		this.appID = data.appid;
		this.gameDir = data.gamedir;
		this.version = data.version;
		this.product = data.product;
		this.region = data.region;
		this.players = data.players;
		this.maxPlayers = data.max_players;
		this.bots = data.bots;
		this.map = data.map;
		this.secure = data.secure;
		this.dedicated = data.dedicated;
		this.os = data.os;
		this.tags = data.gametype.split(',');
	}
}
