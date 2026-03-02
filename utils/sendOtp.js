require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (email, otp) => {
  const msg = {
    to: email,
    from: process.env.SENDER_EMAIL, // must be verified in SendGrid
    subject: "StaySphere OTP Verification",
    text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    html:`<h3>Your OTP is : ${otp}<p>Valid for 5 minutes</p></h3>`
  };

  await sgMail.send(msg);
};