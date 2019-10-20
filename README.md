## SteamAPI
<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/steamapi"><img src="https://nodei.co/npm/steamapi.png?compact=true" alt="" /></a>
	</p>
	<p>
		<a href="https://www.npmjs.com/package/steamapi"><img src="https://img.shields.io/npm/v/steamapi.svg?maxAge=3600" alt="NPM" /></a>
		<a href="https://discord.dim.codes"><img src="https://img.shields.io/discord/204352669731520512.svg?maxAge=3600" alt="Discord" /></a>
	</p>
</div>

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
const SteamAPI = require('steamapi');
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
	PlayerSummary {
		avatar: {
			small: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8.jpg',
			medium: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_medium.jpg',
			large: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7f/7fdf55394eb5765ef6f7be3b1d9f834fa9c824e8_full.jpg'
		},
		steamID: '76561198146931523',
		url: 'http://steamcommunity.com/id/DimGG/',
		created: 1406393110,
		lastLogOff: 1517725233,
		nickname: 'Dim',
		primaryGroupID: '103582791457347196',
		personaState: 1,
		personaStateFlags: 0,
		commentPermission: 1,
		visibilityState: 3
	}
	*/
});
```
# Documentation
<a name="SteamAPI"></a>

## SteamAPI
**Kind**: global class  

- [Documentation](#documentation)
	- [SteamAPI](#steamapi-1)
		- [new SteamAPI(key, [options])](#new-steamapikey-options)
		- [steamAPI.get(path, [base], [key]) ⇒ <code>Promise.&lt;Object&gt;</code>](#steamapigetpath-base-key-%E2%87%92-codepromiseltobjectgtcode)
		- [steamAPI.resolve(info) ⇒ <code>Promise.&lt;string&gt;</code>](#steamapiresolveinfo-%E2%87%92-codepromiseltstringgtcode)
		- [steamAPI.getAppList() ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>](#steamapigetapplist-%E2%87%92-codepromiseltarrayltappgtgtcode)
		- [steamAPI.getFeaturedCategories() ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>](#steamapigetfeaturedcategories-%E2%87%92-codepromiseltarrayltobjectgtgtcode)
		- [steamAPI.getFeaturedGames() ⇒ <code>Promise.&lt;Object&gt;</code>](#steamapigetfeaturedgames-%E2%87%92-codepromiseltobjectgtcode)
		- [steamAPI.getGameAchievements(app) ⇒ <code>Promise.&lt;Object&gt;</code>](#steamapigetgameachievementsapp-%E2%87%92-codepromiseltobjectgtcode)
		- [steamAPI.getGameDetails(app, [force]) ⇒ <code>Promise.&lt;Object&gt;</code>](#steamapigetgamedetailsapp-force-%E2%87%92-codepromiseltobjectgtcode)
		- [steamAPI.getGameNews(app) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>](#steamapigetgamenewsapp-%E2%87%92-codepromiseltarrayltobjectgtgtcode)
		- [steamAPI.getGamePlayers(app) ⇒ <code>Promise.&lt;number&gt;</code>](#steamapigetgameplayersapp-%E2%87%92-codepromiseltnumbergtcode)
		- [steamAPI.getGameSchema(app) ⇒ <code>Promise.&lt;Object&gt;</code>](#steamapigetgameschemaapp-%E2%87%92-codepromiseltobjectgtcode)
		- [steamAPI.getServers(host) ⇒ <code>Promise.&lt;Array.&lt;Server&gt;&gt;</code>](#steamapigetservershost-%E2%87%92-codepromiseltarrayltservergtgtcode)
		- [steamAPI.getUserAchievements(id, app) ⇒ <code>Promise.&lt;PlayerAchievements&gt;</code>](#steamapigetuserachievementsid-app-%E2%87%92-codepromiseltplayerachievementsgtcode)
		- [steamAPI.getUserBadges(id) ⇒ <code>Promise.&lt;PlayerBadges&gt;</code>](#steamapigetuserbadgesid-%E2%87%92-codepromiseltplayerbadgesgtcode)
		- [steamAPI.getUserBans(id) ⇒ <code>Promise.&lt;(PlayerBans\|Array.&lt;PlayerBans&gt;)&gt;</code>](#steamapigetuserbansid-%E2%87%92-codepromiseltplayerbansarrayltplayerbansgtgtcode)
		- [steamAPI.getUserFriends(id) ⇒ <code>Promise.&lt;Array.&lt;Friend&gt;&gt;</code>](#steamapigetuserfriendsid-%E2%87%92-codepromiseltarrayltfriendgtgtcode)
		- [steamAPI.getUserGroups(id) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>](#steamapigetusergroupsid-%E2%87%92-codepromiseltarrayltstringgtgtcode)
		- [steamAPI.getUserLevel(id) ⇒ <code>Promise.&lt;number&gt;</code>](#steamapigetuserlevelid-%E2%87%92-codepromiseltnumbergtcode)
		- [steamAPI.getUserOwnedGames(id) ⇒ <code>Promise.&lt;Array.&lt;Game&gt;&gt;</code>](#steamapigetuserownedgamesid-%E2%87%92-codepromiseltarrayltgamegtgtcode)
		- [steamAPI.getUserRecentGames(id) ⇒ <code>Promise.&lt;Array.&lt;RecentGame&gt;&gt;</code>](#steamapigetuserrecentgamesid-%E2%87%92-codepromiseltarrayltrecentgamegtgtcode)
		- [steamAPI.getUserServers([hide], [key]) ⇒ <code>Promise.&lt;PlayerServers&gt;</code>](#steamapigetuserservershide-key-%E2%87%92-codepromiseltplayerserversgtcode)
		- [steamAPI.getUserStats(id, app) ⇒ <code>Promise.&lt;PlayerStats&gt;</code>](#steamapigetuserstatsid-app-%E2%87%92-codepromiseltplayerstatsgtcode)
		- [steamAPI.getUserSummary(id) ⇒ <code>Promise.&lt;PlayerSummary&gt;</code>](#steamapigetusersummaryid-%E2%87%92-codepromiseltplayersummarygtcode)

<a name="new_SteamAPI_new"></a>

### new SteamAPI(key, [options])
Sets Steam key for future use.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| key | <code>string</code> |  | Steam key |
| [options] | <code>Object</code> | <code>{}</code> | Optional options for caching and warnings `getGameDetails()` |
| [options.enabled] | <code>boolean</code> | <code>true</code> | Whether caching is enabled |
| [options.expires] | <code>number</code> | <code>86400000</code> | How long cache should last for in ms (1 day by default) |
| [options.disableWarnings] | <code>boolean</code> | <code>false</code> | Whether to suppress warnings |

<a name="SteamAPI+get"></a>

### steamAPI.get(path, [base], [key]) ⇒ <code>Promise.&lt;Object&gt;</code>
Get custom path that isn't in SteamAPI.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - JSON Response  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>string</code> |  | Path to request e.g '/IPlayerService/GetOwnedGames/v1?steamid=76561198378422474' |
| [base] | <code>string</code> | <code>&quot;this.baseAPI&quot;</code> | Base URL |
| [key] | <code>string</code> | <code>&quot;this.key&quot;</code> | The key to use |

<a name="SteamAPI+resolve"></a>

### steamAPI.resolve(info) ⇒ <code>Promise.&lt;string&gt;</code>
Resolve info based on id, profile, or url.
Rejects promise if a profile couldn't be resolved.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;string&gt;</code> - Profile ID  

| Param | Type | Description |
| --- | --- | --- |
| info | <code>string</code> | Something to resolve e.g 'https://steamcommunity.com/id/xDim' |

<a name="SteamAPI+getAppList"></a>

### steamAPI.getAppList() ⇒ <code>Promise.&lt;Array.&lt;App&gt;&gt;</code>
Get every single app on steam.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;App&gt;&gt;</code> - Array of apps  
<a name="SteamAPI+getFeaturedCategories"></a>

### steamAPI.getFeaturedCategories() ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
Get featured categories on the steam store.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - Featured categories  
<a name="SteamAPI+getFeaturedGames"></a>

### steamAPI.getFeaturedGames() ⇒ <code>Promise.&lt;Object&gt;</code>
Get featured games on the steam store

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Featured games  
<a name="SteamAPI+getGameAchievements"></a>

### steamAPI.getGameAchievements(app) ⇒ <code>Promise.&lt;Object&gt;</code>
Get achievements for app id.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - App achievements for ID  

| Param | Type | Description |
| --- | --- | --- |
| app | <code>string</code> | App ID |

<a name="SteamAPI+getGameDetails"></a>

### steamAPI.getGameDetails(app, [force]) ⇒ <code>Promise.&lt;Object&gt;</code>
Get details for app id.
<warn>Requests for this endpoint are limited to 200 every 5 minutes</warn>

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - App details for ID  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| app | <code>string</code> |  | App ID |
| [force] | <code>boolean</code> | <code>false</code> | Overwrite cache |

<a name="SteamAPI+getGameNews"></a>

### steamAPI.getGameNews(app) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
Get news for app id.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - App news for ID  

| Param | Type | Description |
| --- | --- | --- |
| app | <code>string</code> | App ID |

<a name="SteamAPI+getGamePlayers"></a>

### steamAPI.getGamePlayers(app) ⇒ <code>Promise.&lt;number&gt;</code>
Get number of current players for app id.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;number&gt;</code> - Number of players  

| Param | Type | Description |
| --- | --- | --- |
| app | <code>string</code> | App ID |

<a name="SteamAPI+getGameSchema"></a>

### steamAPI.getGameSchema(app) ⇒ <code>Promise.&lt;Object&gt;</code>
Get schema for app id.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - Schema  

| Param | Type | Description |
| --- | --- | --- |
| app | <code>string</code> | App ID |

<a name="SteamAPI+getServers"></a>

### steamAPI.getServers(host) ⇒ <code>Promise.&lt;Array.&lt;Server&gt;&gt;</code>
Get every server associated with host.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;Server&gt;&gt;</code> - Server info  

| Param | Type | Description |
| --- | --- | --- |
| host | <code>string</code> | Host to request |

<a name="SteamAPI+getUserAchievements"></a>

### steamAPI.getUserAchievements(id, app) ⇒ <code>Promise.&lt;PlayerAchievements&gt;</code>
Get users achievements for app id.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;PlayerAchievements&gt;</code> - Achievements  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User ID |
| app | <code>string</code> | App ID |

<a name="SteamAPI+getUserBadges"></a>

### steamAPI.getUserBadges(id) ⇒ <code>Promise.&lt;PlayerBadges&gt;</code>
Get users badges.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;PlayerBadges&gt;</code> - Badges  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User ID |

<a name="SteamAPI+getUserBans"></a>

### steamAPI.getUserBans(id) ⇒ <code>Promise.&lt;(PlayerBans\|Array.&lt;PlayerBans&gt;)&gt;</code>
Get users bans.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;(PlayerBans\|Array.&lt;PlayerBans&gt;)&gt;</code> - Ban info  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>Array.&lt;string&gt;</code> | User ID(s) |

<a name="SteamAPI+getUserFriends"></a>

### steamAPI.getUserFriends(id) ⇒ <code>Promise.&lt;Array.&lt;Friend&gt;&gt;</code>
Get users friends.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;Friend&gt;&gt;</code> - Friends  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User ID |

<a name="SteamAPI+getUserGroups"></a>

### steamAPI.getUserGroups(id) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
Get users groups.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code> - Groups  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User ID |

<a name="SteamAPI+getUserLevel"></a>

### steamAPI.getUserLevel(id) ⇒ <code>Promise.&lt;number&gt;</code>
Get users level.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;number&gt;</code> - Level  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User ID |

<a name="SteamAPI+getUserOwnedGames"></a>

### steamAPI.getUserOwnedGames(id) ⇒ <code>Promise.&lt;Array.&lt;Game&gt;&gt;</code>
Get users owned games.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;Game&gt;&gt;</code> - Owned games  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User ID |

<a name="SteamAPI+getUserRecentGames"></a>

### steamAPI.getUserRecentGames(id) ⇒ <code>Promise.&lt;Array.&lt;RecentGame&gt;&gt;</code>
Get users recent games.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;Array.&lt;RecentGame&gt;&gt;</code> - Recent games  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User ID |

<a name="SteamAPI+getUserServers"></a>

### steamAPI.getUserServers([hide], [key]) ⇒ <code>Promise.&lt;PlayerServers&gt;</code>
Gets servers on steamcommunity.com/dev/managegameservers using your key or provided key.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;PlayerServers&gt;</code> - Servers  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [hide] | <code>boolean</code> | <code>false</code> | Hide deleted/expired servers |
| [key] | <code>string</code> | <code>&quot;this.key&quot;</code> | Key |

<a name="SteamAPI+getUserStats"></a>

### steamAPI.getUserStats(id, app) ⇒ <code>Promise.&lt;PlayerStats&gt;</code>
Get users stats for app id.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;PlayerStats&gt;</code> - Stats for app id  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User ID |
| app | <code>string</code> | App ID |

<a name="SteamAPI+getUserSummary"></a>

### steamAPI.getUserSummary(id) ⇒ <code>Promise.&lt;PlayerSummary&gt;</code>
Get users summary.

**Kind**: instance method of [<code>SteamAPI</code>](#SteamAPI)  
**Returns**: <code>Promise.&lt;PlayerSummary&gt;</code> - Summary  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | User ID |
