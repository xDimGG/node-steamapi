[**steamapi**](../README.md)

***

[steamapi](../README.md) / Server

# Class: Server

Defined in: [structures/Server.ts:15](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L15)

Game server as returned by getServers

## Constructors

### Constructor

> **new Server**(`data`): `Server`

Defined in: [structures/Server.ts:49](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L49)

#### Parameters

##### data

`any`

#### Returns

`Server`

## Properties

### address

> **address**: `string`

Defined in: [structures/Server.ts:20](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L20)

Server address of the form IPv4:PORT

***

### appID

> **appID**: `number`

Defined in: [structures/Server.ts:23](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L23)

App ID this server is hosting

***

### gameDir

> **gameDir**: `string`

Defined in: [structures/Server.ts:26](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L26)

The directory the game is from

***

### gmsIndex

> **gmsIndex**: `number`

Defined in: [structures/Server.ts:29](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L29)

GMS Index. Not sure what this means

***

### id

> **id**: `string`

Defined in: [structures/Server.ts:17](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L17)

The SteamID of this game server

***

### lan

> **lan**: `boolean`

Defined in: [structures/Server.ts:32](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L32)

Is this server LAN only

***

### port

> **port**: `number`

Defined in: [structures/Server.ts:35](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L35)

The port this server is running on

***

### region

> **region**: [`ServerRegion`](../enumerations/ServerRegion.md)

Defined in: [structures/Server.ts:38](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L38)

Server region

***

### reject?

> `optional` **reject**: `string`

Defined in: [structures/Server.ts:47](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L47)

Requirements for clients to join server

***

### secure

> **secure**: `boolean`

Defined in: [structures/Server.ts:41](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L41)

Is this server VAC secured

***

### specPort

> **specPort**: `number`

Defined in: [structures/Server.ts:44](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Server.ts#L44)

Server specPort. Not sure what this means
