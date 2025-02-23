import express from"express"
import { addtocart,getcart,removefromcart } from "../controller/cartcontroller.js"
import authMiddleware from "../middleware/auth.js";
const cartRouter= express.Router();

cartRouter.post("/add",authMiddleware,addtocart);
cartRouter.post("/remove",authMiddleware,removefromcart);
cartRouter.post("/get",authMiddleware,getcart);

export default cartRouter;