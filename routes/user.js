const express = require("express");
const router = express.Router({mergeParams : true});
const user = require("../Models/user.js");
const asyncWrap = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

router.get("/signup",(req,res)=>{
   res.render("users/signup.ejs");
});

router.post("/signup", asyncWrap(async(req,res) =>{
    try{
    let {username,email,password} = req.body;
    const newUser = new user({email, username});
    const registeredUser = await user.register(newUser, password);
    req.login(registeredUser,(err)=>{
      if(err){
        return next(err);
      }
      else{
        req.flash("success","Welcome to StaySphere!");
        res.redirect("/listings");
      }
    });
    } catch(e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
    
})
);

router.get("/login",(req,res)=>{
  res.render("users/login.ejs")
});

router.post("/login",saveRedirectUrl, passport.authenticate("local",{failureRedirect: "/login", failureFlash: true}), asyncWrap(async(req,res)=>{
  req.flash("success","Welcome to StaySphere! You are logged in!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
})
);

router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
      if(err){
        return next(err);
      }
      else{
        req.flash("success","You are successfully logged out!");
        res.redirect("/listings");
      }
    })
});

module.exports = router;