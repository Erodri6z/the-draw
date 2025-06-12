const DrawnCard = ({slug}) => {
  const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL
  return (
  <>
    <div key={slug}>
      <img src={`${BASE_URL}/api/tarot/${slug}`} alt="card"  style={{ width: "100px", height: "200px" }} />
    </div>
  </>
  )
}   

export default DrawnCard