const Badge = require('./Badge');

class PlayerBadges {
	constructor(player) {
		this.badges = player.badges.map(badge => new Badge(badge));
		this.playerXP = player.player_xp;
		this.playerLevel = player.player_level;
		this.playerNextLevelXP = player.player_xp_needed_to_level_up;
		this.playerCurrentLevelXP = player.player_xp_needed_current_level;
	}
}

module.exports = PlayerBadges;