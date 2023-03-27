const express = require('express');
const { getJobs, postJob } = require('../Controllers/job.controller');
const { verifyAuthorization } = require('../Middlewares/verifyAuthorization');
const { verifyToken } = require('../Middlewares/verifyToken');
const upload = require("../Middlewares/uploadFile")

const Router = express.Router();

Router
    .route("/")
    .get(getJobs)
    .post(verifyToken, verifyAuthorization("admin", "hiring manager"), upload.single("cv"), postJob);

module.exports = Router;