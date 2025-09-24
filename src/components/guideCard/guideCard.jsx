import { useState } from "react"
import deck from "../../data/cards"
import DrawnCard from "../drawnCards/drawCard"
import { getInfo } from "../../services/cardService"
import "./guideCard.css"

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
    <div className="guide-card">
      <select value={selected?.cardObj.name || ""} onChange={handleSelect} className="entry">
        {options.map((opt, i) => (
          <option key={i} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
      <div className="guide-info">
        {selected && (
          <>
            <DrawnCard slug={selected.cardObj} />
            <h3>{selected.cardObj.name}</h3>
            <h4>Upright: {selected.cardInfo.meaning_up}</h4>
            <h4>Reversed: {selected.cardInfo.meaning_rev}</h4>
          </>
        )}
      </div>
    </div>
    </>
  )
}

export default GuideCard