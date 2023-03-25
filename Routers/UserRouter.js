const express = require('express');
const { getUsers } = require('../Services/UserServices');


const router = express.Router();

router
    .route("/")
    .get(getUsers);

module.exports = router;