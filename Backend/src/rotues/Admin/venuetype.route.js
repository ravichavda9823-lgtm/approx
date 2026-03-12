let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { Addcity, getSelectcity } = require("../../controllers/city.controller");
const { AddVenuetype, getVenuetype, DeleteVenueType, EditVenuetype } = require("../../controllers/venuetype.controller");


let router = express.Router();

router.post("/addvenuetype", Authenticate, Authorize("admin"), AddVenuetype);
router.get("/", Authenticate, Authorize("admin"),getVenuetype);
router.delete("/delete/:id",Authenticate, Authorize("admin"),DeleteVenueType);
router.put("/update/:id",Authenticate, Authorize("admin"),EditVenuetype);

module.exports = router;