const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaker = require('../models/Restaker');
const Validator = require('../models/Validator');
const Reward = require('../models/Reward');

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const insertData = async () => {
  try {
    await Restaker.deleteMany({});
    await Validator.deleteMany({});
    await Reward.deleteMany({});

    await Restaker.create([
      {
        address: '0xUser1111',
        amountRestaked: 12.5,
        validator: '0xValA'
      },
      {
        address: '0xUser2222',
        amountRestaked: 20,
        validator: '0xValB'
      }
    ]);

    await Validator.create([
      {
        operatorId: '0xValA',
        totalDelegated: 500,
        slashHistory: [
          {
            timestamp: new Date('2024-06-01T00:00:00Z'),
            amount: 10,
            reason: 'Downtime'
          }
        ],
        status: 'active'
      },
      {
        operatorId: '0xValB',
        totalDelegated: 1000,
        slashHistory: [],
        status: 'jailed'
      }
    ]);

    await Reward.create([
      {
        address: '0xUser1111',
        totalRewards: 3.45,
        breakdown: [
          {
            validator: '0xValA',
            amount: 3.45
          }
        ]
      },
      {
        address: '0xUser2222',
        totalRewards: 5.0,
        breakdown: [
          {
            validator: '0xValB',
            amount: 5.0
          }
        ]
      }
    ]);

    console.log('✅ Sample data inserted successfully');
  } catch (error) {
    console.error('❌ Error inserting sample data:', error);
  } finally {
    process.exit();
  }
};

insertData();
