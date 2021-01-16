const db = require('../db/models');
const bcrypt = require('bcrypt');

module.exports = {
    getAllUsers: async (req, res) => {
        try{
            const users = await db.users.findAll();
            return res.status(200).json({
                data: users,
                message: "Users found..."
            })
        }
            catch(err){
                console.log(err);
                return res.status(500).json({
                    message: "Error, try again later..."
                })
            }
        
    },

    storeUser: async (req, res) => {
        try{
            const password = bcrypt.hashSync(req.body.password, 12);
            req.body.password = password;
            const response = await db.users.create({...req.body});
            return res.status(201).json({
                data: response,
                message: 'User created...'
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({
                message: 'Error, try again later...'
            })
        }

    }
}