import userModel from "../models/userModel.js"

// add items to usercart 
const addtocart = async(req,res)=>{
    try{

    
let userdata= await userModel.findOne({_id:req.body.userId})

if (!userdata) {
    return res.json({ success: false, message: "User not found" });
}let cartdata = userdata.cartdata || {};
if(!cartdata[req.body.itemId]){
    cartdata[req.body.itemId]=1;
}else{
    cartdata[req.body.itemId]+=1;
}
await userModel.findByIdAndUpdate(req.body.userId, { cartdata });


res.json({sucess:true,message:"Added to cart"});
    }catch(error){
   console.log(error);
   res.json({sucess:false,message:"Error"})
   
    }
}

const removefromcart =async(req,res)=>{
try {
    console.log("User ID:", req.body.userId);
   let userdata= await userModel.findById(req.body.userId);
   if (!userdata || !userdata.cartdata) {
    return res.json({ success: false, message: "User/cart not found" });
}

let cartdata = userdata.cartdata || {};
   if(cartdata[req.body.itemId]>0){
    cartdata[req.body.itemId]-=1;
   }
   await userModel.findByIdAndUpdate(req.body.userId,{cartdata});
   res.json({sucess:true,message:"Removed from cart"});

} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"Error"});
}
}
const getcart= async(req,res)=>{
try {
    let userdata = await userModel.findById(req.body.userId);
    let cartdata= await userdata.cartdata;
    res.json({sucess:true,cartdata})
} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"Error"});


}
}
export {addtocart,removefromcart,getcart}
