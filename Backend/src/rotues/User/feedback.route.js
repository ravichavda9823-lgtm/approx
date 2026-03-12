const express = require("express");
const {  AddFeedback, getFeedback,  } = require("../../controllers/feedback.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const router = express.Router();

router.post("/addfeedback",Authenticate, Authorize("user"), AddFeedback);
router.get("/", getFeedback);

module.exports = router;
