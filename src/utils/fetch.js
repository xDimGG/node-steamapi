const fetch = require('node-fetch');
const reg = /<h1>(.*)<\/h1>/;

module.exports = async (url, options) => {
	const res = await fetch(url, options);
	if (res.status === 400) {
		const data = await res.text();
		throw new Error(reg.test(data) ? data.match(reg)[1] : data);
	}
	if (res.status !== 200) throw new Error(res.statusText);

	return res.json();
};
