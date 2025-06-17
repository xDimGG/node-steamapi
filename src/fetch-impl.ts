// Uses global fetch if available, otherwise uses node-fetch, allows for support for modern node and serverless environmentsexport 
// export const fetchImpl = typeof fetch !== 'undefined' ? fetch : (await import('node-fetch')).default;

// WORKAROUND BELOW for the module to still work in non-ESM environments. May remove this in 4.x.x
let fetchImpl: typeof fetch | null = null;

async function loadFetchImpl(): Promise<any> {
  if (typeof fetch !== 'undefined') {
    return fetch;
  } else {
    const nodeFetch = await import('node-fetch');
    return nodeFetch.default;
  }
}

export async function lazyFetch(...args: Parameters<typeof fetch>): Promise<Response> {
  if (!fetchImpl) {
    fetchImpl = await loadFetchImpl();
  }

  return fetchImpl!(...args);
}
