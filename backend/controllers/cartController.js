import userModel from "../models/userModel.js";

//add items to user cart

export const addCart = async (req,res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId})
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.bodyitemId] = 1
        }else{
            cartData[req.bodyitemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added To Cart"})
    } catch (error) {
       
    }
    
}

//remove from cart

export const removeFromCart = async (req,res) => {

}

//fetchuser cart data 

export const getCart = async (req,res) => {

}