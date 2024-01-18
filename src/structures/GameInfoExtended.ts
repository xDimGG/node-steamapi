import GameInfo from './GameInfo.js';

export default class GameInfoExtended extends GameInfo {
	/** If this game has a workshop */
	hasWorkshop: boolean;

	/** If this game has a market */
	hasMarket: boolean;

	/** If this game has DLC */
	hasDLC: boolean;

	/** Game's capsule filename. Not sure what this means */
	capsuleFilename?: string;

	/** Name that this game is sorted by */
	sortName?: string;

	constructor(data: any) {
		super(data);

		this.hasWorkshop = Boolean(data.has_workshop);
		this.hasMarket = Boolean(data.has_market);
		this.hasDLC = Boolean(data.has_dlc);
		this.capsuleFilename = data.capsule_filename;
		this.sortName = data.sort_as;
	}
}
