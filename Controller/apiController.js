const express = require('express');
const router = express.Router();
const {createNewReview} = require("../model/reviewModel");
const {createnewUser} = require("../model/userModel");
const {createNewReservation} = require("../model/reservationModel");
const {createNewBranch} = require("../model/branchModel");
const {createNewService} = require("../model/serviceModel");
const {login} = require("../helper/authentication");

router.post('/auth/login',async (req,res)=>{
    const email = req.body.email;
    const plainPassword = req.body.password;
    
    const isAuthorize = await login(email,plainPassword);

    if(isAuthorize.isMatch === true){
        req.session.role = isAuthorize.role;
        return res.json({message:"OK"});
    }

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

    return res.status(201).json({message:"OK"});
})

router.post('/review',async (req,res)=>{
    const newReview = {
        name:req.body.name,
        review:req.body.review,
        star:req.body.star
    }
    
    await createNewReview(newReview);
    return res.status(201).json({message:"review sucessfully created"});
})

router.post('/reservation',async (req,res)=>{
    const newReservation = {
        name:req.body.name,
        phone_number:req.body.phone_number,
        service:req.body.service,
        date_when:req.body.date_when,
        session_time:req.body.session_time
    }
    
    await createNewReservation(newReservation);
    return res.status(201).json({message:"reservation sucessfully created"});
})

router.post('/branch',async (req,res)=>{
    const newBranch = {
        name:req.body.name,
        location:req.body.location,
        open_time:req.body.open,
        close_time:req.body.close
    }

    await createNewBranch(newBranch);
    return res.status(201).json({message:"branch sucessfully created"});
});

router.post('/service',async (req,res)=>{
    const newService = {
        name:req.body.name,
        duration:req.body.duration
    }

    await createNewService(newService);
    return res.status(201).json({message:"Service sucessfully created"});
});

module.exports = router;