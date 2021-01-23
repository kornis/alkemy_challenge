const db = require('../db/models');
const bcrypt = require('bcrypt');
const auth = require('../auth');
const { validationResult } = require('express-validator');


module.exports = {
    getEmail: async (req, res) => {
        try{
            const user = await db.users.findOne({where:{email: req.body.email}});
            if(user){
                return res.status(400).json({
                    status: res.statusCode,
                    message: "Email Exists"
                })
            }else{
                return res.status(200).json({
                    status: res.statusCode,
                    message: "Email ok"
                })
            }
        }
            catch(err){
                console.log(err);
                return res.status(500).json({
                    error: "Error, try again later",
                    status: res.statusCode,
                    message: "Error, try again later..."
                })
            }
        
    },

    storeUser: async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(401).json({
                status: res.statusCode,
                errors: errors.mapped(),
                message: "Error. Please, try again."
            })
        }
        try{
            const password = bcrypt.hashSync(req.body.password, 12);
            req.body.password = password;
            const response = await db.users.create({...req.body});
        
                let payload = {
                    sub: response.id,
                    email: response.email,
                }
                const token = auth.sign(payload);
                return res.status(201).json({
                    status: res.statusCode,
                    data: response,
                    token,
                    message: 'User created...'
                })
            
            }
        catch(err){
            console.log(err.errors[0].message);
            return res.status(500).json({
                error: err.errors[0].message,
                status: res.statusCode,
                message: err.errors[0].message
            })
        }

    },

    login: async (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(401).json({
                status: res.statusCode,
                errors: errors.mapped(),
                message: "Error. Please, try again."
            })
        }
        try{
        const user = await db.users.findOne({where:{email: req.body.email}});
        if(user && bcrypt.compareSync(req.body.password, user.password)){
            let payload = {
                sub: user.id,
                email: user.email,
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
                status: res.statusCode,
                data,
                message:"User logged"
            })
        }
        return res.status(401).json({
            error:"Email or password incorrect",
            status: res.statusCode,
            message: "Email or password incorrect"
        })
        }catch(err){
            console.log(err);
            return res.status(500).json({
                error: "Unexpected error. Try again later",
                status: res.statusCode,
                message: "Unexpected error. Try again later..."
            });           
        }
    }
}