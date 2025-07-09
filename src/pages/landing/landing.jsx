import './landing.css'
import { useState } from 'react'
import DisclaimerModal from '../../components/disclaimer/disclaimer'

const Landing = ({ user }) => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false)
  
  return(
    <>
    {!disclaimerAccepted && (
      <DisclaimerModal onAccept={() => setDisclaimerAccepted(true)} />
    )}
    {disclaimerAccepted && (
      <div className="landing-wrapper">
        {user ? (
          <div>
            <h2 className='app-name'>Welcome to The Draw (Beta)</h2>
            <img src="/theDrawEdit.png" alt="The Draw" className="main-logo" />
            <p className='fade'>
              When you draw three cards at random, you give the universe a
              chance to speak — unfiltered, untampered, and just for you.
            </p>
            <p className='fade'>Get Started? Click Below</p>
            <a href="/reading">
              <button>Get Started</button>
            </a>
          </div>
        ) : (
          <div>
            <h2 className='app-name'>Welcome to The Draw (Beta)</h2>
            <img src="/theDrawEdit.png" alt="The Draw" className="main-logo" />
            <p className='fade'>
              When you draw three cards at random, you give the universe a
              chance to speak — unfiltered, untampered, and just for you.
            </p>
            <h4 className='fade'>Please Sign In To Continue</h4>
            <div className="login-or-signup">
              <a href="/Login" className="login-a">
                <button>Login</button>
              </a>
              <p>Or</p>
              <a href="/Signup" className="signup-a">
                <button>Signup</button>
              </a>
            </div>
          </div>
        )}
      </div>
    )}
    </>
  );
}

export default Landing