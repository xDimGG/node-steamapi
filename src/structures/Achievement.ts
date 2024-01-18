// class Achievement {
// 	constructor(data) {
// 		this.api = data.apiname;
// 		this.name = data.name;
// 		this.description = data.description;
// 		this.achieved = Boolean(data.achieved);
// 		this.unlockTime = data.unlocktime;
// 	}

// 	/**
// 	 * Date when this achievement was unlocked at.
// 	 */
// 	get unlockedAt() {
// 		return new Date(this.unlockTime * 1000);
// 	}
// }