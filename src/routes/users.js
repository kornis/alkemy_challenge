const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {login: loginValidation} = require('../validations');


router.get('/', userController.getAllUsers);
router.post('/register', userController.storeUser);
router.post('/login', loginValidation, userController.login);

module.exports = router;