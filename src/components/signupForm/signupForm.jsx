import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as authService from '../../services/authService'
import '../loginForm/loginForm'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({})
  


  const handleChange = e => {
    props.updateMessage('') 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const checkDisabled = () => {
    if (document.getElementById('button').disabled) {
      return true
    }else{
      return false
    }
  }

  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, photoData.photo)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData
  
  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }


  return (
    <form
    autoComplete="off"
    onSubmit={handleSubmit}
      className="container"
    >
      <div className="inputContainer">
        <label htmlFor="name" className="label">Name</label>
        <br />
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          className='inputs'
          onChange={handleChange}
          />
      </div>
      <div className="inputContainer">
        <label htmlFor="email" className="label">Email</label>
        <br />
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          className='inputs'
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password" className="label">Password</label>
        <br />
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          className='inputs'
          onChange={handleChange}
          />
      </div>
      <div className="inputContainer">
        <label htmlFor="confirm" className="label">
          Confirm Password
        </label>
        <br />
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          className='inputs'
          onChange={handleChange}
        />
      </div>
      <div className="inputContainer">
        
        <button disabled={isFormInvalid()} className="button" id="btn" >
          Sign Up
        </button>
          <Link to="/">
            <button className="signupCancel">Cancel</button>
          </Link>
      </div>
    </form>
  )
}

export default SignupForm