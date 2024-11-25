const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// define Routes
const bookRoutes = require('./endpoint/bookRoutes');
const memberRoutes = require('./endpoint/memberRoutes');
const staffRoutes = require('./endpoint/staffRoutes');
const app = express();


// Middleware
app.use(express.json()); // For parsing JSON

/**
 * The root of the server
 */
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

// Routing
app.use('/books', bookRoutes);
app.use('/members', memberRoutes);
app.use('/staffs', staffRoutes);

/**
 * Middleware handling
 */
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});


module.exports = app;

