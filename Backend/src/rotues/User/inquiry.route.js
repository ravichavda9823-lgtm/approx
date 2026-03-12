const express = require("express");
const { AddInquiry } = require("../../controllers/Inquiry.controller");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");

const router = express.Router();


router.post("/addinquiry",Authenticate,Authorize("user"), AddInquiry);
// router.get("/, getInquiry);
// router.delete("/delete/:id", DeleteInquiry);

module.exports = router;