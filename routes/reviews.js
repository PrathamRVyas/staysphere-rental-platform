const express = require("express");
const router = express.Router({mergeParams : true});
const asyncWrap = require("../utils/wrapAsync.js");
const {reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/expressError.js");
const Review = require("../Models/review.js");
const Listing = require("../Models/listings.js");

const validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

//Post Review Route
router.post("/",validateReview, asyncWrap(async(req,res) =>{
        let {id} = req.params;
        let listing = await Listing.findById(id);
        let newReview = new Review(req.body.review);
        listing.reviews.push(newReview);

       await newReview.save();
       await listing.save();
       req.flash("success","New Review Created!");

       res.redirect(`/listings/${id}`);

}));

//Delete review route
router.delete("/:reviewId", asyncWrap(async(req,res) =>{
        let {id,reviewId} = req.params;
        await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
        await Review.findByIdAndDelete(reviewId);
        req.flash("success","Review Deleted!");
        res.redirect(`/listings/${id}`);

}));

module.exports = router;