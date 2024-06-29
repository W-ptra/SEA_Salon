function isAlreadyLogin(req,res,next){
    if(req.session.role)
        return res.redirect("/home");
    else
        next();
}

module.exports = isAlreadyLogin;