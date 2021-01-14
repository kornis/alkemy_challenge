const { readFileSync, writeFileSync } = require('fs');
const db = require('../db/models');

module.exports = {
    getAllMovements: async (req, res) => {
        try {
            let data = await db.budget.findAll();
            return res.status(200).json({
                data,
                message: "Data found"
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
            return res.status(200).json({
                data,
                message: "Data found"
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Unexpected error... try later."
            })
        }
    },

    storeMovement: async (req, res) => {
        const movement_obj = {
            ...req.body
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
        const movement_obj = {
            ...req.body
        }
        try {
            const movement = await db.budget.update(movement_obj, { where: { id: req.params.id } });
            return res.status(201).json({
                data: movement,
                message: "Movement updated"
            });
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Unexpected error... try later."
            })
        }
    },

    deleteMovement: async (req, res) => {
        try {
            const movement = await db.budget.delete({ where: { id: req.params.id } });
            return res.status(201).json({
                data: movement,
                message: "Movement deleted"
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({
                message: "Unexpected error... try later."
            });
        }
    },
}