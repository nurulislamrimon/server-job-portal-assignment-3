const express = require('express');
const { getJobs } = require('../Controllers/job.controller');
const { verifyAuthorization } = require('../Middlewares/verifyAuthorization');
const { verifyToken } = require('../Middlewares/verifyToken');


const Router = express.Router();

Router
    .route("/")
    .get(verifyToken, verifyAuthorization("admin"), getJobs);

module.exports = Router;