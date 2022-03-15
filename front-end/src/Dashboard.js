import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  let {search} = useLocation();
  console.log(search);
  
  return (
    <div>
      <center>
        <h3>Welcome to Dashboard page</h3>
        <Link to='/' className='Link'>Back to Home</Link>
      </center>
    </div>
  )
}

export default Dashboard
