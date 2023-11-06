// Import the mongoose library
const mongoose = require('mongoose');

// Define Schema 1: Storing and Reading All Bets
const allBetsSchema = new mongoose.Schema({
  address: String,
  global_bet_id: Number,
  bet_id: Number,
  bet_team1: String,
  bet_team1_amount: Number,
  bet_team2: String,
  bet_team2_amount: Number,
  bet_description: String,
  bet_name: String,
});

// Define Schema 2: Getting Details of a Single User Bet from Bet ID
const userBetsSchema = new mongoose.Schema({
  bet_id: Number,
  global_bet_id: Number,
  amount_deposited: Number,
  team_deposited_to: String,
});

// Create models based on the schemas
const AllBets = mongoose.model('AllBets', allBetsSchema);
const UserBets = mongoose.model('UserBets', userBetsSchema);

// Export the models
module.exports = {
  AllBets,
  UserBets,
};
