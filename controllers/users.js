const user = require("../Models/user");

module.exports.renderSignupForm = (req,res)=>{
   res.render("users/signup.ejs");
};

module.exports.signup = async(req,res) =>{
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
    
};

module.exports.renderLoginForm = (req,res)=>{
  res.render("users/login.ejs")
};

module.exports.login = async(req,res)=>{
  req.flash("success","Welcome to StaySphere! You are logged in!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
      if(err){
        return next(err);
      }
      else{
        req.flash("success","You have successfully logged out!");
        res.redirect("/listings");
      }
    })
};