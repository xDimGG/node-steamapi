class Server {
	constructor(server) {
		this.address = server.addr;
		this.appID = server.appid;
		this.game = server.gamedir;
		this.gmsindex = server.gmsindex;
		this.lan = server.lan;
		this.port = server.gameport;
		this.region = server.region;
		this.secure = server.secure;
		this.specPort = server.specport;
	}
}

module.exports = Server;