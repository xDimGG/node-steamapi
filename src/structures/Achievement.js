class Achievement {
	constructor(achievement) {
		this.api = achievement.apiname;
		this.name = achievement.name;
		this.description = achievement.description;
		this.achieved = Boolean(achievement.achieved);
		this.unlockTime = achievement.unlocktime;
	}

	/**
	 * @type {Date} Date when this achievement was unlocked at.
	 * @readonly
	 */
	get unlockedAt() {
		return new Date(this.unlockTime * 1000);
	}
}

module.exports = Achievement;