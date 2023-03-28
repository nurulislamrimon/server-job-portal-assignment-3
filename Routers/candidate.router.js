const express = require('express');
const { getAllCandidate, postCandidate } = require('../Controllers/candidate.controller');
const upload = require('../Middlewares/uploadFile');

const router = express.Router();

router
    .route("/")
    .get(getAllCandidate)
    .post(upload.single("cv"), postCandidate)


module.exports = router;