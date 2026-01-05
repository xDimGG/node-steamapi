[**steamapi**](../README.md)

***

[steamapi](../README.md) / GameInfoExtended

# Class: GameInfoExtended

Defined in: [structures/GameInfoExtended.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoExtended.ts#L3)

## Extends

- [`GameInfo`](GameInfo.md)

## Constructors

### Constructor

> **new GameInfoExtended**(`data`): `GameInfoExtended`

Defined in: [structures/GameInfoExtended.ts:19](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoExtended.ts#L19)

#### Parameters

##### data

`any`

#### Returns

`GameInfoExtended`

#### Overrides

[`GameInfo`](GameInfo.md).[`constructor`](GameInfo.md#constructor)

## Properties

### capsuleFilename?

> `optional` **capsuleFilename**: `string`

Defined in: [structures/GameInfoExtended.ts:14](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoExtended.ts#L14)

Game's capsule filename. Not sure what this means

***

### descriptorIDs?

> `optional` **descriptorIDs**: `number`[]

Defined in: [structures/GameInfo.ts:11](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfo.ts#L11)

Descriptor IDs. Not sure what this means. Usually undefined

#### Inherited from

[`GameInfo`](GameInfo.md).[`descriptorIDs`](GameInfo.md#descriptorids)

***

### hasCommunityVisibleStats

> **hasCommunityVisibleStats**: `boolean`

Defined in: [structures/GameInfo.ts:5](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfo.ts#L5)

If this game has community visible stats

#### Inherited from

[`GameInfo`](GameInfo.md).[`hasCommunityVisibleStats`](GameInfo.md#hascommunityvisiblestats)

***

### hasDLC

> **hasDLC**: `boolean`

Defined in: [structures/GameInfoExtended.ts:11](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoExtended.ts#L11)

If this game has DLC

***

### hasLeaderboards

> **hasLeaderboards**: `boolean`

Defined in: [structures/GameInfo.ts:8](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfo.ts#L8)

If this game has leaderboards

#### Inherited from

[`GameInfo`](GameInfo.md).[`hasLeaderboards`](GameInfo.md#hasleaderboards)

***

### hasMarket

> **hasMarket**: `boolean`

Defined in: [structures/GameInfoExtended.ts:8](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoExtended.ts#L8)

If this game has a market

***

### hasWorkshop

> **hasWorkshop**: `boolean`

Defined in: [structures/GameInfoExtended.ts:5](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoExtended.ts#L5)

If this game has a workshop

***

### icon

> **icon**: `string`

Defined in: [structures/GameInfoBasic.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L10)

Hash for this game's icon

#### Inherited from

[`GameInfo`](GameInfo.md).[`icon`](GameInfo.md#icon)

***

### id

> **id**: `number`

Defined in: [structures/Game.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L6)

App ID for this game

#### Inherited from

[`GameInfo`](GameInfo.md).[`id`](GameInfo.md#id)

***

### name

> **name**: `string`

Defined in: [structures/GameInfoBasic.ts:7](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L7)

Name for this game

#### Inherited from

[`GameInfo`](GameInfo.md).[`name`](GameInfo.md#name)

***

### sortName?

> `optional` **sortName**: `string`

Defined in: [structures/GameInfoExtended.ts:17](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoExtended.ts#L17)

Name that this game is sorted by

## Accessors

### backgroundURL

#### Get Signature

> **get** **backgroundURL**(): `string`

Defined in: [structures/Game.ts:28](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L28)

(might not exist) game page background

##### Returns

`string`

#### Inherited from

[`GameInfo`](GameInfo.md).[`backgroundURL`](GameInfo.md#backgroundurl)

***

### coverURL

#### Get Signature

> **get** **coverURL**(): `string`

Defined in: [structures/Game.ts:31](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L31)

(might not exist) game cover

##### Returns

`string`

#### Inherited from

[`GameInfo`](GameInfo.md).[`coverURL`](GameInfo.md#coverurl)

***

### headerMediumURL

#### Get Signature

> **get** **headerMediumURL**(): `string`

Defined in: [structures/Game.ts:16](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L16)

(might not exist) medium sized header image

##### Returns

`string`

#### Inherited from

[`GameInfo`](GameInfo.md).[`headerMediumURL`](GameInfo.md#headermediumurl)

***

### headerURL

#### Get Signature

> **get** **headerURL**(): `string`

Defined in: [structures/Game.ts:13](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L13)

(might not exist) large sized header used on the store page

##### Returns

`string`

#### Inherited from

[`GameInfo`](GameInfo.md).[`headerURL`](GameInfo.md#headerurl)

***

### iconURL

#### Get Signature

> **get** **iconURL**(): `string`

Defined in: [structures/GameInfoBasic.ts:20](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameInfoBasic.ts#L20)

tiny app icon

##### Returns

`string`

#### Inherited from

[`GameInfo`](GameInfo.md).[`iconURL`](GameInfo.md#iconurl)

***

### logoURL

#### Get Signature

> **get** **logoURL**(): `string`

Defined in: [structures/Game.ts:34](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L34)

(might not exist) transparent game logo

##### Returns

`string`

#### Inherited from

[`GameInfo`](GameInfo.md).[`logoURL`](GameInfo.md#logourl)

***

### smallHeaderURL

#### Get Signature

> **get** **smallHeaderURL**(): `string`

Defined in: [structures/Game.ts:19](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L19)

(might not exist) small header image used on user pages

##### Returns

`string`

#### Inherited from

[`GameInfo`](GameInfo.md).[`smallHeaderURL`](GameInfo.md#smallheaderurl)

***

### tinyHeaderURL

#### Get Signature

> **get** **tinyHeaderURL**(): `string`

Defined in: [structures/Game.ts:22](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/Game.ts#L22)

(might not exist) tiny header image used on app bundles

##### Returns

`string`

#### Inherited from

[`GameInfo`](GameInfo.md).[`tinyHeaderURL`](GameInfo.md#tinyheaderurl)
