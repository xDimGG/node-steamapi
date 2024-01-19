[steamapi](../README.md) / GetGameNewsOptions

# Interface: GetGameNewsOptions

## Table of contents

### Properties

- [count](GetGameNewsOptions.md#count)
- [endDate](GetGameNewsOptions.md#enddate)
- [feeds](GetGameNewsOptions.md#feeds)
- [maxContentLength](GetGameNewsOptions.md#maxcontentlength)
- [tags](GetGameNewsOptions.md#tags)

## Properties

### count

• `Optional` **count**: `number`

Number of posts to retrieve (default 20)

#### Defined in

[src/SteamAPI.ts:118](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L118)

___

### endDate

• `Optional` **endDate**: `Date`

Retrieve posts earlier than this date

#### Defined in

[src/SteamAPI.ts:115](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L115)

___

### feeds

• `Optional` **feeds**: `string`[]

List of feed names to return news for

#### Defined in

[src/SteamAPI.ts:121](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L121)

___

### maxContentLength

• `Optional` **maxContentLength**: `number`

Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit

#### Defined in

[src/SteamAPI.ts:112](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L112)

___

### tags

• `Optional` **tags**: `string`[]

List of tags to filter by (e.g. 'patchnotes')

#### Defined in

[src/SteamAPI.ts:124](https://github.com/xDimGG/node-steamapi/blob/acff462/src/SteamAPI.ts#L124)
