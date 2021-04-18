const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./db/connect');
const authRoute = require('./routes/auth');

// Functions
const app = express();
connectDb();

// Middlewares
app.use(bodyParser.json());
app.use('/api/user', authRoute);

app.get('/', (req, res) => {
  res.send('home page');
});

app.listen('3000', () => {
  console.log('server running');
});
