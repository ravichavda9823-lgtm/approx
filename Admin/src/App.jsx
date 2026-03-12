import {} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./common/Header";
import Home from "./pages/Home";
import Animation from "./pages/Animation";
import Clipborad from "./pages/Clipborad";
import Dragula from "./pages/Dragula";
import AdvanceFile from "./pages/AdvanceFile";
import Highlight from "./pages/Highlight";
import Rangeslider from "./pages/Rangeslider";
import Rating from "./pages/Rating";
import Ribbons from "./pages/Ribbons";
import Toasts from "./pages/Toasts";
import Calender from "./pages/Calender";
import Chat from "./pages/Chat";
import Contactlist from "./pages/Contactlist";
import Invoice from "./pages/Invoice";
import Error from "./pages/Error";
import Errors from "./pages/Errors";
import Lockscreen from "./pages/Lockscreen";
import Login from "./pages/Login";
import Maintenance from "./pages/Maintenance";
import Recoverpw from "./pages/Recoverpw";
import Cards from "./pages/Cards";
import Apex from "./pages/Apex";
import Chartjs from "./pages/Chartjs";
import Justgage from "./pages/Justgage";
import Chartstoats from "./pages/Chartstoats";
import Emailalert from "./pages/Emailalert";
import Emailbasic from "./pages/Emailbasic";
import Emailbilling from "./pages/Emailbilling";
import Formsadvanced from "./pages/Formsadvanced";
import Formseditors from "./pages/Formseditors";
import Formselements from "./pages/Formselements";
import Formscrop from "./pages/Formscrop";
import Formsvalidation from "./pages/Formsvalidation";
import Fromswizard from "./pages/Fromswizard";
import Fontawesome from "./pages/Fontawesome";
import Iconfont from "./pages/Iconfont";
import Iconoir from "./pages/Iconoir";
import Lineawesome from "./pages/Lineawesome";
import Maps from "./pages/Maps";
import Leaflet from "./pages/Leaflet";
import Newtransaction from "./pages/Newtransaction";
import Blog from "./pages/Blog";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Notification from "./pages/Notification";
import Pricing from "./pages/Pricing";
import Profile from "./pages/Profile";
import Starter from "./pages/Starter";
import Timeline from "./pages/Timeline";
import Treeview from "./pages/Treeview";
import Payment from "./pages/Payment";
import Tablebasic from "./pages/Tablebasic";
import Tabledatabase from "./pages/Tabledatabase";
import Tabeledit from "./pages/Tabeledit";
import Taxes from "./pages/Taxes";
import Transactions from "./pages/Transactions";
import Uialerts from "./pages/Uialerts";
import Uiavatar from "./pages/Uiavatar";
import Uibadges from "./pages/Uibadges";
import Uibutton from "./pages/Uibutton";
import Uicards from "./pages/Uicards";
import Uicarousels from "./pages/Uicarousels";
import Uidropdowns from "./pages/Uidropdowns";
import Uigrids from "./pages/Uigrids";
import Uiimages from "./pages/Uiimages";
import Uilist from "./pages/Uilist";
import Uimodals from "./pages/Uimodals";
import Uinvbar from "./pages/Uinvbar";
import Uinavs from "./pages/Uinavs";
import Uipaginations from "./pages/Uipaginations";
import Uitooltips from "./pages/Uitooltips";
import Uiprogress from "./pages/Uiprogress";
import Uispinners from "./pages/Uispinners";
import Uitabs from "./pages/Uitabs";
import Uitypography from "./pages/Uitypography";
import Uivideos from "./pages/Uivideos";
import Users from "./pages/Users";
import Sweetalerts from "./pages/Sweetalerts";
import Formsupload from "./pages/Formsupload";
import Vector from "./pages/Vector";
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
import ProtectetPage from "./utils/ProtectPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectetPage>
                <Home />
                </ProtectetPage>
            
            }
          />
          <Route path="/animation" element={<Animation />} />
          <Route path="/clipborad" element={<Clipborad />} />
          <Route path="/dragula" element={<Dragula />} />
          <Route path="/file" element={<AdvanceFile />} />
          <Route path="/highlight" element={<Highlight />} />
          <Route path="/rangeslider" element={<Rangeslider />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/ribbons" element={<Ribbons />} />
          <Route path="/toasts" element={<Toasts />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contactlist" element={<Contactlist />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/error" element={<Error />} />
          <Route path="/errors" element={<Errors />} />
          <Route path="/lockscreen" element={<Lockscreen />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/recoverpw" element={<Recoverpw />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/apex" element={<Apex />} />
          <Route path="/chartjs" element={<Chartjs />} />
          <Route path="/justgage" element={<Justgage />} />
          <Route path="/chartstoats" element={<Chartstoats />} />
          <Route path="/emailalert" element={<Emailalert />} />
          <Route path="/emailbasic" element={<Emailbasic />} />
          <Route path="/emailbilling" element={<Emailbilling />} />
          <Route path="/formsadvanced" element={<Formsadvanced />} />
          <Route path="/formsupload" element={<Formsupload />} />
          <Route path="/formseditors" element={<Formseditors />} />
          <Route path="/formselements" element={<Formselements />} />
          <Route path="/fromscrop" element={<Formscrop />} />
          <Route path="/fromvalidation" element={<Formsvalidation />} />
          <Route path="/fromwizard" element={<Fromswizard />} />
          <Route path="/fontawesome" element={<Fontawesome />} />
          <Route path="/iconfont" element={<Iconfont />} />
          <Route path="/iconoir" element={<Iconoir />} />
          <Route path="/lineawesome" element={<Lineawesome />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/leaflet" element={<Leaflet />} />
          <Route path="/vector" element={<Vector />} />
          <Route path="/newtransaction" element={<Newtransaction />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/starter" element={<Starter />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/treeview" element={<Treeview />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/tablebasic" element={<Tablebasic />} />
          <Route path="/tabledatabase" element={<Tabledatabase />} />
          <Route path="/tableedit" element={<Tabeledit />} />
          <Route path="/taxes" element={<Taxes />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/uialerts" element={<Uialerts />} />
          <Route path="/uiavatar" element={<Uiavatar />} />
          <Route path="/uibadges" element={<Uibadges />} />
          <Route path="/uibutton" element={<Uibutton />} />
          <Route path="/uicards" element={<Uicards />} />
          <Route path="/uicarousels" element={<Uicarousels />} />
          <Route path="/uidropdowns" element={<Uidropdowns />} />
          <Route path="/uigrids" element={<Uigrids />} />
          <Route path="/uiimages" element={<Uiimages />} />
          <Route path="/uilist" element={<Uilist />} />
          <Route path="/uimodals" element={<Uimodals />} />
          <Route path="/uinavbar" element={<Uinvbar />} />
          <Route path="/uinavs" element={<Uinavs />} />
          <Route path="/uipaginations" element={<Uipaginations />} />
          <Route path="/uitooltios" element={<Uitooltips />} />
          <Route path="/uiprogress" element={<Uiprogress />} />
          <Route path="/uispinners" element={<Uispinners />} />
          <Route path="/uitabs" element={<Uitabs />} />
          <Route path="/uitypography" element={<Uitypography />} />
          <Route path="/uivideos" element={<Uivideos />} />
          <Route path="/sweetalerts" element={<Sweetalerts />} />
          <Route path="/users" element={<Users />} />
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
             <Route path="/manageinquiry" element={< ManageInquiry/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
