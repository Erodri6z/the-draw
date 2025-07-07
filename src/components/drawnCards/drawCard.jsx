import './drawCard.css'
import { useState } from 'react';

const DrawnCard = ({slug}) => {
  const [flipped, setFlipped] = useState(false);

  const BASE_URL = import.meta.env.VITE_BACK_END_SERVER_URL


  return (
  <>
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src="/theDrawEdit.png" alt="The Draw" className='card-logo'/>
        </div>
        <div className="flip-card-back">
          {
            slug.name.includes('(Upsidedown)')?
            <div key={slug}>
              <img src={`${BASE_URL}/api/tarot/${slug.image}`} alt="card" className="upsidedown-card card" />
            </div>

            :
            <div key={slug}>
              <img src={`${BASE_URL}/api/tarot/${slug.image}`} alt="card" className="upright-card card" />
            </div>
          }
        </div>
      </div>
    </div>
  </>
  )
}   

export default DrawnCard