const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const usersRoute = require('./routes/userRoute');

app.use('/users', usersRoute);

module.exports = app;