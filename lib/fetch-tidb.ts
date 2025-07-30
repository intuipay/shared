import { TiDBDataServiceResponse } from "../types";

export async function fetchTidb<T>(
  url: string | URL,
  method: string = 'GET',
  body?: unknown,
  env?: Record<string, string>,
): Promise<T[]> {
  const {
    NODE_ENV,
    TIDB_CLOUD_API_KEY,
    TIDB_CLOUD_ENDPOINT,
  } = env || {};
  const credentials = btoa(TIDB_CLOUD_API_KEY || '');
  url = `${TIDB_CLOUD_ENDPOINT}${url}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Basic ${credentials}`,
      'content-type': 'application/json',
    },
    method,
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  if (!response.ok) {
    if (NODE_ENV !== 'production') {
      console.log('URL', url);
      console.log('Body', body);
    }
    throw new Error(`HTTP error. status: ${response.status}`);
  }

  const result = (await response.json()) as TiDBDataServiceResponse<T>;
  return result.data.rows;
}
