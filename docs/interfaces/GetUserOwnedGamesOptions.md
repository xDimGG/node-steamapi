[steamapi](../README.md) / GetUserOwnedGamesOptions

# Interface: GetUserOwnedGamesOptions

## Table of contents

### Properties

- [filterApps](GetUserOwnedGamesOptions.md#filterapps)
- [includeAppInfo](GetUserOwnedGamesOptions.md#includeappinfo)
- [includeExtendedAppInfo](GetUserOwnedGamesOptions.md#includeextendedappinfo)
- [includeFreeGames](GetUserOwnedGamesOptions.md#includefreegames)
- [includeFreeSubGames](GetUserOwnedGamesOptions.md#includefreesubgames)
- [includeUnvettedApps](GetUserOwnedGamesOptions.md#includeunvettedapps)
- [language](GetUserOwnedGamesOptions.md#language)

## Properties

### filterApps

• `Optional` **filterApps**: `number`[]

If set, restricts results to the passed in apps. (note: does not seem to actually work)

#### Defined in

[src/SteamAPI.ts:144](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L144)

___

### includeAppInfo

• `Optional` **includeAppInfo**: `boolean`

Include additional details (name, icon) about each game

#### Defined in

[src/SteamAPI.ts:129](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L129)

___

### includeExtendedAppInfo

• `Optional` **includeExtendedAppInfo**: `boolean`

Include even more app details. If true, `includeAppInfo` will also be set to true

#### Defined in

[src/SteamAPI.ts:141](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L141)

___

### includeFreeGames

• `Optional` **includeFreeGames**: `boolean`

Include free games the user has played

#### Defined in

[src/SteamAPI.ts:132](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L132)

___

### includeFreeSubGames

• `Optional` **includeFreeSubGames**: `boolean`

Includes games in the free sub (defaults to false)

#### Defined in

[src/SteamAPI.ts:135](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L135)

___

### includeUnvettedApps

• `Optional` **includeUnvettedApps**: `boolean`

Include unvetted store apps (defaults to false)

#### Defined in

[src/SteamAPI.ts:138](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L138)

___

### language

• `Optional` **language**: [`Language`](../README.md#language)

Language to return app info in. (note: does not seem to actualy work)

#### Defined in

[src/SteamAPI.ts:147](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L147)
