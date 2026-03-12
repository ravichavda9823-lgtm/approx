let express = require("express");

const { getVenuetype } = require("../../controllers/venuetype.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");


let router = express.Router();

router.get("/", Authenticate, Authorize("manager"),getVenuetype)

module.exports = router;