let express = require("express");
const { Singin, Signup, getSingin, DeletedUser, EditUser, getSingup } = require("../controllers/auth.controller");
const { logoutUser } = require("../controllers/logout.controller");


let router = express.Router();

router.post("/Signin", Singin);
router.get("/Signin", getSingin);
router.delete("/delete/:id", DeletedUser);
router.put("/update/:id", EditUser);
router.post("/Signup", Signup);
router.get("/Signup", getSingup);
router.post('/logout', logoutUser);


module.exports = router;