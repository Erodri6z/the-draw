import { useEffect, useState } from "react"

const questions = () => {

  const [spiritualData, setSpiritualData] = useState({
    horoscope: "",
    relationship: "",
    emotion: "",
    goal: ""
  })

  const getHoroscope = () => {

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