import express from 'express'
import cors from 'cors'
import 'dotenv/config';

//app config
const app= express()
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("API Working")

})
app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})
