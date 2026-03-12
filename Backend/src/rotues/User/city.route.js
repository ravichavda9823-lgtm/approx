let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { getSelectcity } = require("../../controllers/city.controller");


let router = express.Router();

router.get("/",getSelectcity)

module.exports = router;