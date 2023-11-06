const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://sudeeprevankar03:PmchGJeFhizzV824@cluster0.wlefphy.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI

mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;
