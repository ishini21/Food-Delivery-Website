import foodModel  from "../models/foodModel.js";
import fs from 'fs'

//Add food
export const  addFood = async (req,res) => {

    const { name, description, price, category } = req.body;
    //let image_filename = `${req.file.filename}`;
    const image = req.file ? req.file.path : null;

    const food = new foodModel({
        name,
        description,
        price,
        category,
        image,

    })
    try {
        await food.save();
        res.json({success:true,message:"Foos Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}