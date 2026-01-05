[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserServer

# Class: UserServer

Defined in: [structures/UserServer.ts:1](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L1)

## Constructors

### Constructor

> **new UserServer**(`data`): `UserServer`

Defined in: [structures/UserServer.ts:23](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L23)

#### Parameters

##### data

`any`

#### Returns

`UserServer`

## Properties

### appID

> **appID**: `number`

Defined in: [structures/UserServer.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L6)

App ID this server is for

***

### deleted

> **deleted**: `boolean`

Defined in: [structures/UserServer.ts:15](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L15)

Has this server been deleted

***

### expired

> **expired**: `boolean`

Defined in: [structures/UserServer.ts:18](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L18)

Has this server expired

***

### id

> **id**: `string`

Defined in: [structures/UserServer.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L3)

The SteamID of this game server

***

### lastLogonTimestamp

> **lastLogonTimestamp**: `number`

Defined in: [structures/UserServer.ts:21](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L21)

Unix Timestamp for when last time this server token was logged onto

***

### memo

> **memo**: `string`

Defined in: [structures/UserServer.ts:12](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L12)

The memo/name for this server

***

### token

> **token**: `string`

Defined in: [structures/UserServer.ts:9](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L9)

The login token for this server

## Accessors

### lastLogonAt

#### Get Signature

> **get** **lastLogonAt**(): `Date`

Defined in: [structures/UserServer.ts:34](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServer.ts#L34)

`lastLogonTimestamp` as a Date object

##### Returns

`Date`
