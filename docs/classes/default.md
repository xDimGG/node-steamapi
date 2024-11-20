[steamapi](../README.md) / default

# Class: default

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [baseAPI](default.md#baseapi)
- [baseActions](default.md#baseactions)
- [baseStore](default.md#basestore)
- [currency](default.md#currency)
- [gameDetailCache](default.md#gamedetailcache)
- [headers](default.md#headers)
- [key](default.md#key)
- [language](default.md#language)
- [userResolveCache](default.md#userresolvecache)
- [SUCCESS\_CODE](default.md#success_code)
- [reCommunityID](default.md#recommunityid)
- [reProfileBase](default.md#reprofilebase)
- [reProfileID](default.md#reprofileid)
- [reProfileURL](default.md#reprofileurl)
- [reSteamID2](default.md#resteamid2)
- [reSteamID3](default.md#resteamid3)

### Methods

- [get](default.md#get)
- [getAppList](default.md#getapplist)
- [getCities](default.md#getcities)
- [getCountries](default.md#getcountries)
- [getFeaturedCategories](default.md#getfeaturedcategories)
- [getFeaturedGames](default.md#getfeaturedgames)
- [getGameAchievementPercentages](default.md#getgameachievementpercentages)
- [getGameDetails](default.md#getgamedetails)
- [getGameNews](default.md#getgamenews)
- [getGamePlayers](default.md#getgameplayers)
- [getGameSchema](default.md#getgameschema)
- [getServerList](default.md#getserverlist)
- [getServerTime](default.md#getservertime)
- [getServers](default.md#getservers)
- [getStates](default.md#getstates)
- [getUserAchievements](default.md#getuserachievements)
- [getUserBadges](default.md#getuserbadges)
- [getUserBans](default.md#getuserbans)
- [getUserFriends](default.md#getuserfriends)
- [getUserGroups](default.md#getusergroups)
- [getUserLevel](default.md#getuserlevel)
- [getUserOwnedGames](default.md#getuserownedgames)
- [getUserRecentGames](default.md#getuserrecentgames)
- [getUserServers](default.md#getuserservers)
- [getUserStats](default.md#getuserstats)
- [getUserSummary](default.md#getusersummary)
- [resolve](default.md#resolve)

## Constructors

### constructor

• **new default**(`key`, `options?`): [`default`](default.md)

Make a new SteamAPI Client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` \| ``false`` | Key to use for API calls. Key can be generated at https://steamcommunity.com/dev/apikey. If you want to make requests without a key, pass in false |
| `options` | [`SteamAPIOptions`](../interfaces/SteamAPIOptions.md) | Custom options for default language, HTTP parameters, and caching |

#### Returns

[`default`](default.md)

#### Defined in

[src/SteamAPI.ts:193](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L193)

## Properties

### baseAPI

• **baseAPI**: `string`

#### Defined in

[src/SteamAPI.ts:179](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L179)

___

### baseActions

• **baseActions**: `string`

#### Defined in

[src/SteamAPI.ts:181](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L181)

___

### baseStore

• **baseStore**: `string`

#### Defined in

[src/SteamAPI.ts:180](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L180)

___

### currency

• **currency**: [`Currency`](../README.md#currency)

#### Defined in

[src/SteamAPI.ts:177](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L177)

___

### gameDetailCache

• `Optional` **gameDetailCache**: [`CacheMap`](../interfaces/CacheMap.md)\<`string`, `Object`\>

#### Defined in

[src/SteamAPI.ts:183](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L183)

___

### headers

• **headers**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/SteamAPI.ts:178](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L178)

___

### key

• `Private` **key**: `string` = `''`

#### Defined in

[src/SteamAPI.ts:186](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L186)

___

### language

• **language**: [`Language`](../README.md#language)

#### Defined in

[src/SteamAPI.ts:176](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L176)

___

### userResolveCache

• `Optional` **userResolveCache**: [`CacheMap`](../interfaces/CacheMap.md)\<`string`, `string`\>

#### Defined in

[src/SteamAPI.ts:184](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L184)

___

### SUCCESS\_CODE

▪ `Static` **SUCCESS\_CODE**: `number` = `1`

#### Defined in

[src/SteamAPI.ts:174](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L174)

___

### reCommunityID

▪ `Static` **reCommunityID**: `RegExp`

#### Defined in

[src/SteamAPI.ts:168](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L168)

___

### reProfileBase

▪ `Static` **reProfileBase**: `string`

#### Defined in

[src/SteamAPI.ts:167](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L167)

___

### reProfileID

▪ `Static` **reProfileID**: `RegExp`

#### Defined in

[src/SteamAPI.ts:172](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L172)

___

### reProfileURL

▪ `Static` **reProfileURL**: `RegExp`

#### Defined in

[src/SteamAPI.ts:171](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L171)

___

### reSteamID2

▪ `Static` **reSteamID2**: `RegExp`

#### Defined in

[src/SteamAPI.ts:169](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L169)

___

### reSteamID3

▪ `Static` **reSteamID3**: `RegExp`

#### Defined in

[src/SteamAPI.ts:170](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L170)

## Methods

### get

▸ **get**(`path`, `params?`, `base?`): `Promise`\<`any`\>

Used to make any GET request to the Steam API

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path to request e.g '/IPlayerService/GetOwnedGames/v1?steamid=76561198378422474' |
| `params` | `ParsedUrlQueryInput` | - |
| `base` | `string` | Base API URL |

#### Returns

`Promise`\<`any`\>

Parse JSON

#### Defined in

[src/SteamAPI.ts:230](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L230)

___

### getAppList

▸ **getAppList**(): `Promise`\<[`AppBase`](../interfaces/AppBase.md)[]\>

Get every single app on steam

Note: Original JSON names are being preserved instead of converting
each element to a class here because there are 186311+ games
that would have to be made into a class.

#### Returns

`Promise`\<[`AppBase`](../interfaces/AppBase.md)[]\>

Array of very basic app info (ID + name)

#### Defined in

[src/SteamAPI.ts:388](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L388)

___

### getCities

▸ **getCities**(`countryCode`, `stateCode`): `Promise`\<[`City`](../interfaces/City.md)[]\>

Gets all the cities for a particular state

#### Parameters

| Name | Type |
| :------ | :------ |
| `countryCode` | `string` |
| `stateCode` | `string` |

#### Returns

`Promise`\<[`City`](../interfaces/City.md)[]\>

Array of city objects with fields countrycode, statecode, cityname and cityid

#### Defined in

[src/SteamAPI.ts:688](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L688)

___

### getCountries

▸ **getCountries**(): `Promise`\<[`Country`](../interfaces/Country.md)[]\>

Gets all the countries

#### Returns

`Promise`\<[`Country`](../interfaces/Country.md)[]\>

Array of country objects with fields countrycode, hasstates, and countryname

#### Defined in

[src/SteamAPI.ts:672](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L672)

___

### getFeaturedCategories

▸ **getFeaturedCategories**(`options?`): `Promise`\<\{ `[key: string]`: `any`;  }\>

Gets featured categories on Steam store

<warn>undocumented endpoint -- may be unstable</warn>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | More options |
| `options.currency` | `undefined` \| [`Currency`](../README.md#currency) | The currency |
| `options.language` | `undefined` \| [`Language`](../README.md#language) | The language |

#### Returns

`Promise`\<\{ `[key: string]`: `any`;  }\>

#### Defined in

[src/SteamAPI.ts:297](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L297)

___

### getFeaturedGames

▸ **getFeaturedGames**(`options?`): `Promise`\<\{ `[key: string]`: `any`;  }\>

Gets featured games on Steam store

<warn>undocumented endpoint -- may be unstable</warn>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | More options |
| `options.currency` | `undefined` \| [`Currency`](../README.md#currency) | The currency |
| `options.language` | `undefined` \| [`Language`](../README.md#language) | The language |

#### Returns

`Promise`\<\{ `[key: string]`: `any`;  }\>

#### Defined in

[src/SteamAPI.ts:310](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L310)

___

### getGameAchievementPercentages

▸ **getGameAchievementPercentages**(`app`): `Promise`\<[`AchievementPercentage`](../interfaces/AchievementPercentage.md)[]\>

Get achievement percentages for app ID

If a game does not have any achievements, this will error

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `number` | App ID to get achievement progress for |

#### Returns

`Promise`\<[`AchievementPercentage`](../interfaces/AchievementPercentage.md)[]\>

Array of object with achievement name and percentage for app ID

#### Defined in

[src/SteamAPI.ts:459](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L459)

___

### getGameDetails

▸ **getGameDetails**(`app`, `options?`): `Promise`\<\{ `[key: string]`: `any`;  }\>

Get details for app ID. If an array of more than one app ID is passed in, the parameter &filters=price_overview
will be added to the request since otherwise the server would respond with null

Note: a game will not have a price_overview field if it is F2P

<warn>If the array contains invalid app IDs, they will be filtered out</warn>

<warn>Requests for this endpoint are limited to 200 every 5 minutes</warn>

<warn>Not every `currency` is supported. Only the following are valid: `us, ca, cc, es, de, fr, ru, nz, au, uk`.</warn>

<warn>Not every `language` is supported. A list of available languages can be found [here](https://www.ibabbleon.com/Steam-Supported-Languages-API-Codes.html).</warn>

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `app` | `number` \| `number`[] | `undefined` | App ID or array of App IDs |
| `options` | `Object` | `{}` | More options |
| `options.currency` | `undefined` \| [`Currency`](../README.md#currency) | `undefined` | The currency |
| `options.filters` | `undefined` \| `never`[] | `[]` | Fields to restrict the return results to |
| `options.language` | `undefined` \| [`Language`](../README.md#language) | `undefined` | The language |

#### Returns

`Promise`\<\{ `[key: string]`: `any`;  }\>

If app is number, returns single object. If app is array, returns a mapping of app IDs to objects

#### Defined in

[src/SteamAPI.ts:335](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L335)

___

### getGameNews

▸ **getGameNews**(`app`, `options?`): `Promise`\<[`NewsPost`](NewsPost.md)[]\>

Get news for app ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `number` | App ID |
| `options` | [`GetGameNewsOptions`](../interfaces/GetGameNewsOptions.md) | Additional options for filtering posts |

#### Returns

`Promise`\<[`NewsPost`](NewsPost.md)[]\>

App news for ID

#### Defined in

[src/SteamAPI.ts:485](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L485)

___

### getGamePlayers

▸ **getGamePlayers**(`app`): `Promise`\<`number`\>

Get number of current players for app ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `number` | App ID to get number of current players for |

#### Returns

`Promise`\<`number`\>

Number of current players

#### Defined in

[src/SteamAPI.ts:411](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L411)

___

### getGameSchema

▸ **getGameSchema**(`app`, `language?`): `Promise`\<`any`\>

Get schema for app ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `app` | `number` | App ID to get schema for |
| `language` | [`Language`](../README.md#language) | Language to return strings for (note: does not seem to affect stats; only achievements) |

#### Returns

`Promise`\<`any`\>

Schema

#### Defined in

[src/SteamAPI.ts:427](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L427)

___

### getServerList

▸ **getServerList**(`filter?`, `limit?`): `Promise`\<[`GameServer`](GameServer.md)[]\>

Gets servers using Master Server Query Protocol filtering

#### Parameters

| Name | Type | Default value | Description                                                                                                                                                                                                                                                         |
| :------ | :------ | :------ |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `filter` | `string` | `''` | Filter as defined by the [Master Server Query Protocol](https://developer.valvesoftware.com/wiki/Master_Server_Query_Protocol#Filter). Although a filter is not strictly required, you probably want to at least use something like \appid\[appid] to filter by app |
| `limit` | `number` | `100` | Number of results to return. 100 by default                                                                                                                                                                                                                         |

#### Returns

`Promise`\<[`GameServer`](GameServer.md)[]\>

#### Defined in

[src/SteamAPI.ts:698](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L698)

___

### getServerTime

▸ **getServerTime**(): `Promise`\<`Date`\>

Gets the Steam server's time

#### Returns

`Promise`\<`Date`\>

Date object from the server

#### Defined in

[src/SteamAPI.ts:663](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L663)

___

### getServers

▸ **getServers**(`host`): `Promise`\<[`Server`](Server.md)[]\>

Get every server associated with a particular host

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `host` | `string` | Host to query (IPv4 or IPv4:queryport) |

#### Returns

`Promise`\<[`Server`](Server.md)[]\>

Info of servers

#### Defined in

[src/SteamAPI.ts:398](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L398)

___

### getStates

▸ **getStates**(`countryCode`): `Promise`\<[`State`](../interfaces/State.md)[]\>

Gets all the states for a particular country

#### Parameters

| Name | Type |
| :------ | :------ |
| `countryCode` | `string` |

#### Returns

`Promise`\<[`State`](../interfaces/State.md)[]\>

Array of state objects with fields countrycode, statecode, and statename

#### Defined in

[src/SteamAPI.ts:680](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L680)

___

### getUserAchievements

▸ **getUserAchievements**(`id`, `app`, `language?`): `Promise`\<[`UserAchievements`](UserAchievements.md)\>

Get a user's achievements for app ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Steam ID of user |
| `app` | `number` | App ID to get achievements for |
| `language` | [`Language`](../README.md#language) | Language to return strings for |

#### Returns

`Promise`\<[`UserAchievements`](UserAchievements.md)\>

Achievements

#### Defined in

[src/SteamAPI.ts:441](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L441)

___

### getUserBadges

▸ **getUserBadges**(`id`): `Promise`\<[`UserBadges`](UserBadges.md)\>

Get a user's badges

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | User ID |

#### Returns

`Promise`\<[`UserBadges`](UserBadges.md)\>

User level info and badges

#### Defined in

[src/SteamAPI.ts:510](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L510)

___

### getUserBans

▸ **getUserBans**(`id`): `Promise`\<[`UserBans`](UserBans.md) \| [`UserBans`](UserBans.md)[]\>

Get a user's or multiple users' bans. If an array of IDs is passed in, this returns an array of UserBans

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` \| `string`[] | User ID(s) |

#### Returns

`Promise`\<[`UserBans`](UserBans.md) \| [`UserBans`](UserBans.md)[]\>

Ban info

#### Defined in

[src/SteamAPI.ts:596](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L596)

___

### getUserFriends

▸ **getUserFriends**(`id`): `Promise`\<[`UserFriend`](UserFriend.md)[]\>

Get a user's friends

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | User ID |

#### Returns

`Promise`\<[`UserFriend`](UserFriend.md)[]\>

The provided user's friends

#### Defined in

[src/SteamAPI.ts:613](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L613)

___

### getUserGroups

▸ **getUserGroups**(`id`): `Promise`\<`string`[]\>

Get the groups the user is a member of

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | User ID |

#### Returns

`Promise`\<`string`[]\>

Group IDs

#### Defined in

[src/SteamAPI.ts:625](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L625)

___

### getUserLevel

▸ **getUserLevel**(`id`): `Promise`\<`number`\>

Get a user's level

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | User ID |

#### Returns

`Promise`\<`number`\>

The user's Steam level

#### Defined in

[src/SteamAPI.ts:521](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L521)

___

### getUserOwnedGames

▸ **getUserOwnedGames**(`id`, `opts?`): `Promise`\<[`UserPlaytime`](UserPlaytime.md)\<[`Game`](Game.md) \| [`GameInfo`](GameInfo.md) \| [`GameInfoExtended`](GameInfoExtended.md)\>[]\>

Get users owned games.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | User ID |
| `opts` | [`GetUserOwnedGamesOptions`](../interfaces/GetUserOwnedGamesOptions.md) | Additional options for filtering |

#### Returns

`Promise`\<[`UserPlaytime`](UserPlaytime.md)\<[`Game`](Game.md) \| [`GameInfo`](GameInfo.md) \| [`GameInfoExtended`](GameInfoExtended.md)\>[]\>

Owned games

#### Defined in

[src/SteamAPI.ts:533](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L533)

___

### getUserRecentGames

▸ **getUserRecentGames**(`id`, `count?`): `Promise`\<[`UserPlaytime`](UserPlaytime.md)\<[`GameInfoBasic`](GameInfoBasic.md)\>[]\>

Get a user's recently played games. Note: <UserPlaytime>.game is GameInfo not just Game

Like getUserOwnedGames() but only returns games played in the last 2 weeks

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | User ID |
| `count` | `number` | `0` | Number of results to limit the request to (0 means no limit) |

#### Returns

`Promise`\<[`UserPlaytime`](UserPlaytime.md)\<[`GameInfoBasic`](GameInfoBasic.md)\>[]\>

Recently played games and their play times

#### Defined in

[src/SteamAPI.ts:583](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L583)

___

### getUserServers

▸ **getUserServers**(): `Promise`\<[`UserServers`](UserServers.md)\>

Gets servers on steamcommunity.com/dev/managegameservers using your key

#### Returns

`Promise`\<[`UserServers`](UserServers.md)\>

Your server

#### Defined in

[src/SteamAPI.ts:638](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L638)

___

### getUserStats

▸ **getUserStats**(`id`, `app`): `Promise`\<[`UserStats`](UserStats.md)\>

Get a user's stats for app ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Steam ID of user |
| `app` | `number` | App ID to get user stats for |

#### Returns

`Promise`\<[`UserStats`](UserStats.md)\>

Stats for app ID

#### Defined in

[src/SteamAPI.ts:472](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L472)

___

### getUserSummary

▸ **getUserSummary**(`id`): `Promise`\<[`UserSummary`](UserSummary.md) \| [`UserSummary`](UserSummary.md)[]\>

Get users summary. If an array of IDs is passed in, this returns an array of UserSummary

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` \| `string`[] | User ID(s) |

#### Returns

`Promise`\<[`UserSummary`](UserSummary.md) \| [`UserSummary`](UserSummary.md)[]\>

Summary

#### Defined in

[src/SteamAPI.ts:647](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L647)

___

### resolve

▸ **resolve**(`query`): `Promise`\<`string`\>

Resolve runs through a couple different methods for finding a user's profile ID based on
either their id, username, profile url, vanity url, steamID2, or steamID3.
Rejects promise if a profile couldn't be resolved

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | `string` | Something to resolve like https://steamcommunity.com/id/xDim |

#### Returns

`Promise`\<`string`\>

Profile ID

#### Defined in

[src/SteamAPI.ts:242](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L242)
