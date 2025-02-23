import React, { useState } from 'react'
import './home.css'
import Header from '../components/Header'
import Exploremenu from '../components/exploremenu'
import Fooddisplay from '../components/Fooddisplay'
import Appdownload from '../components/Appdownload'
const home = () => {
  const [category,setcategory] =useState("All");
  return (
    <div>
    <Header/>
    <Exploremenu category={category} setcategory={setcategory}/>
    <Fooddisplay category={category}  />
    <Appdownload/>
    </div>
  )
}

export default home
