const auth = require('../auth');
function authMiddleware(req, res, next){
    if(req.headers.authentication){
        const token = req.headers.authentication.replace('Bearer ',"");
        const response = auth.verify(token)
        console.log("la respuesta del verify", response)
        if(response.err && response.err.name === "TokenExpiredError"){
            console.log('token expired')
            return res.status(401).json({
                message: "Token expired."
            })
        }
        if(response.err && (response.err.name === "JsonWebTokenError" || response.err.JsonWebTokenError === "jwt malformed")){
            console.log("invalid token")
            return res.status(401).json({
                error: "Invalid token",
                message: "Invalid token"
            })
        }
        if(response.err){
            return res.status(401).json({
                error: "Unexpected error",
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