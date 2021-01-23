const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {login: loginValidation} = require('../validations');


router.post('/email', userController.getEmail);
router.post('/register',loginValidation , userController.storeUser);
router.post('/login', loginValidation, userController.login);

module.exports = router;