[steamapi](../README.md) / SteamAPIOptions

# Interface: SteamAPIOptions

## Table of contents

### Properties

- [baseAPI](SteamAPIOptions.md#baseapi)
- [baseActions](SteamAPIOptions.md#baseactions)
- [baseStore](SteamAPIOptions.md#basestore)
- [currency](SteamAPIOptions.md#currency)
- [gameDetailCacheEnabled](SteamAPIOptions.md#gamedetailcacheenabled)
- [gameDetailCacheTTL](SteamAPIOptions.md#gamedetailcachettl)
- [headers](SteamAPIOptions.md#headers)
- [inMemoryCacheEnabled](SteamAPIOptions.md#inmemorycacheenabled)
- [language](SteamAPIOptions.md#language)
- [userResolveCacheEnabled](SteamAPIOptions.md#userresolvecacheenabled)
- [userResolveCacheTTL](SteamAPIOptions.md#userresolvecachettl)

## Properties

### baseAPI

• `Optional` **baseAPI**: `string`

URL to use for Steam API requests

'https://api.steampowered.com' by default

#### Defined in

[src/SteamAPI.ts:57](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L57)

___

### baseActions

• `Optional` **baseActions**: `string`

URL to use for Steam action requests (only used for getLocations)

'https://steamcommunity.com/actions' by default

#### Defined in

[src/SteamAPI.ts:71](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L71)

___

### baseStore

• `Optional` **baseStore**: `string`

URL to use for Steam Store API requests

'https://store.steampowered.com/api' by default

#### Defined in

[src/SteamAPI.ts:64](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L64)

___

### currency

• `Optional` **currency**: [`Currency`](../README.md#currency)

Default currency to use for the API when a currency is not explicitly provided

'us' by default

#### Defined in

[src/SteamAPI.ts:43](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L43)

___

### gameDetailCacheEnabled

• `Optional` **gameDetailCacheEnabled**: `boolean`

If `inMemoryCacheEnabled` is true, this decides whether to cache API requests for getGameDetails()

#### Defined in

[src/SteamAPI.ts:81](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L81)

___

### gameDetailCacheTTL

• `Optional` **gameDetailCacheTTL**: `number`

How long to cache getGameDetails() in milliseconds

#### Defined in

[src/SteamAPI.ts:86](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L86)

___

### headers

• `Optional` **headers**: `Object`

Custom headers to send for all API requests

By default, User-Agent is "SteamAPI/<VERSION> (https://www.npmjs.com/package/steamapi)"

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/SteamAPI.ts:50](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L50)

___

### inMemoryCacheEnabled

• `Optional` **inMemoryCacheEnabled**: `boolean`

Whether to use built-in in-memory caching for gameDetailCache and userResolveCache

#### Defined in

[src/SteamAPI.ts:76](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L76)

___

### language

• `Optional` **language**: [`Language`](../README.md#language)

Default language to use for the API when a language is not explicitly provided

'english' by default

#### Defined in

[src/SteamAPI.ts:36](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L36)

___

### userResolveCacheEnabled

• `Optional` **userResolveCacheEnabled**: `boolean`

If `inMemoryCacheEnabled` is true, this decides whether to cache API requests for resolve()

#### Defined in

[src/SteamAPI.ts:91](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L91)

___

### userResolveCacheTTL

• `Optional` **userResolveCacheTTL**: `number`

How long to cache resolve() in milliseconds

#### Defined in

[src/SteamAPI.ts:96](https://github.com/xDimGG/node-steamapi/blob/b7dfdb7/src/SteamAPI.ts#L96)
