import mongoose from "mongoose"
 

export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://yakshitwadhwa29940:Ik5T5bwpePynVXPs@cluster0.3xic1.mongodb.net/fooddel').then(()=>console.log("DB Connected "));

}