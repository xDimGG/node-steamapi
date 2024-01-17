/**
 * Convert
 * * [{ name: 'a', value: 'b' }, { name: 'b', value: 'c' }]
 * To
 * * { a: 'b', b: 'c' }
 * @param {Object[]} arr The array to objectify
 * @param {string} [val=value] The name of the value
 * @param {string} [key=name] The name of the key
 * @param {string} [boolean=false] Whether or not to convert to boolean
 * @returns {Object} An object consisting of the names and values
*/
module.exports = (arr, val = 'value', key = 'name', boolean = false) => {
	const object = {};
	for (const obj of arr)
		object[obj[key]] = boolean ? Boolean(obj[val]) : obj[val];

	return object;
};
