let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");

const { Addoccasion, getoccasion } = require("../../controllers/occasion.controller");


let router = express.Router();
router.get("/",getoccasion);


module.exports = router;