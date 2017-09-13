## SteamAPI
<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/steamapi"><img src="https://nodei.co/npm/steamapi.png?compact=true" alt="" /></a>
	</p>
	<p>
		<a href="https://www.npmjs.com/package/steamapi"><img src="https://img.shields.io/npm/v/steamapi.svg?maxAge=3600" alt="NPM" /></a>
		<a href="https://dc.dim.codes"><img src="https://img.shields.io/discord/204352669731520512.svg?maxAge=3600" alt="Discord" /></a>
	</p>
</div>

## Setup
### Installation
```
npm i steamapi
```
### Getting an API Key
Once signed into Steam, head over to http://steamcommunity.com/dev/apikey to make an API key
### Usage
First, start by making a new SteamAPI "user"
```js
const SteamAPI = require('steamapi');
const steam = new SteamAPI('steam token');
```
Now, you can call methods to the `steam` object

For example, lets get the SteamID64 of a user. SteamAPI provides a `resolve` method which allows urls/id/profile
```js
steam.resolve('https://steamcommunity.com/id/DimGG').then(id => {
  console.log(id); // 76561198146931523
});
```
Now let's take that ID and get their profile
```js
steam.getUserSummary('76561198146931523').then(summary => {
  console.log(summary);
  /*
	{
		avatar: {
	 	  small: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8.jpg',
      medium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_medium.jpg',
    	large: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_full.jpg'
		},
	  commentPermission: 1,
	  created: 1406393110,
	  lastLogOff: 1504721187,
	  nickname: 'Dim | www.dim.codes',
	  personaState: 3,
	  personaStateFlags: 0,
	  primaryGroupID: '103582791457347196',
	  profileState: 1,
	  profileURL: 'http://steamcommunity.com/id/DimGG/',
	  steamID: '76561198146931523',
	  visibilityState: 3
	}
  */
});
```
### Methods
- resolve(info)
- get(path)
- getAppList()
- getGameAchievements(app)
- getGameDetails(app)
- getGameNews(app)
- getGamePlayers(app)
- getGameSchema(app)
- getServers(ip)
- getUserAchievements(id, app)
- getUserBadges(id)
- getUserBans(id)
- getUserFriends(id)
- getUserGroups(id)
- getUserLevel(id)
- getUserOwnedGames(id)
- getUserRecentGames(id)
- getUserServers([hide], [key])
- getUserStats(id, app)
- getUserSummary(id)