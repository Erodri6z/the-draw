import { useState } from "react"
import deck from "../../data/cards"

const GuideCard = () => {
  const [options] = useState(deck)
  const [selected, setSelected] = useState()
  return (
    <>
    <div>
      <h1>Card</h1>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {options.map((opt, i) => (
          <option key={i} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
      {/* <div>
        <img src={card.image} alt="card" />
        <div>
          <h4>{data.name}</h4>
          <p>{data.meaning_up}</p>
          <p>{data.meaning_rev}</p>
        </div>
      </div> */}
    </div>
    </>
  )
}

export default GuideCard