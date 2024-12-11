const db = require('../config/db');

// View all available groceries
exports.viewGroceries = (req, res) => {
  const query = 'SELECT * FROM groceries WHERE stock > 0';
  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Place an order
exports.placeOrder = (req, res) => {
  const { user_id, groceries } = req.body;
  let total_price = 0;

  groceries.forEach(item => {
    total_price += item.price * item.quantity;
  });

  groceries.forEach(item => {
    const query = 'INSERT INTO orders (user_id, grocery_id, quantity, total_price) VALUES (?, ?, ?, ?)';
    db.query(query, [user_id, item.id, item.quantity, total_price], (err, result) => {
      if (err) return res.status(500).send(err);
    });
  });

  res.status(201).json({ message: 'Order placed successfully', total_price });
};
