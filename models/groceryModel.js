const db = require('../config/db');

const Grocery = {
  getAll: (callback) => db.query('SELECT * FROM groceries', callback),
  create: (name, price, stock, callback) =>
    db.query('INSERT INTO groceries (name, price, stock) VALUES (?, ?, ?)', [name, price, stock], callback),
  update: (id, name, price, stock, callback) =>
    db.query('UPDATE groceries SET name=?, price=?, stock=? WHERE id=?', [name, price, stock, id], callback),
  delete: (id, callback) => db.query('DELETE FROM groceries WHERE id=?', [id], callback)
};

module.exports = Grocery;
