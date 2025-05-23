import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//login user

export const  login = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }

        const token = createToken(user._id)

        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

//register user

const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

export const  registerUser = async (req,res) => {

    const {name,password,email} = req.body;
    try {
        //checkig is user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User already exist"})
        }
        //validating email format and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid Email"})
        }

        if(password.length<8){
            return res.json({success:false,message:"Please enter strong password with more tha 8 characters"})
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUser.save()
        //res.json(user);

        // Generate token and send response
        const token = createToken(user._id);
        res.status(201).json({ 
            success: true, 
            token, 
            message: "Registration successful" 
        });

       


    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

