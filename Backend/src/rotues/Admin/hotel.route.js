let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { getHotelByManager, getHotelById, Addhotel, getHotel, DeleteHotel, EditHotel } = require("../../controllers/hotel.controller");
const upload = require("../../middleware/multer.middleware");



let router = express.Router();

router.post("/addhotel", Authenticate, Authorize("admin"),upload.single("image"),Addhotel );
router.get("/", Authenticate, Authorize("admin"),getHotel);
router.get("/:id",Authenticate, Authorize("admin"),getHotelById);
router.delete("/delete/:id",Authenticate, Authorize("admin"),DeleteHotel);
router.put("/update/:id",Authenticate, Authorize("admin"),upload.single("image"),EditHotel);



module.exports = router;