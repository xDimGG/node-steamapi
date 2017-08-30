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
steam.resolve('https://steamcommunity.com/id/xDim').then(id => {
  console.log(id); // 76561198378422474
});
```
Now let's take that ID and get their profile
```js
steam.getUserSummary('76561198378422474').then(summary => {
  console.log(summary);
  /*
  {
  	avatar: {
      small: '<url>',
      medium: '<url>',
      large: '<url>'
    },
    commentPermission: 1,
    created: 1491084178,
    lastLogOff: 1495166756,
    nickname: 'xDim',
    personaState: 0,
    personaStateFlags: 0,
    primaryGroupID: '103582791457347196',
    profileState: 1,
    profileURL: 'http://steamcommunity.com/id/xDim/',
    steamID: '76561198378422474',
    visibilityState: 3
  }
  */
});
```
### Methods
- resolve
- getGameAchievements
- getGameNews
- getGamePlayers
- getGameSchema
- getUserAchievements
- getUserBans
- getUserFriends
- getUserGroups
- getUserStats
- getUserSummary
