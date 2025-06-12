const DrawnCard = ({slug}) => {
  const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL
  return (
  <>
    <div>
      <img src={`${BASE_URL}/api/tarot/${slug}`} alt="card"  style={{ width: "100px", height: "auto" }} />
    </div>
  </>
  )
}   

export default DrawnCard