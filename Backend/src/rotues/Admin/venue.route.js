let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { AddVenue, getVenues, DeleteVenue, Editvenue } = require("../../controllers/venue.controller");
const upload = require("../../middleware/multer.middleware");


let router = express.Router();

router.post("/addvenue", Authenticate, Authorize("admin"), upload.single("image"),  AddVenue);
router.get("/", Authenticate, Authorize("admin"),getVenues);
router.delete("/delete/:id",Authenticate, Authorize("admin"),DeleteVenue);
router.put("/update/:id",Authenticate, Authorize("admin"), upload.single("image"), Editvenue);


module.exports = router;