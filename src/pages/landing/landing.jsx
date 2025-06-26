const Landing = ({ user }) => {
  return (
    <>
    {user?
    <div>
      <h1>Welcome to The Draw</h1>
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
      <h4>Please Sign In To Continue</h4>
      <a href="/Login">
        <button>Login</button>
      </a>
      <p> Or </p>
      <a href="/Signup">
        <button>Signup</button>
      </a>
    </div>
    }
    </>
  )
}

export default Landing