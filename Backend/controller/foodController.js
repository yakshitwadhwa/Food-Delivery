import foodModel from "../models/foodmodel.js";
import fs from 'fs'


//add food item

const addFood = async(req,res)=>{

let image_filename = req.file ? req.file.filename : 'default.png';


const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    category:req.body.category,
    image:image_filename
})

try{
    await food.save();
    res.json({sucess:true,message:"Food Added"})
}catch(error){
  console.log(error);
  res.json({sucess:false,message:"Error"})
}



}


//  all food list 
const listfood =async(req,res)=>{
try {
    const foods = await foodModel.find({});
    res.json({sucess:true,data:foods})
} catch (error) {
    console.log(error);
    res.json({sucess:false,message:"Error"})
}
}
//remove food 
const removefood = async (req, res) => {
    try {
        console.log("DELETE request received for ID:", req.params.id); // Debug log

        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ success: false, message: "Food ID is required" });
        }

        const food = await foodModel.findById(id);
        if (!food) {
            return res.status(404).json({ message: "Food item not found" });
        }

        if (food.image) {
            fs.unlink(`uploads/${food.image}`, (err) => {
                if (err) console.error("Failed to delete image:", err);
            });
        }

        await foodModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Food removed" });
    } catch (error) {
        console.error("Error in removefood:", error);
        res.status(500).json({ success: false, message: "Error deleting food" });
    }
};

export {addFood,listfood,removefood}
