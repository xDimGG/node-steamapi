[**steamapi**](../README.md)

***

[steamapi](../README.md) / SteamAPIOptions

# Interface: SteamAPIOptions

Defined in: [SteamAPI.ts:32](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L32)

## Properties

### baseActions?

> `optional` **baseActions**: `string`

Defined in: [SteamAPI.ts:73](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L73)

URL to use for Steam action requests (only used for getLocations)

'https://steamcommunity.com/actions' by default

***

### baseAPI?

> `optional` **baseAPI**: `string`

Defined in: [SteamAPI.ts:59](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L59)

URL to use for Steam API requests

'https://api.steampowered.com' by default

***

### baseStore?

> `optional` **baseStore**: `string`

Defined in: [SteamAPI.ts:66](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L66)

URL to use for Steam Store API requests

'https://store.steampowered.com/api' by default

***

### currency?

> `optional` **currency**: [`Currency`](../type-aliases/Currency.md)

Defined in: [SteamAPI.ts:45](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L45)

Default currency to use for the API when a currency is not explicitly provided

'us' by default

***

### gameDetailCacheEnabled?

> `optional` **gameDetailCacheEnabled**: `boolean`

Defined in: [SteamAPI.ts:83](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L83)

If `inMemoryCacheEnabled` is true, this decides whether to cache API requests for getGameDetails()

***

### gameDetailCacheTTL?

> `optional` **gameDetailCacheTTL**: `number`

Defined in: [SteamAPI.ts:88](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L88)

How long to cache getGameDetails() in milliseconds

***

### headers?

> `optional` **headers**: `object`

Defined in: [SteamAPI.ts:52](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L52)

Custom headers to send for all API requests

By default, User-Agent is "SteamAPI/<VERSION> (https://www.npmjs.com/package/steamapi)"

#### Index Signature

\[`key`: `string`\]: `string`

***

### inMemoryCacheEnabled?

> `optional` **inMemoryCacheEnabled**: `boolean`

Defined in: [SteamAPI.ts:78](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L78)

Whether to use built-in in-memory caching for gameDetailCache and userResolveCache

***

### language?

> `optional` **language**: [`Language`](../type-aliases/Language.md)

Defined in: [SteamAPI.ts:38](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L38)

Default language to use for the API when a language is not explicitly provided

'english' by default

***

### userResolveCacheEnabled?

> `optional` **userResolveCacheEnabled**: `boolean`

Defined in: [SteamAPI.ts:93](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L93)

If `inMemoryCacheEnabled` is true, this decides whether to cache API requests for resolve()

***

### userResolveCacheTTL?

> `optional` **userResolveCacheTTL**: `number`

Defined in: [SteamAPI.ts:98](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L98)

How long to cache resolve() in milliseconds
