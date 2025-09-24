
const BASE_URL = `${import.meta.env.VITE_API}/api/v1/cards/search?q=`


async function getInfo(name) {
  const search = name.replace(" ", "%20")
  try{
    console.log(`${BASE_URL}${search}`)
    const res = await fetch(`${BASE_URL}${search}`)
    const data = await res.json()
    const info = data.cards.find((card) => card.name === name)
    console.log(info)
    return info
  }catch (error) {
    console.error('Error Getting Card Info:', error.message)
    throw error
  }
}


export {
  getInfo
}