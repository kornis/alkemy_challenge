const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/register', userController.storeUser);
router.post('/login', userController.login);

module.exports = router;