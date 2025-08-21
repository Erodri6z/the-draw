import affiliateDetes from "../../data/affiliateLinks"
import ShopCard from "../../components/shopCard/shopCard"
import './shopPage.css'

const ShopPage = () => {
  return (
    <>
    <div className="shop">
      <h1>Want to Support?</h1>
      <h2 className="title">Check Out My Amazon Picks</h2>
      <div className="products">
        {affiliateDetes.map((a) => (
          <ShopCard props={a} key={a.pickName}/>
        ))}
      </div>
      <h3>Or</h3>
        <a href="https://ko-fi.com/gloomyspirit" target="_blank"  rel="noopener noreferrer" className="coffee-button">
        ☕ Buy me a coffee
      </a>
    </div>
    </>
  )
}  

export default ShopPage