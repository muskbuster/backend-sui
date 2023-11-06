const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors')
app.use(cors());
// Import the database configuration
const db = require('./schema/db.js'); // Path to your db.js file

// Import your routes
const router = require('G:/Backend_sui/routes/routes.js');

// Middleware for parsing JSON requests
app.use(express.json());

// Use the betRoutes for handling bet-related routes
app.use('/bets', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port 3000`);
});
