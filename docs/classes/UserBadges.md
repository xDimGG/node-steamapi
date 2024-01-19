[steamapi](../README.md) / UserBadges

# Class: UserBadges

## Table of contents

### Constructors

- [constructor](UserBadges.md#constructor)

### Properties

- [badges](UserBadges.md#badges)
- [level](UserBadges.md#level)
- [levelXP](UserBadges.md#levelxp)
- [xp](UserBadges.md#xp)
- [xpRemaining](UserBadges.md#xpremaining)

## Constructors

### constructor

• **new UserBadges**(`data`): [`UserBadges`](UserBadges.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserBadges`](UserBadges.md)

#### Defined in

[src/structures/UserBadges.ts:19](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadges.ts#L19)

## Properties

### badges

• **badges**: [`UserBadge`](UserBadge.md)[]

Badges this user owns

#### Defined in

[src/structures/UserBadges.ts:5](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadges.ts#L5)

___

### level

• **level**: `number`

This user's current level

#### Defined in

[src/structures/UserBadges.ts:14](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadges.ts#L14)

___

### levelXP

• **levelXP**: `number`

The amount of XP it took to reach this user's level (e.g. reaching level 26 requires 4800 XP)

#### Defined in

[src/structures/UserBadges.ts:17](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadges.ts#L17)

___

### xp

• **xp**: `number`

The total amount of XP this user has

#### Defined in

[src/structures/UserBadges.ts:8](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadges.ts#L8)

___

### xpRemaining

• **xpRemaining**: `number`

The amount of XP remaining for this user to reach the next level

#### Defined in

[src/structures/UserBadges.ts:11](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadges.ts#L11)
