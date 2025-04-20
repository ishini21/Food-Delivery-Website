import express from 'express'
import { addCart,removeFromCart,getCart } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/add",authMiddleware,addCart)
cartRouter.post("/remove",authMiddleware,addCart)
cartRouter.get("/get",authMiddleware,addCart)

export default cartRouter

