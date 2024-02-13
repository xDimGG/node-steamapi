import nodeFetch from 'node-fetch';

const reg = /<h1>(.*)<\/h1>/;

/**
 * 
 * @param url 
 * @param options 
 * @returns 
 */
export async function fetch(url: string, options: any): Promise<any> {
	// console.log(url);
	const res = await nodeFetch(url, options);
	if (res.status === 400) {
		const data = await res.text();
		throw new Error(data.match(reg)?.[1] || data);
	}

	if (res.status !== 200) throw new Error(res.statusText);

	return res.json();
};

// App IDs are positive integers that are divisible by 10
const reID = /^\d{17}$/;

export function assertApp(apps: number | number[]): void {
	if (!Array.isArray(apps)) apps = [apps];
	if (apps.some(app => !(app > 0 && app % 1 === 0)))
		throw new TypeError('Invalid app ID provided');
}

// User IDs are 17 digit numbers
export function assertID(ids: string | string[]): void {
	if (!Array.isArray(ids)) ids = [ids];
	if (ids.some(id => !reID.test(id)))
		throw new TypeError('Invalid user ID provided');
}
