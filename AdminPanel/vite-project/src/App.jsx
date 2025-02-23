import React from 'react'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './Pages/Add/Add' 
import List from './Pages/List/List'
import Orders from './Pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';


const App = () => {
  const url= "http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
    <hr />
    <div className='flex'>
      <Sidebar/>
    </div>
   
    <Routes>
    <Route path="/add" element={<Add url={url}/>} />
      <Route path='/list' element={<List url={url}/>} />
      <Route path='/orders' element={<Orders url={url} />} />
    </Routes>

    </div>
  )
}

export default App
