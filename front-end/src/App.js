import React from 'react'
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import About from './About';
import Dashboard from './Dashboard';
import Home from './Home'
import PageNotFound from './PageNotFound'
import Hoc from './Hoc'
import Login from './Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default Hoc(App)
