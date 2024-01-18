import User from './User.js';

export default class UserFriend extends User {
	/** Unix Timestamp representing when the friendship started */
	friendedTimestamp: number;

	/** The type of the relationship (note: seems to always be 'friend') */
	relationship: string;

	constructor(data: any) {
		super(data);

		this.friendedTimestamp = data.friend_since;
		this.relationship = data.relationship;
	}

	/** Date object when this friendship started */
	get friendedAt() {
		return new Date(this.friendedTimestamp * 1000);
	}
}
