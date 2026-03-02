const express = require("express");
const router = express.Router({mergeParams : true});
const user = require("../Models/user.js");
const asyncWrap = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");


router.route("/signup")

.get(userController.signup)

.post(asyncWrap(userController.signupUser));

router.post("/verify-otp", asyncWrap(userController.verifyOtp));

router.route("/login")

.get(userController.login)

.post(saveRedirectUrl, passport.authenticate("local",{failureRedirect: "/login", failureFlash: true}), asyncWrap(userController.loginUser));

router.get("/logout",userController.logoutUser);

module.exports = router;