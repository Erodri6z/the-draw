import { useState } from 'react'
import React from 'react'
import LoginForm from '../../components/loginForm/loginForm'


const Login = props => {
  
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className="container">
      <h1 className='login-title'>Log In</h1>
      <p>{message}</p>
      <LoginForm
        handleSignupOrLogin={props.handleSignupOrLogin}
        updateMessage={updateMessage}
      />
    </main>
  )
}

export default Login
