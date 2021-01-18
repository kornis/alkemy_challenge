require('dotenv').config();

const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = {
    sign: (data) => {
        const token = jwt.sign(data,secret,{expiresIn:60*15});
        return token;
    },

    verify: (token) => {
    
            const response = jwt.verify(token, secret, (err, data) => {
                return {err, data}});
            return response;
     
    }

}