import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const Home = () => {
  const user = 'John'
  return (
    <div>
      <center>
        <h3>Welcome to Home page</h3>
        <Link to={`/dashboard?name=${user}&age=${26}`} className='Link'>Dashboard</Link>
        <Link to='/about' className='Link'>About</Link>
      </center>
    </div>
  )
}

export default Home
