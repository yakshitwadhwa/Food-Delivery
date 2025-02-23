import React from 'react'
import './Footer.css'
import { assets } from '../assets/frontend/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer' >
      <div className="footercontent">
        <div className="footercontentleft">
    <img src={assets.logo} alt="" />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis doloremque nisi libero omnis repudiandae, eaque reiciendis odit quasi dolorum quam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, fugiat. </p>
    <div className="footersocial">
        <img src={assets.twitter_icon}alt="" />
        <img src= {assets.linkedin_icon}alt="" /><img src={assets.facebook_icon}alt="" />
    </div>
        </div>

        <div className="footercontentcenter">
     <h2 className='text-2xl text-white font-bold'>COMPANY</h2>
     <ul>
        <li>Home</li>
        <li>About US</li>
        <li>Delivery</li>
        <li>Privacy Policy</li>
     </ul>
        </div>
        <div className="footercontentright">
   <h2 className='text-2xl text-white font-bold'> Get In Touch</h2>
   <ul>
    <li>+918168124749</li>
    <li>amit@gmail.com</li>
   </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 Tomato.com-All Right Reserved.</p>
    </div>
  )
}

export default Footer
