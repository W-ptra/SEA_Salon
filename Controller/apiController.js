const express = require('express');
const router = express.Router();
const {getReview,createNewReview} = require("../model/reviewModel");
const {createnewUser} = require("../model/userModel");
const {getRevervation,createNewReservation} = require("../model/reservationModel");
const {getBranch,createNewBranch} = require("../model/branchModel");
const {getService,createNewService} = require("../model/serviceModel");
const validateField = require("../middleware/validateField")
const {login} = require("../helper/authentication");
require("dotenv").config();

router.post('/auth/login',validateField,async (req,res)=>{
    try{
        const email = req.body.email;
        const plainPassword = req.body.password;
        
        const isAuthorize = await login(email,plainPassword);
    
        if(isAuthorize.isMatch === true){
            req.session.role = isAuthorize.role;
            return res.json({message:"OK"});
        }
    
        return res.status(401).json({message:isAuthorize});
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }
})

router.post('/auth/register',validateField,async (req,res)=>{
    try{
        newUser = {
            name:req.body.name,
            email:req.body.email,
            phone_number:req.body.phone_number,
            password:req.body.password,
        };
        
        await createnewUser(newUser);
    
        return res.status(201).json({message:"OK"});
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }
    
})

router.get('/review',async (req,res)=>{
    try{
        const reviewList = await getReview();
        return res.status(200).json(reviewList);
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }

})

router.post('/review',async (req,res)=>{
    try{
        const newReview = {
            name:req.body.name,
            review:req.body.review,
            star:req.body.star
        }
        
        await createNewReview(newReview);
        return res.status(201).json({message:"review sucessfully created"});
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }
})

router.get('/reservation',async (req,res)=>{
    try{
        if(req.query.key !== process.env.KEY)
            return res.status(401).json({message:"Missing or wrong Api Key"});
    
        const reservationList = await getRevervation();
        return res.status(200).json(reservationList);
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }
})

router.post('/reservation',async (req,res)=>{
    try{
        const newReservation = {
            name:req.body.name,
            phone_number:req.body.phone_number,
            service:req.body.service,
            date_when:req.body.date_when,
            session_time:req.body.session_time
        };
        
        await createNewReservation(newReservation);
        return res.status(201).json({message:"reservation sucessfully created"});
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }
})

router.get('/branch',async (req,res)=>{
    try{
        const branchList = await getBranch();
        return res.status(200).json(branchList);
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }
})

router.post('/branch',async (req,res)=>{
    try{
        const newBranch = {
            name:req.body.name,
            location:req.body.location,
            open_time:req.body.open,
            close_time:req.body.close
        };
    
        await createNewBranch(newBranch);
        return res.status(201).json({message:"branch sucessfully created"});
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }
});

router.get('/service',async (req,res)=>{
    try{
        const serviceList = await getService();
        return res.status(200).json(serviceList);
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }
})

router.post('/service',async (req,res)=>{
    try{
        const newService = {
            name:req.body.name,
            duration:req.body.duration
        };
    
        await createNewService(newService);
        return res.status(201).json({message:"Service sucessfully created"});
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong"});
    }
});

module.exports = router;