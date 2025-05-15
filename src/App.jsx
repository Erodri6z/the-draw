import { useState } from 'react'
import deck from './data/cards'

import './App.css'

function App() {
  const [selected, setSelected] = useState([])
  console.log(selected)

  const drawCards = () => {
    let cards = []
    while (cards.length < 3) {
      cards.push(deck[Math.floor(Math.random() * deck.length)])
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
      <button onClick={() => drawCards()}>Click to start</button>
    </div>
    </>
  )
}

export default App
