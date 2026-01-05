[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserFriend

# Class: UserFriend

Defined in: [structures/UserFriend.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserFriend.ts#L3)

## Extends

- `default`

## Constructors

### Constructor

> **new UserFriend**(`data`): `UserFriend`

Defined in: [structures/UserFriend.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserFriend.ts#L10)

#### Parameters

##### data

`any`

#### Returns

`UserFriend`

#### Overrides

`User.constructor`

## Properties

### friendedTimestamp

> **friendedTimestamp**: `number`

Defined in: [structures/UserFriend.ts:5](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserFriend.ts#L5)

Unix Timestamp representing when the friendship started

***

### relationship

> **relationship**: `string`

Defined in: [structures/UserFriend.ts:8](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserFriend.ts#L8)

The type of the relationship (note: seems to always be 'friend')

***

### steamID

> **steamID**: `string`

Defined in: [structures/User.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/User.ts#L3)

This user's Steam ID

#### Inherited from

`User.steamID`

## Accessors

### friendedAt

#### Get Signature

> **get** **friendedAt**(): `Date`

Defined in: [structures/UserFriend.ts:18](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserFriend.ts#L18)

Date object when this friendship started

##### Returns

`Date`

***

### profileURL

#### Get Signature

> **get** **profileURL**(): `string`

Defined in: [structures/User.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/User.ts#L10)

The permalink to this user's profile

##### Returns

`string`

#### Inherited from

`User.profileURL`
