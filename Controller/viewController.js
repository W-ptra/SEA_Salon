const express = require('express');
const router = express.Router();
const {isAuthenticated,isAlreadyLogin,isRoleAdmin,isRoleCustomer} = require("../middleware/authenticationMiddleware");
const {getReview} = require("../model/reviewModel");
const {getService} = require("../model/serviceModel");
const {getBranch} = require("../model/branchModel");

router.get('/', (req, res) => {
    return res.status(302).redirect("/home");
});

router.get('/home',async (req, res) => {
    const dummy_review = await getReview();
    const service_list = await getService();
    
    if(req.session.role === "customer")
        return res.status(200).render('homeForCustomer',{dummy_review,service_list});

    if(req.session.role === "admin")
        return res.status(302).redirect("/dashboard");

    return res.status(200).render('home',{dummy_review,service_list})
});
router.get('/reservation',isAuthenticated,isRoleCustomer, async (req, res) => {

    const service_list = await getService();

    return res.status(200).render('reservation',{service_list});
});

router.get('/register',isAlreadyLogin, (req, res) => {
    return res.status(200).render('register')
});

router.get('/login',isAlreadyLogin, (req, res) => {
    return res.status(200).render('login')
});

router.get('/logout',isAuthenticated, (req, res) => {
    req.session.destroy();
    return res.status(301).redirect("/home");
});

router.get('/dashboard',isRoleAdmin,async (req, res) => {

    const branch_list = await getBranch();
    const service_list = await getService();

    return res.status(200).render('dashboard',{branch_list,service_list})
});

router.use((req,res,next)=>{
    return res.status(404).send("<h1>404 NOT FOUND</h1>");
});

module.exports = router;