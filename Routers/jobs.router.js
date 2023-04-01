const express = require("express");
const jobsController = require("../Controllers/jobs.controller");
const upload = require("../Middlewares/uploadFile");
const verifyAuthorization = require("../Middlewares/verifyAuthorization");
const verifyToken = require("../Middlewares/verifyToken");

const Router = express.Router();

Router.route("/")
  .get(jobsController.getAllJobsController)
  .post(
    verifyToken,
    verifyAuthorization("admin", "hiring manager"),
    jobsController.postJobsController
  );
Router.get("/top-paid", jobsController.getTopPaidJobsController);
Router.get("/most-applied", jobsController.getMostAppliedJobsController);

Router.route("/:id")
  .get(jobsController.getSpecificJobController)
  .patch(
    verifyToken,
    verifyAuthorization("admin", "hiring manager"),
    jobsController.updateJob
  );

Router.route("/:id/apply").post(
  verifyToken,
  upload.single("cv"),
  jobsController.applyForJobController
);

module.exports = Router;
