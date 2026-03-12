import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logout from "../utils/Logout";
import CheckToken from "../utils/CheckToken";
import api from "../utils/AxiosConfig";
import {
  FaCity,
  FaUserCog,
  FaCalendarCheck,
  FaBuilding,
  FaClipboardList,
  FaHistory,
  FaComment,
} from "react-icons/fa";

function Header() {
  let [admin, setAdmin] = useState({});

  async function FetchAdmin() {
    try {
      let response = await api.get("/admin/dashborad");
      setAdmin(response.data.user);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    FetchAdmin();
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  console.log(collapsed);

  useEffect(() => {
    document.body.setAttribute(
      "data-sidebar-size",
      collapsed ? "collapsed" : "default",
    );
  }, [collapsed]);

  const admindetail = {
    name: admin.name,
  };

  let [token, seToken] = useState("");
  useEffect(() => {
    token = CheckToken();
    seToken(token);
  }, []);

  return (
    <>
      <div>
        <div
          class="startbar-overlay d-print-none"
          onClick={() => setCollapsed(!collapsed)}
        ></div>
        {/* Top Bar Start */}
        <div className="topbar d-print-none">
          <div className="container-fluid">
            <nav
              className="topbar-custom d-flex justify-content-between"
              id="topbar-custom"
            >
              <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
                <li>
                  <button
                    className="nav-link mobile-menu-btn nav-icon"
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <i className="iconoir-menu" />
                  </button>
                </li>
                <li className="hide-phone app-search">
                  <form role="search" action="#" method="get">
                    <input
                      type="search"
                      name="search"
                      className="form-control top-search mb-0"
                      placeholder="Search here..."
                    />
                    <button type="submit">
                      <i className="iconoir-search" />
                    </button>
                  </form>
                </li>
              </ul>
              <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
                <h2
                  style={{
                    fontSize: "20px",
                    marginTop: "13px",
                    marginRight: "20px",
                  }}
                >
                  Welcome, {admindetail.name}
                </h2>

                <li className="dropdown">
                  <a
                    className="nav-link dropdown-toggle arrow-none nav-icon"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                    data-bs-offset="0,19"
                  >
                    <img
                      src="assets/images/flags/us_flag.jpg"
                      alt
                      className="thumb-sm rounded-circle"
                    />
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">
                      <img
                        src="assets/images/flags/us_flag.jpg"
                        alt
                        height={15}
                        className="me-2"
                      />
                      English
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="assets/images/flags/spain_flag.jpg"
                        alt
                        height={15}
                        className="me-2"
                      />
                      Spanish
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="assets/images/flags/germany_flag.jpg"
                        alt
                        height={15}
                        className="me-2"
                      />
                      German
                    </a>
                    <a className="dropdown-item" href="#">
                      <img
                        src="assets/images/flags/french_flag.jpg"
                        alt
                        height={15}
                        className="me-2"
                      />
                      French
                    </a>
                  </div>
                </li>
                {/*end topbar-language*/}
                <li className="topbar-item">
                  <a
                    className="nav-link nav-icon"
                    href="javascript:void(0);"
                    id="light-dark-mode"
                  >
                    <i className="iconoir-half-moon dark-mode" />
                    <i className="iconoir-sun-light light-mode" />
                  </a>
                </li>
                <li className="dropdown topbar-item">
                  <a
                    className="nav-link dropdown-toggle arrow-none nav-icon"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                    data-bs-offset="0,19"
                  >
                    <i className="iconoir-bell" />
                    <span className="alert-badge" />
                  </a>
                  <div className="dropdown-menu stop dropdown-menu-end dropdown-lg py-0">
                    <h5 className="dropdown-item-text m-0 py-3 d-flex justify-content-between align-items-center">
                      Notifications{" "}
                      <a
                        href="#"
                        className="badge text-body-tertiary badge-pill"
                      >
                        <i className="iconoir-plus-circle fs-4" />
                      </a>
                    </h5>
                    <ul
                      className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-1"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link mx-0 active"
                          data-bs-toggle="tab"
                          href="#All"
                          role="tab"
                          aria-selected="true"
                        >
                          All{" "}
                          <span className="badge bg-primary-subtle text-primary badge-pill ms-1">
                            24
                          </span>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link mx-0"
                          data-bs-toggle="tab"
                          href="#Projects"
                          role="tab"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          Projects
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link mx-0"
                          data-bs-toggle="tab"
                          href="#Teams"
                          role="tab"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          Team
                        </a>
                      </li>
                    </ul>
                    <div
                      className="ms-0"
                      style={{ maxHeight: 230 }}
                      data-simplebar
                    >
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="All"
                          role="tabpanel"
                          aria-labelledby="all-tab"
                          tabIndex={0}
                        >
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              2 min ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-wolf fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  Your order is placed
                                </h6>
                                <small className="text-muted mb-0">
                                  Dummy text of the printing and industry.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              10 min ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-apple-swift fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  Meeting with designers
                                </h6>
                                <small className="text-muted mb-0">
                                  It is a long established fact that a reader.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              40 min ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-birthday-cake fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  UX 3 Task complete.
                                </h6>
                                <small className="text-muted mb-0">
                                  Dummy text of the printing.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              1 hr ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-drone fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  Your order is placed
                                </h6>
                                <small className="text-muted mb-0">
                                  It is a long established fact that a reader.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              2 hrs ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-user fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  Payment Successfull
                                </h6>
                                <small className="text-muted mb-0">
                                  Dummy text of the printing.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Projects"
                          role="tabpanel"
                          aria-labelledby="projects-tab"
                          tabIndex={0}
                        >
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              40 min ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-birthday-cake fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  UX 3 Task complete.
                                </h6>
                                <small className="text-muted mb-0">
                                  Dummy text of the printing.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              1 hr ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-drone fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  Your order is placed
                                </h6>
                                <small className="text-muted mb-0">
                                  It is a long established fact that a reader.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              2 hrs ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-user fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  Payment Successfull
                                </h6>
                                <small className="text-muted mb-0">
                                  Dummy text of the printing.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="Teams"
                          role="tabpanel"
                          aria-labelledby="teams-tab"
                          tabIndex={0}
                        >
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              1 hr ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-drone fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  Your order is placed
                                </h6>
                                <small className="text-muted mb-0">
                                  It is a long established fact that a reader.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                          {/* item*/}
                          <a href="#" className="dropdown-item py-3">
                            <small className="float-end text-muted ps-2">
                              2 hrs ago
                            </small>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-md rounded-circle">
                                <i className="iconoir-user fs-4" />
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate">
                                <h6 className="my-0 fw-normal text-dark fs-13">
                                  Payment Successfull
                                </h6>
                                <small className="text-muted mb-0">
                                  Dummy text of the printing.
                                </small>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>
                          {/*end-item*/}
                        </div>
                      </div>
                    </div>
                    {/* All*/}
                    <a
                      href="pages-notifications.html"
                      className="dropdown-item text-center text-dark fs-13 py-2"
                    >
                      View All <i className="fi-arrow-right" />
                    </a>
                  </div>
                </li>
                <li className="dropdown topbar-item">
                  <a
                    className="nav-link dropdown-toggle arrow-none nav-icon"
                    data-bs-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="false"
                    aria-expanded="false"
                    data-bs-offset="0,19"
                  >
                    <img
                      src="assets/images/users/avatar-1.jpg"
                      alt
                      className="thumb-md rounded-circle"
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end py-0">
                    <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          alt
                          className="thumb-md rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                        <h6 className="my-0 fw-medium text-dark fs-13">
                          William Martin
                        </h6>
                        <small className="text-muted mb-0">
                          Front End Developer
                        </small>
                      </div>
                      {/*end media-body*/}
                    </div>
                    <div className="dropdown-divider mt-0" />
                    <small className="text-muted px-2 pb-1 d-block">
                      Account
                    </small>
                    <a className="dropdown-item" href="pages-profile.html">
                      <i className="las la-user fs-18 me-1 align-text-bottom" />{" "}
                      Profile
                    </a>
                    <a className="dropdown-item" href="pages-faq.html">
                      <i className="las la-wallet fs-18 me-1 align-text-bottom" />{" "}
                      Earning
                    </a>
                    <small className="text-muted px-2 py-1 d-block">
                      Settings
                    </small>
                    <a className="dropdown-item" href="pages-profile.html">
                      <i className="las la-cog fs-18 me-1 align-text-bottom" />
                      Account Settings
                    </a>
                    <a className="dropdown-item" href="pages-profile.html">
                      <i className="las la-lock fs-18 me-1 align-text-bottom" />{" "}
                      Security
                    </a>
                    <a className="dropdown-item" href="pages-faq.html">
                      <i className="las la-question-circle fs-18 me-1 align-text-bottom" />{" "}
                      Help Center
                    </a>
                    <div className="dropdown-divider mb-0" />
                    <Link className="dropdown-item text-danger" to="/login">
                      <i className="las la-power-off fs-18 me-1 align-text-bottom" />{" "}
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
              {/*end topbar-nav*/}
            </nav>
            {/* end navbar*/}
          </div>
        </div>
        {/* Top Bar End */}
        {/* leftbar-tab-menu */}
        <div className="startbar d-print-none">
          {/*start brand*/}
          <div className="brand">
            <Link to="/" className="logo">
              <span>
                <img
                  src="assets/images/logo-sm.png"
                  alt="logo-small"
                  className="logo-sm"
                />
              </span>
              <span className>
                <img
                  src="assets/images/logo-light.png"
                  alt="logo-large"
                  className="logo-lg logo-light"
                />
                <img
                  src="assets/images/logo-dark.png"
                  alt="logo-large"
                  className="logo-lg logo-dark"
                />
              </span>
            </Link>
          </div>
          {/*end brand*/}
          {/*start startbar-menu*/}
          <div className="startbar-menu">
            <div
              className="startbar-collapse"
              id="startbarCollapse"
              data-simplebar
            >
              <div className="d-flex align-items-start flex-column w-100">
                {/* Navigation */}
                <ul className="navbar-nav mb-auto w-100" id="sidebarAccordion">
                  <li className="menu-label mt-2">
                    <span>Main</span>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <i className="iconoir-report-columns menu-icon" />
                      <span>Dashboard</span>
                      <span className="badge text-bg-info ms-auto">New</span>
                    </Link>
                  </li>
                  {/*end nav-item*/}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/payment">
                      <i className="iconoir-hand-cash menu-icon" />
                      <span>Payment</span>
                    </Link>
                  </li> */}
                  {/*end nav-item*/}
                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarTransactions"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarTransactions"
                    >
                      <i className="iconoir-task-list menu-icon" />
                      <span>Transactions</span>
                    </a>
                    <div className="collapse " id="sidebarTransactions">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/transactions">
                            Overview
                          </Link>
                        </li>
                     
                        <li className="nav-item">
                          <Link className="nav-link" to="newtransaction">
                            Add Transactions
                          </Link>
                        </li>
                    
                      </ul>
                    
                    </div>
                   
                  </li> */}
                  {/*end nav-item*/}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/cards">
                      <i className="iconoir-credit-cards menu-icon" />
                      <span>Cards</span>
                      <span className="badge text-bg-pink ms-auto">03</span>
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/managecity">
                      <i className="iconoir-city menu-icon" />
                      <span>Manage City</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/managevenuetype">
                      <i className="iconoir-building   menu-icon" />
                      <span>Manage Venue Type</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/manageuser">
                      <i className="iconoir-user menu-icon" />
                      <span>Manage User</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/manageoccasion">
                      <i className="iconoir-calendar menu-icon" />
                      <span>Manage Occasion</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/managehotel">
                      <i className="iconoir-home  menu-icon" />
                      <span>Manage Hotel</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/managevenue">
                      <i className="iconoir-building menu-icon" />
                      <span>Manage Venue</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/managevenuebooking">
                      <i className="iconoir-book menu-icon" />
                      <span>Manage Booking</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/managebookinghistory">
                      <i className="iconoir-clipboard-check menu-icon" />
                      <span>Manage Booking History</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/manageinquiry">
                      <i className="iconoir-message-text menu-icon" />
                      <span>Manage Inquiry</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/viewfeedback">
                      <i className="iconoir-chat-bubble menu-icon" />
                      <span>View Feedback</span>
                    </Link>
                  </li>

                  {/*end nav-item*/}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/taxes">
                      <i className="iconoir-plug-type-l menu-icon" />
                      <span>Texes</span>
                    </Link>
                  </li> */}
                  {/*end nav-item*/}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/users">
                      <i className="iconoir-group menu-icon" />
                      <span>Users</span>
                    </Link>
                  </li> */}
                  {/*end nav-item*/}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/chat">
                      <i className="iconoir-chat-bubble menu-icon" />
                      <span>Chat</span>
                    </Link>
                  </li> */}
                  {/*end nav-item*/}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/contactlist">
                      <i className="iconoir-community menu-icon" />
                      <span>Contact List</span>
                    </Link>
                  </li> */}
                  {/*end nav-item*/}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/calendar">
                      <i className="iconoir-calendar menu-icon" />
                      <span>Calendar</span>
                    </Link>
                  </li> */}
                  {/*end nav-item*/}
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/invoice">
                      <i className="iconoir-paste-clipboard menu-icon" />
                      <span>Invoice</span>
                    </Link>
                  </li> */}
                  {/*end nav-item*/}
                  {/* <li className="menu-label mt-2">
                    <small className="label-border">
                      <div className="border_left hidden-xs" />
                      <div className="border_right" />
                    </small>
                    <span>Components</span>
                  </li> */}
                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarElements"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarElements"
                    >
                      <i className="iconoir-compact-disc menu-icon" />
                      <span>UI Elements</span>
                    </a>
                    <div className="collapse " id="sidebarElements">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/uialerts">
                            Alerts
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uiavatar">
                            Avatar
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uibutton">
                            Buttons
                          </Link>
                        </li>
                     
                        <li className="nav-item">
                          <Link className="nav-link" to="/uibadges">
                            Badges
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uicards">
                            Cards
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uicarousels">
                            Carousels
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uidropdowns">
                            Dropdowns
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uigrids">
                            Grids
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uiimages">
                            Images
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uilist">
                            List
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uimodals">
                            Modals
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uinavs">
                            Navs
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uinavbar">
                            Navbar
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uipaginations">
                            Paginations
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uitooltips">
                            Popover &amp; Tooltips
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uiprogress">
                            Progress
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uispinners">
                            Spinners
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uitabs">
                            Tabs &amp; Accordions
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uitypography">
                            Typography
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/uivideos">
                            Videos
                          </Link>
                        </li>
                       
                      </ul>
                   
                    </div>
                  
                  </li> */}

                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarAdvancedUI"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarAdvancedUI"
                    >
                      <i className="iconoir-peace-hand menu-icon" />
                      <span>Advanced UI</span>
                      <span className="badge rounded text-success bg-success-subtle ms-1">
                        New
                      </span>
                    </a>
                    <div className="collapse " id="sidebarAdvancedUI">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/animation">
                            Animation
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/clipboard">
                            Clip Board
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/dragula">
                            Dragula
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/file">
                            File Manager
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/highlight">
                            Highlight
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/rangeslider">
                            Range Slider
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/rating">
                            Ratings
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="ribbons">
                            Ribbons
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="sweetalerts">
                            Sweet Alerts
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/toasts">
                            Toasts
                          </Link>
                        </li>
                       
                      </ul>
                     
                    </div>
                   
                  </li> */}

                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarForms"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarForms"
                    >
                      <i className="iconoir-cube-hole menu-icon" />
                      <span>Forms</span>
                    </a>
                    <div className="collapse " id="sidebarForms">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/formselements">
                            Elements
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/formsadvanced">
                            Advance Elements
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/fromvalidation">
                            Validation
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/fromwizard">
                            Wizard
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/formseditors">
                            Editors
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/formsupload">
                            File Upload
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/fromscrop">
                            Image Crop
                          </Link>
                        </li>
                       
                      </ul>
                     
                    </div>
                  
                  </li> */}

                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarCharts"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarCharts"
                    >
                      <i className="iconoir-candlestick-chart menu-icon" />
                      <span>Charts</span>
                    </a>
                    <div className="collapse " id="sidebarCharts">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/apex">
                            Apex
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/justgage">
                            JustGage
                          </Link>
                        </li>
                     
                        <li className="nav-item">
                          <Link className="nav-link" to="/chartjs">
                            Chartjs
                          </Link>
                        </li>
                     
                        <li className="nav-item">
                          <Link className="nav-link" to="/chartstoats">
                            Toast
                          </Link>
                        </li>
                     
                      </ul>
                    
                    </div>
                  
                  </li> */}

                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarTables"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarTables"
                    >
                      <i className="iconoir-list menu-icon" />
                      <span>Tables</span>
                    </a>
                    <div className="collapse " id="sidebarTables">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/tablebasic">
                            Basic
                          </Link>
                        </li>
                     
                        <li className="nav-item">
                          <Link className="nav-link" to="/tabledatabase">
                            Datatables
                          </Link>
                        </li>
                    
                        <li className="nav-item">
                          <Link className="nav-link" to="/tableedit">
                            Editable
                          </Link>
                        </li>
                   
                      </ul>
                    
                    </div>
                 
                  </li> */}
                  {/*                  
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarIcons"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarIcons"
                    >
                      <i className="iconoir-fire-flame menu-icon" />
                      <span>Icons</span>
                    </a>
                    <div className="collapse " id="sidebarIcons">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/fontawesome">
                            Font Awesome
                          </Link>
                        </li>
                     
                        <li className="nav-item">
                          <Link className="nav-link" to="lineawesome">
                            Line Awesome
                          </Link>
                        </li>
                     
                        <li className="nav-item">
                          <Link className="nav-link" to="iconfont">
                            Icofont
                          </Link>
                        </li>
                     
                        <li className="nav-item">
                          <Link className="nav-link" to="/iconoir">
                            Iconoir
                          </Link>
                        </li>
                     
                      </ul>
                     
                    </div>
                    
                  </li> */}

                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarMaps"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarMaps"
                    >
                      <i className="iconoir-map-pin menu-icon" />
                      <span>Maps</span>
                    </a>
                    <div className="collapse " id="sidebarMaps">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/maps">
                            Google Maps
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/leaflet">
                            Leaflet Maps
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/vector">
                            Vector Maps
                          </Link>
                        </li>
                       
                      </ul>
                    
                    </div>
                  
                  </li> */}

                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarEmailTemplates"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarEmailTemplates"
                    >
                      <i className="iconoir-send-mail menu-icon" />
                      <span>Email Templates</span>
                    </a>
                    <div className="collapse " id="sidebarEmailTemplates">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/emailbasic">
                            Basic Action Email
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/emailalert">
                            Alert Email
                          </Link>
                        </li>
                       
                        <li className="nav-item">
                          <Link className="nav-link" to="/emailbilling">
                            Billing Email
                          </Link>
                        </li>
                       
                      </ul>
                     
                    </div>
                    
                  </li> */}

                  <li className="menu-label mt-2">
                    <small className="label-border">
                      <div className="border_left hidden-xs" />
                      <div className="border_right" />
                    </small>
                    <span>Crafted</span>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarPages"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarPages"
                    >
                      <i className="iconoir-page-star menu-icon" />
                      <span>Pages</span>
                    </a>
                    <div className="collapse " id="sidebarPages">
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <Link className="nav-link" to="/profile">
                            Profile
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="notification">
                            Notifications
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/timeline">
                            Timeline
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/treeview">
                            Treeview
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/starter">
                            Starter Page
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/pricing">
                            Pricing
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/blog">
                            Blogs
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/faq">
                            FAQs
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link className="nav-link" to="/gallery">
                            Gallery
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#sidebarAuthentication"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="sidebarAuthentication"
                    >
                      <i className="iconoir-fingerprint-lock-circle menu-icon" />
                      <span>Authentication</span>
                    </a>
                    <div className="collapse " id="sidebarAuthentication">
                      <ul className="nav flex-column">
                        {/*end nav-item*/}

                        {/*end nav-item*/}
                        <li className="nav-item">
                          <Link className="nav-link" to="/recoverpw">
                            Re-Password
                          </Link>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <Link className="nav-link" to="/lockscreen">
                            Lock-screeen
                          </Link>
                        </li>

                        {/*end nav-item*/}
                        <li className="nav-item">
                          <Link className="nav-link" to="/maintenance">
                            Maintenance
                          </Link>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <Link className="nav-link" to="error">
                            Error 404
                          </Link>
                        </li>
                        {/*end nav-item*/}
                        <li className="nav-item">
                          <Link className="nav-link" to="errors">
                            Error 500
                          </Link>
                        </li>
                        {/*end nav-item*/}
                      </ul>
                      {/*end nav*/}
                    </div>
                    {/*end startbarAuthentication*/}
                  </li>
                  {/*end nav-item*/}

                  <li className="nav-item">
                    {token ? (
                      <>
                        <Link
                          className="nav-link d-flex align-items-center"
                          to="#"
                          onClick={() => {
                            Logout();
                          }}
                          role="button"
                        >
                          <i className="iconoir-log-out menu-icon me-2"></i>
                          <span>Logout</span>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          className="nav-link d-flex align-items-center"
                          to="/login"
                          role="button"
                        >
                          <i className="iconoir-log-in menu-icon me-2"></i>
                          <span>Login</span>
                        </Link>
                      </>
                    )}
                  </li>
                </ul>
                {/*end navbar-nav-*/}
                <div className="update-msg text-center">
                  <div className="d-flex justify-content-center align-items-center thumb-lg update-icon-box  rounded-circle mx-auto">
                    {/* <i class="iconoir-peace-hand h3 align-self-center mb-0 text-primary"></i> */}
                    <img
                      src="assets/images/extra/gold.png"
                      alt
                      className
                      height={45}
                    />
                  </div>
                  <h5 className="mt-3">
                    Today's <span className="text-white">$2450.00</span>
                  </h5>
                  <p className="mb-3 text-muted">
                    Today's best Investment for you.
                  </p>
                  <a
                    href="javascript: void(0);"
                    className="btn text-primary shadow-sm rounded-pill px-3"
                  >
                    Invest Now
                  </a>
                </div>
              </div>
            </div>
            {/*end startbar-collapse*/}
          </div>
          {/*end startbar-menu*/}
        </div>
        {/*end startbar*/}
      </div>
    </>
  );
}

export default Header;
