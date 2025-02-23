import React, {  useState } from 'react'
import './Add.css'
import { assets } from '../../assets/admin/assets'
import axios from "axios";
import {  toast } from 'react-toastify';



const Add = () => {
const url="http://localhost:4000"
  const [image,setimage]= useState(false);
   const [data,setdata]= useState({
    name:'',
    description:"",
    price:"",
    category:"Salad"
   })





   const onchangehandler=(event)=>{
 const name=event.target.name;
 const value=event.target.value;
 setdata(data=>({...data,[name]:value}))
   }

  //  useEffect(()=>{
  //   console.log(data);
  //  },[data]);


//api call
const onsubmithandle = async(event)=>{
  event.preventDefault();
  const formdata = new FormData();
  formdata.append("name",data.name)
  formdata.append("description",data.description)
  formdata.append("price",Number(data.price))
  formdata.append("category",data.category)
  formdata.append("image",image)




  const response = await axios.post(`${url}/api/food/add`,formdata);
if(response.data.sucess){
  setdata({
    name:'',
    description:"",
    price:"",
    category:"Salid"
  })
  setimage(false)
toast.success(response.data.message);


}else{
toast.error(response.data.message)
}

}

  return (
    <div className='add'>
        <form className='flexcol form ' onSubmit={onsubmithandle}>

           <div className='addimg flex-col'>
            <p>Upload Image</p>
            <label htmlFor="image">
   <img src={image?URL.createObjectURL(image): assets.upload_area} alt="" />
            </label>
<input onChange={(e)=>setimage(e.target.files[0])} type="file" id='image' hidden  required />
            </div> 


            <div className="addproductname flex-col">
<p>Product name</p>
<input onChange={onchangehandler} value={data.name} type="text" name = "name" placeholder='type here' />
            </div>
            <div className="addproductdes flex-col">
<p>Product Description</p>
<textarea name="description" onChange={onchangehandler} value={data.description} rows="6" placeholder='Write your content here'></textarea>
            </div>

<div className="addcategoryprice">
    <div className="addcategriy">
        <p>Add Category</p>
        <select name="category" onChange={onchangehandler}>
<option value="Rolls">Rolls</option>
<option value="Desert">Desert</option>
<option value="Sandwich">Sandwich</option>
<option value="Pure Veg">Pure veg</option>
<option value="Noodels">Noodels</option>
<option value="Pasta">Pasta</option>
<option value="Salad">Salad</option>
        </select>
    </div>
    <div className="productprice">
        <p>Product Price</p>
<input onChange={onchangehandler} value={data.price} type="number" name='price' placeholder='$20'/>
    </div>
</div>



<button type='submit' className='addbutton'>Add</button>
        </form>

      
    </div>
  )
}

export default Add
