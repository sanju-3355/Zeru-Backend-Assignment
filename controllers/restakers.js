const Restaker = require('../models/Restaker');

exports.getRestakers = async (req, res) => {
  try {
    const data = await Restaker.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
