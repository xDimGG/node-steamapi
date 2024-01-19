import User from './User.js';

/** Persona states as indicated by https://developer.valvesoftware.com/wiki/Steam_Web_API#Public_Data */
export enum UserPersonaState {
	Offline,
	Online,
	Busy,
	Away,
	Snooze,
	LookingToTrade,
	LookingToPlay,
}

export default class UserSummary extends User {
	/** The user's avatar in varous sizes */
	avatar;

	/** Link to the user's profile */
	url: string;

	/** Is this user's profile visible to you */
	visible: boolean;

	/** The user's persona state. Always 0 if profile is private */
	personaState: UserPersonaState;

	/** Flags for personState. Seems to always be 0 */
	personaStateFlags: number;

	/** If this user allows comments on their profile */
	allowsComments: boolean;

	/** The nickname this user has set */
	nickname: string;

	/** Unix Timestamp when the user last logged off */
	lastLogOffTimestamp?: number;

	/** Unix Timestamp when the profile was created if visible */
	createdTimestamp?: number;

	/** The user's real name if set and visible */
	realName?: string;

	/** The user's primary group ID if set and visible */
	primaryGroupID?: string;

	/** The game the user is currently playing if any */
	gameID?: number;

	/** The name of the game the user is currently playing if any */
	gameName?: string;

	/** The IP:PORT of the game server the user is currently playing on if any */
	gameServerIP?: string;

	/** The SteamID of the game server the user is currently playing on if any */
	gameServerID?: string;

	/** The user's country code if set and visible */
	countryCode?: string;

	/** The user's state code if set and visible */
	stateCode?: string;

	/** The user's city ID if set and visible */
	cityID?: string;

	constructor(data: any) {
		super(data);

		this.avatar = {
			small: data.avatar as string,
			medium: data.avatarmedium as string,
			large: data.avatarfull as string,
			hash: data.avatarhash as string,
		};

		this.url = data.profileurl;
		this.createdTimestamp = data.timecreated;
		this.lastLogOffTimestamp = data.lastlogoff;
		this.realName = data.realname;

		this.nickname = data.personaname;
		this.primaryGroupID = data.primaryclanid;
		this.personaState = data.personastate;
		this.personaStateFlags = data.personastateflags;
		this.allowsComments = Boolean(data.commentpermission);
		this.visible = data.communityvisibilitystate === 3;

		this.gameID = data.gameid;
		this.gameName = data.gameextrainfo;
		this.gameServerIP = data.gameserverip;
		this.gameServerID = data.gameserversteamid;

		this.countryCode = data.loccountrycode;
		this.stateCode = data.locstatecode;
		this.cityID = data.loccityid;
	}

	/** Date when this user's account was created */
	get createdAt() {
		return this.createdTimestamp === undefined ? undefined : new Date(this.createdTimestamp * 1000);
	}

	/** Date when this user last logged off */
	get lastLogOffAt() {
		return this.lastLogOffTimestamp === undefined ? undefined : new Date(this.lastLogOffTimestamp * 1000);
	}
}
