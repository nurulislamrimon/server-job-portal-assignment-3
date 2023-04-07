const express = require("express");
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verify_token");

const router = express.Router();

router.route("/signup").post(userController.signupUserController);
router.route("/login").post(userController.loginUserController);
router.route("/me").post(verifyToken, userController.getUsersController);

module.exports = router;
