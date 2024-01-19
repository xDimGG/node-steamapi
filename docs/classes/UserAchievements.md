[steamapi](../README.md) / UserAchievements

# Class: UserAchievements

## Hierarchy

- `default`

  ↳ **`UserAchievements`**

## Table of contents

### Constructors

- [constructor](UserAchievements.md#constructor)

### Properties

- [achievements](UserAchievements.md#achievements)
- [game](UserAchievements.md#game)
- [steamID](UserAchievements.md#steamid)

### Accessors

- [profileURL](UserAchievements.md#profileurl)

## Constructors

### constructor

• **new UserAchievements**(`data`): [`UserAchievements`](UserAchievements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserAchievements`](UserAchievements.md)

#### Overrides

User.constructor

#### Defined in

[src/structures/UserAchievements.ts:11](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserAchievements.ts#L11)

## Properties

### achievements

• **achievements**: [`UserAchievement`](UserAchievement.md)[]

All the achievements for this game with respect to the user

#### Defined in

[src/structures/UserAchievements.ts:9](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserAchievements.ts#L9)

___

### game

• **game**: `string`

Name of this game

#### Defined in

[src/structures/UserAchievements.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserAchievements.ts#L6)

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
