[**steamapi**](../README.md)

***

[steamapi](../README.md) / SteamAPIOptions

# Interface: SteamAPIOptions

Defined in: [SteamAPI.ts:31](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L31)

## Properties

### baseActions?

> `optional` **baseActions**: `string`

Defined in: [SteamAPI.ts:72](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L72)

URL to use for Steam action requests (only used for getLocations)

'https://steamcommunity.com/actions' by default

***

### baseAPI?

> `optional` **baseAPI**: `string`

Defined in: [SteamAPI.ts:58](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L58)

URL to use for Steam API requests

'https://api.steampowered.com' by default

***

### baseStore?

> `optional` **baseStore**: `string`

Defined in: [SteamAPI.ts:65](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L65)

URL to use for Steam Store API requests

'https://store.steampowered.com/api' by default

***

### currency?

> `optional` **currency**: [`Currency`](../type-aliases/Currency.md)

Defined in: [SteamAPI.ts:44](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L44)

Default currency to use for the API when a currency is not explicitly provided

'us' by default

***

### gameDetailCacheEnabled?

> `optional` **gameDetailCacheEnabled**: `boolean`

Defined in: [SteamAPI.ts:82](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L82)

If `inMemoryCacheEnabled` is true, this decides whether to cache API requests for getGameDetails()

***

### gameDetailCacheTTL?

> `optional` **gameDetailCacheTTL**: `number`

Defined in: [SteamAPI.ts:87](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L87)

How long to cache getGameDetails() in milliseconds

***

### headers?

> `optional` **headers**: `object`

Defined in: [SteamAPI.ts:51](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L51)

Custom headers to send for all API requests

By default, User-Agent is "SteamAPI/<VERSION> (https://www.npmjs.com/package/steamapi)"

#### Index Signature

\[`key`: `string`\]: `string`

***

### inMemoryCacheEnabled?

> `optional` **inMemoryCacheEnabled**: `boolean`

Defined in: [SteamAPI.ts:77](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L77)

Whether to use built-in in-memory caching for gameDetailCache and userResolveCache

***

### language?

> `optional` **language**: [`Language`](../type-aliases/Language.md)

Defined in: [SteamAPI.ts:37](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L37)

Default language to use for the API when a language is not explicitly provided

'english' by default

***

### userResolveCacheEnabled?

> `optional` **userResolveCacheEnabled**: `boolean`

Defined in: [SteamAPI.ts:92](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L92)

If `inMemoryCacheEnabled` is true, this decides whether to cache API requests for resolve()

***

### userResolveCacheTTL?

> `optional` **userResolveCacheTTL**: `number`

Defined in: [SteamAPI.ts:97](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L97)

How long to cache resolve() in milliseconds
