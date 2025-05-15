import { useState } from 'react'
import deck from './data/cards'

import './App.css'

function App() {
  const [selected, setSelected] = useState([])

  const drawCards = () => {
    
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
