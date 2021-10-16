const express = require("express");
const dotenv = require("dotenv");
const mongoose=require("mongoose");
const postRoute=require("./routes/posts");

const app=express();
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( console.log("connected to mongodb")).catch((err)=>console.log(err));


app.use('/api/posts',postRoute);


app.listen("5000",()=>{
    console.log("server is running on port 5000");
});