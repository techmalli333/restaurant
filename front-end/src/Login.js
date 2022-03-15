import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <center>
        <h2>Welcome to Login Page</h2>
        <Link to='/' className='Link'>Back to Home</Link>
      </center>
    </div>
  )
}

export default Login
