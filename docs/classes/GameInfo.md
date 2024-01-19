[steamapi](../README.md) / GameInfo

# Class: GameInfo

## Hierarchy

- [`GameInfoBasic`](GameInfoBasic.md)

  ↳ **`GameInfo`**

  ↳↳ [`GameInfoExtended`](GameInfoExtended.md)

## Table of contents

### Constructors

- [constructor](GameInfo.md#constructor)

### Properties

- [descriptorIDs](GameInfo.md#descriptorids)
- [hasCommunityVisibleStats](GameInfo.md#hascommunityvisiblestats)
- [hasLeaderboards](GameInfo.md#hasleaderboards)
- [icon](GameInfo.md#icon)
- [id](GameInfo.md#id)
- [name](GameInfo.md#name)

### Accessors

- [backgroundURL](GameInfo.md#backgroundurl)
- [coverURL](GameInfo.md#coverurl)
- [headerMediumURL](GameInfo.md#headermediumurl)
- [headerURL](GameInfo.md#headerurl)
- [iconURL](GameInfo.md#iconurl)
- [logoURL](GameInfo.md#logourl)
- [smallHeaderURL](GameInfo.md#smallheaderurl)
- [tinyHeaderURL](GameInfo.md#tinyheaderurl)

## Constructors

### constructor

• **new GameInfo**(`data`): [`GameInfo`](GameInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GameInfo`](GameInfo.md)

#### Overrides

[GameInfoBasic](GameInfoBasic.md).[constructor](GameInfoBasic.md#constructor)

#### Defined in

[src/structures/GameInfo.ts:13](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfo.ts#L13)

## Properties

### descriptorIDs

• `Optional` **descriptorIDs**: `number`[]

Descriptor IDs. Not sure what this means. Usually undefined

#### Defined in

[src/structures/GameInfo.ts:11](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfo.ts#L11)

___

### hasCommunityVisibleStats

• **hasCommunityVisibleStats**: `boolean`

If this game has community visible stats

#### Defined in

[src/structures/GameInfo.ts:5](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfo.ts#L5)

___

### hasLeaderboards

• **hasLeaderboards**: `boolean`

If this game has leaderboards

#### Defined in

[src/structures/GameInfo.ts:8](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfo.ts#L8)

___

### icon

• **icon**: `string`

Hash for this game's icon

#### Inherited from

[GameInfoBasic](GameInfoBasic.md).[icon](GameInfoBasic.md#icon)

#### Defined in

[src/structures/GameInfoBasic.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L10)

___

### id

• **id**: `number`

App ID for this game

#### Inherited from

[GameInfoBasic](GameInfoBasic.md).[id](GameInfoBasic.md#id)

#### Defined in

[src/structures/Game.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L6)

___

### name

• **name**: `string`

Name for this game

#### Inherited from

[GameInfoBasic](GameInfoBasic.md).[name](GameInfoBasic.md#name)

#### Defined in

[src/structures/GameInfoBasic.ts:7](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L7)

## Accessors

### backgroundURL

• `get` **backgroundURL**(): `string`

(might not exist) game page background

#### Returns

`string`

#### Inherited from

GameInfoBasic.backgroundURL

#### Defined in

[src/structures/Game.ts:28](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L28)

___

### coverURL

• `get` **coverURL**(): `string`

(might not exist) game cover

#### Returns

`string`

#### Inherited from

GameInfoBasic.coverURL

#### Defined in

[src/structures/Game.ts:31](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L31)

___

### headerMediumURL

• `get` **headerMediumURL**(): `string`

(might not exist) medium sized header image

#### Returns

`string`

#### Inherited from

GameInfoBasic.headerMediumURL

#### Defined in

[src/structures/Game.ts:16](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L16)

___

### headerURL

• `get` **headerURL**(): `string`

(might not exist) large sized header used on the store page

#### Returns

`string`

#### Inherited from

GameInfoBasic.headerURL

#### Defined in

[src/structures/Game.ts:13](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L13)

___

### iconURL

• `get` **iconURL**(): `string`

tiny app icon

#### Returns

`string`

#### Inherited from

GameInfoBasic.iconURL

#### Defined in

[src/structures/GameInfoBasic.ts:20](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L20)

___

### logoURL

• `get` **logoURL**(): `string`

(might not exist) transparent game logo

#### Returns

`string`

#### Inherited from

GameInfoBasic.logoURL

#### Defined in

[src/structures/Game.ts:34](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L34)

___

### smallHeaderURL

• `get` **smallHeaderURL**(): `string`

(might not exist) small header image used on user pages

#### Returns

`string`

#### Inherited from

GameInfoBasic.smallHeaderURL

#### Defined in

[src/structures/Game.ts:19](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L19)

___

### tinyHeaderURL

• `get` **tinyHeaderURL**(): `string`

(might not exist) tiny header image used on app bundles

#### Returns

`string`

#### Inherited from

GameInfoBasic.tinyHeaderURL

#### Defined in

[src/structures/Game.ts:22](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L22)
