const express = require("express");
const router = express.Router({mergeParams : true});
const user = require("../Models/user.js");
const asyncWrap = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");


router.route("/signup")

.get(userController.renderSignupForm)

.post(asyncWrap(userController.signup));

router.route("/login")

.get(userController.renderLoginForm)

.post(saveRedirectUrl, passport.authenticate("local",{failureRedirect: "/login", failureFlash: true}), asyncWrap(userController.login));

router.get("/logout",userController.logout);

module.exports = router;