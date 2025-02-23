import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';
const List = ({url}) => {
const [list,setlist]= useState([]);
const fetchlist=async()=>{
  const response= await axios.get(`${url}/api/food/list`);
  console.log(response.data)
  if(response.data.sucess){
    setlist(response.data.data);
  }else{
    toast.error("Error");
  }
}
const removefood = async (foodId) => {
  console.log("Deleting food item ID:", foodId); // Debugging log

  try {
      const response = await axios.delete(`${url}/api/food/remove/${foodId}`);

      if (response.data.success) {
          toast.success(response.data.message);
          await fetchlist();
      } else {
          toast.error("Error removing food");
      }
  } catch (error) {
      console.error("Error deleting food:", error);
      toast.error("Failed to delete food");
  }
};



useEffect(()=>{
  fetchlist();
},[])


  return (
    <div className='list'>
 <p class="listp">All Foods List </p>
 <div className="listtable">
  <div className="listtableformat title">
    <b>Image</b>
    <b>Name</b>
    <b>category</b>
    <b>Price</b>
    <b>Action</b>
    
   
  </div>
  {list.map((item,index)=>{
      return(
        <div key={index} className='listtableformat'>
          <img src={`${url}/image/`+item.image} alt="" />
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>${item.price}</p>
          <p onClick={()=>removefood(item._id)} className='cursor'>x</p>
          </div>
      )
    })}
 </div>
    </div>
  )
}

export default List
