import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js";
import foodrouter from "./routes/foodroute.js";
import userRouter from "./routes/userroute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartroute.js";

//app config
const app = express();
const port = process.env.PORT||4000;
// middleware 
app.use(express.json())
app.use(cors())

//db connection 
connectDb();



// api endpoints
app.use("/api/food",foodrouter);
app.use("/image",express.static('uploads'))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter)




app.get("/",(req,res)=>{
   res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
// mongodb+srv://yakshitwadhwa29940:Ik5T5bwpePynVXPs@cluster0.3xic1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0