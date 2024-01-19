[steamapi](../README.md) / UserServer

# Class: UserServer

## Table of contents

### Constructors

- [constructor](UserServer.md#constructor)

### Properties

- [appID](UserServer.md#appid)
- [deleted](UserServer.md#deleted)
- [expired](UserServer.md#expired)
- [id](UserServer.md#id)
- [lastLogonTimestamp](UserServer.md#lastlogontimestamp)
- [memo](UserServer.md#memo)
- [token](UserServer.md#token)

### Accessors

- [lastLogonAt](UserServer.md#lastlogonat)

## Constructors

### constructor

• **new UserServer**(`data`): [`UserServer`](UserServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserServer`](UserServer.md)

#### Defined in

[src/structures/UserServer.ts:23](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServer.ts#L23)

## Properties

### appID

• **appID**: `number`

App ID this server is for

#### Defined in

[src/structures/UserServer.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServer.ts#L6)

___

### deleted

• **deleted**: `boolean`

Has this server been deleted

#### Defined in

[src/structures/UserServer.ts:15](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServer.ts#L15)

___

### expired

• **expired**: `boolean`

Has this server expired

#### Defined in

[src/structures/UserServer.ts:18](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServer.ts#L18)

___

### id

• **id**: `string`

The SteamID of this game server

#### Defined in

[src/structures/UserServer.ts:3](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServer.ts#L3)

___

### lastLogonTimestamp

• **lastLogonTimestamp**: `number`

Unix Timestamp for when last time this server token was logged onto

#### Defined in

[src/structures/UserServer.ts:21](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServer.ts#L21)

___

### memo

• **memo**: `string`

The memo/name for this server

#### Defined in

[src/structures/UserServer.ts:12](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServer.ts#L12)

___

### token

• **token**: `string`

The login token for this server

#### Defined in

[src/structures/UserServer.ts:9](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServer.ts#L9)

## Accessors

### lastLogonAt

• `get` **lastLogonAt**(): `Date`

`lastLogonTimestamp` as a Date object

#### Returns

`Date`

#### Defined in

[src/structures/UserServer.ts:34](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServer.ts#L34)
