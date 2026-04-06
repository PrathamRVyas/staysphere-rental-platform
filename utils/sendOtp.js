require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

module.exports = async (email, otp) => {
  const msg = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "StaySphere OTP Verification",
    text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    html: `<h3>Your OTP is: ${otp}</h3><p>Valid for 5 minutes</p>`,
  };

  await transporter.sendMail(msg);
};