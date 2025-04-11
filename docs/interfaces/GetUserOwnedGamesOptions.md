[**steamapi**](../README.md)

***

[steamapi](../README.md) / GetUserOwnedGamesOptions

# Interface: GetUserOwnedGamesOptions

Defined in: [SteamAPI.ts:131](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L131)

## Properties

### filterApps?

> `optional` **filterApps**: `number`[]

Defined in: [SteamAPI.ts:148](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L148)

If set, restricts results to the passed in apps. (note: does not seem to actually work)

***

### includeAppInfo?

> `optional` **includeAppInfo**: `boolean`

Defined in: [SteamAPI.ts:133](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L133)

Include additional details (name, icon) about each game

***

### includeExtendedAppInfo?

> `optional` **includeExtendedAppInfo**: `boolean`

Defined in: [SteamAPI.ts:145](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L145)

Include even more app details. If true, `includeAppInfo` will also be set to true

***

### includeFreeGames?

> `optional` **includeFreeGames**: `boolean`

Defined in: [SteamAPI.ts:136](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L136)

Include free games the user has played

***

### includeFreeSubGames?

> `optional` **includeFreeSubGames**: `boolean`

Defined in: [SteamAPI.ts:139](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L139)

Includes games in the free sub (defaults to false)

***

### includeUnvettedApps?

> `optional` **includeUnvettedApps**: `boolean`

Defined in: [SteamAPI.ts:142](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L142)

Include unvetted store apps (defaults to false)

***

### language?

> `optional` **language**: [`Language`](../type-aliases/Language.md)

Defined in: [SteamAPI.ts:151](https://github.com/xDimGG/node-steamapi/blob/1fe06d2c5a85fee5e9f5e4f0962481cbd53a974e/src/SteamAPI.ts#L151)

Language to return app info in. (note: does not seem to actually work)
