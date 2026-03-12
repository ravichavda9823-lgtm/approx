let express = require("express");

const { getVenuetype } = require("../../controllers/venuetype.controller");


let router = express.Router();

router.get("/",getVenuetype)

module.exports = router;