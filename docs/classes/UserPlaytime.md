[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserPlaytime

# Class: UserPlaytime\<G\>

Defined in: [structures/UserPlaytime.ts:5](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L5)

## Type Parameters

### G

`G`

## Constructors

### Constructor

> **new UserPlaytime**\<`G`\>(`data`, `game`): `UserPlaytime`\<`G`\>

Defined in: [structures/UserPlaytime.ts:30](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L30)

#### Parameters

##### data

`any`

##### game

`G`

#### Returns

`UserPlaytime`\<`G`\>

## Properties

### disconnectedMinutes

> **disconnectedMinutes**: `number`

Defined in: [structures/UserPlaytime.ts:25](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L25)

The number of minutes played while offline

***

### game

> **game**: `G`

Defined in: [structures/UserPlaytime.ts:7](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L7)

The game with various levels of information based on parameters passed to getUserOwnedGames()

***

### lastPlayedTimestamp?

> `optional` **lastPlayedTimestamp**: `number`

Defined in: [structures/UserPlaytime.ts:28](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L28)

UNIX Timestamp for when the user last played this game if the user has ever launched the game

***

### linuxMinutes

> **linuxMinutes**: `number`

Defined in: [structures/UserPlaytime.ts:22](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L22)

The number of minutes played on Linux (not accurate)

***

### macMinutes

> **macMinutes**: `number`

Defined in: [structures/UserPlaytime.ts:19](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L19)

The number of minutes played on Mac (not accurate)

***

### minutes

> **minutes**: `number`

Defined in: [structures/UserPlaytime.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L10)

The total number of minutes the user has played this game

***

### recentMinutes

> **recentMinutes**: `number`

Defined in: [structures/UserPlaytime.ts:13](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L13)

The number of minutes played in the last 2 weeks

***

### windowsMinutes

> **windowsMinutes**: `number`

Defined in: [structures/UserPlaytime.ts:16](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L16)

The number of minutes played on Windows (not accurate)

## Accessors

### lastPlayedAt

#### Get Signature

> **get** **lastPlayedAt**(): `undefined` \| `Date`

Defined in: [structures/UserPlaytime.ts:42](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserPlaytime.ts#L42)

Date when user last played this game

##### Returns

`undefined` \| `Date`
