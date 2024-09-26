const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import CORS module
const fs = require('fs');
const app = express();
const PORT = 5001;

// Enable CORS middleware so that the front-end (React) can make API requests
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// API endpoint to handle basket submission
app.post('/purchase', (req, res) => {
  const basket = req.body;

  // Write the basket data to a file
  fs.writeFile('basketData.json', JSON.stringify(basket, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to save purchase data' });
    }
    res.json({ message: 'Purchase data saved successfully!' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
