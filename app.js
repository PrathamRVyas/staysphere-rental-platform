if(process.env.NODE_ENV !="production"){
require('dotenv').config()
}


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/expressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo').default;
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./Models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/reviews.js");
const userRouter = require("./routes/user.js");

 const dbUrl = process.env.ATLASDB_URL;

async function main(){
  await mongoose.connect(dbUrl);
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

const store = MongoStore.create({
  mongoUrl: dbUrl,
  crypto :{
  secret : process.env.SECRET,
  },
  touchAfter : 24 * 3600,
});

store.on("error", function (err) {
  console.log("Error in Mongo Session Store", err);
});

const sessionOptions ={
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie : {
      expires: Date.now() + 7 * 24 * 60 * 60 *1000,
      maxAge: 7 * 24 * 60 * 60 *1000,
      httpOnly: true, //Prevent XSS attacks
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


//To store and remove user related information in the session 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// app.get("/demouser", async(req,res) =>{
//   let fakeUser = new User({
//     email: "student@gmail.com",
//     username: "demo-student"
//   });

//   let registeredUser = await User.register(fakeUser,"helloworld"); //To register a new user instance with a given password. also checks if username is unique
//   res.send(registeredUser);
// });

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.redirect("/listings");
});

app.use((req, res, next) => {   //If All paths checked and the user's given route is not found then this will throw page not found error
  next(new ExpressError(404, "Page not found!"));
});


app.use((err,req,res,next)=>{
    console.error("ERROR OCCURRED:", err);
    let {statusCode=500, message="Something went wrong"} = err;
    res.status(statusCode).render("error.ejs",{message});
    //res.status(statusCode).send(message);
});


app.listen(8080,()=>{
  console.log("Server is listening to port 8080");
});