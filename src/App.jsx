import { useState } from 'react'
import deck from './data/cards'

import './App.css'
import Questions from './components/questions/questions'
import DrawnCard from './components/drawnCards/drawCard'

function App() {
  const [selected, setSelected] = useState([])
  console.log(selected)

  const drawCards = () => {
    let cards = []
    while (cards.length < 3) {
      let card = deck[Math.floor(Math.random() * deck.length)]
      if (!cards.includes(card)) {
        if (Math.floor(Math.random() < 0.5) === 0) {
          let flipped = `${card.name} (Upsidedown)`
          cards.push({
            name: flipped,
            inage: card.image})
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
      {
        selected.map((c) => 
          <>
            <DrawnCard slug={c.image} />
            <li>{c.name}</li>
          </>
        )
      }
      <button onClick={() => drawCards()}>Click to start</button>
    </div>
    <Questions />
    </>
  )
}

export default App
