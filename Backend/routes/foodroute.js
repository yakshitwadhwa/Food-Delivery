import express from "express";
import { addFood, listfood, removefood } from "../controller/foodController.js";
import multer from "multer";


const foodRouter= express.Router();

// image storage engine using multer disc storgae

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
     return cb(null,`${Date.now()}${file.originalname}`);
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listfood);  
foodRouter.delete("/remove/:id",removefood);



export default foodRouter;