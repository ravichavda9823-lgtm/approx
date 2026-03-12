let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { getSelectcity } = require("../../controllers/city.controller");
const { getHotelByManager } = require("../../controllers/hotel.controller");


let router = express.Router();


router.get("/", Authenticate, Authorize("manager"),getSelectcity)

module.exports = router;