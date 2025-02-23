import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Cart  from "./Pages/Cart";

import Footer from './components/Footer';
import { useState } from 'react';
import Loginpop from './components/Loginpop';
import Placeorder from './Pages/placeorder';
const App = () => {

const[showlogin,setshowlogin]= useState(false);

  return (
    <div>
      {showlogin?<Loginpop setshowlogin={setshowlogin}/>:<></>}
<div className='app'>
      <Navbar setshowlogin={setshowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/> 
      </Routes>
    </div>
    <Footer/>
    </div>
    

  )
}

export default App
