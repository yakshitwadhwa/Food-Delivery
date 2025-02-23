import { Storecontext } from '../context/Storecontext'
import './Fooddisplay.css'
import React, { useContext } from 'react'
import Fooditem from './Fooditem'
import { useState } from 'react'

const Fooddisplay = ({category}) => {
    const {food_list}= useContext(Storecontext);
    // const [food_list,setfoodlist]= useState([]);
  return (
    <div className='fooddisplay' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="fooddisplay-list">
        {food_list.map((item,index)=>{
          if(category==="All"||category===item.category){
            return <Fooditem key={index} id={item._id } name={item.name} 
            description={item.description} price={item.price} image={item.image} />
            
          }
          
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
