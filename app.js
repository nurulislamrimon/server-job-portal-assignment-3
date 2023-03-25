const express = require('express');
require("dotenv").config();
require('colors');
const cors = require('cors');

const app = express();


// middlewares
app.use(cors());
app.use(express.json())


module.exports = app;