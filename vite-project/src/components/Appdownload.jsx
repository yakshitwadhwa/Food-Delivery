import React from 'react'
import { assets } from '../assets/frontend/assets'
import './Appdownload.css'
const Appdownload = () => {
  return (
    <div className="appdownload" id='appdownload'>
      <p>For Better Experience Download <br /> Tomato App</p>
      <div className=' platform flex justify-center gap-16 mt-96'>
        <img  src={assets.play_store } alt="" />
        <img   src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default Appdownload
