const GameServer = require('./GameServer');
const Player = require('./Player');

class PlayerServers extends Player {
	constructor(player, hide) {
		super();
		this.steamID = player.actor;
		this.banned = player.is_banned;
		this.expires = player.expires;
		this.lastActionTime = player.last_action_time;
		this.servers = player.servers
			? player.servers
				.filter(server => !hide || !(server.is_deleted || server.is_expired))
				.map(server => new GameServer(server))
			: [];
	}

	/**
	 * @type {Date} Date when this expires.
	 * @readonly
	 */
	get expiresAt() {
		return new Date(this.expires * 1000);
	}

	/**
	 * @type {Date} Date when the last action was executed.
	 * @readonly
	 */
	get lastActionAt() {
		return new Date(this.lastActionTime * 1000);
	}
}

module.exports = PlayerServers;