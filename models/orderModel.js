const db = require('../config/db');

const Order = {
  create: (userId, callback) =>
    db.query('INSERT INTO orders (userId) VALUES (?)', [userId], callback),

  addItem: (orderId, groceryId, quantity, callback) =>
    db.query('INSERT INTO order_items (orderId, groceryId, quantity) VALUES (?, ?, ?)',
      [orderId, groceryId, quantity], callback),
  
  getUserOrders: (userId, callback) =>
    db.query('SELECT * FROM orders WHERE userId=?', [userId], callback)
};

module.exports = Order;
