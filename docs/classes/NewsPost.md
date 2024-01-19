[steamapi](../README.md) / NewsPost

# Class: NewsPost

## Table of contents

### Constructors

- [constructor](NewsPost.md#constructor)

### Properties

- [appID](NewsPost.md#appid)
- [author](NewsPost.md#author)
- [content](NewsPost.md#content)
- [feed](NewsPost.md#feed)
- [feedName](NewsPost.md#feedname)
- [feedType](NewsPost.md#feedtype)
- [id](NewsPost.md#id)
- [publishedTimestamp](NewsPost.md#publishedtimestamp)
- [tags](NewsPost.md#tags)
- [title](NewsPost.md#title)
- [url](NewsPost.md#url)
- [urlExternal](NewsPost.md#urlexternal)

### Accessors

- [publishedAt](NewsPost.md#publishedat)

## Constructors

### constructor

• **new NewsPost**(`data`): [`NewsPost`](NewsPost.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`NewsPost`](NewsPost.md)

#### Defined in

[src/structures/NewsPost.ts:38](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L38)

## Properties

### appID

• **appID**: `number`

App ID this news pertains to

#### Defined in

[src/structures/NewsPost.ts:33](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L33)

___

### author

• **author**: `string`

Name of the post's author

#### Defined in

[src/structures/NewsPost.ts:15](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L15)

___

### content

• **content**: `string`

Content of the post

#### Defined in

[src/structures/NewsPost.ts:18](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L18)

___

### feed

• **feed**: `string`

Human readable label to be display on feed

#### Defined in

[src/structures/NewsPost.ts:24](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L24)

___

### feedName

• **feedName**: `string`

API name of feed this was posted to

#### Defined in

[src/structures/NewsPost.ts:27](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L27)

___

### feedType

• **feedType**: `number`

Feed type. Not sure what this is. Seems to always be 1

#### Defined in

[src/structures/NewsPost.ts:30](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L30)

___

### id

• **id**: `string`

ID for this post

#### Defined in

[src/structures/NewsPost.ts:3](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L3)

___

### publishedTimestamp

• **publishedTimestamp**: `number`

Unix Timestamp for when the post was published

#### Defined in

[src/structures/NewsPost.ts:21](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L21)

___

### tags

• `Optional` **tags**: `string`[]

Tags associated with this post

#### Defined in

[src/structures/NewsPost.ts:36](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L36)

___

### title

• **title**: `string`

Title for this post

#### Defined in

[src/structures/NewsPost.ts:6](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L6)

___

### url

• **url**: `string`

Link to this post

#### Defined in

[src/structures/NewsPost.ts:9](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L9)

___

### urlExternal

• **urlExternal**: `boolean`

Whether the URL is external

#### Defined in

[src/structures/NewsPost.ts:12](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L12)

## Accessors

### publishedAt

• `get` **publishedAt**(): `Date`

Date when this post was published

#### Returns

`Date`

#### Defined in

[src/structures/NewsPost.ts:54](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/NewsPost.ts#L54)
