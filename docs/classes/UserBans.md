[steamapi](../README.md) / UserBans

# Class: UserBans

## Hierarchy

- `default`

  ↳ **`UserBans`**

## Table of contents

### Constructors

- [constructor](UserBans.md#constructor)

### Properties

- [communityBanned](UserBans.md#communitybanned)
- [daysSinceLastBan](UserBans.md#dayssincelastban)
- [economyBan](UserBans.md#economyban)
- [gameBans](UserBans.md#gamebans)
- [steamID](UserBans.md#steamid)
- [vacBanned](UserBans.md#vacbanned)
- [vacBans](UserBans.md#vacbans)

### Accessors

- [profileURL](UserBans.md#profileurl)

## Constructors

### constructor

• **new UserBans**(`data`): [`UserBans`](UserBans.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`UserBans`](UserBans.md)

#### Overrides

User.constructor

#### Defined in

[src/structures/UserBans.ts:26](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBans.ts#L26)

## Properties

### communityBanned

• **communityBanned**: `boolean`

Is this user community banned

#### Defined in

[src/structures/UserBans.ts:5](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBans.ts#L5)

___

### daysSinceLastBan

• **daysSinceLastBan**: `number`

The number of days it has been since the user's last ban

#### Defined in

[src/structures/UserBans.ts:24](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBans.ts#L24)

___

### economyBan

• **economyBan**: `string`

Economy ban status of the user. 'none' means no economy ban.
'probation' means user is on probation.
Not sure what other string values exist

#### Defined in

[src/structures/UserBans.ts:21](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBans.ts#L21)

___

### gameBans

• **gameBans**: `number`

Number of game bans the user has had

#### Defined in

[src/structures/UserBans.ts:14](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBans.ts#L14)

___

### steamID

• **steamID**: `string`

This user's Steam ID

#### Inherited from

User.steamID

#### Defined in

[src/structures/User.ts:3](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/User.ts#L3)

___

### vacBanned

• **vacBanned**: `boolean`

Is this user vac banned

#### Defined in

[src/structures/UserBans.ts:8](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBans.ts#L8)

___

### vacBans

• **vacBans**: `number`

Number of VAC bans the user has had

#### Defined in

[src/structures/UserBans.ts:11](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/UserBans.ts#L11)

## Accessors

### profileURL

• `get` **profileURL**(): `string`

The permalink to this user's profile

#### Returns

`string`

#### Inherited from

User.profileURL

#### Defined in

[src/structures/User.ts:10](https://github.com/xDimGG/node-steamapi/blob/acff462/src/structures/User.ts#L10)
