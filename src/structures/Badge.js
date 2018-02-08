class Badge {
	constructor(badge) {
		this.appID = badge.appid;
		this.badgeID = badge.badgeid;
		this.borderColor = badge.border_color;
		this.communityItemID = badge.communityitemid;
		this.completionTime = badge.completion_time;
		this.level = badge.level;
		this.scarcity = badge.scarcity;
		this.xp = badge.xp;
	}

	/**
	 * @type {Date} Date when this badge was completed.
	 * @readonly
	 */
	get completedAt() {
		return new Date(this.completionTime * 1000);
	}
}

module.exports = Badge;