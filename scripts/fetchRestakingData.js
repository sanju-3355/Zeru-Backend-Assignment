const axios = require('axios');
const mongoose = require('mongoose');
const Restaker = require('../models/Restaker');

require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);

async function fetchRestakers() {
  const query = `
    {
      restakers(first: 100) {
        id
        amount
        operator {
          id
        }
      }
    }
  `;
  const response = await axios.post('https://api.thegraph.com/subgraphs/name/eigenlayer/eigenlayer', {
    query
  });

  const restakers = response.data.data.restakers;
  for (const r of restakers) {
    await Restaker.findOneAndUpdate(
      { address: r.id },
      {
        address: r.id,
        amountRestaked: r.amount,
        validator: r.operator?.id || 'unknown'
      },
      { upsert: true }
    );
  }

  console.log('Restakers updated.');
  process.exit(0);
}

fetchRestakers();
