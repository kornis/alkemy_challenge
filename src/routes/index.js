const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');

/* GET home page. */
router.get('/movements', budgetController.getAllMovements);
router.get('/movement/:id', budgetController.getMovement);
router.post('/movement', budgetController.storeMovement);
router.put('/movement/:id', budgetController.updateMovement);
router.delete('/movement/:id', budgetController.deleteMovement);

module.exports = router;
