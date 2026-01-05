[**steamapi**](../README.md)

***

[steamapi](../README.md) / UserBans

# Class: UserBans

Defined in: [structures/UserBans.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBans.ts#L3)

## Extends

- `default`

## Constructors

### Constructor

> **new UserBans**(`data`): `UserBans`

Defined in: [structures/UserBans.ts:26](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBans.ts#L26)

#### Parameters

##### data

`any`

#### Returns

`UserBans`

#### Overrides

`User.constructor`

## Properties

### communityBanned

> **communityBanned**: `boolean`

Defined in: [structures/UserBans.ts:5](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBans.ts#L5)

Is this user community banned

***

### daysSinceLastBan

> **daysSinceLastBan**: `number`

Defined in: [structures/UserBans.ts:24](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBans.ts#L24)

The number of days it has been since the user's last ban

***

### economyBan

> **economyBan**: `string`

Defined in: [structures/UserBans.ts:21](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBans.ts#L21)

Economy ban status of the user. 'none' means no economy ban.
'probation' means user is on probation.
Not sure what other string values exist

***

### gameBans

> **gameBans**: `number`

Defined in: [structures/UserBans.ts:14](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBans.ts#L14)

Number of game bans the user has had

***

### steamID

> **steamID**: `string`

Defined in: [structures/User.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/User.ts#L3)

This user's Steam ID

#### Inherited from

`User.steamID`

***

### vacBanned

> **vacBanned**: `boolean`

Defined in: [structures/UserBans.ts:8](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBans.ts#L8)

Is this user vac banned

***

### vacBans

> **vacBans**: `number`

Defined in: [structures/UserBans.ts:11](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/UserBans.ts#L11)

Number of VAC bans the user has had

## Accessors

### profileURL

#### Get Signature

> **get** **profileURL**(): `string`

Defined in: [structures/User.ts:10](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/User.ts#L10)

The permalink to this user's profile

##### Returns

`string`

#### Inherited from

`User.profileURL`
