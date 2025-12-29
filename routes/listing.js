const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/wrapAsync.js");
const {listingSchema} = require("../schema.js");
const ExpressError = require("../utils/expressError.js");
const Listing = require("../Models/listings.js");

const validateListing = (req,res,next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

//Index
router.get("/",asyncWrap(async (req,res)=>{
  const allListings = await Listing.find({});
  res.render("listings/index.ejs",{allListings});
}));

//New

router.get("/new", async (req,res) =>{
    res.render("listings/new.ejs");
});

//Show

router.get("/:id", asyncWrap(async (req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
         return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}));


//Create

router.post("/", validateListing, asyncWrap(async (req,res) => {
    // let result = listingSchema.validate(req.body);
    // console.log(result);
    // if(result.error){
    //     throw new ExpressError(400,result.error.details[0].message);
    // }
    const newListing =  new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","New Listing Created!");
    res.redirect("/listings");
})
);

//Edit

router.get("/:id/edit", asyncWrap(async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}));

//Update

router.put("/:id", validateListing, asyncWrap(async (req,res) =>{ 
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing}, {runValidators:true});
    req.flash("success","Listing Updated!");
    res.redirect(`/listings/${id}`);
}));

//Delete
router.delete("/:id", asyncWrap(async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
}));


module.exports = router;