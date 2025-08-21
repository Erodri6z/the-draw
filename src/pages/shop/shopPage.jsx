import affiliateDetes from "../../data/affiliateLinks"
import ShopCard from "../../components/shopCard/shopCard"

const ShopPage = () => {
  return (
    <>
    <div className="shop">
      <h2 className="title">These Are Our Amazon Picks</h2>
      <div className="products">
        {affiliateDetes.map((a) => (
          <ShopCard props={a} key={a.pickName}/>
        ))}
      </div>
    </div>
    </>
  )
}  

export default ShopPage