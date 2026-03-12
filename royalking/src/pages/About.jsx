import React from "react";
import Testimonials from "../common/Testimonials";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div>
        <div id="search-popup" className="search-popup">
          <div className="close-search theme-btn">
            <span className="fal fa-times" />
          </div>
          <div className="popup-inner">
            <div className="overlay-layer" />
            <div className="search-form">
              <form
                method="post"
                action="https://html.tonatheme.com/2022/royalking/index.html"
              >
                <div className="form-group">
                  <fieldset>
                    <input
                      type="search"
                      className="form-control"
                      name="search-input"
                      defaultValue
                      placeholder="Search Here"
                      required
                    />
                    <input
                      type="submit"
                      defaultValue="Search Now!"
                      className="theme-btn"
                    />
                  </fieldset>
                </div>
              </form>
              <br />
              <h3>Recent Search Keywords</h3>
              <ul className="recent-searches">
                <li>
                  <a href="#">Finance</a>
                </li>
                <li>
                  <a href="#">Idea</a>
                </li>
                <li>
                  <a href="#">Service</a>
                </li>
                <li>
                  <a href="#">Growth</a>
                </li>
                <li>
                  <a href="#">Plan</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="page-title"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/13036817/pexels-photo-13036817.jpeg?cs=srgb&dl=pexels-reneterp-13036817.jpg&fm=jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="auto-container">
            <h1>About Us</h1>
          </div>
        </div>
        <div className="bredcrumb-wrap">
          <div className="auto-container">
            <ul className="bredcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
        {/* About Two */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section_heading mb_20">
                  <span className="section_heading_title_small">
                    About Our Venue
                  </span>
                  <h2 className="section_heading_title_big">
                    A Signature Hotel <br />
                    Venue for Weddings <br />& Special Occasions
                  </h2>
                </div>

                <p className="aboout-1-desc mb_30">
                  Our luxury hotel venue is thoughtfully designed to host
                  weddings, private celebrations, corporate events, and
                  memorable stays. Featuring elegant event spaces, modern
                  amenities, and dedicated hospitality services, we provide the
                  perfect setting for every occasion, ensuring seamless planning
                  and unforgettable experiences.
                </p>

                <div className="about-1-btn mb_30">
                  <Link to="/selectoccasion" className="btn-1">
                    Explore Our Venue
                    <span />
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 ps-lg-5">
                <div className="about-2-image-wrap mb_30 p_relative">
                  <div className="about-2-shape-1">
                    <img src="assets/images/shape/pattern-1.png" alt />
                  </div>

                  <div className="about-2-image-1" data-parallax='{"y": -20}'>
                    <img src="assets/images/resource/about-2.jpg" alt />
                  </div>

                  <div className="about-2-image-2" data-parallax='{"y": 20}'>
                    <img src="assets/images/resource/about-3.jpg" alt />
                  </div>

                  <div className="about-2-video-area">
                    <div className="about-2-video-btn">
                      <a
                        href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                        className="overlay-link play-now ripple"
                        data-fancybox="video-1"
                        data-caption
                      >
                        <i className="icon-19" />
                      </a>
                    </div>
                    <p className="about-2-video-title">
                      Experience Our <br /> Event Spaces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature three */}
        <section className="section-padding feature-3-section gray-bg">
          <div className="feature-3-shape-1 p_absolute r_30 b_0">
            <img src="assets/images/shape/pattern-5.png" alt />
          </div>
          <div className="auto-container">
            <div className="row p_relative">
              <div className="feature-3-shape-2" />
              <div className="col-lg-4 col-md-6">
                <div
                  className="feature-3-block mb_30 wow fadeInLeft"
                  data-wow-delay=".2s"
                  data-wow-duration=".8s"
                >
                  <div className="feature-3-image hvr-img-zoom-1">
                    <img src="assets/images/resource/feature-image-6.jpg" alt />
                  </div>
                  <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20">
                    <span className="fs_22 fw_medium">15%</span>
                    <br /> OFF
                  </div>
                  <div className="feature-3-lower-content">
                    <h4 className="feature-3-title">
                      Kick off Summer <br /> in NYC
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="feature-3-block mb_30 wow fadeInLeft"
                  data-wow-delay=".2s"
                  data-wow-duration=".8s"
                >
                  <div className="feature-3-image hvr-img-zoom-1">
                    <img src="assets/images/resource/feature-image-7.jpg" alt />
                  </div>
                  <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20">
                    <span className="fs_22 fw_medium">15%</span>
                    <br /> OFF
                  </div>
                  <div className="feature-3-lower-content">
                    <h4 className="feature-3-title">
                      Free Breakfast <br /> Packages
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="feature-3-block mb_30 wow fadeInLeft"
                  data-wow-delay=".2s"
                  data-wow-duration=".8s"
                >
                  <div className="feature-3-image hvr-img-zoom-1">
                    <img src="assets/images/resource/feature-image-8.jpg" alt />
                  </div>
                  <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20">
                    <span className="fs_22 fw_medium">15%</span>
                    <br /> OFF
                  </div>
                  <div className="feature-3-lower-content">
                    <h4 className="feature-3-title">
                      Free Breakfast <br /> Packages
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Video */}
        <section className="video-2-section">
          <div
            className="video-1-bg"
            style={{
              backgroundImage: "url(assets/images/background/video-1.jpg)",
            }}
            data-parallax='{"y": 50}'
          />
          <div className="auto-container">
            <div className="video-1-video-btn">
              <a
                href="https://www.youtube.com/watch?v=XHOmBV4js_E"
                className="overlay-link play-now ripple"
                data-fancybox="video-1"
                data-caption
              >
                <i className="icon-19" />
              </a>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <Testimonials />
        {/* Amenities */}
        <section className="section-padding gray-bg">
          <div className="auto-container">
            <div className="team-1-wrapper">
              <div className="section_heading text-center mb_50">
                <span className="section_heading_title_small">
                  Signature Hospitality
                </span>
                <h2 className="section_heading_title_big mb_20">
                  World-Class Amenities & Event Facilities
                </h2>
                <p>
                  Experience exceptional comfort and elegant spaces thoughtfully
                  designed to host memorable stays, grand celebrations, and
                  professional events.
                </p>
              </div>

              <div className="row">
                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-8" />
                    </div>
                    <p className="fw_500">High-Speed Wi-Fi</p>
                  </div>
                </div>

                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-9" />
                    </div>
                    <p className="fw_500">Premium Dining & Beverages</p>
                  </div>
                </div>

                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-10" />
                    </div>
                    <p className="fw_500">Luxury Bathrooms</p>
                  </div>
                </div>

                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-11" />
                    </div>
                    <p className="fw_500">Secure Parking Facility</p>
                  </div>
                </div>

                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-12" />
                    </div>
                    <p className="fw_500">Swimming Pool & Leisure Area</p>
                  </div>
                </div>

                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-13" />
                    </div>
                    <p className="fw_500">Laundry & Housekeeping Services</p>
                  </div>
                </div>

                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-14" />
                    </div>
                    <p className="fw_500">Complimentary Breakfast</p>
                  </div>
                </div>

                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-15" />
                    </div>
                    <p className="fw_500">Spa & Wellness Center</p>
                  </div>
                </div>

                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-16" />
                    </div>
                    <p className="fw_500">Conference & Meeting Rooms</p>
                  </div>
                </div>

                <div className="col_xl_five col-lg-3 col-md-6">
                  <div className="icon_box-1" style={{ height: "250px" }}>
                    <div className="icon_box-1-icon">
                      <i className="icon-17" />
                    </div>
                    <p className="fw_500">Welcome Drinks & Guest Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div className="hotel-booking-form-1 alt2 p-0 theme-bg">
          <div
            className="p_absolute l_0 b_0 r_0 t_0"
            style={{
              background:
                "url(assets/images/shape/pattern-4.png) no-repeat center bottom",
            }}
          />
          <div className="auto-container">
            <div className="hotel-booking-form-1-wrap">
              <h2 className="color_light mb_40">Make Reservation</h2>
              <form className="hotel-booking-form-1-form flex-grow-1 d-flex">
                <div className="form-group">
                  <p className="hotel-booking-form-1-label">Check - in:</p>
                  <input
                    placeholder="17 Sep, 2022"
                    className
                    type="text"
                    name="form-name"
                    id="nd_booking_archive_form_date_range_from"
                    defaultValue
                  />
                </div>
                <div className="form-group">
                  <p className="hotel-booking-form-1-label">Check - Out:</p>
                  <input
                    placeholder="21 Sep, 2022"
                    className
                    type="text"
                    name="form-name"
                    id="nd_booking_archive_form_date_range_to"
                    defaultValue
                  />
                </div>
                <div className="form-group">
                  <p className="hotel-booking-form-1-label">Rooms:</p>
                  <select>
                    <option data-display="1 Room">1 Room</option>
                    <option value="2 Rooms">2 Rooms</option>
                    <option value="3 Rooms">3 Rooms</option>
                    <option value="4 Rooms">4 Rooms</option>
                    <option value="5 Rooms">5 Rooms</option>
                  </select>
                </div>
                <div className="form-group">
                  <p className="hotel-booking-form-1-label">Adults:</p>
                  <select>
                    <option data-display="2 Adults">2 Adults</option>
                    <option value="1 Adult">1 Adult</option>
                    <option value="3 Adults">3 Adults</option>
                    <option value="4 Adults">4 Adults</option>
                    <option value="5 Adults">5 Adults</option>
                  </select>
                </div>
                <div className="form-group">
                  <p className="hotel-booking-form-1-label">Child:</p>
                  <select>
                    <option data-display="1 Children">1 Children</option>
                    <option value="0 Children">0 Children</option>
                    <option value="2 Childrens">2 Childrens</option>
                    <option value="3 Childrens">3 Childrens</option>
                    <option value="4 Childrens">4 Childrens</option>
                    <option value="5 Childrens">5 Childrens</option>
                  </select>
                </div>
                <div className="form-group text-lg-end">
                  <button type="submit" className="btn-1 btn-large btn-light">
                    Check Availability
                    <span />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}
        {/* Team */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="section_heading text-center mb_70">
              <span className="section_heading_title_small">
                Dedicated Team
              </span>
              <h2 className="section_heading_title_big">
                We Have A Professional <br /> Venue Staff
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="team-1-block">
                  <div className="team-1-image">
                    <div className="team-1-image-wrap">
                      <img src="assets/images/resource/team-1.jpg" alt />
                    </div>
                    <div className="team-1-share-icon-area">
                      <ul className="team-1-social-icon">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4 className="team-1-title">Wade Warren</h4>
                  <p className="team-1-designaiton">Main Chef</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-1-block">
                  <div className="team-1-image">
                    <div className="team-1-image-wrap">
                      <img src="assets/images/resource/team-2.jpg" alt />
                    </div>
                    <div className="team-1-share-icon-area">
                      <ul className="team-1-social-icon">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4 className="team-1-title">Guy Hawkins</h4>
                  <p className="team-1-designaiton">Sr. Chef</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team-1-block">
                  <div className="team-1-image">
                    <div className="team-1-image-wrap">
                      <img src="assets/images/resource/team-3.jpg" alt />
                    </div>
                    <div className="team-1-share-icon-area">
                      <ul className="team-1-social-icon">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4 className="team-1-title">Bessie Cooper</h4>
                  <p className="team-1-designaiton">Jr. Chef</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
