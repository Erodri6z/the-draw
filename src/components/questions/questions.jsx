import { useEffect, useState } from "react"
import zodiacSigns from "../../data/horoscopes"

const Questions = ({setSpiritualData, spiritualData}) => {
  
  useEffect(() => {
    if (!spiritualData.gender) {
      setGender("Non-Binary")
    }
  }, [])

  useEffect(() => {
    if (spiritualData.horoscope){
      setStarSign(spiritualData.horoscope)
    }
  }, [spiritualData.horoscope])

  let prompt = `Hi, I identify as ${spiritualData.gender}, I'm a ${spiritualData.horoscope} and relationship wise I am ${spiritualData.relationship}. Lately I have been feeling ${spiritualData.emotion}. My personal goal is ${spiritualData.goal}`

  console.log(spiritualData)
  console.log("prompt = ", prompt)

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


  const setStarSign = (sign) => {
    const container = document.getElementById("star-sign-con")
    let svg = ""

    console.log('youre a ',sign)
    switch (sign) {
      case "Capricorn":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-capricorn"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4a3 3 0 0 1 3 3v9" /><path d="M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3" /><path d="M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>`
        break
      case "Aquarius":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-aquarius"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 10l3 -3l3 3l3 -3l3 3l3 -3l3 3" /><path d="M3 17l3 -3l3 3l3 -3l3 3l3 -3l3 3" /></svg>`
        break
      case "Pisces":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-pisces"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 3a21 21 0 0 1 0 18" /><path d="M19 3a21 21 0 0 0 0 18" /><path d="M5 12l14 0" /></svg>`
        break
      case "Aries":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-aries"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5a5 5 0 1 0 -4 8" /><path d="M16 13a5 5 0 1 0 -4 -8" /><path d="M12 21l0 -16" /></svg>`
        break
      case "Taurus":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-taurus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 3a6 6 0 0 0 12 0" /><path d="M12 15m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" /></svg>`
        break
      case "Gemini":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-gemini"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3a21 21 0 0 0 18 0" /><path d="M3 21a21 21 0 0 1 18 0" /><path d="M7 4.5l0 15" /><path d="M17 4.5l0 15" /></svg>`
        break
      case "Cancer":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-cancer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M3 12a10 6.5 0 0 1 14 -6.5" /><path d="M21 12a10 6.5 0 0 1 -14 6.5" /></svg>`
        break
      case "Leo":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-leo"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 17a4 4 0 1 0 8 0" /><path d="M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M11 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M7 7c0 3 2 5 2 9" /><path d="M15 7c0 4 -2 6 -2 10" /></svg>`
        break
      case "Virgo":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-virgo"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4a2 2 0 0 1 2 2v9" /><path d="M5 6a2 2 0 0 1 4 0v9" /><path d="M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" /><path d="M12 21a7 5 0 0 0 7 -5v-2a3 3 0 0 0 -6 0" /></svg>`
        break
      case "Libra":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-libra"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 20l14 0" /><path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" /></svg>`
        break
      case "Scorpio":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-scorpio"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 4a2 2 0 0 1 2 2v9" /><path d="M5 6a2 2 0 0 1 4 0v9" /><path d="M9 6a2 2 0 0 1 4 0v10a3 3 0 0 0 3 3h5l-3 -3m0 6l3 -3" /></svg>`
        break
      case "Sagittarius":
        svg = `<svg  xmlns="http://www.w3.org/2000/svg"  width="140"  height="140"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-zodiac-sagittarius"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l16 -16" /><path d="M13 4h7v7" /><path d="M6.5 12.5l5 5" /></svg>`
        break
      default:
        svg = "<h2>?</h2>"
      break
    }
    container.innerHTML = svg
  }


  return (
    <>
    <div>
      <div id="star-sign-con">

      </div>
      <h2>{spiritualData.horoscope}</h2>
    </div>
      <label>Gender</label>
      <div>
        
      </div>
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
        <option value=", well, it's complicated">It's Complicated</option>
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
        <option value="to make more money">Make Money</option>
        <option value="to get a better career">Better Career</option>
        <option value="to find true love">Finding Love</option>
        <option value="to let go of the past">Letting Go Of The Past</option>
        <option value="to find purpose in life">Finding Purpose</option>
        <option value="to open my heart to new opportunities">Opening My Heart</option>
        <option value="to heal myself">Healing</option>
        <option value="to learn to trust myself">Trusting Myself</option>
        <option value="to better connect with the universe">Connecting with the Universe</option>
        <option value="to reclaim myself">Reclaiming Myself</option>
        <option value="to live more authentically">Living More Authentically</option>
      </select>
      </div>
    </form>
    </>
  )
}

export default Questions