export default class UserAchievement {
	/** API name for this achievement (e.g. ACH03, TF_GET_TURRETKILLS, Champion) */
	name: string;

	/** Whether the user has unlocked this achievement  */
	unlocked: boolean;

	/**
	 * Unix Timestamp for when the user unlocked this achievement.
	 * Is 0 if the user has not unlocked this achievement. Only defined
	 * when calling getUserAchievements()
	 */
	unlockedTimestamp?: number;

	constructor(data: any) {
		this.name = data.apiname;
		this.unlocked = Boolean(data.achieved);

		this.unlockedTimestamp = data.unlocktime;
	}

	/** Date when this achievement was unlocked */
	get unlockedAt(): Date | undefined {
		return this.unlockedTimestamp ? new Date(this.unlockedTimestamp * 1000) : undefined;
	}
}
