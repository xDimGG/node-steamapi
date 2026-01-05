[**steamapi**](../README.md)

***

[steamapi](../README.md) / GameDetails

# Class: GameDetails

Defined in: [structures/GameDetails.ts:1](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L1)

## Constructors

### Constructor

> **new GameDetails**(`data`): `GameDetails`

Defined in: [structures/GameDetails.ts:163](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L163)

#### Parameters

##### data

`any`

#### Returns

`GameDetails`

## Properties

### aboutTheGame

> **aboutTheGame**: `string`

Defined in: [structures/GameDetails.ts:36](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L36)

Detailed HTML from main body of the store page
NOTE: This appears to be the same as detailedDescription

***

### achievements

> **achievements**: `object`

Defined in: [structures/GameDetails.ts:140](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L140)

Number of achievements and array of achievements from the right column of the store page

#### highlighted

> **highlighted**: `object`[]

#### total

> **total**: `number`

***

### background

> **background**: `string`

Defined in: [structures/GameDetails.ts:149](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L149)

Background image URL scaled for store page

***

### backgroundRaw

> **backgroundRaw**: `string`

Defined in: [structures/GameDetails.ts:152](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L152)

Raw background image URL

***

### capsuleImage

> **capsuleImage**: `string`

Defined in: [structures/GameDetails.ts:48](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L48)

URL to the capsule image 231x87px

***

### capsuleImagev5

> **capsuleImagev5**: `string`

Defined in: [structures/GameDetails.ts:51](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L51)

URL to the capsule image 184x69px

***

### categories

> **categories**: `object`[]

Defined in: [structures/GameDetails.ts:115](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L115)

Array of Steam categories with IDs and short descriptions

#### description

> **description**: `string`

#### id

> **id**: `number`

***

### contentDescriptors

> **contentDescriptors**: `object`

Defined in: [structures/GameDetails.ts:155](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L155)

Unsure what this is. It has always been an empty array of ids and null notes for games tested

#### ids

> **ids**: `number`[]

#### notes

> **notes**: `null` \| `string`

***

### controllerSupport

> **controllerSupport**: `string`

Defined in: [structures/GameDetails.ts:21](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L21)

Enum indicating level of support. E.G. "full"
NOTE: I'm not sure what the possible values are

***

### detailedDescription

> **detailedDescription**: `string`

Defined in: [structures/GameDetails.ts:30](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L30)

Detailed HTML from main body of the store page
NOTE: This appears to be the same as aboutTheGame

***

### developers

> **developers**: `string`[]

Defined in: [structures/GameDetails.ts:69](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L69)

Array of developer names

***

### dlc

> **dlc**: `number`[]

Defined in: [structures/GameDetails.ts:24](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L24)

List of DLC app IDs for this game

***

### genres

> **genres**: `object`[]

Defined in: [structures/GameDetails.ts:121](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L121)

Array of Steam genres with IDs and short descriptions
NOTE: ID is a string for genres rather than a number like most other ID in Steam

#### description

> **description**: `string`

#### id

> **id**: `string`

***

### headerImage

> **headerImage**: `string`

Defined in: [structures/GameDetails.ts:45](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L45)

URL to the header image

***

### id

> **id**: `number`

Defined in: [structures/GameDetails.ts:9](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L9)

App ID for this game

***

### isFree

> **isFree**: `boolean`

Defined in: [structures/GameDetails.ts:15](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L15)

If this game is free

***

### legalNotice

> **legalNotice**: `string`

Defined in: [structures/GameDetails.ts:66](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L66)

Legal notice for the game

***

### linuxRequirements

> **linuxRequirements**: `object`

Defined in: [structures/GameDetails.ts:63](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L63)

HTML specs for minimum and recommended Linux hardware

#### minimum

> **minimum**: `string`

#### recommended

> **recommended**: `string`

***

### macRequirements

> **macRequirements**: `object`

Defined in: [structures/GameDetails.ts:60](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L60)

HTML specs for minimum and recommended Mac hardware

#### minimum

> **minimum**: `string`

#### recommended

> **recommended**: `string`

***

### metacritic

> **metacritic**: `object`

Defined in: [structures/GameDetails.ts:112](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L112)

Metacritic score and website URL

#### score

> **score**: `number`

#### url

> **url**: `string`

***

### movies

> **movies**: `object`[]

Defined in: [structures/GameDetails.ts:127](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L127)

Array of movie information including thumbnail and video URLs

#### highlight

> **highlight**: `boolean`

#### id

> **id**: `number`

#### mp4

> **mp4**: `object`

##### mp4.480

> **480**: `string`

##### mp4.max

> **max**: `string`

#### name

> **name**: `string`

#### thumbnail

> **thumbnail**: `string`

#### webm

> **webm**: `object`

##### webm.480

> **480**: `string`

##### webm.max

> **max**: `string`

***

### name

> **name**: `string`

Defined in: [structures/GameDetails.ts:6](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L6)

Display name of the app

***

### packageGroups

> **packageGroups**: `object`[]

Defined in: [structures/GameDetails.ts:88](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L88)

Array of package groups containing purchase details for each package

#### description

> **description**: `string`

#### displayType

> **displayType**: `number`

#### isRecurringSubscription

> **isRecurringSubscription**: `string`

#### name

> **name**: `string`

#### saveText

> **saveText**: `string`

#### selectionText

> **selectionText**: `string`

#### subs

> **subs**: `object`[]

#### title

> **title**: `string`

***

### packages

> **packages**: `number`[]

Defined in: [structures/GameDetails.ts:85](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L85)

Array of IDs for the purchasing options of the game

***

### pcRequirements

> **pcRequirements**: `object`

Defined in: [structures/GameDetails.ts:57](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L57)

HTML specs for minimum and recommended PC hardware

#### minimum

> **minimum**: `string`

#### recommended

> **recommended**: `string`

***

### platforms

> **platforms**: `object`

Defined in: [structures/GameDetails.ts:109](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L109)

Supported platforms

#### linux

> **linux**: `boolean`

#### mac

> **mac**: `boolean`

#### windows

> **windows**: `boolean`

***

### priceOverview

> **priceOverview**: `object`

Defined in: [structures/GameDetails.ts:75](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L75)

Price overview including discounts. Calculated in the given currency when requesting app details

#### currency

> **currency**: `string`

#### discountPercent

> **discountPercent**: `number`

#### final

> **final**: `number`

#### finalFormatted

> **finalFormatted**: `string`

#### initial

> **initial**: `number`

#### initialFormatted

> **initialFormatted**: `string`

***

### publishers

> **publishers**: `string`[]

Defined in: [structures/GameDetails.ts:72](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L72)

Array of publisher names

***

### ratings

> **ratings**: `any`

Defined in: [structures/GameDetails.ts:161](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L161)

Ratings for different rating systems
NOTE: These appear to have a different object structure based on the game

***

### recommendations

> **recommendations**: `object`

Defined in: [structures/GameDetails.ts:137](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L137)

Number of positive reviews

#### total

> **total**: `number`

***

### releaseDate

> **releaseDate**: `object`

Defined in: [structures/GameDetails.ts:143](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L143)

Release date information

#### coming\_soon

> **coming\_soon**: `boolean`

#### date

> **date**: `string`

***

### requiredAge

> **requiredAge**: `number`

Defined in: [structures/GameDetails.ts:12](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L12)

Age restriction for purchasing

***

### screenshots

> **screenshots**: `object`[]

Defined in: [structures/GameDetails.ts:124](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L124)

Array of screenshot thumbnail and full path URLs

#### id

> **id**: `number`

#### path\_full

> **path\_full**: `string`

#### path\_thumbnail

> **path\_thumbnail**: `string`

***

### shortDescription

> **shortDescription**: `string`

Defined in: [structures/GameDetails.ts:39](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L39)

Short description of the game under the game banner on the store page

***

### supportedLanguages

> **supportedLanguages**: `string`

Defined in: [structures/GameDetails.ts:42](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L42)

Supported languages in game

***

### supportInfo

> **supportInfo**: `object`

Defined in: [structures/GameDetails.ts:146](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L146)

Support information including URL and email

#### email

> **email**: `string`

#### url

> **url**: `string`

***

### type

> **type**: `string`

Defined in: [structures/GameDetails.ts:3](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L3)

Type of app. Usually "game"

***

### website

> **website**: `string`

Defined in: [structures/GameDetails.ts:54](https://github.com/xDimGG/node-steamapi/blob/f4d6bcd21f6389481b7da485ce2cb9bddf197216/src/structures/GameDetails.ts#L54)

URL to the game's website
