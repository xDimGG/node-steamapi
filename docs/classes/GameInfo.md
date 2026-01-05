[**steamapi**](../README.md)

***

[steamapi](../README.md) / GameInfo

# Class: GameInfo

Defined in: [structures/GameInfo.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfo.ts#L3)

## Extends

- [`GameInfoBasic`](GameInfoBasic.md)

## Extended by

- [`GameInfoExtended`](GameInfoExtended.md)

## Constructors

### Constructor

> **new GameInfo**(`data`): `GameInfo`

Defined in: [structures/GameInfo.ts:13](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfo.ts#L13)

#### Parameters

##### data

`any`

#### Returns

`GameInfo`

#### Overrides

[`GameInfoBasic`](GameInfoBasic.md).[`constructor`](GameInfoBasic.md#constructor)

## Properties

### descriptorIDs?

> `optional` **descriptorIDs**: `number`[]

Defined in: [structures/GameInfo.ts:11](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfo.ts#L11)

Descriptor IDs. Not sure what this means. Usually undefined

***

### hasCommunityVisibleStats

> **hasCommunityVisibleStats**: `boolean`

Defined in: [structures/GameInfo.ts:5](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfo.ts#L5)

If this game has community visible stats

***

### hasLeaderboards

> **hasLeaderboards**: `boolean`

Defined in: [structures/GameInfo.ts:8](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfo.ts#L8)

If this game has leaderboards

***

### icon

> **icon**: `string`

Defined in: [structures/GameInfoBasic.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L10)

Hash for this game's icon

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`icon`](GameInfoBasic.md#icon)

***

### id

> **id**: `number`

Defined in: [structures/Game.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L6)

App ID for this game

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`id`](GameInfoBasic.md#id)

***

### name

> **name**: `string`

Defined in: [structures/GameInfoBasic.ts:7](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L7)

Name for this game

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`name`](GameInfoBasic.md#name)

## Accessors

### backgroundURL

#### Get Signature

> **get** **backgroundURL**(): `string`

Defined in: [structures/Game.ts:28](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L28)

(might not exist) game page background

##### Returns

`string`

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`backgroundURL`](GameInfoBasic.md#backgroundurl)

***

### coverURL

#### Get Signature

> **get** **coverURL**(): `string`

Defined in: [structures/Game.ts:31](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L31)

(might not exist) game cover

##### Returns

`string`

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`coverURL`](GameInfoBasic.md#coverurl)

***

### headerMediumURL

#### Get Signature

> **get** **headerMediumURL**(): `string`

Defined in: [structures/Game.ts:16](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L16)

(might not exist) medium sized header image

##### Returns

`string`

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`headerMediumURL`](GameInfoBasic.md#headermediumurl)

***

### headerURL

#### Get Signature

> **get** **headerURL**(): `string`

Defined in: [structures/Game.ts:13](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L13)

(might not exist) large sized header used on the store page

##### Returns

`string`

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`headerURL`](GameInfoBasic.md#headerurl)

***

### iconURL

#### Get Signature

> **get** **iconURL**(): `string`

Defined in: [structures/GameInfoBasic.ts:20](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L20)

tiny app icon

##### Returns

`string`

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`iconURL`](GameInfoBasic.md#iconurl)

***

### logoURL

#### Get Signature

> **get** **logoURL**(): `string`

Defined in: [structures/Game.ts:34](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L34)

(might not exist) transparent game logo

##### Returns

`string`

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`logoURL`](GameInfoBasic.md#logourl)

***

### smallHeaderURL

#### Get Signature

> **get** **smallHeaderURL**(): `string`

Defined in: [structures/Game.ts:19](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L19)

(might not exist) small header image used on user pages

##### Returns

`string`

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`smallHeaderURL`](GameInfoBasic.md#smallheaderurl)

***

### tinyHeaderURL

#### Get Signature

> **get** **tinyHeaderURL**(): `string`

Defined in: [structures/Game.ts:22](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L22)

(might not exist) tiny header image used on app bundles

##### Returns

`string`

#### Inherited from

[`GameInfoBasic`](GameInfoBasic.md).[`tinyHeaderURL`](GameInfoBasic.md#tinyheaderurl)
