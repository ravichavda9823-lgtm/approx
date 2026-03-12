const express = require("express");
const { getInquiry, DeleteInquiry } = require("../../controllers/Inquiry.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");

const router = express.Router();

router.get("/",Authenticate,Authorize("admin"), getInquiry);
router.delete("/delete/:id",Authenticate,Authorize("admin"), DeleteInquiry);

module.exports = router;