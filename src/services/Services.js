export const BASE_URL = 'http://192.168.2.66:887'

export async function apiRequest(link, method, form, token, responseType) {
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

  if (responseType === 'file') {
    return await resp.blob() //ApiResponse(resp.status, data)
  } else {
    return await resp.json()
  }
}

// function ApiResponse(status, data) {
//   return {
//     status,
//     body: data,
//   }
// }

// // Define the base URL
// const baseURL = 'http://192.168.2.66:887'

// // Define the API endpoints
// export const generateFM1000 = async (requestData) => {
//   const endpoint = `${baseURL}/GenerateFM1000`
//   try {
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestData),
//     })

//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }

//     return await response.blob()
//   } catch (error) {
//     console.error('API Request Error:', error)
//     throw error
//   }
// }

// export const generateBilanActif = async (requestData) => {
//   const endpoint = `${baseURL}/GenerateBilanActif`
//   try {
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestData),
//     })

//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }

//     return await response.blob()
//   } catch (error) {
//     console.error('API Request Error:', error)
//     throw error
//   }
// }

// export const generateBilanPassif = async (requestData) => {
//   const endpoint = `${baseURL}/GenerateBilanPassif`
//   try {
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestData),
//     })

//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }

//     return await response.blob()
//   } catch (error) {
//     console.error('API Request Error:', error)
//     throw error
//   }
// }

// export const GenerateCompteDeResultatProduit = async (requestData) => {
//   const endpoint = `${baseURL}/GenerateCompteDeResultatProduit`
//   try {
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestData),
//     })

//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }

//     return await response.blob()
//   } catch (error) {
//     console.error('API Request Error:', error)
//     throw error
//   }
// }

// export const GenerateCompteDeResultatCharges = async (requestData) => {
//   const endpoint = `${baseURL}/GenerateCompteDeResultatCharges`
//   try {
//     const response = await fetch(endpoint, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestData),
//     })

//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }

//     return await response.blob()
//   } catch (error) {
//     console.error('API Request Error:', error)
//     throw error
//   }
// }

// Define other API endpoints in a similar manner
