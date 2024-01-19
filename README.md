## SteamAPI
<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/steamapi"><img src="https://nodei.co/npm/steamapi.png?compact=true" alt="" /></a>
	</p>
	<p>
		<a href="https://www.npmjs.com/package/steamapi"><img src="https://img.shields.io/npm/v/steamapi.svg?maxAge=3600" alt="NPM" /></a>
		<a href="https://discord.gg/6d698nhnKx"><img src="https://img.shields.io/discord/1119337655780520057?maxAge=3600" alt="Discord" /></a>
	</p>
</div>

## Documentation
A list of all the methods SteamAPI provides is available [here](https://github.com/xDimGG/node-steamapi/blob/master/docs/classes/default.md#methods).

## Breaking changes from 2.x to 3.x
- CommonJS Modules -> ES Modules
- Import using `import` statement instead of `require()`
- SteamAPI constructor now takes false as the first parameter if you don't want to supply a key
- Options for constructor have changes from `{ enabled, expires, disableWarnings }` to `{ language, currency, headers, baseAPI, baseStore, baseActions, inMemoryCacheEnabled, gameDetailCacheEnabled, gameDetailCacheTTL, userResolveCacheEnabled, userResolveCacheTTL }`
- Custom caching may be enabled by setting `inMemoryCacheEnabled: false` and setting `<SteamAPI>.gameDetailCache`/`<SteamAPI>.userResolveCache`. Must implement `CacheMap<K, V>` interface in src/Cache.ts
- getFeaturedGames() returns object instead of array
- Server#game -> Server#gameDir
- App IDs are passed as numbers not strings (although a string will probably still work)
- Any other changes to the API can be found in https://github.com/xDimGG/node-steamapi/blob/master/PORT.md

## Setup
### Installation
```
npm i steamapi
```
### Getting an API Key
Once signed into Steam, head over to http://steamcommunity.com/dev/apikey to generate an API key.
### Usage
First, we start by making a SteamAPI "user".
```js
import SteamAPI from 'steamapi';

const steam = new SteamAPI('steam token');
```
Now, we can call methods on the `steam` object.

For example, let's retrieve the SteamID64 of a user. SteamAPI provides a `resolve` method, which accepts URLs and IDs.
```js
steam.resolve('https://steamcommunity.com/id/DimGG').then(id => {
	console.log(id); // 76561198146931523
});
```
Now let's take that ID, and fetch the user's profile.
```js
steam.getUserSummary('76561198146931523').then(summary => {
	console.log(summary);
	/**
	UserSummary {
		steamID: '76561198146931523',
		avatar: {
			small: 'https://avatars.steamstatic.com/7875e33529232d95cad28ea1054897618907fa03.jpg',
			medium: 'https://avatars.steamstatic.com/7875e33529232d95cad28ea1054897618907fa03_medium.jpg',
			large: 'https://avatars.steamstatic.com/7875e33529232d95cad28ea1054897618907fa03_full.jpg',
			hash: '7875e33529232d95cad28ea1054897618907fa03'
		},
		url: 'https://steamcommunity.com/id/DimGG/',
		visible: true,
		personaState: 0,
		personaStateFlags: 0,
		allowsComments: true,
		nickname: 'dim',
		lastLogOffTimestamp: 1704553877,
		createdTimestamp: 1406393110,
		realName: undefined,
		primaryGroupID: '103582791457347196',
		gameID: undefined,
		gameName: undefined,
		gameServerIP: undefined,
		gameServerID: undefined,
		countryCode: 'US',
		stateCode: undefined,
		cityID: undefined
	}
	*/
});
```
