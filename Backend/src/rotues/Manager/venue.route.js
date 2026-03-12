let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { AddVenue, getVenues, DeleteVenue, getVenueBymanager, Editvenue } = require("../../controllers/venue.controller");
const upload = require("../../middleware/multer.middleware");


let router = express.Router();

router.post("/addvenue", Authenticate, Authorize("manager"), upload.single("image"),  AddVenue);
router.get("/", Authenticate, Authorize("manager"),getVenueBymanager);
router.delete("/delete/:id",Authenticate, Authorize("manager"),DeleteVenue);
router.put("/update/:id",Authenticate, Authorize("manager"), upload.single("image"), Editvenue);


module.exports = router;