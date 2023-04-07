const express = require("express");
const { greetings } = require("../controllers/main.controller");

const router = express.Router();

router.route("/").get(greetings);

module.exports = router;
