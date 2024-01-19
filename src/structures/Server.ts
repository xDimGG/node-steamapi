/** Server regions as indicated by https://developer.valvesoftware.com/wiki/Sv_region */
export enum ServerRegion {
	USEast,
	USWest,
	SouthAmerica,
	Europe,
	Asia,
	Australia,
	MiddleEast,
	Africa,
	World = 255,
}

/** Game server as returned by getServers */
export default class Server {
	/** The SteamID of this game server */
	id: string;

	/** Server address of the form IPv4:PORT */
	address: string;

	/** App ID this server is hosting */
	appID: number;

	/** The directory the game is from */
	gameDir: string;

	/** GMS Index. Not sure what this means */
	gmsIndex: number;

	/** Is this server LAN only */
	lan: boolean;

	/** The port this server is running on */
	port: number;

	/** Server region */
	region: ServerRegion;

	/** Is this server VAC secured */
	secure: boolean;

	/** Server specPort. Not sure what this means */
	specPort: number;

	/** Requirements for clients to join server */
	reject?: string;

	constructor(data: any) {
		this.id = data.steamid;
		this.address = data.addr;
		this.appID = data.appid;
		this.gameDir = data.gamedir;
		this.gmsIndex = data.gmsindex;
		this.lan = data.lan;
		this.port = data.gameport;
		this.region = data.region;
		this.secure = data.secure;
		this.specPort = data.specport;
		this.reject = data.reject;
	}
}
