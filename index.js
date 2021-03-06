const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./db/connect');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/loggedIn');

// Functions
const app = express();
connectDb();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/api/user', authRoute);
app.use('/api/post', postRoute);

app.get('/', (req, res) => {
  res.send('home page');
});

const port = process.env.PORT || '5000';

app.listen(port, () => {
  console.log('server running');
});
