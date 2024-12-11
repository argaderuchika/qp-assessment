const express = require('express');
const router = express.Router();
const { addGrocery, getAllGroceries, removeGrocery, updateGrocery, manageInventory } = require('../controllers/adminController');


router.post('/groceries', addGrocery);          // Add new grocery item
router.get('/groceries', getAllGroceries);      // View all grocery items
router.delete('/groceries/:id', removeGrocery); // Remove a grocery item
router.put('/groceries/:id', updateGrocery);    // Update grocery item
router.put('/groceries/inventory/:id', manageInventory); // Update inventory

module.exports = router;
