const express = require("express");
const {  addFeedback, AddFeedback } = require("../../controllers/feedback.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { Booking, getBooking } = require("../../controllers/booking.controller");
const router = express.Router();



router.post("/booking",Authenticate, Authorize("user"), Booking);
router.get("/",Authenticate, Authorize("user"), getBooking);


module.exports = router;
