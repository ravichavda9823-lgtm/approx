let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const dashborad = require("../../controllers/admin.comtroller");
const { DeletedFeedback } = require("../../controllers/feedback.controller");

let router = express.Router();

router.get("/dashborad",Authenticate,Authorize("admin"),dashborad);


module.exports = router;



