require('dotenv').config();

const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = {
    sign: (data) => {
        const token = jwt.sign(data,secret);
        return token;
    },

    verify: (data) => {
        return "";
    }
}