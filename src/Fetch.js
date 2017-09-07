const http = require('http');
const https = require('https');
const { parse } = require('url');

module.exports = (url, headers) => {
  const fetch = url.startsWith('https') ? https.get : http.get;
  const options = parse(url, true);
  options.headers = headers;
  return new Promise((resolve, reject) => {
    fetch(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.once('end', () => {
        if (res.statusCode === 500) return reject('internal server error');
        if (res.statusCode === 403) return reject('invalid key');
        if (res.statusCode === 400) return reject('invalid parameters');
        if (res.statusCode !== 200) return reject(res.statusMessage);
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch(error) {
          reject(error);
        }
      });
    });
  });
};