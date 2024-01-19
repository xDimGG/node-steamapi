[steamapi](../README.md) / UserSummary

# Class: UserSummary

## Hierarchy

- `default`

  ↳ **`UserSummary`**

## Table of contents

### Constructors

- [constructor](UserSummary.md#constructor)

### Properties

- [allowsComments](UserSummary.md#allowscomments)
- [avatar](UserSummary.md#avatar)
- [cityID](UserSummary.md#cityid)
- [countryCode](UserSummary.md#countrycode)
- [createdTimestamp](UserSummary.md#createdtimestamp)
- [gameID](UserSummary.md#gameid)
- [gameName](UserSummary.md#gamename)
- [gameServerID](UserSummary.md#gameserverid)
- [gameServerIP](UserSummary.md#gameserverip)
- [lastLogOffTimestamp](UserSummary.md#lastlogofftimestamp)
- [nickname](UserSummary.md#nickname)
- [personaState](UserSummary.md#personastate)
- [personaStateFlags](UserSummary.md#personastateflags)
- [primaryGroupID](UserSummary.md#primarygroupid)
- [realName](UserSummary.md#realname)
- [stateCode](UserSummary.md#statecode)
- [steamID](UserSummary.md#steamid)
- [url](UserSummary.md#url)
- [visible](UserSummary.md#visible)

### Accessors

- [createdAt](UserSummary.md#createdat)
- [lastLogOffAt](UserSummary.md#lastlogoffat)
- [profileURL](UserSummary.md#profileurl)

## Constructors

### constructor

• **new UserSummary**(`data`): [`UserSummary`](UserSummary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserSummary`](UserSummary.md)

#### Overrides

User.constructor

#### Defined in

[src/structures/UserSummary.ts:69](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L69)

## Properties

### allowsComments

• **allowsComments**: `boolean`

If this user allows comments on their profile

#### Defined in

[src/structures/UserSummary.ts:31](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L31)

___

### avatar

• **avatar**: `Object`

The user's avatar in varous sizes

#### Type declaration

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `large` | `string` |
| `medium` | `string` |
| `small` | `string` |

#### Defined in

[src/structures/UserSummary.ts:16](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L16)

___

### cityID

• `Optional` **cityID**: `string`

The user's city ID if set and visible

#### Defined in

[src/structures/UserSummary.ts:67](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L67)

___

### countryCode

• `Optional` **countryCode**: `string`

The user's country code if set and visible

#### Defined in

[src/structures/UserSummary.ts:61](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L61)

___

### createdTimestamp

• `Optional` **createdTimestamp**: `number`

Unix Timestamp when the profile was created if visible

#### Defined in

[src/structures/UserSummary.ts:40](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L40)

___

### gameID

• `Optional` **gameID**: `number`

The game the user is currently playing if any

#### Defined in

[src/structures/UserSummary.ts:49](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L49)

___

### gameName

• `Optional` **gameName**: `string`

The name of the game the user is currently playing if any

#### Defined in

[src/structures/UserSummary.ts:52](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L52)

___

### gameServerID

• `Optional` **gameServerID**: `string`

The SteamID of the game server the user is currently playing on if any

#### Defined in

[src/structures/UserSummary.ts:58](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L58)

___

### gameServerIP

• `Optional` **gameServerIP**: `string`

The IP:PORT of the game server the user is currently playing on if any

#### Defined in

[src/structures/UserSummary.ts:55](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L55)

___

### lastLogOffTimestamp

• `Optional` **lastLogOffTimestamp**: `number`

Unix Timestamp when the user last logged off

#### Defined in

[src/structures/UserSummary.ts:37](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L37)

___

### nickname

• **nickname**: `string`

The nickname this user has set

#### Defined in

[src/structures/UserSummary.ts:34](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L34)

___

### personaState

• **personaState**: [`UserPersonaState`](../enums/UserPersonaState.md)

The user's persona state. Always 0 if profile is private

#### Defined in

[src/structures/UserSummary.ts:25](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L25)

___

### personaStateFlags

• **personaStateFlags**: `number`

Flags for personState. Seems to always be 0

#### Defined in

[src/structures/UserSummary.ts:28](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L28)

___

### primaryGroupID

• `Optional` **primaryGroupID**: `string`

The user's primary group ID if set and visible

#### Defined in

[src/structures/UserSummary.ts:46](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L46)

___

### realName

• `Optional` **realName**: `string`

The user's real name if set and visible

#### Defined in

[src/structures/UserSummary.ts:43](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L43)

___

### stateCode

• `Optional` **stateCode**: `string`

The user's state code if set and visible

#### Defined in

[src/structures/UserSummary.ts:64](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L64)

___

### steamID

• **steamID**: `string`

This user's Steam ID

#### Inherited from

User.steamID

#### Defined in

[src/structures/User.ts:3](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/User.ts#L3)

___

### url

• **url**: `string`

Link to the user's profile

#### Defined in

[src/structures/UserSummary.ts:19](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L19)

___

### visible

• **visible**: `boolean`

Is this user's profile visible to you

#### Defined in

[src/structures/UserSummary.ts:22](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L22)

## Accessors

### createdAt

• `get` **createdAt**(): `undefined` \| `Date`

Date when this user's account was created

#### Returns

`undefined` \| `Date`

#### Defined in

[src/structures/UserSummary.ts:102](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L102)

___

### lastLogOffAt

• `get` **lastLogOffAt**(): `undefined` \| `Date`

Date when this user last logged off

#### Returns

`undefined` \| `Date`

#### Defined in

[src/structures/UserSummary.ts:107](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserSummary.ts#L107)

___

### profileURL

• `get` **profileURL**(): `string`

The permalink to this user's profile

#### Returns

`string`

#### Inherited from

User.profileURL

#### Defined in

[src/structures/User.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/User.ts#L10)
