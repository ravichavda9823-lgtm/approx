const express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { Deletebooking, UpdateBookingStatus, getAllBooking } = require("../../controllers/booking.controller");
const router = express.Router();


router.get("/",Authenticate, Authorize("admin"), getAllBooking);
router.delete("/delete/:id",Authenticate, Authorize("admin"),Deletebooking);
router.put("/status/:id",Authenticate, Authorize("admin"),UpdateBookingStatus)


module.exports = router;
