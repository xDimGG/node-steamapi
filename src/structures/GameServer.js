class GameServer {
	constructor(server) {
		this.appID = server.appid;
		this.actor = server.actor;
		this.memo = server.memo;
		this.token = server.login_token;
		this.deleted = server.is_deleted;
		this.expired = server.is_expired;
		this.lastLoginTime = server.rt_last_logon;
	}

	/**
	 * @type {boolean} Whether or not this token is usable.
	 * @readonly
	 */
	get usable() {
		return !this.deleted && !this.expired;
	}

	/**
	 * @type {Date} Date the last time this token was used.
	 * @readonly
	 */
	get lastLoginAt() {
		return new Date(this.lastLoginTime * 1000);
	}
}

module.exports = GameServer;