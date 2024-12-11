const express = require('express');
const dotenv = require('dotenv').config();
const db = require('./config/db');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
