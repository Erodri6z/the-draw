const Landing = ({ user }) => {
  return (
    <>
    {user?
    <div>
      <h1>Welcome to The Draw</h1>
      <p>Depending on how you feel is how the reading will work.</p>
      <h6>Feel Good Quote here</h6>
      <p>Get Started? Click Below</p>
      <button>Get Started</button>
    </div>
    :
    <div>
      <h2> Welcome to The Draw</h2>
      <h4>Please Sign In To Continue</h4>
    </div>
    }
    </>
  )
}

export default Landing