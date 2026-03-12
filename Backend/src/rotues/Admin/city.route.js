let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { Addcity, getSelectcity, DeleteCity, EditCity } = require("../../controllers/city.controller");


let router = express.Router();

router.post("/addcity", Authenticate, Authorize("admin"), Addcity);
router.get("/", Authenticate, Authorize("admin"),getSelectcity)
router.delete("/delete/:id",Authenticate, Authorize("admin"),DeleteCity)
router.put("/update/:id",Authenticate, Authorize("admin"),EditCity)

module.exports = router;