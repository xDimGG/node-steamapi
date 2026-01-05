[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserStats

# Class: UserStats

Defined in: [structures/UserStats.ts:5](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserStats.ts#L5)

## Extends

- `default`

## Constructors

### Constructor

> **new UserStats**(`data`): `UserStats`

Defined in: [structures/UserStats.ts:15](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserStats.ts#L15)

#### Parameters

##### data

`any`

#### Returns

`UserStats`

#### Overrides

`User.constructor`

## Properties

### achievements?

> `optional` **achievements**: [`UserAchievement`](UserAchievement.md)[]

Defined in: [structures/UserStats.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserStats.ts#L10)

The achievements this user has unlocked

***

### game

> **game**: `string`

Defined in: [structures/UserStats.ts:7](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserStats.ts#L7)

Name of this game

***

### stats?

> `optional` **stats**: [`UserStat`](../interfaces/UserStat.md)[]

Defined in: [structures/UserStats.ts:13](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserStats.ts#L13)

Some game stats about the user

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
