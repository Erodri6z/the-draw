import './shopCard.css'

const ShopCard = ({props}) => {
  return(
    <>
    <div className="pickCard">
      <a href={props.pickLink}>
        <img src={props.pickImage} alt="thubnail" className="thumbnail"/>
        <div>
          <h3>{props.pickName}</h3>
        </div>
      </a>
    </div>
    </>
  )
}

export default ShopCard