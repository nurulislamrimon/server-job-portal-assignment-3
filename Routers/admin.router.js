const express = require("express");
const adminController = require("../Controllers/admin.controllers");
const { getCandidateByIdService } = require("../Services/admin.services");

const router = express.Router();

router.get("/candidates", adminController.adminCandidateController);
router.get("/candidates/:id", adminController.adminCandidateDetails);

module.exports = router;
