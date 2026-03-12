let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { Addcity, getSelectcity } = require("../../controllers/city.controller");
const { Addoccasion, getoccasion, getOccasionBymanager, DeleteOccasion, EditOccasion } = require("../../controllers/occasion.controller");
const upload = require("../../middleware/multer.middleware");


let router = express.Router();

router.post("/addoccasion", Authenticate, Authorize("admin"),upload.single("image"), Addoccasion);
router.get("/", Authenticate, Authorize("admin"),getoccasion);
router.delete("/delete/:id",Authenticate, Authorize("admin"),DeleteOccasion);
router.put("/update/:id",Authenticate, Authorize("admin"),upload.single("image") ,EditOccasion);


module.exports = router;