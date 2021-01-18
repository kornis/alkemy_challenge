const logged = (req, res, next) => {
    if(!req.userLogged){
       return res.status(401).json({
           error: "Not logged in",
           message: "Please login first."
       })
    }
    else{
        return next();
    }
}

module.exports = logged;