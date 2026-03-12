import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckToken from "../utils/CheckToken";
import Logout from "../utils/Logout";
import CheckRole from "../utils/CheckRole";

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  function toggleNav() {
    setIsMobileOpen(!isMobileOpen);
  }

  console.log(isMobileOpen);

  let [token, setToken] = useState("");
  let [role, setRole] = useState("");

  useEffect(() => {
    token = CheckToken();
    setToken(token);
    role = CheckRole();
    setRole(role);
  }, []);

  console.log(token);
  console.log(role);

  return (
    <>
      <header
        className={`main-header header-style-one ${
          isMobileOpen ? "mobile-menu-visible" : ""
        }`}
      >
        <div className="header-upper ">
          <div className="auto-container ">
            <div className="inner-container d-flex align-items-center justify-content-between  ">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img style={{width:"240px", height:"60px"}}
                      src="\assets\images\logo5.png"
                      alt="Grand Hotel Logo"
                    />
                  </Link>
                </div>
              </div>
              <div className="middle-column ">
                <div className="nav-outer ">
                  <div className="mobile-nav-toggler" onClick={toggleNav}>
                    <img src="assets/images/icons/icon-bar-2.png" alt />
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix me-3"
                      id="navbarSupportedContent "
                    >
                      <ul className="navigation">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        {role === "manager" && token ? (
                          <>
                            <li className="dropdown">
                              <Link tp="#">Venue</Link>
                              <ul>
                                <li>
                                  <Link to="/managervenue">Venue</Link>
                                </li>
                                <li>
                                  <Link to="/addvenue">Add venue Form</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <Link tp="/about">Hotel</Link>
                              <ul>
                                <li>
                                  <Link to="/managerviewhotel">Hotel</Link>
                                </li>

                                <li>
                                  <Link to="/addhotel">Add Hotel</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <Link tp="/about">Booking</Link>
                              <ul>
                                <li>
                                  <Link to="/managerbooking">
                                    Manage Booking
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </>
                        ) : (
                          <></>
                        )}

                        {/* {role === "user" && token ? (
                          <>
                            <li className="dropdown">
                              <Link to="#">Pages</Link>
                              <ul>
                                <li>
                                  <Link to="/menu">Menu</Link>
                                </li>
                                <li>
                                  <Link to="/gallery">Gallery</Link>
                                </li>
                                <li>
                                  <Link to="/spa">Spa &amp; Wellness</Link>
                                </li>
                                <li>
                                  <Link to="/amenities">Amenities</Link>
                                </li>
                                <li className="dropdown">
                                  <Link to="#">Events</Link>
                                  <ul>
                                    <li>
                                      <Link to="/event">Events</Link>
                                    </li>
                                    <li>
                                      <Link to="/eventdetails">
                                        Event Details
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li className="dropdown">
                                  <Link to="/package">Packages</Link>
                                  <ul>
                                    <li>
                                      <Link to="/package">Packages</Link>
                                    </li>
                                    <li>
                                      <Link to="/packagedetails">
                                        Package Details
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </>
                        ) : (
                          <></>
                        )} */}

                        <li>
                          <Link to="/selectoccasion">Occasion</Link>
                          <ul>
                            <li>
                              <Link to="/selectoccasion">Select-Occasion</Link>
                            </li>
                            {/* <li>
                                  <Link to="/feedback">FeedBack</Link>
                                </li> */}
                          </ul>
                        </li>

                        {role === "user" && token ? (
                          <>
                            <li className="dropdown">
                              <Link to="#">Booking</Link>
                              <ul>
                                <li>
                                  <Link to="/bookinghistory">
                                    Booking History
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/feedback">Feedback</Link>
                                </li>
                              </ul>
                            </li>
                          </>
                        ) : (
                          <></>
                        )}
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                        {token ? (
                          <>
                            <li>
                              <Link to="/profile">Profile</Link>
                            </li>
                            <li>
                              <Link
                                onClick={() => {
                                  Logout();
                                }}
                              >
                                Logout
                              </Link>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link to="/login">Login</Link>
                            </li>
                            <li>
                              <Link to="/registartion">Register</Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              {role === "user" && token ? (
                <>
                  <div className="right-column d-flex align-items-center">
                    <div className="header-link-btn">
                      <Link
                        to="/selectoccasion"
                        className="btn-1 btn-small btn-alt"
                      >
                        Book Your Venue <span />
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}
              {role === "manager" && token ? (
                  <>
                    <div className="right-column d-flex align-items-center ms-3 ">
                      <div className="header-link-btn">
                        <Link
                          to="/managervenue"
                          className="btn-1 btn-small btn-alt "
                        >
                          Book Your Venue <span />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
            </div>
          </div>
        </div>
        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container d-flex align-items-center justify-content-between">
                {/*Logo*/}
                 <div className="logo">
                  <Link to="/">
                    <img style={{width:"240px", height:"60px"}}
                      src="\assets\images\logo5.png"
                      alt="Grand Hotel Logo"
                    />
                  </Link>
                </div>
                <div className="middle-column">
                  {/*Nav Box*/}
                  <div className="nav-outer">
                    {/*Mobile Navigation Toggler*/}
                    <div className="mobile-nav-toggler">
                      <img src="assets/images/icons/icon-bar-2.png" alt />
                    </div>
                    {/* Main Menu */}
                    <nav className="main-menu navbar-expand-md navbar-light">
                      <div
                        className="collapse navbar-collapse show clearfix"
                        id="navbarSupportedContent"
                      >
                        <ul className="navigation">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                            
                          </li>

                          {role === "manager" && token ? (
                            <>
                              <li className="dropdown">
                                <Link tp="#">venue</Link>
                                <ul>
                                  <li>
                                    <Link to="/managervenue">Venue</Link>
                                  </li>

                                  <li>
                                    <Link to="/addvenue">Add Venue Form</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <Link to="#">Hotel</Link>
                                <ul>
                                  <li>
                                    <Link to="/managerviewhotel">Hotel</Link>
                                  </li>

                                  <li>
                                    <Link to="/addhotel">Add Hotel</Link>
                                  </li>
                                </ul>
                              </li>
                              <li className="dropdown">
                                <Link to="#">Booking</Link>
                                <ul>
                                  <li>
                                    <Link to="/managerbooking">
                                      Manage Booking
                                    </Link>
                                  </li>

                                  <li>
                                    <Link to="/managerviewpayment">
                                      {" "}
                                      View Payment
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                            </>
                          ) : (
                            <></>
                          )}
                        
                          <li>
                            <Link to="/selectoccasion">Occasion</Link>
                          </li>
                          {role === "user" && token ? (
                            <>
                              <li className="dropdown">
                                <Link to="#">Booking</Link>
                                <ul>
                                  <li>
                                    <Link to="/bookinghistory">
                                      Booking History
                                    </Link>
                                  </li>
                                   <li>
                                  <Link to="/feedback">Feedback</Link>
                                </li>

                                 
                                </ul>
                              </li>
                            </>
                          ) : (
                            <></>
                          )}
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                          {token ? (
                            <>
                              <li>
                                <Link to="/profile">Profile</Link>
                              </li>
                              <li>
                                <Link
                                  onClick={() => {
                                    Logout();
                                  }}
                                >
                                  Logout
                                </Link>
                              </li>
                            </>
                          ) : (
                            <>
                              <li>
                                <Link to="/login">Login</Link>
                              </li>
                              <li>
                                <Link to="/registartion">Register</Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                {role === "user" && token ? (
                  <>
                    <div className="right-column d-flex align-items-center">
                      <div className="header-link-btn">
                        <Link
                          to="/selectoccasion"
                          className="btn-1 btn-small btn-alt"
                        >
                          Book Your Venue <span />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
                {role === "manager" && token ? (
                  <>
                    <div className="right-column d-flex align-items-center">
                      <div className="header-link-btn">
                        <Link
                          to="/managervenue"
                          className="btn-1 btn-small btn-alt"
                        >
                          Book Your Venue <span />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={`mobile-menu ${isMobileOpen ? "open" : ""}`}>
          {/* Backdrop */}
          <div
            className="menu-backdrop"
            onClick={() => setIsMobileOpen(false)}
          />

          {/* Close Button */}
          <div className="close-btn" onClick={() => setIsMobileOpen(false)}>
            <span className="fal fa-times" />
          </div>

          <nav className="menu-box">
            <div className="nav-logo mb-2">
               <Link to="/">
                    <img style={{width:"270px", height:"70px"}}
                      src="\assets\images\logo5.png"
                      alt="Grand Hotel Logo"
                    />
                  </Link>
            </div>
            <div className="menu-outer mt-0">
              <ul className="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>

                  {/* <ul>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/testimonials">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/faq">Faq</Link>
                    </li>
                    <li>
                      <Link to="/error">404 Error Page</Link>
                    </li>
                  </ul> */}
                </li>
                {/* {role === "user" && token ? (
                  <>
                    <li
                      className={`dropdown ${
                        openDropdown === "pages" ? "open" : ""
                      }`}
                    >
                      <Link to="/bloggrid">Pages</Link>

                      <ul>
                        <li>
                          <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                          <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link to="/spa">Spa &amp; Wellness</Link>
                        </li>
                        <li>
                          <Link to="/amenities">Amenities</Link>
                        </li>
                        <li
                          className={`dropdown ${
                            openDropdown === "events" ? "open" : ""
                          }`}
                        >
                          <Link to="#">Events</Link>

                          <ul>
                            <li>
                              <Link to="/event">Events</Link>
                            </li>
                            <li>
                              <Link to="/eventdetails">Event Details</Link>
                            </li>
                          </ul>

                          <div
                            className="dropdown-btn"
                            onClick={() => toggleDropdown("events")}
                          >
                            <span className="fa fa-angle-right" />
                          </div>
                        </li>
                        <li
                          className={`dropdown ${
                            openDropdown === "packages" ? "open" : ""
                          }`}
                        >
                          <Link to="/package">Packages</Link>

                          <ul>
                            <li>
                              <Link to="/package">Packages</Link>
                            </li>
                            <li>
                              <Link to="/packagedetails">Package Details</Link>
                            </li>
                          </ul>

                          <div
                            className="dropdown-btn"
                            onClick={() => toggleDropdown("packages")}
                          >
                            <span className="fa fa-angle-right" />
                          </div>
                        </li>{" "}
                        <li
                          className={`dropdown ${
                            openDropdown === "page" ? "open" : ""
                          }`}
                        >
                          <Link to="#">Page</Link>
                          <ul>
                            <li>
                              <Link to="/selectcity">Select-City</Link>
                            </li>
                            <li>
                              <Link to="/selecttype">Select-Type</Link>
                            </li>
                            <li>
                              <Link to="/selectoccasion">Select-Occasion</Link>
                            </li>
                            <li>
                              <Link to="/selectbooking">Select-Booking</Link>
                            </li>
                            <li>
                              <Link to="/viewhotels">View Hotel</Link>
                            </li>
                            <li>
                              <Link to="/viewvenue">View Venue Detials</Link>
                            </li>
                            <li>
                              <Link to="/bookinghistory">Booking History</Link>
                            </li>
                            <li>
                              <Link to="/feedback">FeedBack</Link>
                            </li>
                          </ul>
                          <div
                            className="dropdown-btn"
                            onClick={() => toggleDropdown("page")}
                          >
                            <span className="fa fa-angle-right" />
                          </div>
                        </li>
                      </ul>

                      <div
                        className="dropdown-btn"
                        onClick={() => toggleDropdown("pages")}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                  </>
                ) : (
                  <></>
                )} */}
                <li>
                  <Link to="/selectoccasion">Occasion</Link>
                </li>{" "}
                {role === "user" && token ? (
                  <>

                    <li
                      className={`dropdown ${
                        openDropdown === "booking" ? "open" : ""
                      }`}
                    >
                      <Link to="#">Booking</Link>
                      <ul>
                        <li>
                          <Link to="/bookinghistory">Booking History</Link>
                        </li>
                         <li>
                          <Link to="/feedback">Feedback</Link>
                        </li>

                      

                      </ul>

                      <div
                        className="dropdown-btn"
                        onClick={() => toggleDropdown("booking")}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                {/* {role === "user" && token ? (
                  <>
                    <li
                      className={`dropdown ${
                        openDropdown === "occasion" ? "open" : ""
                      }`}
                    >
                      <Link tp="#">Occasion</Link>
                      <ul>
                        <li>
                          <Link to="/selectoccasion">Select-Occasion</Link>
                        </li>

                      

                        <li>
                          <Link to="/feedback">FeedBack</Link>
                        </li>
                      </ul>

                      <div
                        className="dropdown-btn"
                        onClick={() => toggleDropdown("occasion")}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                  </>
                ) : (
                  <></>
                )} */}
                {role === "manager" && token ? (
                  <>
                    <li
                      className={`dropdown ${
                        openDropdown === "occasion" ? "open" : ""
                      }`}
                    >
                      <Link to="#">Venue</Link>
                      <ul>
                        <li>
                          <Link to="/managervenue">Venue</Link>
                        </li>

                        <li>
                          <Link to="/addvenue">Add Venue Form</Link>
                        </li>
                      </ul>
                      <div
                        className="dropdown-btn"
                        onClick={() => toggleDropdown("occasion")}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                    <li
                      className={`dropdown ${
                        openDropdown === "hotel" ? "open" : ""
                      }`}
                    >
                      <Link to="#">Hotel</Link>
                      <ul>
                        <li>
                          <Link to="/managerviewhotel">Hotel</Link>
                        </li>

                        <li>
                          <Link to="/addhotel">Add Hotel</Link>
                        </li>
                      </ul>
                      <div
                        className="dropdown-btn"
                        onClick={() => toggleDropdown("hotel")}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>

                    <li
                      className={`dropdown ${
                        openDropdown === "booking" ? "open" : ""
                      }`}
                    >
                      <Link tp="/about">Booking</Link>
                      <ul>
                        <li>
                          <Link to="/managerbooking">Manage Booking</Link>
                        </li>

                        <li>
                          <Link to="/managerviewpayment"> View Payment</Link>
                        </li>
                      </ul>
                      <div
                        className="dropdown-btn"
                        onClick={() => toggleDropdown("booking")}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                  </>
                ) : (
                  <></>
                )}
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {token ? (
                  <>
                    <li>
                      <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          Logout();
                        }}
                      >
                        Logout
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/registartion">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            {/*Social Links*/}
            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <span className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest-p" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="nav-overlay">
          <div className="cursor" />
          <div className="cursor-follower" />
        </div>
      </header>
    </>
  );
}

export default Header;
