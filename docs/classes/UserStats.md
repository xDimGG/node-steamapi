[steamapi](../README.md) / UserStats

# Class: UserStats

## Hierarchy

- `default`

  ↳ **`UserStats`**

## Table of contents

### Constructors

- [constructor](UserStats.md#constructor)

### Properties

- [achievements](UserStats.md#achievements)
- [game](UserStats.md#game)
- [stats](UserStats.md#stats)
- [steamID](UserStats.md#steamid)

### Accessors

- [profileURL](UserStats.md#profileurl)

## Constructors

### constructor

• **new UserStats**(`data`): [`UserStats`](UserStats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserStats`](UserStats.md)

#### Overrides

User.constructor

#### Defined in

[src/structures/UserStats.ts:15](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserStats.ts#L15)

## Properties

### achievements

• `Optional` **achievements**: [`UserAchievement`](UserAchievement.md)[]

The achievements this user has unlocked

#### Defined in

[src/structures/UserStats.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserStats.ts#L10)

___

### game

• **game**: `string`

Name of this game

#### Defined in

[src/structures/UserStats.ts:7](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserStats.ts#L7)

___

### stats

• `Optional` **stats**: [`UserStat`](../interfaces/UserStat.md)[]

Some game stats about the user

#### Defined in

[src/structures/UserStats.ts:13](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserStats.ts#L13)

___

### steamID

• **steamID**: `string`

This user's Steam ID

#### Inherited from

User.steamID

#### Defined in

[src/structures/User.ts:3](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/User.ts#L3)

## Accessors

### profileURL

• `get` **profileURL**(): `string`

The permalink to this user's profile

#### Returns

`string`

#### Inherited from

User.profileURL

#### Defined in

[src/structures/User.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/User.ts#L10)
