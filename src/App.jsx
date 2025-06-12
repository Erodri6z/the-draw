import { useEffect, useState } from 'react'
import deck from './data/cards'

import './App.css'
import Questions from './components/questions/questions'
import DrawnCard from './components/drawnCards/drawCard'

function App() {
  const [selected, setSelected] = useState([])
  const [prompt, setPrompt] = useState()
  const [spiritualData, setSpiritualData] = useState({
  horoscope: "",
  relationship: "",
  emotion: "",
  goal: "",
  gender: "",
  })

  useEffect(() => {
    let prompt = `Hi, I identify as ${spiritualData.gender}, I'm a ${spiritualData.horoscope} and relationship wise I am ${spiritualData.relationship}. Lately I have been feeling ${spiritualData.emotion}. My personal goal is ${spiritualData.goal}`
    setPrompt(prompt)
  }, [spiritualData])

  

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
            image: card.image})
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
    <div className='card-display'>
      {
        selected.map((c) => 
          <>
            <DrawnCard slug={c} key={c.name}/>
          </>
        )
      }
    </div>
    <button onClick={() => drawCards()}>Click to start</button>
    <Questions setSpiritualData={setSpiritualData} spiritualData={spiritualData}/>
    </>
  )
}

export default App
