// step3
// user routes  requests
const userController = require("../controller/userControllers");
const express = require("express");
const router = express.Router();

// /api/users/login
router.post("/login", userController.login);
router.post("/signup", userController.signup);

module.exports = router;
