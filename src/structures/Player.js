class Player {
	/**
	 * @type {string} The permalink to this players profile.
	 * @readonly
	 */
	get profileURL() {
		return `https://steamcommunity.com/profiles/${this.steamID}`;
	}
}

module.exports = Player;