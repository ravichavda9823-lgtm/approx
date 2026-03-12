let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { Addcity, getSelectcity } = require("../../controllers/city.controller");
const { Addoccasion, getoccasion, getOccasionBymanager, DeleteOccasion, EditOccasion } = require("../../controllers/occasion.controller");


let router = express.Router();

router.post("/addoccasion", Authenticate, Authorize("manager"), Addoccasion);
router.get("/", Authenticate, Authorize("manager"),getOccasionBymanager);
router.get("/alloccasion", Authenticate, Authorize("manager"),getoccasion);
router.delete("/delete/:id",Authenticate, Authorize("manager"),DeleteOccasion);
router.put("/update/:id",Authenticate, Authorize("manager"),EditOccasion);


module.exports = router;