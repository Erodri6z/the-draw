const drawnCard = () => {
  return (
  <>
  <div>
    <img src={`localhost:3001/api/tarot/${slug}`} alt="card" />
  </div>
  </>
  )
}   

export default drawnCard