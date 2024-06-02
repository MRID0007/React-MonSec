const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Define a simple route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to MonSec API');
});

// Import and use user routes
const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
