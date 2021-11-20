const express = require("express");
const dotenv = require("dotenv");
const mongoose=require("mongoose");
const postRoute=require("./routes/posts");
const userRoute=require("./routes/user");
var bodyParser = require('body-parser');
const path = require("path");
const app=express();

// app.use(express.static(path.join(__dirname, 'build')));

app.use(express.static(path.join(__dirname, 'frontend/build')));


// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000000000000000000000}));

app.use(bodyParser.json({ limit: "50mb", extended: true, parameterLimit: 5000000000 }))
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 5000000000 }))


// app.use(bodyParser.json({limit: '50mb'}))
// app.use(bodyParser.urlencoded({
//   limit: '50mb',
//   extended: true,
// }));


const PORT = process.env.PORT || 5000;

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( console.log("connected to mongodb")).catch((err)=>console.log(err));


app.use('/api/posts',postRoute);
app.use('/api/user',userRoute);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'))
})

app.listen(PORT ,()=>{
    console.log("server is running on port "+PORT);
});
