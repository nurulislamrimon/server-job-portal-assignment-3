const express = require('express');
const jobsController = require('../Controllers/jobs.controller');
const verifyAuthorization = require('../Middlewares/verifyAuthorization');
const verifyToken = require('../Middlewares/verifyToken');

const Router = express.Router();

Router
    .route("/")
    .post(verifyToken, verifyAuthorization("admin", "hiring manager"), jobsController.postJobsController);

module.exports = Router;