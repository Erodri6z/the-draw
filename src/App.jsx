import { useState } from 'react'
import deck from './data/cards'

import './App.css'

function App() {
  const [selected, setSelected] = useState([])
  console.log(selected)

  const drawCards = () => {
    let cards = []
    while (cards.length < 3) {
      let card = deck[Math.floor(Math.random() * deck.length)]
      if (!cards.includes(card)) {
        if (Math.floor(Math.random() < 0.5) === 0) {
          let flipped = `${card}(Upsidedown)`
          cards.push(flipped)
        } else {
          cards.push(card)
        }
      }
    }
    setSelected(cards)
    console.log("cards selected", cards)
  }

  return (
    <>
    <div>
      <h2>
        this is gonna be home page
      </h2>
      {
        selected.map((c) => 
          <li>{c}</li>
        )
      }
      <button onClick={() => drawCards()}>Click to start</button>
    </div>
    </>
  )
}

export default App
