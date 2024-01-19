import { CacheMap } from './src/Cache.js';
import AppBase from './src/structures/AppBase.js';
import AchievementPercentage from './src/structures/AchievementPercentage.js';
import { Country, State, City } from './src/structures/Locations.js';
import NewsPost from './src/structures/NewsPost.js';
import Server, { ServerRegion } from './src/structures/Server.js';
import Game from './src/structures/Game.js';
import GameInfo from './src/structures/GameInfo.js';
import GameInfoExtended from './src/structures/GameInfoExtended.js';
import GameInfoBasic from './src/structures/GameInfoBasic.js';
import GameServer from './src/structures/GameServer.js';
import UserAchievement from './src/structures/UserAchievement.js';
import UserAchievements from './src/structures/UserAchievements.js';
import UserBadge from './src/structures/UserBadge.js';
import UserBadges from './src/structures/UserBadges.js';
import UserPlaytime from './src/structures/UserPlaytime.js';
import UserBans from './src/structures/UserBans.js';
import UserFriend from './src/structures/UserFriend.js';
import UserServer from './src/structures/UserServer.js';
import UserServers from './src/structures/UserServers.js';
import UserStat from './src/structures/UserStat.js';
import UserStats from './src/structures/UserStats.js';
import UserSummary, { UserPersonaState } from './src/structures/UserSummary.js';
import SteamAPI, {
	SteamAPIOptions,
	GetGameNewsOptions,
	GetUserOwnedGamesOptions,
	Currency,
	Language,
} from './src/SteamAPI.js';

export default SteamAPI;

export {
	// Options interfaces
	GetGameNewsOptions,
	GetUserOwnedGamesOptions,
	SteamAPIOptions,

	// Steam constants
	Currency,
	Language,
	ServerRegion,
	UserPersonaState,

	// Caching interface
	CacheMap,

	// Structures
	AppBase,
	AchievementPercentage,
	NewsPost,
	Server,
	Country,
	State,
	City,
	Game,
	GameInfo,
	GameInfoExtended,
	GameInfoBasic,
	GameServer,
	UserAchievement,
	UserAchievements,
	UserBadge,
	UserBadges,
	UserPlaytime,
	UserBans,
	UserFriend,
	UserServer,
	UserServers,
	UserStat,
	UserStats,
	UserSummary,
};
