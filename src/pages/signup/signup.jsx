import React, { useState } from 'react'
import SignupForm from '../../components/signupForm/signupForm'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <>
      <main className="container">
      <h1>Sign Up</h1>
      <p>{message}</p>
      <SignupForm {...props} updateMessage={updateMessage} />
      </main>
    </>
  )
}

export default Signup
