const express = require('express');
const connectDb = require('./db/connect');

const app = express();
connectDb();

const authRoute = require('./routes/auth');

app.get('/', (req, res) => {
  res.send('home page');
});

app.listen('3000', () => {
  console.log('server running');
});
