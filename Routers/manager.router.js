const express = require("express");
const managerController = require("../controllers/manager.controller");
const verifyAuthorization = require("../middlewares/verifyAuthorization");
const verifyToken = require("../middlewares/verify_token");

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
