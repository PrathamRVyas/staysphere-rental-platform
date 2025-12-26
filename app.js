const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./Models/listings.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const asyncWrap = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/expressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");
const Review = require("./Models/review.js");
const listings = require("./routes/listing.js");

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});

app.engine('ejs',ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true})); //To parse from data (req.body)
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/Public")));




app.get("/",(req,res)=>{
    res.send("Hi I am root.");
});

const validateListing = (req,res,next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};

const validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
};


app.use("/listings", listings);



//Post Review Route

app.post("/listings/:id/reviews",validateReview, asyncWrap(async(req,res) =>{
        let {id} = req.params;
        let listing = await Listing.findById(id);
        let newReview = new Review(req.body.review);
        listing.reviews.push(newReview);

       await newReview.save();
       await listing.save();

       res.redirect(`/listings/${id}`);

}));

//Delete review route
app.delete("/listings/:id/reviews/:reviewId", asyncWrap(async(req,res) =>{
        let {id,reviewId} = req.params;
        await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
        await Review.findByIdAndDelete(reviewId);

        res.redirect(`/listings/${id}`);

}));


// app.get("/testListing", async (req,res)=>{
//     let sampleListing = new Listing({
//        title : "My New Villa",
//        description : "By the beach",
//        price : 2400,
//        location : "Calangute, Goa",
//        country : "India",
//     });

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Successful testing");
// });

app.use((req, res, next) => {   //If All paths checked and the user's given route is not found then this will throw page not found error
  next(new ExpressError(404, "Page not found!"));
});


app.use((err,req,res,next)=>{
    let {statusCode=500, message="Something went wrong"} = err;
    res.status(statusCode).render("error.ejs",{message});
    //res.status(statusCode).send(message);
});


app.listen(8080,()=>{
  console.log("Server is listening to port 8080");
});