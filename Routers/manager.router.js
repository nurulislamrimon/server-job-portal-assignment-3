const express = require('express');
const { getJobsByManager } = require('../Controllers/manager.controller');
const verifyAuthorization = require('../Middlewares/verifyAuthorization');
const verifyToken = require('../Middlewares/verifyToken');


const router = express.Router();


router
    .route("/jobs")
    .get(verifyToken, verifyAuthorization("admin", "hiring manager"), getJobsByManager)


module.exports = router;