import React, { useState } from 'react'
import { Link } from "react-router-dom"

const Register = () => {

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  return (
    <section className="register">
      <div className="container register_container">
        <h2>Sign Up</h2>
        <form className='form register_form'>
          <p className="form_error_message">   ERROR!      </p>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} />
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler} />
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler} />
          <input type="password" placeholder='Confirm Password' name='confirmPassword' value={userData.confirmPassword} onChange={changeInputHandler} />
          <button type="submit" className="btn primary">Register</button>
        </form>
        <small>Already have an account? <Link to="/login">Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register