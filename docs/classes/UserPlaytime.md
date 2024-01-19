[steamapi](../README.md) / UserPlaytime

# Class: UserPlaytime\<G\>

## Type parameters

| Name |
| :------ |
| `G` |

## Table of contents

### Constructors

- [constructor](UserPlaytime.md#constructor)

### Properties

- [disconnectedMinutes](UserPlaytime.md#disconnectedminutes)
- [game](UserPlaytime.md#game)
- [lastPlayedTimestamp](UserPlaytime.md#lastplayedtimestamp)
- [linuxMinutes](UserPlaytime.md#linuxminutes)
- [macMinutes](UserPlaytime.md#macminutes)
- [minutes](UserPlaytime.md#minutes)
- [recentMinutes](UserPlaytime.md#recentminutes)
- [windowsMinutes](UserPlaytime.md#windowsminutes)

### Accessors

- [lastPlayedAt](UserPlaytime.md#lastplayedat)

## Constructors

### constructor

• **new UserPlaytime**\<`G`\>(`data`, `game`): [`UserPlaytime`](UserPlaytime.md)\<`G`\>

#### Type parameters

| Name |
| :------ |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `game` | `G` |

#### Returns

[`UserPlaytime`](UserPlaytime.md)\<`G`\>

#### Defined in

[src/structures/UserPlaytime.ts:30](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L30)

## Properties

### disconnectedMinutes

• **disconnectedMinutes**: `number`

The number of minutes played while offline

#### Defined in

[src/structures/UserPlaytime.ts:25](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L25)

___

### game

• **game**: `G`

The game with various levels of information based on parameters passed to getUserOwnedGames()

#### Defined in

[src/structures/UserPlaytime.ts:7](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L7)

___

### lastPlayedTimestamp

• `Optional` **lastPlayedTimestamp**: `number`

UNIX Timestamp for when the user last played this game if the user has ever launched the game

#### Defined in

[src/structures/UserPlaytime.ts:28](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L28)

___

### linuxMinutes

• **linuxMinutes**: `number`

The number of minutes played on Linux (not accurate)

#### Defined in

[src/structures/UserPlaytime.ts:22](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L22)

___

### macMinutes

• **macMinutes**: `number`

The number of minutes played on Mac (not accurate)

#### Defined in

[src/structures/UserPlaytime.ts:19](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L19)

___

### minutes

• **minutes**: `number`

The total number of minutes the user has played this game

#### Defined in

[src/structures/UserPlaytime.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L10)

___

### recentMinutes

• **recentMinutes**: `number`

The number of minutes played in the last 2 weeks

#### Defined in

[src/structures/UserPlaytime.ts:13](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L13)

___

### windowsMinutes

• **windowsMinutes**: `number`

The number of minutes played on Windows (not accurate)

#### Defined in

[src/structures/UserPlaytime.ts:16](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L16)

## Accessors

### lastPlayedAt

• `get` **lastPlayedAt**(): `undefined` \| `Date`

Date when uaer last played this game

#### Returns

`undefined` \| `Date`

#### Defined in

[src/structures/UserPlaytime.ts:42](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserPlaytime.ts#L42)
