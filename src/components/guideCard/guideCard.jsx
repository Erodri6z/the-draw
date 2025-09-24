import { useState } from "react"
import deck from "../../data/cards"
import { getInfo } from "../../services/cardService"

const GuideCard = () => {
  const [options] = useState(deck)
  const [selected, setSelected] = useState(null)

    const handleSelect = async (e) => {
    const chosen = e.target.value
    const cardInfo = await getInfo(chosen)
    console.log("card info ", cardInfo)
    const cardObj = options.find((opt) => opt.name === chosen)
    setSelected({cardObj, cardInfo})
  }

  return (
    <>
    <div>
      <h1>Card</h1>
      <select value={selected?.cardObj.name || ""} onChange={handleSelect}>
        {options.map((opt, i) => (
          <option key={i} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
      <div>
        {
          selected?
          <h3>{selected.cardObj.name}</h3>
          :
          <h3>name here</h3>
        }
      </div>
    </div>
    </>
  )
}

export default GuideCard