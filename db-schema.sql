CREATE DATABASE grocery_booking;

USE grocery_booking;

CREATE TABLE groceries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    orderId INT,
    groceryId INT,
    quantity INT,
    FOREIGN KEY (orderId) REFERENCES orders(id),
    FOREIGN KEY (groceryId) REFERENCES groceries(id)
);
