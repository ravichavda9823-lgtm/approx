let express = require("express");
const { Authenticate, Authorize } = require("../../middleware/auth.middleware");
const { getHotelByManager, getHotelById, Addhotel, DeleteHotel, EditHotel } = require("../../controllers/hotel.controller");
const upload = require("../../middleware/multer.middleware");




let router = express.Router();

router.post("/addhotel", Authenticate, Authorize("manager"), upload.single("image"),Addhotel );
router.get("/", Authenticate, Authorize("manager"),getHotelByManager);
router.get("/:id",Authenticate, Authorize("manager"),getHotelById);
router.delete("/delete/:id",Authenticate, Authorize("manager"),DeleteHotel);
router.put("/update/:id",Authenticate, Authorize("manager"),upload.single("image"), EditHotel); 



module.exports = router;