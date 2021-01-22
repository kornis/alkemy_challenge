const { body } = require('express-validator');

module.exports = {

    login: [
        body('email')
        .notEmpty().withMessage("Email cannot be empty").bail()
        .isEmail().withMessage("Email input with wrong format")    ,
        body('password')
        .isLength({min:6}).withMessage("Password with at least 6 characters")
        .notEmpty().withMessage('Password cannot be empty')
    ],

    register: [
        body('email')
        .notEmpty().withMessage("Email cannot be empty").bail()
        .isEmail().withMessage("Email input with wrong format")    ,
        body('password')
        .isLength({min:6}).withMessage("Password with at least 6 characters")
        .isEmpty().withMessage('Password cannot be empty')
    ],

    createMovement: [
        body('movement_name').notEmpty().withMessage("Movement name cannot be empty").bail(),
        body('qty').notEmpty().withMessage("Qty cannot be empty").bail(),
        body('type').notEmpty().withMessage("Type cannot be empty").bail(),
        body('date').notEmpty().withMessage("Date cannot be empty").bail()
    ],

    updateMovement: [
        body('movement_name').notEmpty().withMessage("Movement name cannot be empty").bail(),
        body('qty').notEmpty().withMessage("Qty cannot be empty").bail(),
        body('type').notEmpty().withMessage("Type cannot be empty").bail(),
        body('date').notEmpty().withMessage("Date cannot be empty").bail()
    ]
}