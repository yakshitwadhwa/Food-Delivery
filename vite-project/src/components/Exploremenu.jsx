import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../assets/frontend/assets'
const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
     <h1>Explore our Menu</h1> 
     <p className='exploremenu-text'>chose from a diverse menu featuring a delectable array of dishes .
      Our mission is to Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Dignissimos, minima. </p>
     <div className="exploremenu-list">
       {menu_list.map((item,index)=>{
        return(
           <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} 
           key={index} className='exploremenu-listitem'>
      
            <img className={category===item.menu_name?"active":""} src={item.menu_image}/>
            <p>{item.menu_name}</p> </div>
        )
    })   } 
     </div>
     <hr />
    </div>
  )
}

export default Exploremenu
