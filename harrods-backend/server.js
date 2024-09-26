const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware for security and request parsing
app.use(cors());
app.use(helmet());
app.use(express.json());

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Purchase endpoint to save basket data
app.post('/purchase', async (req, res) => {
  const basket = req.body;

  // Validate basket structure
  if (!Array.isArray(basket) || basket.length === 0) {
    return res.status(400).json({ message: 'Invalid basket data' });
  }

  try {
    // Write basket data to a file
    await fs.writeFile('basketData.json', JSON.stringify(basket, null, 2));
    return res.json({ message: 'Purchase data saved successfully!' });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to save purchase data' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
