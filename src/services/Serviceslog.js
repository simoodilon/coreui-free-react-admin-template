export const BASE_URL = 'http://192.168.2.41:8059/'

export async function apiRequestlog(link, method, form, token) {
  const url = BASE_URL + link
  let headers = {
    Accept: 'application/json',
    'Content-type': 'application/json;charset=UTF-8',
  }
  let body = JSON.stringify(form)

  console.log(body)
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

  console.log(request)
  const resp = await fetch(request)
  // const data = await resp.json()

  return await resp.blob() //ApiResponse(resp.status, data)
}
