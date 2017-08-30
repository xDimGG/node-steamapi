const fetch = require('node-fetch');
const { parse } = require('url');
const { version } = require('../../package.json');

class API {
    constructor(data) {
        if (!data) console.log('no key provided | some methods may not work | go get one > https://goo.gl/DfNy5s');
        this.key = data;
        this.headers = {
            'User-Agent': `SteamAPI/${version} https://github.com/lloti/steampowered-api`
        };
    }
}

module.exports = API;