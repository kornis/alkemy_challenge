const { readFileSync, writeFileSync } = require('fs');
const db = require('../db/models');

module.exports = {
    getAllDeposits: async (req, res) => {
        let data = await db.deposit.findAll();

        return res.status(200).json({
            data,
            message: "Data found"
        })
    },

    getDeposit: (req, res) => {
        return res.status(201).json({
            data,
            message: "Deposit created"
        })
    },

    storeDeposit: (req, res) => {
        return res.status(201).json({
            data,
            message: "Deposit created"
        })
    },

    updateDeposit: (req, res) => {
        return res.status(201).json({
            data,
            message: "Deposit created"
        })
    },

    deleteDeposit: (req, res) => {
        return res.status(201).json({
            data,
            message: "Deposit created"
        })
    },
}