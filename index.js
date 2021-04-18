const express = require('express');
const app = express();
const authRoute = require('./routes/auth');

app.use('/api/user', authRoute);

app.get('/', (req, res) => {
  res.send('home page');
});

app.listen('3000', () => {
  console.log('server running');
});
