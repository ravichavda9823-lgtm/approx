const express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { createOrder } = require("../../controllers/payment.controller");

const router = express.Router();

router.post("/createorder", Authenticate, Authorize("user"), createOrder);

module.exports = router;