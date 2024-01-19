[steamapi](../README.md) / UserServers

# Class: UserServers

Game servers as returned by getUserServers

## Table of contents

### Constructors

- [constructor](UserServers.md#constructor)

### Properties

- [actorID](UserServers.md#actorid)
- [banned](UserServers.md#banned)
- [expiresTimestamp](UserServers.md#expirestimestamp)
- [lastActionTimestamp](UserServers.md#lastactiontimestamp)
- [servers](UserServers.md#servers)

### Accessors

- [expiresAt](UserServers.md#expiresat)
- [lastActionAt](UserServers.md#lastactionat)

## Constructors

### constructor

• **new UserServers**(`data`): [`UserServers`](UserServers.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserServers`](UserServers.md)

#### Defined in

[src/structures/UserServers.ts:20](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServers.ts#L20)

## Properties

### actorID

• **actorID**: `string`

Server actor SteamID. Not sure what this is

#### Defined in

[src/structures/UserServers.ts:12](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServers.ts#L12)

___

### banned

• **banned**: `boolean`

Whether this account has a ban from hosting servers

#### Defined in

[src/structures/UserServers.ts:9](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServers.ts#L9)

___

### expiresTimestamp

• **expiresTimestamp**: `number`

Unix Timestamp for when the servers expires

#### Defined in

[src/structures/UserServers.ts:15](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServers.ts#L15)

___

### lastActionTimestamp

• **lastActionTimestamp**: `number`

Unix Timestamp for the last time a server token action was executed

#### Defined in

[src/structures/UserServers.ts:18](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServers.ts#L18)

___

### servers

• **servers**: [`UserServer`](UserServer.md)[]

Servers this account has created

#### Defined in

[src/structures/UserServers.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServers.ts#L6)

## Accessors

### expiresAt

• `get` **expiresAt**(): `Date`

`expiresTimestamp` as a Date object

#### Returns

`Date`

#### Defined in

[src/structures/UserServers.ts:29](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServers.ts#L29)

___

### lastActionAt

• `get` **lastActionAt**(): `Date`

`lastActionTimestamp` as a Date object

#### Returns

`Date`

#### Defined in

[src/structures/UserServers.ts:34](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserServers.ts#L34)
