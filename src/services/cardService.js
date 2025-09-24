
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/v1/cards/search?q=`

async function getInfo(name) {
  let search = name.replace(" ", "20%")
  console.log(search)
  try{
    const res = await fetch (BASE_URL, search)
    const data = await res.json()
    console.log(data)
  }catch (error) {
    console.error('Error Getting Card Info:', error.message)
    throw error
  }
}


export {
  getInfo
}