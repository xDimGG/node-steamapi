export default class GameSchema {
	/**
	 * Name of the game
	 */
	gameName: string;
	gameVersion: string;
	availableGameStats: {
		stats?: {
			name: string,
			defaultValue: 0 | 1,
			displayName: string | null
		}[],
		achievements?: {
			/**
			 * Internal name of the achievement. This is what is used to identify the achievement. This is unique in the context of the game, however it isn't unique globally.
			 */
			name: string,
			/** Whether the achievement is automatically unlocked when the game is launched. This is almost always false */
			defaultvalue: 0 | 1,
			/**
			 * Pretty name of the achievement, this is what is shown to the user.
			 */
			displayName: string | null,
			/**
			 * Whether or not the achievement is hidden from users that haven't unlocked it yet.
			 */
			hidden: 0 | 1,
			/**
			 * The description of the achievement. Unfortunately steam doesn't provide this if the achievement is hidden.
			 */
			description?: string,
			/**
			 * URL to the icon shown when the achievement is unlocked.
			 * If the achievement doesn't have an icongray, this is used when locked as well.
			 */
			icon: string | null,
			/**
			 * URL to the grayscale icon shown when the achievement is locked.
			 * Typically appears before the player unlocks the achievement.
			 */
			icongray?: string | null
		}[]
	}

	constructor(data: any) {
		this.gameName = data.gameName;
		this.gameVersion = data.gameVersion;
		this.availableGameStats = data.availableGameStats;
	}
}
