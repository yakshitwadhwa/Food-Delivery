import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend/assets'
import './Fooditem.css'
import { Storecontext } from '../context/Storecontext';
const Fooditem = ({id,name,price ,description,image}) => {
    // const[itemcount,setitemcount]= useState(0);
    const {cartitem,setcartitem,removefromcart,addtocart,url}=useContext(Storecontext)





  return (
    <div className='fooditem '>
        <div className="fooditem-img-c">
            <img className='food-item-img' src={url+"/image/"+image} alt=""/>
{
   !cartitem[id]
    ? <img className='add' onClick={()=>addtocart(id)}  src={assets.add_icon_white}/>
   : <div className="fooditem-counter">
    <img  onClick={()=>removefromcart(id)}  src={assets.remove_icon_red} alt="" />
    <p>{cartitem[id]}</p>
    <img  onClick={()=>addtocart(id)} src={assets.add_icon_green} alt="" />
   </div>
}
        </div>

        <div className="fooditem-info">
            <div className="rating">
                <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
            </div>
            <p className="fooditem-des">{description}</p>
            <p className="item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default Fooditem
