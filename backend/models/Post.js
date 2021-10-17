const mongoose=require("mongoose");


const PostSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    writtenBy:{
        type:String,
        required:true
    },
    dateAdded:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }


});

module.exports=mongoose.model("Post",PostSchema);