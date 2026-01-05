[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserServers

# Class: UserServers

Defined in: [structures/UserServers.ts:4](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServers.ts#L4)

Game servers as returned by getUserServers

## Constructors

### Constructor

> **new UserServers**(`data`): `UserServers`

Defined in: [structures/UserServers.ts:20](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServers.ts#L20)

#### Parameters

##### data

`any`

#### Returns

`UserServers`

## Properties

### actorID

> **actorID**: `string`

Defined in: [structures/UserServers.ts:12](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServers.ts#L12)

Server actor SteamID. Not sure what this is

***

### banned

> **banned**: `boolean`

Defined in: [structures/UserServers.ts:9](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServers.ts#L9)

Whether this account has a ban from hosting servers

***

### expiresTimestamp

> **expiresTimestamp**: `number`

Defined in: [structures/UserServers.ts:15](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServers.ts#L15)

Unix Timestamp for when the servers expires

***

### lastActionTimestamp

> **lastActionTimestamp**: `number`

Defined in: [structures/UserServers.ts:18](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServers.ts#L18)

Unix Timestamp for the last time a server token action was executed

***

### servers

> **servers**: [`UserServer`](UserServer.md)[]

Defined in: [structures/UserServers.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServers.ts#L6)

Servers this account has created

## Accessors

### expiresAt

#### Get Signature

> **get** **expiresAt**(): `Date`

Defined in: [structures/UserServers.ts:29](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServers.ts#L29)

`expiresTimestamp` as a Date object

##### Returns

`Date`

***

### lastActionAt

#### Get Signature

> **get** **lastActionAt**(): `Date`

Defined in: [structures/UserServers.ts:34](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserServers.ts#L34)

`lastActionTimestamp` as a Date object

##### Returns

`Date`
