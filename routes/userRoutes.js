const express = require('express');
const router = express.Router();
const { viewGroceries, placeOrder } = require('../controllers/userController');

// User routes
router.get('/groceries', viewGroceries);      // View all available groceries
router.post('/orders', placeOrder);           // Place an order

module.exports = router;
