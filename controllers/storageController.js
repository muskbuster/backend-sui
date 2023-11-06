  // Import the models
  const { AllBets, UserBets } = require('../schema/schema.js'); // Assuming the model.js file is in the same directory

  // Controller function to create a new bet entry in AllBets collection
  const createBet = async (req, res) => {
    try {
      const newBet = new AllBets(req.body);
      const result = await newBet.save();
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating the bet entry.');
    }
  };

  // Controller function to create a new user bet entry in UserBets collection
  const createUserBet = async (req, res) => {
    try {
      const newUserBet = new UserBets(req.body);
      const result = await newUserBet.save();
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating the user bet entry.');
    }
  };

  // Controller function to update a bet entry in AllBets collection
  const updateBet = async (req, res) => {
    try {
      const { global_bet_id } = req.params; // Get the ID of the bet to update from the URL parameters
      const updatedData = req.body; // Updated data for the bet

      const result = await AllBets.findOneAndUpdate(global_bet_id, updatedData, { new: true });

      if (!result) {
        return res.status(404).send('Bet not found.');
      }

      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating the bet entry.');
    }
  };

  // Controller function to get all bet entries from AllBets collection
  const getAllBets = async (req, res) => {
    try {
      const allBets = await AllBets.find();
      res.status(200).json(allBets);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching all bets.');
    }
  };

  // Controller function to get a specific bet entry from AllBets collection by ID
  const getBetDetailsbyID = async (req, res) => {
    try {
      const { id } = req.params;
      const bet = await AllBets.findById(id);

      if (!bet) {
        return res.status(404).send('Bet not found.');
      }

      res.status(200).json(bet);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching bet details.');
    }
  };

  // Controller function to get all user bet entries from UserBets collection
  const getUserBets = async (req, res) => {
    try {
      const userBets = await UserBets.find();
      res.status(200).json(userBets);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching user bets.');
    }
  };

  // Controller function to get a specific user bet entry from UserBets collection by ID
  const getUserBetsbyID = async (req, res) => {
    try {
      const { id } = req.params;
      const userBet = await UserBets.findById(id);

      if (!userBet) {
        return res.status(404).send('User bet not found.');
      }

      res.status(200).json(userBet);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching user bet details.');
    }
  };

  module.exports = {
    createBet,
    createUserBet,
    updateBet,
    getAllBets,
    getBetDetailsbyID,
    getUserBets,
    getUserBetsbyID,
  };
