import './landing.css'

const Landing = ({ user }) => {
  return (
    <>
    {user?
    <div>
      <h1>Welcome to The Draw</h1>
      <img src="/theDrawEdit.png" alt="The Draw" className="main-logo"/>
      <p>Depending on how you feel is how the reading will work.</p>
      <h6>Feel Good Quote here</h6>
      <p>Get Started? Click Below</p>
      <a href="/reading">
        <button>Get Started</button>
      </a>
    </div>
    :
    <div>
      <h2> Welcome to The Draw</h2>
      <img src="/theDrawEdit.png" alt="The Draw" className="main-logo"/>
      <h4>Please Sign In To Continue</h4>
      <div className='login-or-signup'>
        <a href="/Login" className='login-a'>
          <button>Login</button>
        </a>
        <p> Or </p>
        <a href="/Signup" className='signup-a'>
          <button>Signup</button>
        </a>
      </div>
    </div>
    }
    </>
  )
}

export default Landing