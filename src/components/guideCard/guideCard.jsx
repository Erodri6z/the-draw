import { useState } from "react"
import deck from "../../data/cards"
import DrawnCard from "../drawnCards/drawCard"
import { getInfo } from "../../services/cardService"
import "./guideCard.css"

const GuideCard = () => {
  const [options] = useState(deck)
  const [flipped, setFlipped] = useState(false);
  const [selected, setSelected] = useState(null)

  const handleSelect = async (e) => {
    const chosen = e.target.value
    const cardInfo = await getInfo(chosen)
    console.log("card info ", cardInfo)
    const cardObj = options.find((opt) => opt.name === chosen)
    setSelected({cardObj, cardInfo})
  }

  const handleToggle = () => {
    setFlipped(!flipped)
    
  };

  return (
    <>
    <div className="guide-card">
      <select value={selected?.cardObj.name || ""} onChange={handleSelect} onTouchStart={handleSelect} className="entry">
        <option value={null}>Select One</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
      <div className="guide-info">
        {selected && (
          <>
            <div className={`card-div ${flipped ? "rev" : ""}`}>
              <DrawnCard slug={selected.cardObj} />
            </div>
            <div>
              <button onClick={handleToggle}>Flip</button>
            </div>
            {flipped?
            <div className="text-box">
            <h4 className="bold">Reversed</h4>
              <p>{selected.cardInfo.meaning_rev}</p>
            </div>
          :
            <div className="text-box">
            <h4 className="bold">Upright</h4>
              <p>{selected.cardInfo.meaning_up}</p>
            </div>
          }
          </>
        )}
      </div>
    </div>
    </>
  )
}

export default GuideCard