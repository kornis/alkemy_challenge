const auth = require('../auth');
function authMiddleware(req, res, next){
    console.log("los headers",req.headers)
    if(req.headers.authentication){
        const token = req.headers.authentication.replace('Bearer ',"");
        console.log("llegó el token:", token)
        const response = auth.verify(token)
        if(response.err && response.err.name === "TokenExpiredError"){
            console.log('token expired')
            return res.status(401).json({
                message: "Token expired."
            })
        }
        if(response.err && response.err.name === "JsonWebTokenError"){
            console.log("invalid token")
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        if(response.err){
            console.log("unexpected error")
            return res.status(401).json({
                message: "Unexpected error. Try again later."
            })
        }
        if(response.err === null){
            console.log("usser logged")
            req.userLogged = {
                id: response.data.sub,
                email: response.data.email
            }
            return next();
        }
    }
    console.log("user not logged")
    return next();
    
}

module.exports = authMiddleware;