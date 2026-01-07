const express = require("express");
const router = express.Router({mergeParams : true});
const asyncWrap = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/expressError.js");
const Review = require("../Models/review.js");
const Listing = require("../Models/listings.js");
const {validateReview, isLoggedIn, isAuthor} = require("../middleware.js");

//Post Review Route
router.post("/",validateReview, isLoggedIn, asyncWrap(async(req,res) =>{
        let {id} = req.params;
        let listing = await Listing.findById(id);
        let newReview = new Review(req.body.review);
        newReview.author = req.user._id;
        listing.reviews.push(newReview);

       await newReview.save();
       await listing.save();
       req.flash("success","New Review Created!");

       res.redirect(`/listings/${id}`);

}));

//Delete review route
router.delete("/:reviewId", isLoggedIn, isAuthor, asyncWrap(async(req,res) =>{
        let {id,reviewId} = req.params;
        await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("success","Review Deleted!");
        res.redirect(`/listings/${id}`);

}));

module.exports = router;