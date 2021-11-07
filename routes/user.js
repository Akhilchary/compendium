const router = require("express").Router();
const User = require("../models/User");
const express=require('express');
const md5=require('md5');
// const AddArticle =require("../../frontend/src/pages/write/AddArticle");
router.use(express.json({ limit: '50mb' }));
router.use(express.urlencoded({ limit: '50mb', extended: true }));

router.post('/',async(req,res)=>{
    try{
        const username=req.body.username
        const password=md5(req.body.password)
        const newUser=new User({username:username,password:password});
        const savedUser=await newUser.save();
        res.status(200).json(savedUser);

    }catch(err){
        res.status(500).json(err)
    }
});

router.post('/login',async(req,res)=>{
    //console.log("it is in login");
    try{
        const username=req.body.username
        const password=md5(req.body.password)
        User.findOne({username:username},(err,foundUser)=>{
            if(err){
                console.log(err);
            }else{
                if(foundUser){
                    if(foundUser.password===password){
                        //const adart= <h1>sdfj</h1>
                        //console.log("matched")
                        res.send('found');
                    }else{
                        res.send("wrong password");
                    }
                }else{
                    res.send('not found');
                }
            }
        })
    }catch(err){

    }
})

module.exports=router;