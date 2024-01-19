[steamapi](../README.md) / UserBadge

# Class: UserBadge

## Table of contents

### Constructors

- [constructor](UserBadge.md#constructor)

### Properties

- [appID](UserBadge.md#appid)
- [borderColor](UserBadge.md#bordercolor)
- [communityItemID](UserBadge.md#communityitemid)
- [completedTimestamp](UserBadge.md#completedtimestamp)
- [id](UserBadge.md#id)
- [level](UserBadge.md#level)
- [scarcity](UserBadge.md#scarcity)
- [xp](UserBadge.md#xp)

### Accessors

- [completedAt](UserBadge.md#completedat)

## Constructors

### constructor

• **new UserBadge**(`data`): [`UserBadge`](UserBadge.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserBadge`](UserBadge.md)

#### Defined in

[src/structures/UserBadge.ts:26](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L26)

## Properties

### appID

• `Optional` **appID**: `number`

If this badge belongs to a game, this is the app ID of that game

#### Defined in

[src/structures/UserBadge.ts:18](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L18)

___

### borderColor

• `Optional` **borderColor**: `number`

If this badge belongs to a game, this is the border color for the badge. (note: seems to always be 0)

#### Defined in

[src/structures/UserBadge.ts:24](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L24)

___

### communityItemID

• `Optional` **communityItemID**: `number`

If this badge belongs to a game, this is the community item ID for the badge

#### Defined in

[src/structures/UserBadge.ts:21](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L21)

___

### completedTimestamp

• **completedTimestamp**: `number`

UNIX Timestamp for when this badge was completed

#### Defined in

[src/structures/UserBadge.ts:9](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L9)

___

### id

• **id**: `number`

This badge's ID

#### Defined in

[src/structures/UserBadge.ts:3](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L3)

___

### level

• **level**: `number`

The user's level for this badge

#### Defined in

[src/structures/UserBadge.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L6)

___

### scarcity

• **scarcity**: `number`

How many have received this badge

#### Defined in

[src/structures/UserBadge.ts:15](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L15)

___

### xp

• **xp**: `number`

The amount of XP gained towards this badge

#### Defined in

[src/structures/UserBadge.ts:12](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L12)

## Accessors

### completedAt

• `get` **completedAt**(): `Date`

Date when this badge was completed

#### Returns

`Date`

#### Defined in

[src/structures/UserBadge.ts:40](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBadge.ts#L40)
