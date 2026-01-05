[**steamapi**](../README.md)

***

[steamapi](../README.md) / NewsPost

# Class: NewsPost

Defined in: [structures/NewsPost.ts:1](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L1)

## Constructors

### Constructor

> **new NewsPost**(`data`): `NewsPost`

Defined in: [structures/NewsPost.ts:38](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L38)

#### Parameters

##### data

`any`

#### Returns

`NewsPost`

## Properties

### appID

> **appID**: `number`

Defined in: [structures/NewsPost.ts:33](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L33)

App ID this news pertains to

***

### author

> **author**: `string`

Defined in: [structures/NewsPost.ts:15](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L15)

Name of the post's author

***

### content

> **content**: `string`

Defined in: [structures/NewsPost.ts:18](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L18)

Content of the post

***

### feed

> **feed**: `string`

Defined in: [structures/NewsPost.ts:24](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L24)

Human readable label to be display on feed

***

### feedName

> **feedName**: `string`

Defined in: [structures/NewsPost.ts:27](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L27)

API name of feed this was posted to

***

### feedType

> **feedType**: `number`

Defined in: [structures/NewsPost.ts:30](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L30)

Feed type. Not sure what this is. Seems to always be 1

***

### id

> **id**: `string`

Defined in: [structures/NewsPost.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L3)

ID for this post

***

### publishedTimestamp

> **publishedTimestamp**: `number`

Defined in: [structures/NewsPost.ts:21](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L21)

Unix Timestamp for when the post was published

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [structures/NewsPost.ts:36](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L36)

Tags associated with this post

***

### title

> **title**: `string`

Defined in: [structures/NewsPost.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L6)

Title for this post

***

### url

> **url**: `string`

Defined in: [structures/NewsPost.ts:9](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L9)

Link to this post

***

### urlExternal

> **urlExternal**: `boolean`

Defined in: [structures/NewsPost.ts:12](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L12)

Whether the URL is external

## Accessors

### publishedAt

#### Get Signature

> **get** **publishedAt**(): `Date`

Defined in: [structures/NewsPost.ts:54](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/NewsPost.ts#L54)

Date when this post was published

##### Returns

`Date`
