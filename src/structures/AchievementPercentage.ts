export default interface AchievementPercentage {
	/** API name of this achievement */
	name: string;

	/** What percent of players have completed this achievement (floating point value between 0 and 100) */
	percent: number;
}
