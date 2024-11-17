const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json()); // For parsing JSON

// Routes
// app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

module.exports = app;

