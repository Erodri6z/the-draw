import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/openai/reading`

async function getReading(prompt) {
  try{
    const res = await fetch (BASE_URL, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ prompt })
    })
    
    const data = await res.json()
    console.log(data)
    return data.response
  } catch (error) {
    console.error('Error Getting ai reponse:', error.message)
    throw error
  }
}

export {
  getReading
}