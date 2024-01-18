export default class UserServer {
	/** The SteamID of this game server */
	id: string;

	/** App ID this server is for */
	appID: number;

	/** The login token for this server */
	token: string;

	/** The memo/name for this server */
	memo: string;

	/** Has this server been deleted */
	deleted: boolean;

	/** Has this server expired */
	expired: boolean;

	/** Unix Timestamp for when last time this server token was logged onto */
	lastLogonTimestamp: number;

	constructor(data: any) {
		this.id = data.steamid;
		this.appID = data.appid;
		this.token = data.login_token;
		this.memo = data.memo;
		this.deleted = data.is_deleted;
		this.expired = data.is_expired;
		this.lastLogonTimestamp = data.rt_last_logon;
	}

	/** `lastLogonTimestamp` as a Date object */
	get lastLogonAt() {
		return new Date(this.lastLogonTimestamp * 1000);
	}
}
