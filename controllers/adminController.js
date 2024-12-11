const db = require('../config/db');

// Add new grocery item
exports.addGrocery = (req, res) => {
  const { name, price, stock } = req.body;
  const query = 'INSERT INTO groceries (name, price, stock) VALUES (?, ?, ?)';
  db.query(query, [name, price, stock], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: 'Grocery added successfully', id: result.insertId });
  });
};

// Get all groceries
exports.getAllGroceries = (req, res) => {
  const query = 'SELECT * FROM groceries';
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Remove a grocery item
exports.removeGrocery = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM groceries WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Grocery removed successfully' });
  });
};

// Update a grocery item
exports.updateGrocery = (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  const query = 'UPDATE groceries SET name = ?, price = ?, stock = ? WHERE id = ?';
  db.query(query, [name, price, stock, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Grocery updated successfully' });
  });
};

// Manage inventory
exports.manageInventory = (req, res) => {
  const { id } = req.params;
  const { stock } = req.body;
  const query = 'UPDATE groceries SET stock = ? WHERE id = ?';
  db.query(query, [stock, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Inventory updated successfully' });
  });
};
