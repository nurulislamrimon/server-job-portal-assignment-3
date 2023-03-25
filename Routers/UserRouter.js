const express = require('express');
const { getUsers } = require('../Services/UserServices');


const Router = express.Router();

Router.get("/", getUsers);

module.exports = Router;