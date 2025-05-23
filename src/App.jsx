import { useState } from 'react'
import deck from './data/cards'
import questions from './components/questions/questions'

import './App.css'
import Questions from './components/questions/questions'

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
      <img src="https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg" alt="https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg" />
    <div>
      {
        selected.map((c) => 
          <li>{c}</li>
        )
      }
      <button onClick={() => drawCards()}>Click to start</button>
    </div>
    <Questions />
    </>
  )
}

export default App
