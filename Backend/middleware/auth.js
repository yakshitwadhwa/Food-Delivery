import jwt from "jsonwebtoken"
 const authMiddleware= async(req,resizeBy,next)=>{
const {token}= req.headers;
if(!token){
    return res.json({success:false,message:"Not Authorized Login Again"})
}
try{
const tokendecode = jwt.verify(token,process.env.JWT_SECRET);
req.body.userId=tokendecode.id;
next();
}catch(error){
console.log(error);
res.json({sucess:false,message:"Error"})
}
 }
 export  default authMiddleware;