const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');

/* GET home page. */
router.get('/', budgetController.index);

module.exports = router;
