[**steamapi**](../README.md)

***

[steamapi](../README.md) / GameServer

# Class: GameServer

Defined in: [structures/GameServer.ts:4](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L4)

Game server as returned by getServerList

## Constructors

### Constructor

> **new GameServer**(`data`): `GameServer`

Defined in: [structures/GameServer.ts:56](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L56)

#### Parameters

##### data

`any`

#### Returns

`GameServer`

## Properties

### address

> **address**: `string`

Defined in: [structures/GameServer.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L6)

Server address of the form IPv4:PORT

***

### appID

> **appID**: `number`

Defined in: [structures/GameServer.ts:18](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L18)

App ID this server is hosting

***

### bots

> **bots**: `number`

Defined in: [structures/GameServer.ts:39](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L39)

Number of bots in the server

***

### dedicated

> **dedicated**: `boolean`

Defined in: [structures/GameServer.ts:48](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L48)

Is the server running dedicated

***

### gameDir

> **gameDir**: `string`

Defined in: [structures/GameServer.ts:21](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L21)

The directory the game is from

***

### id

> **id**: `string`

Defined in: [structures/GameServer.ts:12](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L12)

The SteamID of this game server

***

### map

> **map**: `string`

Defined in: [structures/GameServer.ts:42](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L42)

What map the game server is on

***

### maxPlayers

> **maxPlayers**: `number`

Defined in: [structures/GameServer.ts:36](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L36)

Max number of players that can join the server

***

### name

> **name**: `string`

Defined in: [structures/GameServer.ts:15](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L15)

Public name of the server

***

### os

> **os**: `string`

Defined in: [structures/GameServer.ts:51](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L51)

What OS the server is running. Typically 'l' or 'w'

***

### players

> **players**: `number`

Defined in: [structures/GameServer.ts:33](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L33)

Number of players in the server

***

### port

> **port**: `number`

Defined in: [structures/GameServer.ts:9](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L9)

The port this server is running on

***

### product

> **product**: `string`

Defined in: [structures/GameServer.ts:27](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L27)

Product string. Not sure what this means. Is often the same as gameDir

***

### region

> **region**: [`ServerRegion`](../enumerations/ServerRegion.md)

Defined in: [structures/GameServer.ts:30](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L30)

Server region

***

### secure

> **secure**: `boolean`

Defined in: [structures/GameServer.ts:45](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L45)

Is this server VAC secured

***

### tags

> **tags**: `string`[]

Defined in: [structures/GameServer.ts:54](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L54)

Game specific sv_tags e.g. hidden,reserved,empty,secure

***

### version

> **version**: `string`

Defined in: [structures/GameServer.ts:24](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameServer.ts#L24)

What version the server is running
