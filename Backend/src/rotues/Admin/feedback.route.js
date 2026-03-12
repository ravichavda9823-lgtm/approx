const express = require("express");
const { getFeedback, DeletedFeedback } = require("../../controllers/feedback.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const router = express.Router();



router.get("/",Authenticate, Authorize("admin"), getFeedback);
router.delete("/delete/:id",Authenticate, Authorize("admin"), DeletedFeedback);


module.exports = router;
