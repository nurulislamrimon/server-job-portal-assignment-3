const express = require("express");
const adminController = require("../controllers/admin.controllers");

const router = express.Router();

router.get("/candidates", adminController.adminCandidateController);
router.get("/candidates/:id", adminController.adminCandidateDetailsController);
router.get("/managers", adminController.adminManagersController);
router.post("/managers/:id", adminController.updateRoleToManagerController);

module.exports = router;
