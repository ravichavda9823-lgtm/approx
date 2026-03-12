let express = require("express");

const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { Profile, ProfileHome } = require("../../controllers/user.controller");
const { EditUser } = require("../../controllers/auth.controller");


let router = express.Router()

router.get("/profile",Authenticate , Authorize("user"), Profile );
router.get("/profilehome", Profile );
router.put("/update/:id", Authenticate , Authorize("user") , EditUser);

module.exports = router;

