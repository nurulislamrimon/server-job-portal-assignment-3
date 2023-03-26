const express = require("express");
const { greetings } = require("../Controllers/main.controller");


const router = express.Router();

router.route("/").get(greetings);

module.exports = router;