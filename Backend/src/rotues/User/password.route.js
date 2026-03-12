const express = require("express");

const { ForgetPassword } = require("../../controllers/password.controller");
const { resetPassword } = require("../../controllers/resetpassword.controller");

const router = express.Router();

router.post("/forgotpassword", ForgetPassword);
router.post("/resetpassword/:token", resetPassword)

module.exports = router;
