const express = require('express');
const userController = require('../Controllers/user.controller');
const verifyToken = require("../Middlewares/verifyToken")


const router = express.Router();

router
    .route("/signup")
    .post(userController.signupUserController);
router
    .route("/login")
    .post(userController.loginUserController)
router
    .route("/me")
    .post(verifyToken, userController.getUsersController)

module.exports = router;