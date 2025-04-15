[**steamapi**](../README.md)

***

[steamapi](../README.md) / GetGameNewsOptions

# Interface: GetGameNewsOptions

Defined in: [SteamAPI.ts:114](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L114)

## Properties

### count?

> `optional` **count**: `number`

Defined in: [SteamAPI.ts:122](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L122)

Number of posts to retrieve (default 20)

***

### endDate?

> `optional` **endDate**: `Date`

Defined in: [SteamAPI.ts:119](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L119)

Retrieve posts earlier than this date

***

### feeds?

> `optional` **feeds**: `string`[]

Defined in: [SteamAPI.ts:125](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L125)

List of feed names to return news for

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

Defined in: [SteamAPI.ts:116](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L116)

Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [SteamAPI.ts:128](https://github.com/xDimGG/node-steamapi/blob/581c07afeb4ac3b12f9edf652025117d15d662af/src/SteamAPI.ts#L128)

List of tags to filter by (e.g. 'patchnotes')
