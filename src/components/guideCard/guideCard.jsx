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
            <h4 className="bold">Upright</h4>
            <div className="text-box">
              <p>{selected.cardInfo.meaning_up}</p>
            </div>
            <h4 className="bold">Reversed</h4>
            <div className="text-box">
              <p>{selected.cardInfo.meaning_rev}</p>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  )
}

export default GuideCard