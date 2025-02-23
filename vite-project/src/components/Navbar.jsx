import React, { useContext, useState } from 'react'
import { assets} from "../assets/frontend/assets"
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Storecontext } from '../context/Storecontext';
import { useNavigate } from "react-router-dom";
const Navbar = ({setshowlogin}) => {
 
  const [menu ,setmenu]= useState("home");
  const {getTotalCartAmount,token,settoken}= useContext(Storecontext);
  const navigate = useNavigate();
  const logout=()=>{
localStorage.removeItem("token")
settoken("");
navigate("/");
  }
 
  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt='' className='img'/></Link> 
      <ul className='flex list-none gap-[20px] text-#49557e text-[18px]'>
        <Link to='/' onClick={()=> setmenu("home")}  className={menu=="home"?"active":""}>Home</Link>
        <a href='#exploremenu' onClick={()=> setmenu("menu")} className={menu=="menu"?"active":""}>Menu</a>
        <a href='#appdownload' onClick={()=> setmenu("mobile-app")} className={menu=="mobile-app"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=> setmenu("contact-us")} className={menu=="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className='right'>
        <img src={assets.search_icon} alt="" />
        <div class="relative">
   <Link  to='/cart' > <img  src= {assets.basket_icon}  alt="Basket Icon"/></Link>
    <div className={getTotalCartAmount()===0?"":"notification"}></div>
</div>
{!token?<button onClick={()=>setshowlogin(true)} className=''>Sign In</button>:
<div className='navbarprofile' >
  <img src={assets.profile_icon} alt="" />
  <ul className="navprofiledrop">
    <li>
      <img src={assets.bag_icon} alt="" />
      <p>Orders</p>
    </li>
    <hr />
    <li onClick={logout}>
<img src={assets.logout_icon} alt="" />
<p>Logout</p>
    </li>
  </ul>
  </div>}
        {/* <button onClick={()=>setshowlogin(true)} className=''>Sign In</button> */}
      </div>
    </div>
  )
}

export default Navbar

