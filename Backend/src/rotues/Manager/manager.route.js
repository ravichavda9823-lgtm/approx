let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { MangerProfile } = require("../../controllers/manager.controller");

let router = express.Router();

router.get("/managerprofile",Authenticate, Authorize("manager"), MangerProfile);

module.exports = router