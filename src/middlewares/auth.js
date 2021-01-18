const auth = require('../auth');
function authMiddleware(req, res, next){
    if(req.headers.authorization){
        const token = req.headers.authorization.replace('Bearer ',"");
        const response = auth.verify(token)
        if(response.err && response.err.name === "TokenExpiredError"){
            return res.status(401).json({
                message: "Token expired."
            })
        }
        if(response.err && response.err.name === "JsonWebTokenError"){
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        if(response.err){
            return res.status(401).json({
                message: "Unexpected error. Try again later."
            })
        }
        if(response.err === null){
            console.log(response)
            req.userLogged = {
                id: response.data.sub,
                email: response.data.email
            }
            return next();
        }
    }
    return next();
    
}

module.exports = authMiddleware;