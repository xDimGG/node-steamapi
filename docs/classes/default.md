[**steamapi**](../README.md)

***

[steamapi](../README.md) / default

# Class: default

Defined in: [SteamAPI.ts:168](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L168)

## Constructors

### Constructor

> **new default**(`key`, `options`): `SteamAPI`

Defined in: [SteamAPI.ts:196](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L196)

Make a new SteamAPI Client

#### Parameters

##### key

Key to use for API calls. Key can be generated at https://steamcommunity.com/dev/apikey. If you want to make requests without a key, pass in false

`string` | `false`

##### options

[`SteamAPIOptions`](../interfaces/SteamAPIOptions.md) = `{}`

Custom options for default language, HTTP parameters, and caching

#### Returns

`SteamAPI`

## Properties

### baseActions

> **baseActions**: `string`

Defined in: [SteamAPI.ts:184](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L184)

***

### baseAPI

> **baseAPI**: `string`

Defined in: [SteamAPI.ts:182](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L182)

***

### baseStore

> **baseStore**: `string`

Defined in: [SteamAPI.ts:183](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L183)

***

### currency

> **currency**: [`Currency`](../type-aliases/Currency.md)

Defined in: [SteamAPI.ts:180](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L180)

***

### gameDetailCache?

> `optional` **gameDetailCache**: [`CacheMap`](../interfaces/CacheMap.md)\<`string`, [`GameDetails`](GameDetails.md)\>

Defined in: [SteamAPI.ts:186](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L186)

***

### headers

> **headers**: `object`

Defined in: [SteamAPI.ts:181](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L181)

#### Index Signature

\[`key`: `string`\]: `string`

***

### language

> **language**: [`Language`](../type-aliases/Language.md)

Defined in: [SteamAPI.ts:179](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L179)

***

### userResolveCache?

> `optional` **userResolveCache**: [`CacheMap`](../interfaces/CacheMap.md)\<`string`, `string`\>

Defined in: [SteamAPI.ts:187](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L187)

***

### reCommunityID

> `static` **reCommunityID**: `RegExp`

Defined in: [SteamAPI.ts:170](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L170)

***

### reProfileBase

> `static` **reProfileBase**: `string`

Defined in: [SteamAPI.ts:169](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L169)

***

### reProfileURL

> `static` **reProfileURL**: `RegExp`

Defined in: [SteamAPI.ts:173](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L173)

***

### reSteamID2

> `static` **reSteamID2**: `RegExp`

Defined in: [SteamAPI.ts:171](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L171)

***

### reSteamID3

> `static` **reSteamID3**: `RegExp`

Defined in: [SteamAPI.ts:172](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L172)

***

### reVanityID

> `static` **reVanityID**: `RegExp`

Defined in: [SteamAPI.ts:175](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L175)

***

### reVanityURL

> `static` **reVanityURL**: `RegExp`

Defined in: [SteamAPI.ts:174](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L174)

***

### SUCCESS\_CODE

> `static` **SUCCESS\_CODE**: `number` = `1`

Defined in: [SteamAPI.ts:177](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L177)

## Methods

### get()

> **get**(`path`, `params`, `base`): `Promise`\<`any`\>

Defined in: [SteamAPI.ts:233](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L233)

Used to make any GET request to the Steam API

#### Parameters

##### path

`string`

Path to request e.g '/IPlayerService/GetOwnedGames/v1?steamid=76561198378422474'

##### params

`ParsedUrlQueryInput` = `{}`

##### base

`string` = `...`

Base API URL

#### Returns

`Promise`\<`any`\>

Parse JSON

***

### getAppList()

> **getAppList**(): `Promise`\<[`AppBase`](../interfaces/AppBase.md)[]\>

Defined in: [SteamAPI.ts:415](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L415)

Get every single app on steam

Note: Original JSON names are being preserved instead of converting
each element to a class here because there are 186311+ games
that would have to be made into a class.

#### Returns

`Promise`\<[`AppBase`](../interfaces/AppBase.md)[]\>

Array of very basic app info (ID + name)

***

### getCities()

> **getCities**(`countryCode`, `stateCode`): `Promise`\<[`City`](../interfaces/City.md)[]\>

Defined in: [SteamAPI.ts:718](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L718)

Gets all the cities for a particular state

#### Parameters

##### countryCode

`string`

##### stateCode

`string`

#### Returns

`Promise`\<[`City`](../interfaces/City.md)[]\>

Array of city objects with fields countrycode, statecode, cityname and cityid

***

### getCountries()

> **getCountries**(): `Promise`\<[`Country`](../interfaces/Country.md)[]\>

Defined in: [SteamAPI.ts:702](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L702)

Gets all the countries

#### Returns

`Promise`\<[`Country`](../interfaces/Country.md)[]\>

Array of country objects with fields countrycode, hasstates, and countryname

***

### getFeaturedCategories()

> **getFeaturedCategories**(`options`): `Promise`\<\{[`key`: `string`]: `any`; \}\>

Defined in: [SteamAPI.ts:316](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L316)

Gets featured categories on Steam store

<warn>undocumented endpoint -- may be unstable</warn>

#### Parameters

##### options

More options

###### currency?

[`Currency`](../type-aliases/Currency.md) = `...`

The currency

###### language?

[`Language`](../type-aliases/Language.md) = `...`

The language

#### Returns

`Promise`\<\{[`key`: `string`]: `any`; \}\>

***

### getFeaturedGames()

> **getFeaturedGames**(`options`): `Promise`\<\{[`key`: `string`]: `any`; \}\>

Defined in: [SteamAPI.ts:329](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L329)

Gets featured games on Steam store

<warn>undocumented endpoint -- may be unstable</warn>

#### Parameters

##### options

More options

###### currency?

[`Currency`](../type-aliases/Currency.md) = `...`

The currency

###### language?

[`Language`](../type-aliases/Language.md) = `...`

The language

#### Returns

`Promise`\<\{[`key`: `string`]: `any`; \}\>

***

### getGameAchievementPercentages()

> **getGameAchievementPercentages**(`app`): `Promise`\<[`AchievementPercentage`](../interfaces/AchievementPercentage.md)[]\>

Defined in: [SteamAPI.ts:485](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L485)

Get achievement percentages for app ID

If a game does not have any achievements, this will error

#### Parameters

##### app

`number`

App ID to get achievement progress for

#### Returns

`Promise`\<[`AchievementPercentage`](../interfaces/AchievementPercentage.md)[]\>

Array of object with achievement name and percentage for app ID

***

### getGameDetails()

#### Call Signature

> **getGameDetails**(`app`, `options?`): `Promise`\<[`GameDetails`](GameDetails.md)\>

Defined in: [SteamAPI.ts:354](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L354)

Get details for app ID. If an array of more than one app ID is passed in, the parameter &filters=price_overview
will be added to the request since otherwise the server would respond with null

Note: a game will not have a price_overview field if it is F2P

<warn>If the array contains invalid app IDs, they will be filtered out</warn>

<warn>Requests for this endpoint are limited to 200 every 5 minutes</warn>

<warn>Not every `currency` is supported. Only the following are valid: `us, ca, cc, es, de, fr, ru, nz, au, uk`.</warn>

<warn>Not every `language` is supported. A list of available languages can be found [here](https://www.ibabbleon.com/Steam-Supported-Languages-API-Codes.html).</warn>

##### Parameters

###### app

`Number`

App ID or array of App IDs

###### options?

More options

###### currency

[`Currency`](../type-aliases/Currency.md)

The currency

###### filters

`string`[]

Fields to restrict the return results to

###### language

[`Language`](../type-aliases/Language.md)

The language

##### Returns

`Promise`\<[`GameDetails`](GameDetails.md)\>

If app is number, returns single object. If app is array, returns a mapping of app IDs to objects

#### Call Signature

> **getGameDetails**\<`T`\>(`app`, `options?`): `Promise`\<\{[`key`: `string`]: [`GameDetails`](GameDetails.md); \}\>

Defined in: [SteamAPI.ts:355](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L355)

Get details for app ID. If an array of more than one app ID is passed in, the parameter &filters=price_overview
will be added to the request since otherwise the server would respond with null

Note: a game will not have a price_overview field if it is F2P

<warn>If the array contains invalid app IDs, they will be filtered out</warn>

<warn>Requests for this endpoint are limited to 200 every 5 minutes</warn>

<warn>Not every `currency` is supported. Only the following are valid: `us, ca, cc, es, de, fr, ru, nz, au, uk`.</warn>

<warn>Not every `language` is supported. A list of available languages can be found [here](https://www.ibabbleon.com/Steam-Supported-Languages-API-Codes.html).</warn>

##### Type Parameters

###### T

`T` *extends* `number`

##### Parameters

###### app

`T`[]

App ID or array of App IDs

###### options?

More options

###### currency

[`Currency`](../type-aliases/Currency.md)

The currency

###### filters

`string`[]

Fields to restrict the return results to

###### language

[`Language`](../type-aliases/Language.md)

The language

##### Returns

`Promise`\<\{[`key`: `string`]: [`GameDetails`](GameDetails.md); \}\>

If app is number, returns single object. If app is array, returns a mapping of app IDs to objects

***

### getGameNews()

> **getGameNews**(`app`, `options`): `Promise`\<[`NewsPost`](NewsPost.md)[]\>

Defined in: [SteamAPI.ts:511](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L511)

Get news for app ID

#### Parameters

##### app

`number`

App ID

##### options

[`GetGameNewsOptions`](../interfaces/GetGameNewsOptions.md) = `{}`

Additional options for filtering posts

#### Returns

`Promise`\<[`NewsPost`](NewsPost.md)[]\>

App news for ID

***

### getGamePlayers()

> **getGamePlayers**(`app`): `Promise`\<`number`\>

Defined in: [SteamAPI.ts:438](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L438)

Get number of current players for app ID

#### Parameters

##### app

`number`

App ID to get number of current players for

#### Returns

`Promise`\<`number`\>

Number of current players

***

### getGameSchema()

> **getGameSchema**(`app`, `language`): `Promise`\<`GameSchema`\>

Defined in: [SteamAPI.ts:454](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L454)

Get schema for app ID

#### Parameters

##### app

`number`

App ID to get schema for

##### language

[`Language`](../type-aliases/Language.md) = `...`

Language to return strings for (note: does not seem to affect stats; only achievements)

#### Returns

`Promise`\<`GameSchema`\>

Schema

***

### getServerList()

> **getServerList**(`filter`, `limit`): `Promise`\<[`GameServer`](GameServer.md)[]\>

Defined in: [SteamAPI.ts:728](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L728)

Gets servers using Master Server Query Protocol filtering

#### Parameters

##### filter

`string` = `''`

Filter as defined by the [Master Server Query Protocol](https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Filter).
Although a filter is not strictly required, you probably want to at least use something like \appid\[appid] to filter by app

##### limit

`number` = `100`

Number of results to return. 100 by default

#### Returns

`Promise`\<[`GameServer`](GameServer.md)[]\>

***

### getServers()

> **getServers**(`host`): `Promise`\<[`Server`](Server.md)[]\>

Defined in: [SteamAPI.ts:425](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L425)

Get every server associated with a particular host

#### Parameters

##### host

`string`

Host to query (IPv4 or IPv4:queryport)

#### Returns

`Promise`\<[`Server`](Server.md)[]\>

Info of servers

***

### getServerTime()

> **getServerTime**(): `Promise`\<`Date`\>

Defined in: [SteamAPI.ts:693](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L693)

Gets the Steam server's time

#### Returns

`Promise`\<`Date`\>

Date object from the server

***

### getStates()

> **getStates**(`countryCode`): `Promise`\<[`State`](../interfaces/State.md)[]\>

Defined in: [SteamAPI.ts:710](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L710)

Gets all the states for a particular country

#### Parameters

##### countryCode

`string`

#### Returns

`Promise`\<[`State`](../interfaces/State.md)[]\>

Array of state objects with fields countrycode, statecode, and statename

***

### getUserAchievements()

> **getUserAchievements**(`id`, `app`, `language`): `Promise`\<[`UserAchievements`](UserAchievements.md)\>

Defined in: [SteamAPI.ts:467](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L467)

Get a user's achievements for app ID

#### Parameters

##### id

`string`

Steam ID of user

##### app

`number`

App ID to get achievements for

##### language

[`Language`](../type-aliases/Language.md) = `...`

Language to return strings for

#### Returns

`Promise`\<[`UserAchievements`](UserAchievements.md)\>

Achievements

***

### getUserBadges()

> **getUserBadges**(`id`): `Promise`\<[`UserBadges`](UserBadges.md)\>

Defined in: [SteamAPI.ts:536](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L536)

Get a user's badges

#### Parameters

##### id

`string`

User ID

#### Returns

`Promise`\<[`UserBadges`](UserBadges.md)\>

User level info and badges

***

### getUserBans()

#### Call Signature

> **getUserBans**(`id`): `Promise`\<[`UserBans`](UserBans.md)\>

Defined in: [SteamAPI.ts:622](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L622)

Get a user's or multiple users' bans. If an array of IDs is passed in, this returns an array of UserBans

##### Parameters

###### id

`string`

User ID(s)

##### Returns

`Promise`\<[`UserBans`](UserBans.md)\>

Ban info

#### Call Signature

> **getUserBans**(`id`): `Promise`\<[`UserBans`](UserBans.md)[]\>

Defined in: [SteamAPI.ts:623](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L623)

Get a user's or multiple users' bans. If an array of IDs is passed in, this returns an array of UserBans

##### Parameters

###### id

`string`[]

User ID(s)

##### Returns

`Promise`\<[`UserBans`](UserBans.md)[]\>

Ban info

***

### getUserFriends()

> **getUserFriends**(`id`): `Promise`\<[`UserFriend`](UserFriend.md)[]\>

Defined in: [SteamAPI.ts:641](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L641)

Get a user's friends

#### Parameters

##### id

`string`

User ID

#### Returns

`Promise`\<[`UserFriend`](UserFriend.md)[]\>

The provided user's friends

***

### getUserGroups()

> **getUserGroups**(`id`): `Promise`\<`string`[]\>

Defined in: [SteamAPI.ts:653](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L653)

Get the groups the user is a member of

#### Parameters

##### id

`string`

User ID

#### Returns

`Promise`\<`string`[]\>

Group IDs

***

### getUserLevel()

> **getUserLevel**(`id`): `Promise`\<`number`\>

Defined in: [SteamAPI.ts:547](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L547)

Get a user's level

#### Parameters

##### id

`string`

User ID

#### Returns

`Promise`\<`number`\>

The user's Steam level

***

### getUserOwnedGames()

> **getUserOwnedGames**(`id`, `opts`): `Promise`\<[`UserPlaytime`](UserPlaytime.md)\<[`Game`](Game.md) \| [`GameInfo`](GameInfo.md) \| [`GameInfoExtended`](GameInfoExtended.md)\>[]\>

Defined in: [SteamAPI.ts:559](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L559)

Get users owned games.

#### Parameters

##### id

`string`

User ID

##### opts

[`GetUserOwnedGamesOptions`](../interfaces/GetUserOwnedGamesOptions.md) = `{}`

Additional options for filtering

#### Returns

`Promise`\<[`UserPlaytime`](UserPlaytime.md)\<[`Game`](Game.md) \| [`GameInfo`](GameInfo.md) \| [`GameInfoExtended`](GameInfoExtended.md)\>[]\>

Owned games

***

### getUserRecentGames()

> **getUserRecentGames**(`id`, `count`): `Promise`\<[`UserPlaytime`](UserPlaytime.md)\<[`GameInfoBasic`](GameInfoBasic.md)\>[]\>

Defined in: [SteamAPI.ts:609](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L609)

Get a user's recently played games. Note: <UserPlaytime>.game is GameInfo not just Game

Like getUserOwnedGames() but only returns games played in the last 2 weeks

#### Parameters

##### id

`string`

User ID

##### count

`number` = `0`

Number of results to limit the request to (0 means no limit)

#### Returns

`Promise`\<[`UserPlaytime`](UserPlaytime.md)\<[`GameInfoBasic`](GameInfoBasic.md)\>[]\>

Recently played games and their play times

***

### getUserServers()

> **getUserServers**(): `Promise`\<[`UserServers`](UserServers.md)\>

Defined in: [SteamAPI.ts:666](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L666)

Gets servers on steamcommunity.com/dev/managegameservers using your key

#### Returns

`Promise`\<[`UserServers`](UserServers.md)\>

Your server

***

### getUserStats()

> **getUserStats**(`id`, `app`): `Promise`\<[`UserStats`](UserStats.md)\>

Defined in: [SteamAPI.ts:498](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L498)

Get a user's stats for app ID

#### Parameters

##### id

`string`

Steam ID of user

##### app

`number`

App ID to get user stats for

#### Returns

`Promise`\<[`UserStats`](UserStats.md)\>

Stats for app ID

***

### getUserSummary()

#### Call Signature

> **getUserSummary**(`id`): `Promise`\<[`UserSummary`](UserSummary.md)\>

Defined in: [SteamAPI.ts:675](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L675)

Get users summary. If an array of IDs is passed in, this returns an array of UserSummary

##### Parameters

###### id

`string`

User ID(s)

##### Returns

`Promise`\<[`UserSummary`](UserSummary.md)\>

Summary

#### Call Signature

> **getUserSummary**(`id`): `Promise`\<[`UserSummary`](UserSummary.md)[]\>

Defined in: [SteamAPI.ts:676](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L676)

Get users summary. If an array of IDs is passed in, this returns an array of UserSummary

##### Parameters

###### id

`string`[]

User ID(s)

##### Returns

`Promise`\<[`UserSummary`](UserSummary.md)[]\>

Summary

***

### resolve()

> **resolve**(`query`): `Promise`\<`string`\>

Defined in: [SteamAPI.ts:245](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L245)

Resolve runs through a couple different methods for finding a user's profile ID based on
either their id, username, profile url, vanity url, steamID2, or steamID3.
Rejects promise if a profile couldn't be resolved

#### Parameters

##### query

`string`

Something to resolve like https://steamcommunity.com/id/xDim

#### Returns

`Promise`\<`string`\>

Profile ID
