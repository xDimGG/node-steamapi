[**steamapi**](../README.md)

***

[steamapi](../README.md) / default

# Class: default

Defined in: [SteamAPI.ts:167](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L167)

## Constructors

### Constructor

> **new default**(`key`, `options`): `SteamAPI`

Defined in: [SteamAPI.ts:195](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L195)

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

Defined in: [SteamAPI.ts:183](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L183)

***

### baseAPI

> **baseAPI**: `string`

Defined in: [SteamAPI.ts:181](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L181)

***

### baseStore

> **baseStore**: `string`

Defined in: [SteamAPI.ts:182](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L182)

***

### currency

> **currency**: [`Currency`](../type-aliases/Currency.md)

Defined in: [SteamAPI.ts:179](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L179)

***

### gameDetailCache?

> `optional` **gameDetailCache**: [`CacheMap`](../interfaces/CacheMap.md)\<`string`, [`GameDetails`](GameDetails.md)\>

Defined in: [SteamAPI.ts:185](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L185)

***

### headers

> **headers**: `object`

Defined in: [SteamAPI.ts:180](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L180)

#### Index Signature

\[`key`: `string`\]: `string`

***

### language

> **language**: [`Language`](../type-aliases/Language.md)

Defined in: [SteamAPI.ts:178](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L178)

***

### userResolveCache?

> `optional` **userResolveCache**: [`CacheMap`](../interfaces/CacheMap.md)\<`string`, `string`\>

Defined in: [SteamAPI.ts:186](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L186)

***

### reCommunityID

> `static` **reCommunityID**: `RegExp`

Defined in: [SteamAPI.ts:169](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L169)

***

### reProfileBase

> `static` **reProfileBase**: `string`

Defined in: [SteamAPI.ts:168](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L168)

***

### reProfileURL

> `static` **reProfileURL**: `RegExp`

Defined in: [SteamAPI.ts:172](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L172)

***

### reSteamID2

> `static` **reSteamID2**: `RegExp`

Defined in: [SteamAPI.ts:170](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L170)

***

### reSteamID3

> `static` **reSteamID3**: `RegExp`

Defined in: [SteamAPI.ts:171](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L171)

***

### reVanityID

> `static` **reVanityID**: `RegExp`

Defined in: [SteamAPI.ts:174](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L174)

***

### reVanityURL

> `static` **reVanityURL**: `RegExp`

Defined in: [SteamAPI.ts:173](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L173)

***

### SUCCESS\_CODE

> `static` **SUCCESS\_CODE**: `number` = `1`

Defined in: [SteamAPI.ts:176](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L176)

## Methods

### get()

> **get**(`path`, `params`, `base`): `Promise`\<`any`\>

Defined in: [SteamAPI.ts:232](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L232)

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

Defined in: [SteamAPI.ts:412](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L412)

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

Defined in: [SteamAPI.ts:716](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L716)

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

Defined in: [SteamAPI.ts:700](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L700)

Gets all the countries

#### Returns

`Promise`\<[`Country`](../interfaces/Country.md)[]\>

Array of country objects with fields countrycode, hasstates, and countryname

***

### getFeaturedCategories()

> **getFeaturedCategories**(`options`): `Promise`\<\{[`key`: `string`]: `any`; \}\>

Defined in: [SteamAPI.ts:315](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L315)

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

Defined in: [SteamAPI.ts:328](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L328)

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

Defined in: [SteamAPI.ts:483](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L483)

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

> **getGameDetails**(`app`, `options?`): `Promise`\<\{[`key`: `string`]: `any`; \}\>

Defined in: [SteamAPI.ts:353](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L353)

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

`Promise`\<\{[`key`: `string`]: `any`; \}\>

If app is number, returns single object. If app is array, returns a mapping of app IDs to objects

#### Call Signature

> **getGameDetails**\<`T`\>(`app`, `options?`): `Promise`\<`{ [K in number]: { [key: string]: any } }`\>

Defined in: [SteamAPI.ts:354](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L354)

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

`Promise`\<`{ [K in number]: { [key: string]: any } }`\>

If app is number, returns single object. If app is array, returns a mapping of app IDs to objects

***

### getGameNews()

> **getGameNews**(`app`, `options`): `Promise`\<[`NewsPost`](NewsPost.md)[]\>

Defined in: [SteamAPI.ts:509](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L509)

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

Defined in: [SteamAPI.ts:435](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L435)

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

> **getGameSchema**(`app`, `language`): `Promise`\<`any`\>

Defined in: [SteamAPI.ts:451](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L451)

Get schema for app ID

#### Parameters

##### app

`number`

App ID to get schema for

##### language

[`Language`](../type-aliases/Language.md) = `...`

Language to return strings for (note: does not seem to affect stats; only achievements)

#### Returns

`Promise`\<`any`\>

Schema

***

### getServerList()

> **getServerList**(`filter`, `limit`): `Promise`\<[`GameServer`](GameServer.md)[]\>

Defined in: [SteamAPI.ts:726](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L726)

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

Defined in: [SteamAPI.ts:422](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L422)

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

Defined in: [SteamAPI.ts:691](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L691)

Gets the Steam server's time

#### Returns

`Promise`\<`Date`\>

Date object from the server

***

### getStates()

> **getStates**(`countryCode`): `Promise`\<[`State`](../interfaces/State.md)[]\>

Defined in: [SteamAPI.ts:708](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L708)

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

Defined in: [SteamAPI.ts:465](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L465)

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

Defined in: [SteamAPI.ts:534](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L534)

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

Defined in: [SteamAPI.ts:620](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L620)

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

Defined in: [SteamAPI.ts:621](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L621)

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

Defined in: [SteamAPI.ts:639](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L639)

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

Defined in: [SteamAPI.ts:651](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L651)

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

Defined in: [SteamAPI.ts:545](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L545)

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

Defined in: [SteamAPI.ts:557](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L557)

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

Defined in: [SteamAPI.ts:607](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L607)

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

Defined in: [SteamAPI.ts:664](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L664)

Gets servers on steamcommunity.com/dev/managegameservers using your key

#### Returns

`Promise`\<[`UserServers`](UserServers.md)\>

Your server

***

### getUserStats()

> **getUserStats**(`id`, `app`): `Promise`\<[`UserStats`](UserStats.md)\>

Defined in: [SteamAPI.ts:496](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L496)

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

Defined in: [SteamAPI.ts:673](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L673)

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

Defined in: [SteamAPI.ts:674](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L674)

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

Defined in: [SteamAPI.ts:244](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L244)

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
