const express = require("express");
const {  addFeedback, AddFeedback } = require("../../controllers/feedback.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { Booking, getBooking, getAllBooking } = require("../../controllers/booking.controller");
const router = express.Router();



router.get("/",Authenticate, Authorize("manager"), getAllBooking);


module.exports = router;
