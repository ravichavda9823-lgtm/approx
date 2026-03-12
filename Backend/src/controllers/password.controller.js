const { connectDb } = require("../cogfig/connection");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();

let ForgetPassword = async (req, res) => {
  try {
    let db = await connectDb();
    let collection = db.collection("hotel");

    let { email } = req.body || {};

    if (!email) {
      return res.status(400).json({
        status: false,
        message: "Email is required",
      });
    }

    let user = await collection.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        status: false,
        message: "Email not registered",
      });
    }

    let resetToken = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "30m",
    });

    let resetLink = `http://localhost:5173/resetpassword/${resetToken}`;

    // ✅ Gmail SMTP (recommended)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASSWORD, // gmail app password (not real password)
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: "ravichavda9823@gmail.com",
      to: email,
      subject: "Password Reset Request",
      html: `
        <h3>Password Reset</h3>
        <p>Click the link below to reset your password:</p>
          <a href="${resetLink}">Reset Password</a> 
        <p>This link will expire in 15 minutes.</p>
      `,
    });

    return res.status(200).json({
      status: true,
      message: "Password reset email sent successfully",
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { ForgetPassword };
