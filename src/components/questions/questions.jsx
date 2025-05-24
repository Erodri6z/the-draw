import { useEffect, useState } from "react"
import zodiacSigns from "../../data/horoscopes"

const Questions = () => {

  const [spiritualData, setSpiritualData] = useState({
    horoscope: "",
    relationship: "",
    emotion: "",
    goal: "",
    gender: "",
  })

  useEffect(() => {
    if (!spiritualData.gender) {
      setGender("Non-Binary");
    }
  }, [])

  console.log(spiritualData)

  const getHoroscope = (dateString) => {
    const date = new Date(dateString)
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = (date.getDate() + 1).toString().padStart(2, "0")
    const formatted = `${month}-${day}`
    console.log(formatted)

    return zodiacSigns.find(({ start, end }) => {
      return formatted >= start && formatted <= end
    })?.sign || "Unknown"
  }

  const handleDob = (e) => {
    setSpiritualData({
      ...spiritualData,
      horoscope : getHoroscope(e.target.value)
    })
  }

  const setGender = (g) => {
    if (spiritualData.gender !== g){
      setSpiritualData({
        ...spiritualData,
        gender : g
      })
    }
  }

  const handleChange = (e) => {
    setSpiritualData({...spiritualData,
      [e.target.name] : e.target.value
    })
  }

  return (
    <>
    <div>
      <h2>{spiritualData.horoscope}</h2>
    </div>
      <label>Gender</label>
      <br />
      <button onClick={() => setGender("Male")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>
        </svg>
      </button>
      <button onClick={() => setGender("Non-Binary")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-ambiguous" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"/>
        </svg>
      </button>
      <button onClick={() => setGender("Female")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"/>
        </svg> 
      </button>
    <form>
    <div>
      <label>Date of Birth</label>
      <input type="date" id="dob" name="dob" onChange={handleDob}/>
      </div>
      <div>
      <label>Relationship Status</label>
      <select 
        name="relationship"
        onChange={handleChange}
      >
        <option value="">Select One</option>
        <option value="in a relationship">Taken</option>
        <option value="single">Single</option>
        <option value="well, it's complicated">It's Complicated</option>
      </select>
      </div>
      <div>
      <label>How Do You Feel</label>
      <select 
      name="emotion"
      onChange={handleChange}>
        <option value="">Select One</option>
        <option value="joyful">Joyful</option>
        <option value="anxious">Anxious</option>
        <option value="hopeful">Hopeful</option>
        <option value="lonely">Lonely</option>
        <option value="burned out">Burned Out</option>
        <option value="depressed">Depressed</option>
        <option value="lost">Lost</option>
        <option value="nostalgic">Nostalgic</option>
        <option value="angry">Angry</option>
      </select>
      </div>
      <div>
      <label>Personal Goal</label>
      <select name="goal"
      onChange={handleChange}>
        <option value="">Select One</option>
        <option value="1">Make Money</option>
        <option value="2">Better Career</option>
        <option value="3">Finding Love</option>
        <option value="4">Letting Go Of The Past</option>
        <option value="5">Finding Purpose</option>
        <option value="6">Opening My Heart</option>
        <option value="7">Healing</option>
        <option value="8">Trusting Myself</option>
        <option value="9">Connecting with the Universe</option>
        <option value="10">Reclaiming Myself</option>
        <option value="11">Living More Authentically</option>
      </select>
      </div>
    </form>
    </>
  )
}

export default Questions