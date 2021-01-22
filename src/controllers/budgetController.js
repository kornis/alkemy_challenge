const db = require('../db/models');
const { validationResult } = require('express-validator')

module.exports = {
    getAllMovements: async (req, res) => {
        try {
            let data = await db.budget.findAll();
            if (data.length > 0) {
                return res.status(200).json({
                    data,
                    message: "Data found"
                })
            }
            return res.status(400).json({
                data: [],
                message: "Empty"
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Unexpected error... try later."
            })
        }
    },

    getMovement: async (req, res) => {
        try {
            let data = await db.budget.findByPk(req.params.id);
            if (data) {
                return res.status(200).json({
                    data,
                    message: "Data found"
                })
            }
            return res.status(404).json({
                data: "",
                message: "Not Found"
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Unexpected error... try later."
            })
        }
    },

    storeMovement: async (req, res) => {
        const errors = validationResult(req);
        if(errors.isEmpty){
            return res.status(401).json({
                status: res.statusCode,
                errors: errors.mapped(),
                message: "Cannot create movement."
            })
        }
        const movement_obj = {
            ...req.body,
            user_id: req.userLogged.id
        }
        try {
            const movement = await db.budget.create(movement_obj);
            return res.status(201).json({
                data: movement,
                message: "Movement stored"
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Unexpected error... try later."
            })
        }
    },

    updateMovement: async (req, res) => {
        const errors = validationResult(req);
        if(errors.isEmpty){
            return res.status(401).json({
                status: res.statusCode,
                errors: errors.mapped(),
                message: "Cannot update movement."
            })
        }
        const movement_obj = {
            movement_name: req.body.movement_name,
            qty: req.body.qty,
            date: req.body.date
        }
        try {
            const movement = await db.budget.update(movement_obj, { where: { id: req.params.id } });
            if (movement[0]) {
                return res.status(201).json({
                    data: "id: " + req.params.id,
                    message: "Movement updated"
                });
            }
            return res.status(404).json({
                message: "Cannot be updated, object not found..."
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Unexpected error... try later."
            })
        }
    },

    deleteMovement: async (req, res) => {
        try {
            const movement = await db.budget.destroy({ where: { id: req.params.id } });
           
            if (movement) {
                return res.status(201).json({
                    data: "id: " + req.params.id,
                    message: "Movement deleted"
                })
            }
            return res.status(404).json({
                message: "Cannot delete, object not found..."
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Unexpected error... try later."
            });
        }
    },
}