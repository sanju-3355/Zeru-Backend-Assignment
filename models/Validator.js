const mongoose = require('mongoose');

const ValidatorSchema = new mongoose.Schema({
  operatorId: String,
  totalDelegated: Number,
  slashHistory: [
    {
      timestamp: Date,
      amount: Number,
      reason: String
    }
  ],
  status: String
});

module.exports = mongoose.model('Validator', ValidatorSchema);
