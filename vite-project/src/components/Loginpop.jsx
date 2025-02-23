import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../assets/frontend/assets';
import { useContext } from 'react';
import { Storecontext} from '../context/Storecontext';
import axios from "axios"



const Loginpop = ({setshowlogin}) => {
  const {url,settoken}= useContext(Storecontext);
    const [currstate,setcurrstate]= useState("Sign Up");
    const [data,setdata]= useState({
      name:"",
      email:"",
      password:""
    })

    const onchangeHandler=(event)=>{
      const name= event.target.name
      const value=  event.target.value
      setdata(data=>({...data,[name]:value}))
    }
    const onsubmithandle=async (event)=>{
  event.preventDefault();
  let newurl = url;
  if(currstate=="Login"){
    newurl+="/api/user/login"
  }else{
    newurl+="/api/user/register"
  }
  // const response= await axios.post(newurl,data);
  // console.log(response.data);
  // if(response.data.sucess){
  //   settoken(response.data.token)
  //   localStorage.setItem("token", response.data.token); 
  //   console.log(localStorage.getItem("test"));
  //   setshowlogin(false);
  // }else{
  //   alert(response.data.message);
  // }
  try {
    const response = await axios.post(newurl, data);
    console.log(response.data); // Debugging response
  
    if (response.data.sucess) {  // Corrected "sucess" to "success"
      settoken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setshowlogin(false);
    } else {
      alert(response.data.message);
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("Login failed. Please try again.");
  }
  
    }
    
  return (
    <div className='loginpop'>
      <form action="" className="logincontainer" onSubmit={onsubmithandle} >
        <div className="loginpop-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="loginpop-input">
            {currstate==="Login"?<></>:<input onChange={onchangeHandler} value={data.name} type="text" placeholder='Your name' name='name' className=' rounded-md h-8 border-gray-700 border-2' required/>}
            
            <input className='border-gray-700 border-2 rounded-md h-8' onChange={onchangeHandler} value={data.email} type="email"  name='email' placeholder='Your email' required />
            <input className='border-gray-700 border-2 rounded-md h-8' onChange={onchangeHandler} value={data.password} type="password" name='password'  placeholder='Password' required />
        </div>
        <button type='submit'>{currstate==="Sign Up"?"Create account":"Login"} </button>
    <div className="login-condition">
        <input type="checkbox"  required/>
        <p>By continuing ,i agree to the terms of use & privacy policy.</p>

    </div>
    {currstate==="Login"?<p>Create a new account?  <span onClick={()=>setcurrstate("Sign Up")}
    >Click here</span>  </p>:<p>Already have an account <span onClick={()=>setcurrstate("Login")}>Login here</span></p>}



      </form>
    </div>
  )
}

export default Loginpop
