[steamapi](../README.md) / GameServer

# Class: GameServer

Game server as returned by getServerList

## Table of contents

### Constructors

- [constructor](GameServer.md#constructor)

### Properties

- [address](GameServer.md#address)
- [appID](GameServer.md#appid)
- [bots](GameServer.md#bots)
- [dedicated](GameServer.md#dedicated)
- [gameDir](GameServer.md#gamedir)
- [id](GameServer.md#id)
- [map](GameServer.md#map)
- [maxPlayers](GameServer.md#maxplayers)
- [name](GameServer.md#name)
- [os](GameServer.md#os)
- [players](GameServer.md#players)
- [port](GameServer.md#port)
- [product](GameServer.md#product)
- [region](GameServer.md#region)
- [secure](GameServer.md#secure)
- [tags](GameServer.md#tags)
- [version](GameServer.md#version)

## Constructors

### constructor

• **new GameServer**(`data`): [`GameServer`](GameServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GameServer`](GameServer.md)

#### Defined in

[src/structures/GameServer.ts:56](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L56)

## Properties

### address

• **address**: `string`

Server address of the form IPv4:PORT

#### Defined in

[src/structures/GameServer.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L6)

___

### appID

• **appID**: `number`

App ID this server is hosting

#### Defined in

[src/structures/GameServer.ts:18](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L18)

___

### bots

• **bots**: `number`

Number of bots in the server

#### Defined in

[src/structures/GameServer.ts:39](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L39)

___

### dedicated

• **dedicated**: `boolean`

Is the server running dedicated

#### Defined in

[src/structures/GameServer.ts:48](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L48)

___

### gameDir

• **gameDir**: `string`

The directory the game is from

#### Defined in

[src/structures/GameServer.ts:21](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L21)

___

### id

• **id**: `string`

The SteamID of this game server

#### Defined in

[src/structures/GameServer.ts:12](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L12)

___

### map

• **map**: `string`

What map the game server is on

#### Defined in

[src/structures/GameServer.ts:42](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L42)

___

### maxPlayers

• **maxPlayers**: `number`

Max number of players that can join the server

#### Defined in

[src/structures/GameServer.ts:36](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L36)

___

### name

• **name**: `string`

Public name of the server

#### Defined in

[src/structures/GameServer.ts:15](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L15)

___

### os

• **os**: `string`

What OS the server is running. Typically 'l' or 'w'

#### Defined in

[src/structures/GameServer.ts:51](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L51)

___

### players

• **players**: `number`

Number of players in the server

#### Defined in

[src/structures/GameServer.ts:33](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L33)

___

### port

• **port**: `number`

The port this server is running on

#### Defined in

[src/structures/GameServer.ts:9](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L9)

___

### product

• **product**: `string`

Product string. Not sure what this means. Is often the same as gameDir

#### Defined in

[src/structures/GameServer.ts:27](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L27)

___

### region

• **region**: [`ServerRegion`](../enums/ServerRegion.md)

Server region

#### Defined in

[src/structures/GameServer.ts:30](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L30)

___

### secure

• **secure**: `boolean`

Is this server VAC secured

#### Defined in

[src/structures/GameServer.ts:45](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L45)

___

### tags

• **tags**: `string`[]

Game specific sv_tags e.g. hidden,reserved,empty,secure

#### Defined in

[src/structures/GameServer.ts:54](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L54)

___

### version

• **version**: `string`

What version the server is running

#### Defined in

[src/structures/GameServer.ts:24](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameServer.ts#L24)
