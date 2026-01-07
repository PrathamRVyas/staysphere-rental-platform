const Listing = require("./Models/listings");
const Review = require("./Models/review");
const {listingSchema} = require("./schema.js");
const ExpressError = require("./utils/expressError.js");
const {reviewSchema} = require("./schema.js");

module.exports.isLoggedIn = (req,res,next) =>{ // to check if user is logged in to create listing
  if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl
        req.flash("error","Please login to continue.");
         return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next) =>{ //redirect to originally asked page
  if(req.session.redirectUrl){
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req,res,next) =>{ //to check if user is owner
let{id} = req.params;
let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req,res,next) =>{ //listing validation
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

module.exports.validateReview = (req,res,next) =>{ //review validation
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

module.exports.isAuthor = async (req,res,next) =>{ //to check if user is author of that review
let{ id,reviewId } = req.params;
let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You did not create this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};