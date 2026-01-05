[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserAchievement

# Class: UserAchievement

Defined in: [structures/UserAchievement.ts:1](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievement.ts#L1)

## Constructors

### Constructor

> **new UserAchievement**(`data`): `UserAchievement`

Defined in: [structures/UserAchievement.ts:15](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievement.ts#L15)

#### Parameters

##### data

`any`

#### Returns

`UserAchievement`

## Properties

### name

> **name**: `string`

Defined in: [structures/UserAchievement.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievement.ts#L3)

API name for this achievement (e.g. ACH03, TF_GET_TURRETKILLS, Champion)

***

### unlocked

> **unlocked**: `boolean`

Defined in: [structures/UserAchievement.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievement.ts#L6)

Whether the user has unlocked this achievement

***

### unlockedTimestamp?

> `optional` **unlockedTimestamp**: `number`

Defined in: [structures/UserAchievement.ts:13](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievement.ts#L13)

Unix Timestamp for when the user unlocked this achievement.
Is 0 if the user has not unlocked this achievement. Only defined
when calling getUserAchievements()

## Accessors

### unlockedAt

#### Get Signature

> **get** **unlockedAt**(): `undefined` \| `Date`

Defined in: [structures/UserAchievement.ts:23](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserAchievement.ts#L23)

Date when this achievement was unlocked

##### Returns

`undefined` \| `Date`
