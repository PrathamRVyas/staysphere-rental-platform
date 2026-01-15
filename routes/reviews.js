const express = require("express");
const router = express.Router({mergeParams : true});
const asyncWrap = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Review = require("../Models/review.js");
const Listing = require("../Models/listings.js");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");


//Post Review Route
router.post("/",validateReview, isLoggedIn, asyncWrap(reviewController.createReview));

//Delete review route
router.delete("/:reviewId", isLoggedIn, isAuthor, asyncWrap(reviewController.destroyReview));

module.exports = router;