// src/index.ts
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Route to get SOL/USDC price from Backpack Exchange
app.get('/api/sol_usdc', async (req, res) => {
  try {
    const response = await axios.get('https://api.backpack.exchange/api/v1/trades?symbol=SOL_USDC');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching SOL/USDC price:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});