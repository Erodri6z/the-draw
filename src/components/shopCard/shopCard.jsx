
const shopCard = (props) => {
  return(
    <>

    <div className="pickCard">
      <a href={props.pickLink}>
        <img src={props.pickImage} alt="" />
        <div>
          <h3>{props.pickName}</h3>
        </div>
      </a>
    </div>
    </>
  )
}

export default shopCard