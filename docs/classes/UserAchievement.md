[steamapi](../README.md) / UserAchievement

# Class: UserAchievement

## Table of contents

### Constructors

- [constructor](UserAchievement.md#constructor)

### Properties

- [name](UserAchievement.md#name)
- [unlocked](UserAchievement.md#unlocked)
- [unlockedTimestamp](UserAchievement.md#unlockedtimestamp)

### Accessors

- [unlockedAt](UserAchievement.md#unlockedat)

## Constructors

### constructor

• **new UserAchievement**(`data`): [`UserAchievement`](UserAchievement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserAchievement`](UserAchievement.md)

#### Defined in

[src/structures/UserAchievement.ts:15](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserAchievement.ts#L15)

## Properties

### name

• **name**: `string`

API name for this achievement (e.g. ACH03, TF_GET_TURRETKILLS, Champion)

#### Defined in

[src/structures/UserAchievement.ts:3](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserAchievement.ts#L3)

___

### unlocked

• **unlocked**: `boolean`

Whether the user has unlocked this achievement

#### Defined in

[src/structures/UserAchievement.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserAchievement.ts#L6)

___

### unlockedTimestamp

• `Optional` **unlockedTimestamp**: `number`

Unix Timestamp for when the user unlocked this achievement.
Is 0 if the user has not unlocked this achievement. Only defined
when calling getUserAchievements()

#### Defined in

[src/structures/UserAchievement.ts:13](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserAchievement.ts#L13)

## Accessors

### unlockedAt

• `get` **unlockedAt**(): `undefined` \| `Date`

Date when this achievement was unlocked

#### Returns

`undefined` \| `Date`

#### Defined in

[src/structures/UserAchievement.ts:23](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserAchievement.ts#L23)
