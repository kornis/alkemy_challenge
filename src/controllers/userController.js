const db = require('../db/models');
const bcrypt = require('bcrypt');
const auth = require('../auth');

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

    },

    login: async (req, res) => {
        try{
        const user = await db.users.findOne({where:{email: req.body.email}});
        if(user && bcrypt.compareSync(req.body.password, user.password)){
            let payload = {
                sub: user.id,
                email: user.email,
                exp: 1000 * 60 * 15
            }
            const token = auth.sign(payload);
            
            let data = {
                user:{
                    user_id: user.id,
                    email: user.email,
                },
                session:{
                    token
                }
            }
            return res.status(200).json({
                data,
                message:"User logged"
            })
        }
        return res.status(401).json({
            message: "Email or password incorrect"
        })
        }catch(err){
            console.log(err);
            return res.status(500).json({
                message: "Unexpected error. Try again later..."
            });           
        }
    }
}