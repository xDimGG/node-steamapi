[**steamapi**](../README.md)

***

[steamapi](../README.md) / GetUserOwnedGamesOptions

# Interface: GetUserOwnedGamesOptions

Defined in: [SteamAPI.ts:132](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L132)

## Properties

### filterApps?

> `optional` **filterApps**: `number`[]

Defined in: [SteamAPI.ts:149](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L149)

If set, restricts results to the passed in apps. (note: does not seem to actually work)

***

### includeAppInfo?

> `optional` **includeAppInfo**: `boolean`

Defined in: [SteamAPI.ts:134](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L134)

Include additional details (name, icon) about each game

***

### includeExtendedAppInfo?

> `optional` **includeExtendedAppInfo**: `boolean`

Defined in: [SteamAPI.ts:146](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L146)

Include even more app details. If true, `includeAppInfo` will also be set to true

***

### includeFreeGames?

> `optional` **includeFreeGames**: `boolean`

Defined in: [SteamAPI.ts:137](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L137)

Include free games the user has played

***

### includeFreeSubGames?

> `optional` **includeFreeSubGames**: `boolean`

Defined in: [SteamAPI.ts:140](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L140)

Includes games in the free sub (defaults to false)

***

### includeUnvettedApps?

> `optional` **includeUnvettedApps**: `boolean`

Defined in: [SteamAPI.ts:143](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L143)

Include unvetted store apps (defaults to false)

***

### language?

> `optional` **language**: [`Language`](../type-aliases/Language.md)

Defined in: [SteamAPI.ts:152](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L152)

Language to return app info in. (note: does not seem to actually work)
