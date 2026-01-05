[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserAchievements

# Class: UserAchievements

Defined in: [structures/UserAchievements.ts:4](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievements.ts#L4)

## Extends

- `default`

## Constructors

### Constructor

> **new UserAchievements**(`data`): `UserAchievements`

Defined in: [structures/UserAchievements.ts:11](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievements.ts#L11)

#### Parameters

##### data

`any`

#### Returns

`UserAchievements`

#### Overrides

`User.constructor`

## Properties

### achievements

> **achievements**: [`UserAchievement`](UserAchievement.md)[]

Defined in: [structures/UserAchievements.ts:9](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievements.ts#L9)

All the achievements for this game with respect to the user

***

### game

> **game**: `string`

Defined in: [structures/UserAchievements.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievements.ts#L6)

Name of this game

***

### steamID

> **steamID**: `string`

Defined in: [structures/User.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/User.ts#L3)

This user's Steam ID

#### Inherited from

`User.steamID`

## Accessors

### profileURL

#### Get Signature

> **get** **profileURL**(): `string`

Defined in: [structures/User.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/User.ts#L10)

The permalink to this user's profile

##### Returns

`string`

#### Inherited from

`User.profileURL`
