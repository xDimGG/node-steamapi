[steamapi](../README.md) / GameInfoBasic

# Class: GameInfoBasic

## Hierarchy

- [`Game`](Game.md)

  ↳ **`GameInfoBasic`**

  ↳↳ [`GameInfo`](GameInfo.md)

## Table of contents

### Constructors

- [constructor](GameInfoBasic.md#constructor)

### Properties

- [icon](GameInfoBasic.md#icon)
- [id](GameInfoBasic.md#id)
- [name](GameInfoBasic.md#name)

### Accessors

- [backgroundURL](GameInfoBasic.md#backgroundurl)
- [coverURL](GameInfoBasic.md#coverurl)
- [headerMediumURL](GameInfoBasic.md#headermediumurl)
- [headerURL](GameInfoBasic.md#headerurl)
- [iconURL](GameInfoBasic.md#iconurl)
- [logoURL](GameInfoBasic.md#logourl)
- [smallHeaderURL](GameInfoBasic.md#smallheaderurl)
- [tinyHeaderURL](GameInfoBasic.md#tinyheaderurl)

## Constructors

### constructor

• **new GameInfoBasic**(`data`): [`GameInfoBasic`](GameInfoBasic.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`GameInfoBasic`](GameInfoBasic.md)

#### Overrides

[Game](Game.md).[constructor](Game.md#constructor)

#### Defined in

[src/structures/GameInfoBasic.ts:12](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L12)

## Properties

### icon

• **icon**: `string`

Hash for this game's icon

#### Defined in

[src/structures/GameInfoBasic.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L10)

___

### id

• **id**: `number`

App ID for this game

#### Inherited from

[Game](Game.md).[id](Game.md#id)

#### Defined in

[src/structures/Game.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L6)

___

### name

• **name**: `string`

Name for this game

#### Defined in

[src/structures/GameInfoBasic.ts:7](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L7)

## Accessors

### backgroundURL

• `get` **backgroundURL**(): `string`

(might not exist) game page background

#### Returns

`string`

#### Inherited from

Game.backgroundURL

#### Defined in

[src/structures/Game.ts:28](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L28)

___

### coverURL

• `get` **coverURL**(): `string`

(might not exist) game cover

#### Returns

`string`

#### Inherited from

Game.coverURL

#### Defined in

[src/structures/Game.ts:31](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L31)

___

### headerMediumURL

• `get` **headerMediumURL**(): `string`

(might not exist) medium sized header image

#### Returns

`string`

#### Inherited from

Game.headerMediumURL

#### Defined in

[src/structures/Game.ts:16](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L16)

___

### headerURL

• `get` **headerURL**(): `string`

(might not exist) large sized header used on the store page

#### Returns

`string`

#### Inherited from

Game.headerURL

#### Defined in

[src/structures/Game.ts:13](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L13)

___

### iconURL

• `get` **iconURL**(): `string`

tiny app icon

#### Returns

`string`

#### Defined in

[src/structures/GameInfoBasic.ts:20](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/GameInfoBasic.ts#L20)

___

### logoURL

• `get` **logoURL**(): `string`

(might not exist) transparent game logo

#### Returns

`string`

#### Inherited from

Game.logoURL

#### Defined in

[src/structures/Game.ts:34](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L34)

___

### smallHeaderURL

• `get` **smallHeaderURL**(): `string`

(might not exist) small header image used on user pages

#### Returns

`string`

#### Inherited from

Game.smallHeaderURL

#### Defined in

[src/structures/Game.ts:19](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L19)

___

### tinyHeaderURL

• `get` **tinyHeaderURL**(): `string`

(might not exist) tiny header image used on app bundles

#### Returns

`string`

#### Inherited from

Game.tinyHeaderURL

#### Defined in

[src/structures/Game.ts:22](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L22)
