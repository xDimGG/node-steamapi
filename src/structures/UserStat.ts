export default interface UserStat {
	/** API name for this stat (e.g. 1_3, total_time_played, total_wins_map_de_train) */
	name: string;

	/** The integer value for this stat  */
	value: number;
}
