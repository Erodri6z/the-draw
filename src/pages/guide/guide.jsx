import { useState } from "react"
import deck from "../../data/cards"

const GuidePage = () => {
  const [options] = useState(deck)
  const [selected, setSelected] = useState(["","",""])
  
  console.log(deck)

  return (
    <>
      <h1>This is gonna be the guide page</h1>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {options.map((opt, i) => (
          <option key={i} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  )
}

export default GuidePage