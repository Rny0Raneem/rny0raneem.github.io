// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 80;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  const data = req.body; // Access the JSON data sent by Vital API
  console.log('Webhook data received:', data);

  // Handle the data (e.g., save to a database, perform actions, etc.)
  res.status(200).json({ status: 'success' });
});


app.get('/webhook', (req, res) => {
  const data = req.body; // Access the JSON data sent by Vital API
  console.log('Webhook data received:', data);

  // Handle the data (e.g., save to a database, perform actions, etc.)
  res.status(200).json({ status: 'success' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
