const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./db/connect');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/loggedIn');

// Functions
const app = express();
connectDb();

// Middlewares
app.use(bodyParser.json());
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);

app.get('/', (req, res) => {
  res.send('home page');
});

app.listen('3000', () => {
  console.log('server running');
});
