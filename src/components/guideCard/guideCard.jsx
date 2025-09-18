const guideCard = ({ card , data}) => {
  return (
    <>
    <div>
      <img src={card.image} alt="card" />
      <div>
        <h4>{data.name}</h4>
        <p>{data.meaning_up}</p>
        <p>{data.meaning_rev}</p>
      </div>
    </div>
    </>
  )
}

export default guideCard