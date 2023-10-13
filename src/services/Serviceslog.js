export const BASE_URL = 'http://192.168.2.41:8059/'

export async function apiRequestlog(link, method, form, token) {
  const url = BASE_URL + link
  let headers = {
    Accept: 'application/json',
    'Content-type': 'application/json;charset=UTF-8',
  }
  let body = JSON.stringify(form)

  if (form instanceof FormData) {
    headers = {
      Accept: 'application/json',
    }
    body = form
  }

  if (token) {
    document.cookie = `access_token=${token};path=/`
    headers = { ...headers, Authorization: `Bearer ${token}` }
  }

  const request = new Request(url, {
    mode: 'cors',
    method: method,
    headers: headers,
    body,
  })

  try {
    const resp = await fetch(request)

    if (!resp.ok) {
      // Handle non-2xx responses here, for example:
      if (resp.status === 401) {
        // Unauthorized, redirect to the login page or do something else
      }
      throw new Error(`Request failed with status ${resp.status}`)
    }

    return await resp.json()
  } catch (error) {
    // Handle network errors and other exceptions
    console.error('Request error:', error)
    throw error
  }
}
