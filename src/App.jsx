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
    let newPrompt = `Hi, I identify as ${spiritualData.gender}, I'm a ${spiritualData.horoscope} and relationship wise I am ${spiritualData.relationship}. Lately I have been feeling ${spiritualData.emotion}. My personal goal is ${spiritualData.goal}`
    setPrompt(newPrompt)
  }, [spiritualData])

  const reset = () => {
    setPrompt("")
    setSpiritualData({
      horoscope: "",
      relationship: "",
      emotion: "",
      goal: "",
      gender: "",
    })
  }

  const handlePrompt = ( p ) => {
    const newCards = drawCards()
    setSelected(newCards)
    const finalPrompt = `${p} These are my cards: ${newCards[0].name}, ${newCards[1].name} and ${newCards[2].name}`
    setPrompt(finalPrompt)
    console.log("final prompt : ", finalPrompt)

    reset()
  }

  console.log(`Hi, I identify as ${spiritualData.gender}, I'm a ${spiritualData.horoscope} and relationship wise I am ${spiritualData.relationship}. Lately I have been feeling ${spiritualData.emotion}. My personal goal is ${spiritualData.goal}`)


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
    return cards
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
    <button onClick={() => handlePrompt(prompt)}>Click to start</button>
    <Questions setSpiritualData={setSpiritualData} spiritualData={spiritualData}/>
    </>
  )
}

export default App
