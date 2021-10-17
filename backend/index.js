const express = require("express");
const dotenv = require("dotenv");
const mongoose=require("mongoose");
const postRoute=require("./routes/posts");
var bodyParser = require('body-parser');

const app=express();

// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000000000000000000000}));

app.use(bodyParser.json({ limit: "50mb", extended: true, parameterLimit: 5000000000 }))
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 5000000000 }))


// app.use(bodyParser.json({limit: '50mb'}))
// app.use(bodyParser.urlencoded({
//   limit: '50mb',
//   extended: true,
// }));




dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( console.log("connected to mongodb")).catch((err)=>console.log(err));


app.use('/api/posts',postRoute);


app.listen("5000",()=>{
    console.log("server is running on port 5000");
});
