export interface CacheMap<K, V> {
	get(key: K): V | undefined;
	set(key: K, value: V): V;
}

interface CacheValue<V> {
	expiresAt: number;
	data: V;
}

export class MemoryCacheMap<K, V> implements CacheMap<K, V> {
	private ttl;
	private map;

	constructor(ttl: number) {
		this.ttl = ttl;
		this.map = new Map<K, CacheValue<V>>();
	}

	get(key: K): V | undefined {
		const val = this.map.get(key);
		if (val && val.expiresAt >= Date.now()) {
			this.map.delete(key);
			return;
		}

		return val?.data;
	}

	set(key: K, value: V): V {
		this.map.set(key, {
			expiresAt: Date.now() + this.ttl,
			data: value,
		});

		return value;
	}
}
