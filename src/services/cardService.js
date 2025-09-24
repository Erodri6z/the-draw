
const BASE_URL = `${import.meta.env.VITE_API}/api/v1/cards/search?q=`
console.log(BASE_URL)
async function getInfo(name) {
  let search = name.replace(" ", "%20")
  try{
    console.log(`${BASE_URL}${search}`)
    const res = await fetch(`${BASE_URL}${search}`)
    const data = await res.json()
    console.log(data)
    return data
  }catch (error) {
    console.error('Error Getting Card Info:', error.message)
    throw error
  }
}


export {
  getInfo
}