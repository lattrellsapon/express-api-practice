// Bring in express
const express = require('express');

// Init express
const app = express();

// Routes
app.get('/', (req, res) => {
  res.json({
    msg: 'Welcome to the Express API Tutorial'
  });
});

// Define routes or bring in routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// The express app needs to listen to a port
// The PORT variable below is used for either production or development

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
