function isAuthenticated(req,res,next){
    if(req.session.role)
        next();

    return res.redirect("/login");
}

function isAlreadyLogin(req,res,next){
    if(req.session.role)
        return res.redirect("/home");
    next();
}

function isRoleAdmin(req,res,next){
    if(req.session.role === "admin")
        next();
    return res.redirect("/home");
}

module.exports = {isAuthenticated,isAlreadyLogin,isRoleAdmin};