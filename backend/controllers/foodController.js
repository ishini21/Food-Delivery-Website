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
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

//all food list
export const listFood = async(req,res)=>{
    try {
        const foods= await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//remove food item
export const removeFood = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.params.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food not found" });
          }
              // Delete the image file from uploads folder
        fs.unlink(`uploads/${food.image}`,(err)=>{
            
            if (err) console.log("Error deleting image:", err);

        })

        await foodModel.deleteOne({ _id: req.params.id });
        res.json({success:true,message:"Food removed"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
}

//update food item
