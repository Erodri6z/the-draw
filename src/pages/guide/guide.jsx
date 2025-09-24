import { useState } from "react"
import GuideCard from "../../components/guideCard/guideCard"
import './guide.css'

const GuidePage = () => {


  return (
    <>
    <div className="guide-page">
      <GuideCard />
      <GuideCard />
      <GuideCard />
      
    </div>
    </>
  )
}

export default GuidePage