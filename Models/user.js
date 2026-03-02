const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;


const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  otp: String,
  otpExpiry: Date,
  isVerified: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passportLocalMongoose);
//Username and Password will automatically be given by passport-local-mongoose

module.exports = mongoose.model("User",userSchema); 