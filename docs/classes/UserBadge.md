[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserBadge

# Class: UserBadge

Defined in: [structures/UserBadge.ts:1](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L1)

## Constructors

### Constructor

> **new UserBadge**(`data`): `Badge`

Defined in: [structures/UserBadge.ts:26](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L26)

#### Parameters

##### data

`any`

#### Returns

`Badge`

## Properties

### appID?

> `optional` **appID**: `number`

Defined in: [structures/UserBadge.ts:18](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L18)

If this badge belongs to a game, this is the app ID of that game

***

### borderColor?

> `optional` **borderColor**: `number`

Defined in: [structures/UserBadge.ts:24](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L24)

If this badge belongs to a game, this is the border color for the badge. (note: seems to always be 0)

***

### communityItemID?

> `optional` **communityItemID**: `number`

Defined in: [structures/UserBadge.ts:21](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L21)

If this badge belongs to a game, this is the community item ID for the badge

***

### completedTimestamp

> **completedTimestamp**: `number`

Defined in: [structures/UserBadge.ts:9](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L9)

UNIX Timestamp for when this badge was completed

***

### id

> **id**: `number`

Defined in: [structures/UserBadge.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L3)

This badge's ID

***

### level

> **level**: `number`

Defined in: [structures/UserBadge.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L6)

The user's level for this badge

***

### scarcity

> **scarcity**: `number`

Defined in: [structures/UserBadge.ts:15](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L15)

How many have received this badge

***

### xp

> **xp**: `number`

Defined in: [structures/UserBadge.ts:12](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L12)

The amount of XP gained towards this badge

## Accessors

### completedAt

#### Get Signature

> **get** **completedAt**(): `Date`

Defined in: [structures/UserBadge.ts:40](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBadge.ts#L40)

Date when this badge was completed

##### Returns

`Date`
