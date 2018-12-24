const { createDeflate, createGunzip } = require('zlib');
const { parse } = require('url');
const https = require('https');
const http = require('http');
const reg = /<h1>(.*)<\/h1>/;

module.exports = (url, { headers } = {}) => {
	const fetch = url.startsWith('https') ? https.get : http.get;
	const options = Object.assign(
		parse(url),
		{ headers: Object.assign({ 'Accept-Encoding': 'gzip, deflate' }, headers) }
	);

	return new Promise((resolve, reject) => {
		fetch(options, res => {
			const ce = res.headers['content-encoding'];

			let data = '';
			let op = res;

			if (ce === 'deflate') res.pipe(op = createDeflate());
			if (ce === 'gzip') res.pipe(op = createGunzip());

			op.on('data', chunk => data += chunk);
			op.once('error', reject);
			op.once('end', () => {
				if (res.statusCode === 400) return reject(new Error(reg.test(data) ? data.match(reg)[1] : data));
				if (res.statusCode !== 200) return reject(new Error(res.statusMessage));
				try {
					resolve(JSON.parse(data));
				} catch (_) {
					reject(new Error(data));
				}
			});
		});
	});
};