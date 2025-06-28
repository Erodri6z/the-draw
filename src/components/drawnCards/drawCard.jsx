import './drawCard.css'

const DrawnCard = ({slug}) => {
  const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL


  return (
  <>
  {
    slug.name.includes('(Upsidedown)')?
    <div key={slug}>
      <img src={`${BASE_URL}/api/tarot/${slug.image}`} alt="card" className="upsidedown-card card" style={{ width: "150px", height: "250px", transform: "rotate(180deg)" }} />
    </div>

    :
    <div key={slug}>
      <img src={`${BASE_URL}/api/tarot/${slug.image}`} alt="card" className="upright-card card" style={{ width: "150px", height: "250px" }} />
    </div>

  }
  </>
  )
}   

export default DrawnCard