[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserSummary

# Class: UserSummary

Defined in: [structures/UserSummary.ts:14](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L14)

## Extends

- `default`

## Constructors

### Constructor

> **new UserSummary**(`data`): `UserSummary`

Defined in: [structures/UserSummary.ts:69](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L69)

#### Parameters

##### data

`any`

#### Returns

`UserSummary`

#### Overrides

`User.constructor`

## Properties

### allowsComments

> **allowsComments**: `boolean`

Defined in: [structures/UserSummary.ts:31](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L31)

If this user allows comments on their profile

***

### avatar

> **avatar**: `object`

Defined in: [structures/UserSummary.ts:16](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L16)

The user's avatar in various sizes

#### hash

> **hash**: `string`

#### large

> **large**: `string`

#### medium

> **medium**: `string`

#### small

> **small**: `string`

***

### cityID?

> `optional` **cityID**: `string`

Defined in: [structures/UserSummary.ts:67](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L67)

The user's city ID if set and visible

***

### countryCode?

> `optional` **countryCode**: `string`

Defined in: [structures/UserSummary.ts:61](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L61)

The user's country code if set and visible

***

### createdTimestamp?

> `optional` **createdTimestamp**: `number`

Defined in: [structures/UserSummary.ts:40](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L40)

Unix Timestamp when the profile was created if visible

***

### gameID?

> `optional` **gameID**: `number`

Defined in: [structures/UserSummary.ts:49](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L49)

The game the user is currently playing if any

***

### gameName?

> `optional` **gameName**: `string`

Defined in: [structures/UserSummary.ts:52](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L52)

The name of the game the user is currently playing if any

***

### gameServerID?

> `optional` **gameServerID**: `string`

Defined in: [structures/UserSummary.ts:58](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L58)

The SteamID of the game server the user is currently playing on if any

***

### gameServerIP?

> `optional` **gameServerIP**: `string`

Defined in: [structures/UserSummary.ts:55](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L55)

The IP:PORT of the game server the user is currently playing on if any

***

### lastLogOffTimestamp?

> `optional` **lastLogOffTimestamp**: `number`

Defined in: [structures/UserSummary.ts:37](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L37)

Unix Timestamp when the user last logged off

***

### nickname

> **nickname**: `string`

Defined in: [structures/UserSummary.ts:34](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L34)

The nickname this user has set

***

### personaState

> **personaState**: [`UserPersonaState`](../enumerations/UserPersonaState.md)

Defined in: [structures/UserSummary.ts:25](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L25)

The user's persona state. Always 0 if profile is private

***

### personaStateFlags

> **personaStateFlags**: `number`

Defined in: [structures/UserSummary.ts:28](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L28)

Flags for personState. Seems to always be 0

***

### primaryGroupID?

> `optional` **primaryGroupID**: `string`

Defined in: [structures/UserSummary.ts:46](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L46)

The user's primary group ID if set and visible

***

### realName?

> `optional` **realName**: `string`

Defined in: [structures/UserSummary.ts:43](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L43)

The user's real name if set and visible

***

### stateCode?

> `optional` **stateCode**: `string`

Defined in: [structures/UserSummary.ts:64](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L64)

The user's state code if set and visible

***

### steamID

> **steamID**: `string`

Defined in: [structures/User.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/User.ts#L3)

This user's Steam ID

#### Inherited from

`User.steamID`

***

### url

> **url**: `string`

Defined in: [structures/UserSummary.ts:19](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L19)

Link to the user's profile

***

### visible

> **visible**: `boolean`

Defined in: [structures/UserSummary.ts:22](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L22)

Is this user's profile visible to you

## Accessors

### createdAt

#### Get Signature

> **get** **createdAt**(): `undefined` \| `Date`

Defined in: [structures/UserSummary.ts:102](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L102)

Date when this user's account was created

##### Returns

`undefined` \| `Date`

***

### lastLogOffAt

#### Get Signature

> **get** **lastLogOffAt**(): `undefined` \| `Date`

Defined in: [structures/UserSummary.ts:107](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserSummary.ts#L107)

Date when this user last logged off

##### Returns

`undefined` \| `Date`

***

### profileURL

#### Get Signature

> **get** **profileURL**(): `string`

Defined in: [structures/User.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/User.ts#L10)

The permalink to this user's profile

##### Returns

`string`

#### Inherited from

`User.profileURL`
