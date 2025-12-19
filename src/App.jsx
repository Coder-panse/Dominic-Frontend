import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './page/Home'
import Dashboard from './page/Dashboard'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Contact from './page/Contact'
import Navbar from './Component/Navbar'


const App = () => {

  const Location=useLocation()
  const hideLayoutRoute=["/login","/signup","/dashboard"]

  const hideLayout=hideLayoutRoute.includes(location.pathname);

  return (

      <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </>
    
  )
}

export default App