// src/app.js
const express = require('express');
const app = express();

app.use(express.json());

// Logging middleware to track requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Request received`);
  next();
});

// Routes
const postsRouter = require('./routes/posts');
app.use('/api/posts', postsRouter);

// Example route for testing
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

module.exports = app;
