const Reward = require('../models/Reward');

exports.getRewardByAddress = async (req, res) => {
  try {
    const reward = await Reward.findOne({ address: req.params.address });
    if (!reward) return res.status(404).json({ message: 'No rewards found' });
    res.json(reward);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
