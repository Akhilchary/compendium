const router = require("express").Router();
const Post = require("../models/Post");
// const fileUpload = require('express-fileupload')
// const fs = require('fs')

//create post
router.post("/",async(req,res)=>{
   
    
    try{
        const newPost=new Post(req.body);
        const savedPost=await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err+" "+"could not post");
    }
});

//delete post

router.delete("/:id",async (req,res)=>{
    
    try{
        const post=await Post.findById(req.params.id);
        try{
            const p=post.title;
            await post.delete();
            res.status(200).json(p+" "+"post deleted",);
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(500).json(err);
    }
});


//update post
router.put("/:id",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        try{
            const updatedPost=await Post.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true} );
            res.status(200).json(updatedPost+"updated");
        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(500).json(err);
    }
});


//get post

router.get("/:id",async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }

})


//get all posts

router.get("/",async(req,res)=>{
    try{
        let posts=await Post.find();
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports=router;