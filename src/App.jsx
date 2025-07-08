import { useEffect, useState } from 'react'
import deck from './data/cards'
import { Route, Routes, useNavigate } from 'react-router';
import './App.css'
import * as authService from './services/authService'
import * as openAiService from './services/openAiService'
import Landing from './pages/landing/landing'
import Nav from './components/nav/nav'
import ReadingPage from './pages/readingPage/readingPage'
import Login from './pages/login/login'
import Signup from './pages/signup/signup'
import About from './pages/about/about'
import Footer from './components/footer/footer';

function App() {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [selected, setSelected] = useState([])
  const [prompt, setPrompt] = useState()
  const [response, setResponse] = useState("")
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

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }


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

  const handlePrompt = async ( p ) => {
    const newCards = drawCards()
    setSelected(newCards)
    const finalPrompt = `${p} These are my cards: ${newCards[0].name}, ${newCards[1].name} and ${newCards[2].name}`
    setPrompt(finalPrompt)
    console.log("final prompt : ", finalPrompt)
    let reading = await openAiService.getReading(finalPrompt)
    setResponse(reading)
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

  const isFormComplete = Object.values(spiritualData).every(v => v && v.trim() !== "")

  return (
    <>
    <Nav
    user={user}
    handleLogout={handleLogout}
    />
    <Routes>
      <Route 
      path="/"
      element={
        <Landing 
        user={user}
        />
      }
      />
      <Route
      path='/about'
      element={
        <About />
      }
      />
      <Route
      path="/reading"
        element={
          <ReadingPage
            spiritualData={spiritualData}
            setSpiritualData={setSpiritualData}
            handlePrompt={handlePrompt}
            prompt={prompt}
            selected={selected}
            setSelected={setSelected}
            isFormComplete={isFormComplete}
            response={response}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <Signup 
            handleSignupOrLogin={handleSignupOrLogin} 
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login 
            handleSignupOrLogin={handleSignupOrLogin} 
          />
        }
      />
    </Routes>
    <Footer />
    </>
  )
}

export default App
