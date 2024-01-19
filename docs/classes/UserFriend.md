[steamapi](../README.md) / UserFriend

# Class: UserFriend

## Hierarchy

- `default`

  ↳ **`UserFriend`**

## Table of contents

### Constructors

- [constructor](UserFriend.md#constructor)

### Properties

- [friendedTimestamp](UserFriend.md#friendedtimestamp)
- [relationship](UserFriend.md#relationship)
- [steamID](UserFriend.md#steamid)

### Accessors

- [friendedAt](UserFriend.md#friendedat)
- [profileURL](UserFriend.md#profileurl)

## Constructors

### constructor

• **new UserFriend**(`data`): [`UserFriend`](UserFriend.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserFriend`](UserFriend.md)

#### Overrides

User.constructor

#### Defined in

[src/structures/UserFriend.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserFriend.ts#L10)

## Properties

### friendedTimestamp

• **friendedTimestamp**: `number`

Unix Timestamp representing when the friendship started

#### Defined in

[src/structures/UserFriend.ts:5](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserFriend.ts#L5)

___

### relationship

• **relationship**: `string`

The type of the relationship (note: seems to always be 'friend')

#### Defined in

[src/structures/UserFriend.ts:8](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserFriend.ts#L8)

___

### steamID

• **steamID**: `string`

This user's Steam ID

#### Inherited from

User.steamID

#### Defined in

[src/structures/User.ts:3](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/User.ts#L3)

## Accessors

### friendedAt

• `get` **friendedAt**(): `Date`

Date object when this friendship started

#### Returns

`Date`

#### Defined in

[src/structures/UserFriend.ts:18](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserFriend.ts#L18)

___

### profileURL

• `get` **profileURL**(): `string`

The permalink to this user's profile

#### Returns

`string`

#### Inherited from

User.profileURL

#### Defined in

[src/structures/User.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/User.ts#L10)
