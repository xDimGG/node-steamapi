import UserServer from './UserServer.js';

/** Game servers as returned by getUserServers */
export default class UserServers {
	/** Servers this account has created */
	servers: UserServer[];

	/** Whether this account has a ban from hosting servers */
	banned:  boolean;

	/** Server actor SteamID. Not sure what this is */
	actorID: string;

	/** Unix Timestamp for when the servers expires */
	expiresTimestamp: number;

	/** Unix Timestamp for the last time a server token action was executed */
	lastActionTimestamp: number;

	constructor(data: any) {
		this.servers = data.servers.map((server: any) => new UserServer(server));
		this.banned = data.is_banned;
		this.expiresTimestamp = data.expires;
		this.actorID = data.actor;
		this.lastActionTimestamp = data.last_action_time;
	}

	/** `expiresTimestamp` as a Date object */
	get expiresAt() {
		return new Date(this.expiresTimestamp * 1000);
	}

	/** `lastActionTimestamp` as a Date object */
	get lastActionAt() {
		return new Date(this.lastActionTimestamp * 1000);
	}
}
