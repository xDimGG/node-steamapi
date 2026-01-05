[**steamapi**](../README.md)

***

[steamapi](../README.md) / GameInfoBasic

# Class: GameInfoBasic

Defined in: [structures/GameInfoBasic.ts:5](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L5)

## Extends

- [`Game`](Game.md)

## Extended by

- [`GameInfo`](GameInfo.md)

## Constructors

### Constructor

> **new GameInfoBasic**(`data`): `GameInfoBasic`

Defined in: [structures/GameInfoBasic.ts:12](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L12)

#### Parameters

##### data

`any`

#### Returns

`GameInfoBasic`

#### Overrides

[`Game`](Game.md).[`constructor`](Game.md#constructor)

## Properties

### icon

> **icon**: `string`

Defined in: [structures/GameInfoBasic.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L10)

Hash for this game's icon

***

### id

> **id**: `number`

Defined in: [structures/Game.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L6)

App ID for this game

#### Inherited from

[`Game`](Game.md).[`id`](Game.md#id)

***

### name

> **name**: `string`

Defined in: [structures/GameInfoBasic.ts:7](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L7)

Name for this game

## Accessors

### backgroundURL

#### Get Signature

> **get** **backgroundURL**(): `string`

Defined in: [structures/Game.ts:28](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L28)

(might not exist) game page background

##### Returns

`string`

#### Inherited from

[`Game`](Game.md).[`backgroundURL`](Game.md#backgroundurl)

***

### coverURL

#### Get Signature

> **get** **coverURL**(): `string`

Defined in: [structures/Game.ts:31](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L31)

(might not exist) game cover

##### Returns

`string`

#### Inherited from

[`Game`](Game.md).[`coverURL`](Game.md#coverurl)

***

### headerMediumURL

#### Get Signature

> **get** **headerMediumURL**(): `string`

Defined in: [structures/Game.ts:16](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L16)

(might not exist) medium sized header image

##### Returns

`string`

#### Inherited from

[`Game`](Game.md).[`headerMediumURL`](Game.md#headermediumurl)

***

### headerURL

#### Get Signature

> **get** **headerURL**(): `string`

Defined in: [structures/Game.ts:13](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L13)

(might not exist) large sized header used on the store page

##### Returns

`string`

#### Inherited from

[`Game`](Game.md).[`headerURL`](Game.md#headerurl)

***

### iconURL

#### Get Signature

> **get** **iconURL**(): `string`

Defined in: [structures/GameInfoBasic.ts:20](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L20)

tiny app icon

##### Returns

`string`

***

### logoURL

#### Get Signature

> **get** **logoURL**(): `string`

Defined in: [structures/Game.ts:34](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L34)

(might not exist) transparent game logo

##### Returns

`string`

#### Inherited from

[`Game`](Game.md).[`logoURL`](Game.md#logourl)

***

### smallHeaderURL

#### Get Signature

> **get** **smallHeaderURL**(): `string`

Defined in: [structures/Game.ts:19](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L19)

(might not exist) small header image used on user pages

##### Returns

`string`

#### Inherited from

[`Game`](Game.md).[`smallHeaderURL`](Game.md#smallheaderurl)

***

### tinyHeaderURL

#### Get Signature

> **get** **tinyHeaderURL**(): `string`

Defined in: [structures/Game.ts:22](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L22)

(might not exist) tiny header image used on app bundles

##### Returns

`string`

#### Inherited from

[`Game`](Game.md).[`tinyHeaderURL`](Game.md#tinyheaderurl)
