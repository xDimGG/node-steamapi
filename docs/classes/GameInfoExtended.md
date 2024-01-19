[steamapi](../README.md) / GameInfoExtended

# Class: GameInfoExtended

## Hierarchy

- [`GameInfo`](GameInfo.md)

  ↳ **`GameInfoExtended`**

## Table of contents

### Constructors

- [constructor](GameInfoExtended.md#constructor)

### Properties

- [capsuleFilename](GameInfoExtended.md#capsulefilename)
- [descriptorIDs](GameInfoExtended.md#descriptorids)
- [hasCommunityVisibleStats](GameInfoExtended.md#hascommunityvisiblestats)
- [hasDLC](GameInfoExtended.md#hasdlc)
- [hasLeaderboards](GameInfoExtended.md#hasleaderboards)
- [hasMarket](GameInfoExtended.md#hasmarket)
- [hasWorkshop](GameInfoExtended.md#hasworkshop)
- [icon](GameInfoExtended.md#icon)
- [id](GameInfoExtended.md#id)
- [name](GameInfoExtended.md#name)
- [sortName](GameInfoExtended.md#sortname)

### Accessors

- [backgroundURL](GameInfoExtended.md#backgroundurl)
- [coverURL](GameInfoExtended.md#coverurl)
- [headerMediumURL](GameInfoExtended.md#headermediumurl)
- [headerURL](GameInfoExtended.md#headerurl)
- [iconURL](GameInfoExtended.md#iconurl)
- [logoURL](GameInfoExtended.md#logourl)
- [smallHeaderURL](GameInfoExtended.md#smallheaderurl)
- [tinyHeaderURL](GameInfoExtended.md#tinyheaderurl)

## Constructors

### constructor

• **new GameInfoExtended**(`data`): [`GameInfoExtended`](GameInfoExtended.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GameInfoExtended`](GameInfoExtended.md)

#### Overrides

[GameInfo](GameInfo.md).[constructor](GameInfo.md#constructor)

#### Defined in

[src/structures/GameInfoExtended.ts:19](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoExtended.ts#L19)

## Properties

### capsuleFilename

• `Optional` **capsuleFilename**: `string`

Game's capsule filename. Not sure what this means

#### Defined in

[src/structures/GameInfoExtended.ts:14](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoExtended.ts#L14)

___

### descriptorIDs

• `Optional` **descriptorIDs**: `number`[]

Descriptor IDs. Not sure what this means. Usually undefined

#### Inherited from

[GameInfo](GameInfo.md).[descriptorIDs](GameInfo.md#descriptorids)

#### Defined in

[src/structures/GameInfo.ts:11](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfo.ts#L11)

___

### hasCommunityVisibleStats

• **hasCommunityVisibleStats**: `boolean`

If this game has community visible stats

#### Inherited from

[GameInfo](GameInfo.md).[hasCommunityVisibleStats](GameInfo.md#hascommunityvisiblestats)

#### Defined in

[src/structures/GameInfo.ts:5](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfo.ts#L5)

___

### hasDLC

• **hasDLC**: `boolean`

If this game has DLC

#### Defined in

[src/structures/GameInfoExtended.ts:11](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoExtended.ts#L11)

___

### hasLeaderboards

• **hasLeaderboards**: `boolean`

If this game has leaderboards

#### Inherited from

[GameInfo](GameInfo.md).[hasLeaderboards](GameInfo.md#hasleaderboards)

#### Defined in

[src/structures/GameInfo.ts:8](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfo.ts#L8)

___

### hasMarket

• **hasMarket**: `boolean`

If this game has a market

#### Defined in

[src/structures/GameInfoExtended.ts:8](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoExtended.ts#L8)

___

### hasWorkshop

• **hasWorkshop**: `boolean`

If this game has a workshop

#### Defined in

[src/structures/GameInfoExtended.ts:5](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoExtended.ts#L5)

___

### icon

• **icon**: `string`

Hash for this game's icon

#### Inherited from

[GameInfo](GameInfo.md).[icon](GameInfo.md#icon)

#### Defined in

[src/structures/GameInfoBasic.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L10)

___

### id

• **id**: `number`

App ID for this game

#### Inherited from

[GameInfo](GameInfo.md).[id](GameInfo.md#id)

#### Defined in

[src/structures/Game.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L6)

___

### name

• **name**: `string`

Name for this game

#### Inherited from

[GameInfo](GameInfo.md).[name](GameInfo.md#name)

#### Defined in

[src/structures/GameInfoBasic.ts:7](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L7)

___

### sortName

• `Optional` **sortName**: `string`

Name that this game is sorted by

#### Defined in

[src/structures/GameInfoExtended.ts:17](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoExtended.ts#L17)

## Accessors

### backgroundURL

• `get` **backgroundURL**(): `string`

(might not exist) game page background

#### Returns

`string`

#### Inherited from

GameInfo.backgroundURL

#### Defined in

[src/structures/Game.ts:28](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L28)

___

### coverURL

• `get` **coverURL**(): `string`

(might not exist) game cover

#### Returns

`string`

#### Inherited from

GameInfo.coverURL

#### Defined in

[src/structures/Game.ts:31](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L31)

___

### headerMediumURL

• `get` **headerMediumURL**(): `string`

(might not exist) medium sized header image

#### Returns

`string`

#### Inherited from

GameInfo.headerMediumURL

#### Defined in

[src/structures/Game.ts:16](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L16)

___

### headerURL

• `get` **headerURL**(): `string`

(might not exist) large sized header used on the store page

#### Returns

`string`

#### Inherited from

GameInfo.headerURL

#### Defined in

[src/structures/Game.ts:13](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L13)

___

### iconURL

• `get` **iconURL**(): `string`

tiny app icon

#### Returns

`string`

#### Inherited from

GameInfo.iconURL

#### Defined in

[src/structures/GameInfoBasic.ts:20](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L20)

___

### logoURL

• `get` **logoURL**(): `string`

(might not exist) transparent game logo

#### Returns

`string`

#### Inherited from

GameInfo.logoURL

#### Defined in

[src/structures/Game.ts:34](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L34)

___

### smallHeaderURL

• `get` **smallHeaderURL**(): `string`

(might not exist) small header image used on user pages

#### Returns

`string`

#### Inherited from

GameInfo.smallHeaderURL

#### Defined in

[src/structures/Game.ts:19](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L19)

___

### tinyHeaderURL

• `get` **tinyHeaderURL**(): `string`

(might not exist) tiny header image used on app bundles

#### Returns

`string`

#### Inherited from

GameInfo.tinyHeaderURL

#### Defined in

[src/structures/Game.ts:22](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L22)
