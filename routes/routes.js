const express = require('express');
const router = express.Router();
const {
  createBet,
  createUserBet,
  updateBet,
  getAllBets,
  getBetDetailsbyID,
  getUserBets,
  getUserBetsbyID
} = require('../controllers/storageController.js'); // Assuming the controller functions are in a separate file

// Create a new bet entry in AllBets collection (POST request)
router.post('/newbet', createBet);

// Create a new user bet entry in UserBets collection (POST request)
router.post('/userbets', createUserBet);

// Update an existing bet entry in AllBets collection (PATCH request)
router.patch('/allbets/:id', updateBet);

// Read all bets from the AllBets collection (GET request)
router.get('/allbets', getAllBets);

router.get('/allbets/:id', getBetDetailsbyID);

router.get('/userbets', getUserBets);

router.get('/userbets/:id', getUserBetsbyID);

// Export the router
module.exports = router;
