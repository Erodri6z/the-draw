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
    console.log(date)
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDate().toString().padStart(2, "0")
    const formatted = `${month}-${day}`

    return zodiacSigns.find(({ start, end }) => {
      return formatted >= start && formatted <= end
    })?.sign || "Unknown"
  }



  return (
    <>
    <form>
    <div>
      <label>Date of Birth</label>
      <input type="date" id="dob"/>
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