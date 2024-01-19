[steamapi](../README.md) / Server

# Class: Server

Game server as returned by getServers

## Table of contents

### Constructors

- [constructor](Server.md#constructor)

### Properties

- [address](Server.md#address)
- [appID](Server.md#appid)
- [gameDir](Server.md#gamedir)
- [gmsIndex](Server.md#gmsindex)
- [id](Server.md#id)
- [lan](Server.md#lan)
- [port](Server.md#port)
- [region](Server.md#region)
- [reject](Server.md#reject)
- [secure](Server.md#secure)
- [specPort](Server.md#specport)

## Constructors

### constructor

• **new Server**(`data`): [`Server`](Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Server`](Server.md)

#### Defined in

[src/structures/Server.ts:49](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L49)

## Properties

### address

• **address**: `string`

Server address of the form IPv4:PORT

#### Defined in

[src/structures/Server.ts:20](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L20)

___

### appID

• **appID**: `number`

App ID this server is hosting

#### Defined in

[src/structures/Server.ts:23](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L23)

___

### gameDir

• **gameDir**: `string`

The directory the game is from

#### Defined in

[src/structures/Server.ts:26](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L26)

___

### gmsIndex

• **gmsIndex**: `number`

GMS Index. Not sure what this means

#### Defined in

[src/structures/Server.ts:29](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L29)

___

### id

• **id**: `string`

The SteamID of this game server

#### Defined in

[src/structures/Server.ts:17](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L17)

___

### lan

• **lan**: `boolean`

Is this server LAN only

#### Defined in

[src/structures/Server.ts:32](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L32)

___

### port

• **port**: `number`

The port this server is running on

#### Defined in

[src/structures/Server.ts:35](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L35)

___

### region

• **region**: [`ServerRegion`](../enums/ServerRegion.md)

Server region

#### Defined in

[src/structures/Server.ts:38](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L38)

___

### reject

• `Optional` **reject**: `string`

Requirements for clients to join server

#### Defined in

[src/structures/Server.ts:47](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L47)

___

### secure

• **secure**: `boolean`

Is this server VAC secured

#### Defined in

[src/structures/Server.ts:41](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L41)

___

### specPort

• **specPort**: `number`

Server specPort. Not sure what this means

#### Defined in

[src/structures/Server.ts:44](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Server.ts#L44)
