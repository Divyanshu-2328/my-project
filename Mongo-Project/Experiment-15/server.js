const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const app = express();

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecommerceDB')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ DB Connection Error:', err));

// Routes
app.use('/products', productRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
