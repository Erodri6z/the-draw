import { useEffect, useState } from "react"
import zodiacSigns from "../../data/horoscopes"

const Questions = () => {

  const [spiritualData, setSpiritualData] = useState({
    horoscope: "",
    relationship: "",
    emotion: "",
    goal: ""
  })

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
    <form>
    <div>
      <label>Gender</label>
      <button>Male</button>
      <button>Female</button>
      <button>Other</button>
      <label>Date of Birth</label>
      <input type="date" id="dob" name="dob" onChange={handleDob}/>
      </div>
      <div>
      <label>Relationship Status</label>
      <select 
        name="relationship"
        handleChange={handleChange}
      >
        <option value="in a relationship">Taken</option>
        <option value="single">Single</option>
        <option value="well, it's complicated">It's Complicated</option>
      </select>
      </div>
      <div>
      <label>How Do You Feel</label>
      <select name="emotion" >
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
      <select name="goal">
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