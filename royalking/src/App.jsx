import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

import Error from "./pages/Error";

import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Registartion";
import Booking from "./pages/Booking";
import Profile from "./pages/Profile";

import ViewHotels from "./pages/Viewhotel";
import Feedback from "./pages/Feadback";
import BookingHistory from "./pages/BookingHistory";
import SelectOccasion from "./pages/Selectoccuation";
import SelectOccasionManager from "./pages/Manageroccasion";
import ManageBookingsManager from "./pages/Managebookingmanager";
import ViewPaymentsManager from "./pages/Managerviewpayment";

import BookingDetails from "./pages/Managerbookinghistory";
import AddOccasion from "./pages/Addoccasion";

import AddHotel from "./pages/Addhotel";
import ManagerViewHotels from "./pages/Managerhotel";
import ManagerHotelDetails from "./pages/ManagerHoteldetails";
import EditOccasion from "./pages/Editoccasion";
import EditHotel from "./pages/Edithotel";
import AddVenue from "./pages/Addvenue";
import ManagerVenue from "./pages/Managevenue";
import EditVenue from "./pages/Editvenue";
import VenueDetails from "./pages/Venuedetails";
import BookingDetailsUser from "./pages/Bookingdetails";
import EditProfile from "./pages/Editprofile";
import ForgotPassword from "./pages/Forgetpassword";
import ResetPassword from "./pages/Resetpassword";
import Hoteldetails from "./pages/Hoteldetails";
import ProtectPages from "./utils/ProtectedPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/error" element={<Error />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registartion" element={<Register />} />
          <Route
            path="/booking/:id"
            element={
              <ProtectPages>
                <Booking />
              </ProtectPages>
            }
          />
          <Route path="/bookinghistory" element={<BookingHistory />} />
          <Route path="/bookingdetails" element={<BookingDetailsUser />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/selectoccasion" element={<SelectOccasion />} />

          <Route path="/viewhotels" element={<ViewHotels />} />
          <Route path="/hoteldetails/:id" element={<Hoteldetails />} />

          <Route path="/feedback" element={<Feedback />} />

          <Route path="/manageroccasion" element={<SelectOccasionManager />} />
          <Route path="/managerbooking" element={<ManageBookingsManager />} />
          <Route path="/managerviewpayment" element={<ViewPaymentsManager />} />
          <Route path="/managerbookinghistory" element={<BookingDetails />} />
          <Route path="/managerviewhotel" element={<ManagerViewHotels />} />
          <Route
            path="/managerhoteldetails/:id"
            element={<ManagerHotelDetails />}
          />

          <Route path="/editoccasion/:id" element={<EditOccasion />} />
          <Route path="/edithotel/:id" element={<EditHotel />} />
          <Route path="/addoccasion" element={<AddOccasion />} />

          <Route path="/addhotel" element={<AddHotel />} />
          <Route path="/venuedeatils/:id" element={<VenueDetails />} />
          <Route path="/addvenue" element={<AddVenue />} />
          <Route path="/managervenue" element={<ManagerVenue />} />
          <Route path="/editvenue/:id" element={<EditVenue />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/forgetpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
