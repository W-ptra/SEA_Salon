const express = require('express');
const router = express.Router();
const {isAuthenticated,isAlreadyLogin} = require("../middleware/authenticationMiddleware");
const {getReview} = require("../model/reviewModel");

router.get('/', (req, res) => {
    return res.status(302).redirect("/home");
});

router.get('/home',async (req, res) => {
    const dummy_review = await getReview();
    
    if(req.session.role)
        return res.status(200).render('homeForCustomer',{dummy_review});

    return res.status(200).render('home',{dummy_review})

});
router.get('/reservation',isAuthenticated,async (req, res) => {

    // if(req.session.role === "admin")
    //     return res.status

    return res.status(200).render('reservation');
});

router.get('/register',isAlreadyLogin, (req, res) => {
    return res.status(200).render('register')
});

router.get('/login',isAlreadyLogin, (req, res) => {
    return res.status(200).render('login')
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    return res.status(301).redirect("/home");
});

router.get('/dashboard', (req, res) => {
    return res.status(301).redirect("/dashboard");
});

module.exports = router;