const express = require('express');
const router = express.Router();
const {createNewReview} = require("../model/reviewModel");
const {createnewUser} = require("../model/userModel");
const {login} = require("../helper/authentication");

router.post('/auth/login',async (req,res)=>{
    const email = req.body.email;
    const plainPassword = req.body.password;
    
    const isAuthorize = await login(email,plainPassword);
    console.log(isAuthorize);

    if(isAuthorize === true)
        console.log(isAuthorize);
        return res.json({message:"OK"});

    return res.status(401).json({message:isAuthorize});
})

router.post('/auth/register',async (req,res)=>{
    
    newUser = {
        name:req.body.name,
        email:req.body.email,
        phone_number:req.body.phone_number,
        password:req.body.password,
    };
    
    await createnewUser(newUser);

    return res.status(201).redirect("/login");
})

router.post('/review',async (req,res)=>{
    //console.log(req.body);
    const newReview = {
        name:req.body.name,
        review:req.body.review,
        star:req.body.star
    }
    
    await createNewReview(newReview);
    return res.status(201).json({message:"review sucessfully created"});
})

module.exports = router;