const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const loggedInMiddleware = require('../middlewares/loggedIn');
/* GET home page. */
router.get('/movements', loggedInMiddleware, budgetController.getAllMovements);
router.get('/movement/:id', loggedInMiddleware,  budgetController.getMovement);
router.post('/movement',  loggedInMiddleware, budgetController.storeMovement);
router.put('/movement/:id',  loggedInMiddleware, budgetController.updateMovement);
router.delete('/movement/:id',  loggedInMiddleware, budgetController.deleteMovement);

module.exports = router;
