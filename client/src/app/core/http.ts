const baseUrl = '/api/v1';

enum FetchMethod {
  DELETE = 'DELETE',
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT'
}

function transformOptions(options?: Request): RequestInit {
  let body;
  const headers = new Headers({
    'Content-Type': 'application/json'
  });

  if (options) {
    const contextBody = options.body;
    const contextHeaders = options.headers;

    if (contextBody) {
      body = contextBody instanceof FormData ? contextBody
        : JSON.stringify(contextBody);
    }

    if (contextHeaders) {
      Object.entries(contextHeaders).forEach(([name, value]) =>
        headers.append(name, value)
      );
    }

    for (const header in headers) {
      if (headers.get(header) === null) {
        headers.delete(header);
      }
    }
  }

  return {
    body,
    headers
  };
}

async function customFetch<T>(
  method: FetchMethod,
  url: string,
  options?: Request
): Promise<T> {
  const { body, headers } = transformOptions(options);

  const response: Response = await fetch(baseUrl + url, {
    method,
    headers,
    ...(body && { body })
  });

  if (!response.ok) {
    const { status, statusText } = response;
    throw Error(status + statusText);
  }

  return await response.json();
}

async function httpGet<T>(url: string): Promise<T> {
  return customFetch<T>(FetchMethod.GET, url);
}

async function httpDelete<T>(url: string): Promise<T> {
  return customFetch<T>(FetchMethod.DELETE, url);
}

async function httpPut<T>(url: string, options: Request): Promise<T> {
  return await customFetch<T>(FetchMethod.PUT, url, options);
}

async function httpPost<T>(url: string, options: Request): Promise<T> {
  return customFetch<T>(FetchMethod.POST, url, options);
}

export const http = {
  get: httpGet,
  post: httpPost,
  update: httpPut,
  delete: httpDelete
};