const Validator = require('../models/Validator');

exports.getValidators = async (req, res) => {
  try {
    const data = await Validator.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
