const DrawnCard = ({ slug }) => {
  return (
    <img src={`http://localhost:3001/api/tarot/${slug}`} alt="card" />
  )
}   

export default DrawnCard