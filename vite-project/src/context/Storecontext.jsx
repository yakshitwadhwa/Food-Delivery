import { createContext, useEffect, useState } from "react";
import cart from "../Pages/Cart";
import { food_list } from "../assets/frontend/assets";
import axios from "axios"
export const Storecontext= createContext(null);
const Storecontextprovider=(props)=>{
    const [token,settoken]= useState("")
    const [cartitem,setcartitem]= useState({});
  const url="http://localhost:4000";
  const [food_list,setfoodlist]= useState([]);
const addtocart=async (itemId)=>{
if(!cartitem[itemId]){
    setcartitem((prev)=>({...prev,[itemId]:1}))
}else{
    setcartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}

if(token){
  await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
}
}

const removefromcart=async(itemId)=>{
    setcartitem((prev)=>({...prev,[itemId]:prev[itemId]-1  }))
if(token){
    await axios.delete(url+"/api/cart/remove/:id",{itemId},{headers:{token}});
    
}
}

const getTotalCartAmount=()=>{
    let total=0;
    for(const item in cartitem){
        if(cartitem[item]>0){
            let iteminfo= food_list.find((product)=>product._id===item);
            total+=iteminfo.price* cartitem[item];
        }
        
    }
    return total;
}
useEffect(() => {
    if (localStorage.getItem("token")) {
      settoken(localStorage.getItem("token"));
    }
  }, []);
  
useEffect(()=>{
    async function loaddata(){
        await fetchfoodlist();
        if(localStorage.getItem("token")){
            settoken(localStorage.getItem("token"));
            // await loadcartdata(localStorage.getItem("token"))
        }
    }
    loaddata();
},[])

const fetchfoodlist= async()=>{
    const response= await axios.get(url+"/api/food/list");
    setfoodlist(response.data.data);

}

const loadcartdata=async(token)=>{
    const response= await axios.post(url+"/api/cart/get",{},{headers:{token}})
    setcartitem(response.data.cartitem);
}


    const contextvalue={
food_list,cartitem,addtocart,removefromcart,setcartitem,getTotalCartAmount,url,
token,settoken 
    }
    return <Storecontext.Provider value={contextvalue}>{props.children}</Storecontext.Provider>;
};

export default Storecontextprovider;