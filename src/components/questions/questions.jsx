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


  return (
    <>
    <div>
      <h2>{spiritualData.horoscope}</h2>
    </div>
    <form>
    <div>
      <label>Date of Birth</label>
      <input type="date" id="dob" name="dob" onChange={handleDob}/>
      </div>
      <div>
      <label>Relationship Status</label>
      <input type="selection"/>
      </div>
      <div>
      <label>How Do You Feel</label>
      <input type="text"/>
      </div>
      <div>
      <label>Personal Goal</label>
      <input type="text"/>
      </div>
    </form>

    </>
  )
}

export default Questions