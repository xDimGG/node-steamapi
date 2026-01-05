[**steamapi**](../README.md)

***

[steamapi](../README.md) / GetGameNewsOptions

# Interface: GetGameNewsOptions

Defined in: [SteamAPI.ts:115](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L115)

## Properties

### count?

> `optional` **count**: `number`

Defined in: [SteamAPI.ts:123](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L123)

Number of posts to retrieve (default 20)

***

### endDate?

> `optional` **endDate**: `Date`

Defined in: [SteamAPI.ts:120](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L120)

Retrieve posts earlier than this date

***

### feeds?

> `optional` **feeds**: `string`[]

Defined in: [SteamAPI.ts:126](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L126)

List of feed names to return news for

***

### maxContentLength?

> `optional` **maxContentLength**: `number`

Defined in: [SteamAPI.ts:117](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L117)

Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [SteamAPI.ts:129](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/SteamAPI.ts#L129)

List of tags to filter by (e.g. 'patchnotes')
