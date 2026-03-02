const User = require("../Models/user");
const otpGenerator = require("otp-generator");
const sendOtp = require("../utils/sendOtp");

module.exports.signup = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signupUser = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      req.flash("error", "Email already registered. Please login.");
      return res.redirect("/login");
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const otpExpiry = Date.now() + 5 * 60 * 1000;

    const newUser = new User({
      email,
      username,
      otp,
      otpExpiry,
      isVerified: false,
    });
    const registeredUser = await User.register(newUser, password);

    try {
      await sendOtp(email, otp);
    } catch (mailErr) {
      console.error("OTP email failed:", mailErr);

      // rollback user creation
      await User.findByIdAndDelete(registeredUser._id);

      req.flash("error", "Unable to send OTP. Please try again.");
      return res.redirect("/signup");
    }

    req.flash("success", "OTP sent to your email");
    res.render("users/verifyOtp.ejs", { email });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.verifyOtp = async (req, res, next) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
    req.flash("error", "Invalid or expired OTP");
    return res.redirect("/signup");
  }

  user.isVerified = true;
  user.otp = undefined;
  user.otpExpiry = undefined;
  await user.save();

  req.login(user, (err) => {
    if (err) return next(err);

    req.flash("success", "Email verified! Welcome to StaySphere");
    res.redirect("/listings");
  });
};

module.exports.login = (req, res) => {
  res.render("users/login.ejs");
};
module.exports.loginUser = async (req, res) => {
  if (!req.user.isVerified) {
    req.logout(() => {});
    req.flash("error", "Please verify your email first");
    return res.redirect("/login");
  }

  req.flash("success", "Welcome back to StaySphere");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};
module.exports.logoutUser = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
};