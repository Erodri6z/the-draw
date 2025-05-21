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

  const handleChange = () => {

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
      <select 
        name="relationship"
        handleChange={handleChange}
      >
        <option>Single</option>
        <option>Taken</option>
        <option>It's Complicated</option>
      </select>
      </div>
      <div>
      <label>How Do You Feel</label>
      <select name="" id="">
        <option></option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
      </div>
      <div>
      <label>Personal Goal</label>
      <select name="" id="">
      <option>Make Money</option>
      <option>Better Career</option>
      <option>Finding Love</option>
      <option>Letting Go Of The Past</option>
      <option>Finding Purpose</option>
      <option>Opening My Heart</option>
      <option>Healing</option>
      <option>Trusting Myself</option>
      <option>Connecting with the Universe</option>
      <option>Reclaiming Myself</option>
      <option>Living More Authentically</option>
      </select>
      </div>
    </form>

    </>
  )
}

export default Questions