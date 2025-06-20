const express = require('express');
const router = express.Router();
const { getRewardByAddress } = require('../controllers/rewards');

router.get('/:address', getRewardByAddress);

module.exports = router;
