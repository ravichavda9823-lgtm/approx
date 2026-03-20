import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckToken from "../utils/CheckToken";
import Logout from "../utils/Logout";
import CheckRole from "../utils/CheckRole";
import api from "../utils/AxiosConfig";
import axios from "axios";

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [openDropdown, setOpenDropdown] = useState(null);


  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  function toggleNav() {
    setIsMobileOpen(!isMobileOpen);
  }
  const handleLinkClick = () => {
    setIsMobileOpen(false);
  };

 
  let [token, setToken] = useState("");
  let [role, setRole] = useState("");

  useEffect(() => {
    token = CheckToken();
    setToken(token);
    role = CheckRole();
    setRole(role);
  }, []);

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
                    <img
                      style={{ width: "240px", height: "60px" }}
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
                                to="#"
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
                    <img
                      style={{ width: "240px", height: "60px" }}
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
              <Link to="/" onClick={handleLinkClick}>
                <img
                  style={{ width: "270px", height: "70px" }}
                  src="\assets\images\logo5.png"
                  alt="Grand Hotel Logo"
                />
              </Link>
            </div>

            <div className="menu-outer mt-0">
              <ul className="navigation">
                <li>
                  <Link to="/" onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="/about" onClick={handleLinkClick}>
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/selectoccasion" onClick={handleLinkClick}>
                    Occasion
                  </Link>
                </li>

                {/* USER MENU */}
                {role === "user" && token && (
                  <li
                    className={`dropdown ${openDropdown === "booking" ? "open" : ""}`}
                  >
                    <Link to="#">Booking</Link>
                    <ul>
                      <li>
                        <Link to="/bookinghistory" onClick={handleLinkClick}>
                          Booking History
                        </Link>
                      </li>
                      <li>
                        <Link to="/feedback" onClick={handleLinkClick}>
                          Feedback
                        </Link>
                      </li>
                    </ul>

                    <div
                      className="dropdown-btn"
                      onClick={() => toggleDropdown("booking")}
                    >
                      <span className="fa fa-angle-right" />
                    </div>
                  </li>
                )}

                {/* MANAGER MENU */}
                {role === "manager" && token && (
                  <>
                    <li
                      className={`dropdown ${openDropdown === "occasion" ? "open" : ""}`}
                    >
                      <Link to="#">Venue</Link>
                      <ul>
                        <li>
                          <Link to="/managervenue" onClick={handleLinkClick}>
                            Venue
                          </Link>
                        </li>
                        <li>
                          <Link to="/addvenue" onClick={handleLinkClick}>
                            Add Venue Form
                          </Link>
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
                      className={`dropdown ${openDropdown === "hotel" ? "open" : ""}`}
                    >
                      <Link to="#">Hotel</Link>
                      <ul>
                        <li>
                          <Link
                            to="/managerviewhotel"
                            onClick={handleLinkClick}
                          >
                            Hotel
                          </Link>
                        </li>
                        <li>
                          <Link to="/addhotel" onClick={handleLinkClick}>
                            Add Hotel
                          </Link>
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
                      className={`dropdown ${openDropdown === "booking" ? "open" : ""}`}
                    >
                      <Link to="#">Booking</Link> {/* FIXED */}
                      <ul>
                        <li>
                          <Link to="/managerbooking" onClick={handleLinkClick}>
                            Manage Booking
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/managerviewpayment"
                            onClick={handleLinkClick}
                          >
                            View Payment
                          </Link>
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
                )}

                <li>
                  <Link to="/contact" onClick={handleLinkClick}>
                    Contact
                  </Link>
                </li>

                {/* AUTH */}
                {token ? (
                  <>
                    <li>
                      <Link to="/profile" onClick={handleLinkClick}>
                        Profile
                      </Link>
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
                      <Link to="/login" onClick={handleLinkClick}>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/registartion" onClick={handleLinkClick}>
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Social Links */}
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
