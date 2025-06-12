const DrawnCard = ({slug}) => {
  const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL


  return (
  <>
  {
    slug.name.includes('(Upsidedown)')?
    <div key={slug}>
      <img src={`${BASE_URL}/api/tarot/${slug.image}`} alt="card"  style={{ width: "100px", height: "200px", transform: "rotate(180deg)" }} />
    </div>

    :
    <div key={slug}>
      <img src={`${BASE_URL}/api/tarot/${slug.image}`} alt="card"  style={{ width: "100px", height: "200px" }} />
    </div>

  }
  </>
  )
}   

export default DrawnCard