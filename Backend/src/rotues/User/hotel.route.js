let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { getHotel, getHotelById } = require("../../controllers/hotel.controller");


let router = express.Router();


router.get("/",getHotel);
router.get("/:id",getHotelById);

module.exports = router;