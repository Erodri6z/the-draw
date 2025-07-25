import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'
import './loginForm.css'

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })

  const navigate = useNavigate()

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name] : e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  return (
    <><form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="container"
    >
      <div className="inputContainer">
        <label htmlFor="email" className="label">Email</label>
        <br />
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="inputs" />
      </div>
      <div className="inputContainer">
        <label htmlFor="password" className="label">Password</label>
        <br />
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
          className="inputs" />
      </div>
      <div className='btns'>
        <button className="button">Log In</button>
        <Link to="/">
          <button className="button cancel">Cancel</button>
        </Link>
      </div>
    </form>
    <p>Don't have an account? <a href="/signup" className='clickHere'>Click Here to make one</a></p></>
  )
}

export default LoginForm
