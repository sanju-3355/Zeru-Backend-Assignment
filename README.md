# A Restaking Info API from EigenLayer
### Objective:
 Create a backend service (Node.js + Python optionally) that aggregates and exposes EigenLayer restaking data. The service should query relevant onchain sources or subgraphs to expose:

> Demo 
> Link :  

### Usage 

``` 
git clone <github repository link>  //to clone the github repository
npm install                         //to install all the dependencies required to run the application
npm start                           //to start the application
```  

## 📦 Features

- Fetch restakers and the amount of stETH restaked.
- List AVS validator metadata (delegated stake, slash history, status).
- Return reward breakdown per wallet address.
- Includes data fetching and insertion scripts.
- Clean modular code using Express.js and MongoDB.

## Scope of the API
### 1. User Restaking Info

- Fetch a list of users who restaked their stETH

- Include:

  - User address
  - Amount restaked (in stETH)
  - Target AVS validator/operator address


### 2. Validator Metadata

- For each validator:

  - Operator address / ID
  - Total delegated stake
  - Slash history (include when, how much, reason if available)
  - Validator status (active, jailed, slashed, etc.)

### 3. Reward Insights

- For a given wallet address, return:

  - Total restaking rewards received
  - Breakdown per validator
  - Optional: timestamps of rewards if available

## 📦 Deliverables
- A REST API with the following endpoints (or types):

  - `GET /restakers` → List of restakers with amount + validator
  - `GET /validators` → List of validators with their stats
  - `GET /rewards/:address` → Reward info for a specific wallet

- Script to fetch onchain data or from relevant APIs (e.g., EigenLayer subgraphs, Lido, etc.)
- **README.md** with setup instructions, data source explanations, and assumptions


## 🛠️ Tech Expectations

- Use Node.js (preferred) for API layer
- Use Python if helpful for data processing (e.g., parsing logs/events)
- SQlite or MongoDB can be used for storing the info
- Clear error handling, modular structure, and clean code


### Built With

- Node.js
- Express.js
- MongoDB + Mongoose
- The Graph (Subgraphs)
- Postman (for testing)

## Data Resources

- **EigenLayer Subgraph :** https://thegraph.com/hosted-service/subgraph/eigenlayer/eigenlayer

- **Lido stETH Subgraph :** https://thegraph.com/hosted-service/subgraph/lidofinance/lido