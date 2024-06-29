function isAuthenticated(req,res,next){
    if(req.session.role)
        next();
    else{
        return res.redirect("/login");
    }
}

function isAlreadyLogin(req,res,next){
    if(req.session.role)
        return res.redirect("/home");
    else{
        next();
    }
}

function isRoleCustomer(req,res,next){
    if(req.session.role === "customer")
        next();
    else{
        return res.redirect("/dashboard");
    }
}

function isRoleAdmin(req,res,next){
    
    if(req.session.role !== "admin"){
        return res.redirect("/home");
    }
    else{
        next();
    }
}

module.exports = {isAuthenticated,isAlreadyLogin,isRoleAdmin,isRoleCustomer};