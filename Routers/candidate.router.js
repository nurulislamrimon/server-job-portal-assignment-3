const express = require("express");
const {
  getAllCandidate,
  postCandidate,
} = require("../controllers/candidate.controller");
// const upload = require("../middlewares/upload_file");

const router = express.Router();

router.route("/").get(getAllCandidate).post(
  // upload.single("cv"),
  postCandidate
);

module.exports = router;
