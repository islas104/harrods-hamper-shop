const express = require('express');
const cors = require('cors');
const fs = require('fs').promises; // Using fs.promises for async file writing
const helmet = require('helmet'); // Security headers
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json()); // Replacing body-parser with express's built-in parser
app.use(helmet());

// Rate limiter middleware to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});

app.use(limiter);

// API endpoint to handle basket submission
app.post('/purchase', async (req, res) => {
  const basket = req.body;

  // Data validation
  if (!Array.isArray(basket) || basket.length === 0) {
    return res.status(400).json({ message: 'Invalid basket data' });
  }

  try {
    // Write the basket data to a file asynchronously
    await fs.writeFile('basketData.json', JSON.stringify(basket, null, 2));
    res.json({ message: 'Purchase data saved successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to save purchase data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
