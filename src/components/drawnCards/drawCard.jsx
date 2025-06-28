import './drawCard.css'

const DrawnCard = ({slug}) => {
  const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL


  return (
  <>
  {
    slug.name.includes('(Upsidedown)')?
    <div key={slug}>
      <img src={`${BASE_URL}/api/tarot/${slug.image}`} alt="card" className="upsidedown-card card" />
    </div>

    :
    <div key={slug}>
      <img src={`${BASE_URL}/api/tarot/${slug.image}`} alt="card" className="upright-card card" />
    </div>

  }
  </>
  )
}   

export default DrawnCard