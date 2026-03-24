import {} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Notification from "./pages/Notification";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import Starter from "./pages/Starter";
import Timeline from "./pages/Timeline";
import Treeview from "./pages/Treeview";
import ManageOccasion from "./pages/Manageoccastion";
import ManageUser from "./pages/Manageuser";
import ManageVenueBooking from "./pages/Managebookingvenue";
import ManageBookingHistory from "./pages/Managebookinghistory";
import ViewFeedback from "./pages/Viewfeedback";
import ManagePayment from "./pages/Manangepayment";
import ManageHotel from "./pages/Managehotel";
import ManageVenueType from "./pages/Managevenuetype";
import ManageCity from "./pages/Managecity";
import Managevenue from "./pages/Managevenue";
import ManageInquiry from "./pages/Manageinquiry";
import ProtectPages from "./utils/ProtectedPages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectPages>
                <Home />
              </ProtectPages>
            }
          />{" "}
          <Route path="/error" element={<Error />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/starter" element={<Starter />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/treeview" element={<Treeview />} />
          <Route path="/managecity" element={<ManageCity />} />
          <Route path="/managevenuetype" element={<ManageVenueType />} />
          <Route path="/manageoccasion" element={<ManageOccasion />} />
          <Route path="/manageuser" element={<ManageUser />} />
          <Route path="/managehotel" element={<ManageHotel />} />
          <Route path="/managevenue" element={<Managevenue />} />
          <Route path="/managevenuebooking" element={<ManageVenueBooking />} />
          <Route path="/managepayment" element={<ManagePayment />} />
          <Route
            path="/managebookinghistory"
            element={<ManageBookingHistory />}
          />
          <Route path="/viewfeedback" element={<ViewFeedback />} />
          <Route path="/manageinquiry" element={<ManageInquiry />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
