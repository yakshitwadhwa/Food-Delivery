import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt"
import validator from 'validator'

//login user
const loginuser = async(req,res)=>{
const{email,password}= req.body;
try {
    const user= await userModel.findOne({email});
    if(!user){
      return  res.json({sucess:false,message:"Enter valid User"})
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.json({sucess:false,message:"Invalid credentials"});

    }
const token = createtoken(user._id);
return res.json({sucess:true,token})

} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"Error"})
}
}








// creating token 
const createtoken =(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}




//register user 
const registerUser= async(req,res)=>{
const {name,password,email}=req.body;
try {
    // checking is user already exist 
    const exists= await userModel.findOne({email});
    if(exists){
        return res.json({sucess:false,message:"User Already exist"})

    }
    // validating email format n strong password 
    if(!validator.isEmail(email)){
        return res.json({sucess:false,message:"enter correct email"})

    }
    if(password.length<8){
        return res.json({sucess:false,message:"enter strong password"})  
    }
    // encrptying ya hashing password 
    const salt = await bcrypt.genSalt(10);
    const hashed= await bcrypt.hash(password,salt);

    const newuser = new userModel(
        {
            name:name,
            email:email, 
            password:hashed
        }
    )
   const user = await newuser.save();
   const token =createtoken(user._id);
   res.json({sucess:true,token})
} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"error"});
}
}


export {loginuser,registerUser}
