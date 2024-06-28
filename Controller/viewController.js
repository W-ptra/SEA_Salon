const express = require('express');
const router = express.Router();
const {getReview} = require("../model/reviewModel");

router.get('/', (req, res) => {
    res.status(302).redirect("/home");
});

router.get('/home',async (req, res) => {
    const dummy_review = await getReview();
        
    res.status(200).render('home',{dummy_review});
});

router.get('/register', (req, res) => {
    res.status(200).render('register')
});

router.get('/login', (req, res) => {
    res.status(200).render('login')
});

module.exports = router;