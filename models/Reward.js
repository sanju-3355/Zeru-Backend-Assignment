const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
  address: String,
  totalRewards: Number,
  breakdown: [
    {
      validator: String,
      amount: Number
    }
  ]
});

module.exports = mongoose.model('Reward', RewardSchema);
