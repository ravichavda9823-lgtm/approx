let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { getVenues, getVenueById } = require("../../controllers/venue.controller");



let router = express.Router();


router.get("/", Authenticate, Authorize("user"),getVenues);
router.get("/:id", Authenticate, Authorize("user"),getVenueById);



module.exports = router;