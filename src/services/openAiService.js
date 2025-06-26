import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/openai/reading`

async function getReading(prompt) {
  const res = await fetch (BASE_URL, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': "application/json"
    },
    body: JSON.stringify({ prompt })
  })

  const data = await response.json()
  return data.response
}