[steamapi](../README.md) / Game

# Class: Game

## Hierarchy

- **`Game`**

  ↳ [`GameInfoBasic`](GameInfoBasic.md)

## Table of contents

### Constructors

- [constructor](Game.md#constructor)

### Properties

- [id](Game.md#id)

### Accessors

- [backgroundURL](Game.md#backgroundurl)
- [coverURL](Game.md#coverurl)
- [headerMediumURL](Game.md#headermediumurl)
- [headerURL](Game.md#headerurl)
- [logoURL](Game.md#logourl)
- [smallHeaderURL](Game.md#smallheaderurl)
- [tinyHeaderURL](Game.md#tinyheaderurl)

## Constructors

### constructor

• **new Game**(`data`): [`Game`](Game.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`Game`](Game.md)

#### Defined in

[src/structures/Game.ts:8](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L8)

## Properties

### id

• **id**: `number`

App ID for this game

#### Defined in

[src/structures/Game.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L6)

## Accessors

### backgroundURL

• `get` **backgroundURL**(): `string`

(might not exist) game page background

#### Returns

`string`

#### Defined in

[src/structures/Game.ts:28](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L28)

___

### coverURL

• `get` **coverURL**(): `string`

(might not exist) game cover

#### Returns

`string`

#### Defined in

[src/structures/Game.ts:31](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L31)

___

### headerMediumURL

• `get` **headerMediumURL**(): `string`

(might not exist) medium sized header image

#### Returns

`string`

#### Defined in

[src/structures/Game.ts:16](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L16)

___

### headerURL

• `get` **headerURL**(): `string`

(might not exist) large sized header used on the store page

#### Returns

`string`

#### Defined in

[src/structures/Game.ts:13](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L13)

___

### logoURL

• `get` **logoURL**(): `string`

(might not exist) transparent game logo

#### Returns

`string`

#### Defined in

[src/structures/Game.ts:34](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L34)

___

### smallHeaderURL

• `get` **smallHeaderURL**(): `string`

(might not exist) small header image used on user pages

#### Returns

`string`

#### Defined in

[src/structures/Game.ts:19](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L19)

___

### tinyHeaderURL

• `get` **tinyHeaderURL**(): `string`

(might not exist) tiny header image used on app bundles

#### Returns

`string`

#### Defined in

[src/structures/Game.ts:22](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/Game.ts#L22)
