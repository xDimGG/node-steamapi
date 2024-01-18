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

	/** Server region. Not sure what the number means */
	region: number;

	/** Is this server VAC secure */
	secure: boolean;

	/** Server specPort. Not sure what this means */
	specPort: number;

	/** Requirements for clients to join. Not sure */
	reject: string;

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
