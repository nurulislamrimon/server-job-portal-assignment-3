const express = require("express");
const managerController = require("../Controllers/manager.controller");
const verifyAuthorization = require("../Middlewares/verifyAuthorization");
const verifyToken = require("../Middlewares/verifyToken");

const router = express.Router();

router
  .route("/jobs")
  .get(
    verifyToken,
    verifyAuthorization("admin", "hiring manager"),
    managerController.getJobsByManagerController
  );
router
  .route("/jobs/:id")
  .get(verifyToken, managerController.getAJobByManagerController);

module.exports = router;
