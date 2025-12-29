const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/expressError.js");
const session = require("express-session");
const flash = require("connect-flash");

const listings = require("./routes/listing.js");
const reviews = require("./routes/reviews.js");

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

const sessionOptions ={
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie : {
      expires: Date.now() + 7 * 24 * 60 * 60 *1000,
      maxAge: 7 * 24 * 60 * 60 *1000,
      httpOnly: true, //Prevent XSS attacks
    },
};

app.get("/",(req,res)=>{
    res.send("Hi I am root.");
});

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);


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