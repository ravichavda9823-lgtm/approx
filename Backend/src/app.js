let express = require("express");
let app = express();
let cors = require("cors");
const cookieParser = require('cookie-parser');

//common
let AuthRotue = require("./rotues/auth.route");

//user
let UserRoute = require("./rotues/User/user.route");
let OccasionRouteUser = require("./rotues/User/occasion.route");
let CityRouteUser = require("./rotues/User/city.route");
let VenuetypeRouteUser = require("./rotues/User/venuetype.route");
let HotelRouteUser = require("./rotues/User/hotel.route");
let UserFeedback = require("./rotues/User/feedback.route");
let VenueRouteUser = require("./rotues/User/venue.route");
let BookingRouteUser = require("./rotues/User/booking.route");
let PaymentRoute = require("./rotues/User/payment.route");
let ForgotPassword = require("./rotues/User/password.route");
let InquiryRouteUser = require("./rotues/User/inquiry.route");

//Admin
let AdminRoute = require("./rotues/Admin/admin.route");
let CityRoute = require("./rotues/Admin/city.route");
let VenueRoute = require("./rotues/Admin/venuetype.route");
let HotelRouteAdmin = require("./rotues/Admin/hotel.route");
let OccasionRouteAdmin = require("./rotues/Admin/occasion.route");
let AdminFeedback = require("./rotues/Admin/feedback.route");
let VenueRouteAdmin = require("./rotues/Admin/venue.route");
let BookingRouteAdmin = require("./rotues/Admin/booking.route");
let InquiryRouteAdmin = require("./rotues/Admin/inquiry.route");

// Mananger

let ManangerRoute = require("./rotues/Manager/manager.route");
let OccasionRoute = require("./rotues/Manager/occasion.route");
let HotelRoute = require("./rotues/Manager/hotel.route");
let CityRouteManager = require("./rotues/Manager/city.route");
let VenuetypeRouteManager = require("./rotues/Manager/venuetype.route");
let VenueRouteManager = require("./rotues/Manager/venue.route");
let BookingRouteManager = require("./rotues/Manager/booking.route");

//middlware
app.use(cookieParser())
app.use(express.json());

app.use(
  cors({
    origin: ["https://approx.onrender.com","https://occazone.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

//common
app.use("/api/auth", AuthRotue);
app.use("/api/uploads", express.static("src/uploads"));

//User Route
app.use("/api/user", UserRoute);
app.use("/api/user/occasion", OccasionRouteUser);
app.use("/api/user/city", CityRouteUser);
app.use("/api/user/venuetype", VenuetypeRouteUser);
app.use("/api/user/hotel", HotelRouteUser);
app.use("/api/user/feedback", UserFeedback);
app.use("/api/user/venue", VenueRouteUser);
app.use("/api/user/booking", BookingRouteUser);
app.use("/api/user/payment", PaymentRoute);
app.use("/api/user/password", ForgotPassword);
app.use("/api/user/inquiry", InquiryRouteUser);

//admin route
app.use("/api/admin", AdminRoute);
app.use("/api/admin/city", CityRoute);
app.use("/api/admin/venuetype", VenueRoute);
app.use("/api/admin/occasion", OccasionRouteAdmin);
app.use("/api/admin/hotel", HotelRouteAdmin);
app.use("/api/admin/feedback", AdminFeedback);
app.use("/api/admin/venue", VenueRouteAdmin);
app.use("/api/admin/booking", BookingRouteAdmin);
app.use("/api/admin/inquiry", InquiryRouteAdmin);

//Manager Route
app.use("/api/manager", ManangerRoute);
app.use("/api/manager/occasion", OccasionRoute);
app.use("/api/manager/hotel", HotelRoute);
app.use("/api/manager/city", CityRouteManager);
app.use("/api/manager/venuetype", VenuetypeRouteManager);
app.use("/api/manager/venue", VenueRouteManager);
app.use("/api/manager/booking", BookingRouteManager);

module.exports = app;
