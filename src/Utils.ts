import nodeFetch from 'node-fetch';

const reg = /<h1>(.*)<\/h1>/;

/**
 * 
 * @param url 
 * @param options 
 * @returns 
 */
export async function fetch(url: string, options: any): Promise<any> {
	const res = await nodeFetch(url, options);
	if (res.status === 400) {
		const data = await res.text();
		throw new Error(data.match(reg)?.[1] || data);
	}

	if (res.status !== 200) throw new Error(res.statusText);

	return res.json();
};

/**
 * Converts
 * * [{ name: 'a', value: 'b' }, { name: 'b', value: 'c' }]
 *
 * To
 * * { a: 'b', b: 'c' }
 * @param arr The array to make an object
 * @param val The name of the value
 * @param key The name of the key
 * @param convertBooleans Whether to convert values to booleans
 * @returns An object consisting of the keys and values
*/
export function toObject(
	arr: any[],
	key: string,
	val: string,
	convertBooleans = false,
) {
	const object: { [key: string]: string | boolean } = {};
	for (const obj of arr)
		object[obj[key]] = convertBooleans ? Boolean(obj[val]) : obj[val];

	return object;
};
