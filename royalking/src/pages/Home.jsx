import React, { useEffect, useState } from "react";
import ProjectSlider from "../common/Sidebar";
import Testimonials from "../common/Testimonials";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { LogoutwithoutNotification } from "../utils/Logout";
import CheckRole from "../utils/CheckRole";
import { useQuery } from "@tanstack/react-query";

function Home() {
  let [user, setUser] = useState({});
  // const [hotel, setHotel] = useState([]);
  // const [occasions, setOccasions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    loginId: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await api.post("/user/inquiry/addinquiry", formData);
      console.log(response.data);
      setFormData(response.data.data);
      alert("Inquiry submitted successfully");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      window.location.href = "/";
    } catch (e) {
      console.log(e);
      alert("Invalid Details");
    }
  };

  async function FetchUser() {
    if (CheckRole() === "user") {
      try {
        let response = await api.get("/user/profile/profilehome");

        console.log(response);

        setUser(response.data.user);
      } catch (e) {
        console.log(e);
        if (e.response.status == 401 && e.response.status == 403) {
          LogoutwithoutNotification();
        }
      }
    } else if (CheckRole() === "manager") {
      try {
        let response = await api.get("/manager/managerprofile");

        console.log(response);

        setUser(response.data.manager);
      } catch (e) {
        console.log(e);
        if (e.response.status == 401 && e.response.status == 403) {
          LogoutwithoutNotification();
        }
      }
    }
  }

  useEffect(() => {
    FetchUser();
  }, []);
  console.log(user);

  const fetchOccasions = async () => {
    try {
      const response = await api.get("/user/occasion");
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  const fetchHotel = async () => {
    try {
      setLoading(true);

      const response = await api.get("/user/hotel");
      console.log(response.data);
      return response.data.data.slice(0, 3);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchOccasions();
  //   fetchHotel();
  // }, []);

  const {
    data: occasions,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["occasions"],
    queryFn: fetchOccasions,
  });

  const {
    data: hotel = [],
    hotelLoading,
    hotelisError,
    hotelerror,
  } = useQuery({
    queryKey: ["hotel"],
    queryFn: fetchHotel,
  });

  console.log(occasions);

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

        <section className="banner-section style-three">
          <div className="banner-shape-1" />

          <div className="swiper-container banner-slider-2">
            <div className="swiper-wrapper">
              {/* 💍 SLIDE 1 – Wedding */}
              <div className="swiper-slide">
                <div
                  className="banner-feature-image d-none d-lg-block"
                  style={{
                    backgroundImage:
                      "url(https://www.tagvenue.com/images/location-pages/1920x1080/54.jpg)",
                  }}
                />

                <div className="content-outer">
                  <div className="content-box">
                    <div className="inner">
                      {/* OCCASION ICON */}

                      <h4>Dream Weddings</h4>
                      <h1>
                        Elegant <br /> Wedding <br /> Venues
                      </h1>

                      <div className="text">
                        Celebrate your special day with luxury venues, <br />
                        stunning decor & unforgettable moments.
                      </div>

                      <div className="link-box">
                        <Link to="/viewhotels" className="btn-1">
                          Explore Venues <span />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🎂 SLIDE 2 – Birthday */}
              <div className="swiper-slide">
                <div
                  className="banner-feature-image d-none d-lg-block"
                  style={{
                    backgroundImage:
                      "url(https://blog.venuelook.com/wp-content/uploads/2023/04/Give-Your-Birthday-Venue-a-Theme.jpg)",
                  }}
                />

                <div className="content-outer">
                  <div className="content-box">
                    <div className="inner">
                      <h4>Birthday Celebrations</h4>
                      <h1>
                        Perfect <br /> Birthday <br /> Parties
                      </h1>

                      <div className="text">
                        From kids parties to grand milestones, <br />
                        find the perfect venue for every birthday.
                      </div>

                      <div className="link-box">
                        <Link to="/viewhotels" className="btn-1">
                          Book Venue <span />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 🏢 SLIDE 3 – Corporate */}
              <div className="swiper-slide">
                <div
                  className="banner-feature-image d-none d-lg-block"
                  style={{
                    backgroundImage:
                      "url(https://theroyalreception.com/assets/img/gallery/events/25.jpg)",
                  }}
                />

                <div className="content-outer">
                  <div className="content-box">
                    <div className="inner">
                      <h4>Corporate Events</h4>
                      <h1>
                        Professional <br /> Event <br /> Spaces
                      </h1>

                      <div className="text">
                        Conferences, meetings & corporate gatherings <br />
                        hosted in premium venues.
                      </div>

                      <div className="link-box">
                        <Link to="/viewhotels" className="btn-1">
                          View Venues <span />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NAV */}
          <div className="banner-slider-nav">
            <div className="banner-slider-control banner-slider-button-prev">
              <span>
                <i className="icon-2" />
              </span>
            </div>
            <div className="banner-slider-control banner-slider-button-next">
              <span>
                <i className="icon-3" />
              </span>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="gray-bg p_absolute l_0 b_0 r_0 h_340" />
          <div className="auto-container">
            <div className="section_heading text-center mb_60">
              <span className="section_heading_title_small">
                Celebrate With Us
              </span>
              <h2 className="section_heading_title_big">
                Special Occasion <br /> Offers
              </h2>
            </div>
            <div className="row">
              {isLoading ? (
                <h4 className="text-center mt-4">Loading occasions...</h4>
              ) : (
                occasions.map((value) => (
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="feature-1-block text-center wow fadeInLeft"
                      data-wow-delay=".2s"
                      data-wow-duration=".8s"
                    >
                      <div className="feature-1-image hvr-img-zoom-1">
                        <img
                          style={{ height: "300px" }}
                          src={`${api.defaults.baseURL}/uploads/${value.image}`}
                          alt={value.name}
                        />
                      </div>
                      <h4 className="feature-1-title">{value.name}</h4>
                      <p className="feature-1-text pb-5">{value.desc}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
        {/* About */}

        <section className="section-padding gray-bg pt-0">
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-1-image-wrap mb_30 p_relative">
                  <div className="about-1-shape-1" data-parallax='{"y": -50}' />
                  <div className="about-1-image-1 hvr-img-zoom-1">
                    <img
                      style={{ height: "600px" }}
                      src="https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg"
                      alt="Luxury Event Venue & Hotel"
                    />
                  </div>
                </div>
              </div>

              <div className="col-lg-6 ps-lg-5">
                <div className="section_heading mb_20">
                  <span className="section_heading_title_small">
                    A Signature Destination for Celebrations
                  </span>

                  <h2 className="section_heading_title_big">
                    The Regal Crown <br />
                    Luxury Event Hotel & Venue
                  </h2>
                </div>

                <p className="aboout-1-desc mb_30">
                  The Regal Crown is an exclusive luxury event hotel crafted to
                  host life’s most meaningful moments. From grand weddings and
                  elegant birthday celebrations to high-profile corporate events
                  and private gatherings, our refined venues, sophisticated
                  ambiance, and expert event management ensure every occasion is
                  seamless, memorable, and truly extraordinary.
                </p>

                <div className="about-1-btn mb_30">
                  <Link to="/about" className="btn-1">
                    View Our Venues
                    <span />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="section_heading text-center mb_55">
              <span className="section_heading_title_small">
                Welcome to Our Hotel
              </span>
              <h2 className="section_heading_title_big mt-2 ">
                Elegant Stays & Event Spaces
              </h2>
            </div>

            <div className="row mt-3">
              {hotelLoading && <h3>Loading hotels...</h3>}

              {hotelisError && <h3 style={{ color: "red" }}>{hotelerror}</h3>}

              {!hotelLoading && hotel.length === 0 && <h3>No hotels found</h3>}

              {!hotelLoading &&
                hotel.length > 0 &&
                hotel.map((value) => (
                  <div className="col-lg-4 col-md-6" key={value.id}>
                    <div className="room-1-block wow fadeInUp">
                      <div className="room-1-image hvr-img-zoom-1">
                        <img
                          src={`${api.defaults.baseURL}/uploads/${value.image}`}
                          style={{ height: "300px" }}
                          alt="hotel"
                        />
                      </div>

                      <div className="room-1-content">
                        <p className="room-1-meta-info">
                          Start from ₹{" "}
                          <span className="theme-color">{value.price}</span>
                          /night
                        </p>

                        <h4 className="room-1-title mb_20">
                          <Link to="/viewhotels">{value.name}</Link>
                        </h4>

                        <p className="room-1-text mb_30">{value.shortdesc}</p>

                        <div className="link-btn">
                          <Link
                            to={`/booking/${value.id}`}
                            className="btn-1 btn-alt"
                          >
                            Book Now <span />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
        {/* Projects */}
        <ProjectSlider />
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

        {/* Testimonials */}
        <Testimonials />

        {/* Blog */}
        <section className="section-padding pt-2">
          <div className="auto-container">
            <div className="section_heading text-center mb_60">
              <span className="section_heading_title_small">
                Latest Updates
              </span>
              <h3 className="section_heading_title_big">
                Venue Highlights & Celebration Stories
              </h3>
            </div>

            <div className="row">
              {/* BLOG 1 – WEDDING */}
              <div className="col-lg-4 col-md-6">
                <div
                  className="blog-1-block wow fadeInLeft"
                  data-wow-delay=".2s"
                  data-wow-duration=".8s"
                >
                  <div className="blog-1-image">
                    <Link to="#">
                      <img
                        style={{ height: "300px" }}
                        src="https://images.stockcake.com/public/b/c/3/bc30f2cd-af02-4274-ad3d-e4882c4c7c71_large/opulent-wedding-venue-stockcake.jpg"
                        alt="Wedding Venue"
                      />
                    </Link>
                  </div>

                  <div className="blog-1-bottom-content">
                    <div className="blog-1-date">15 APRIL</div>

                    <h4 className="blog-1-title">
                      <Link to="#">
                        A Royal Wedding Celebration at Our Grand Venue
                      </Link>
                    </h4>

                    <ul className="d-flex blog-1-meta-info">
                      <li>Admin</li>
                      <li>0 Comment</li>
                    </ul>

                    <p className="blog-1-excerpt">
                      Discover how our elegant banquet halls and personalized
                      services create unforgettable wedding experiences.
                    </p>

                    <div className="blog-1-link-btn">
                      <Link
                        to="#"
                        className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"
                      >
                        <i className="icon-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOG 2 – SOCIAL EVENT */}
              <div className="col-lg-4 col-md-6">
                <div
                  className="blog-1-block wow fadeInLeft"
                  data-wow-delay=".2s"
                  data-wow-duration=".8s"
                >
                  <div className="blog-1-image">
                    <Link to="#">
                      <img
                        style={{ height: "300px" }}
                        src="https://www.oyorooms.com/blog/wp-content/uploads/2018/02/How-much-space-does-it-has.png"
                      />
                    </Link>
                  </div>

                  <div className="blog-1-bottom-content">
                    <div className="blog-1-date">15 APRIL</div>

                    <h4 className="blog-1-title">
                      <Link to="#">
                        Perfect Venue for Birthdays & Private Celebrations
                      </Link>
                    </h4>

                    <ul className="d-flex blog-1-meta-info">
                      <li>Admin</li>
                      <li>0 Comment</li>
                    </ul>

                    <p className="blog-1-excerpt">
                      Explore our versatile event spaces designed for intimate
                      gatherings, parties, and joyful celebrations.
                    </p>

                    <div className="blog-1-link-btn">
                      <Link
                        to="#"
                        className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"
                      >
                        <i className="icon-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOG 3 – CORPORATE */}
              <div
                className="col-lg-4 col-md-6 wow fadeInLeft"
                data-wow-delay=".2s"
                data-wow-duration=".8s"
              >
                <div className="blog-1-block">
                  <div className="blog-1-image">
                    <Link to="#">
                      <img
                        style={{ height: "300px" }}
                        src="https://www.jaypeehotels.com/images/meeting-event-page/Conferencing%20Facilities.jpg"
                        alt="Corporate Venue"
                      />
                    </Link>
                  </div>

                  <div className="blog-1-bottom-content">
                    <div className="blog-1-date">15 APRIL</div>

                    <h4 className="blog-1-title">
                      <Link to="#">
                        Corporate Events & Conferences at Our Hotel Venue
                      </Link>
                    </h4>

                    <ul className="d-flex blog-1-meta-info">
                      <li>Admin</li>
                      <li>0 Comment</li>
                    </ul>

                    <p className="blog-1-excerpt">
                      Learn how our modern conference halls and professional
                      services ensure successful corporate events.
                    </p>

                    <div className="blog-1-link-btn">
                      <Link
                        to="#"
                        className="h_50 w_50 hvr-zoom-1 circle-btn lh_50 fs_13 hvr-zoom-1-primary"
                      >
                        <i className="icon-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding gray-bg">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 order-2">
                <div className="p_relative">
                  <div className="p_absolute l_0 b__75">
                    <img src="assets/images/shape/pattern-1.png" alt />
                  </div>
                  <div className="form-alt">
                    <form
                      method="post"
                      action="https://html.tonatheme.com/2022/royalking/sendemail.php"
                      id="contact-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="row clearfix">
                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            required
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email"
                            required
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Subject"
                            required
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Massage"
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <p>
                            <input
                              type="checkbox"
                              id="vehicle1"
                              name="vehicle1"
                            />{" "}
                            I agree to the terms &amp; conditions
                          </p>
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            id="form_botcheck"
                            name="form_botcheck"
                            className="form-control"
                            type="hidden"
                          />
                          <button
                            className="btn-1"
                            type="submit"
                            data-loading-text="Please wait..."
                          >
                            Submit Now <i className="flaticon-right-arrow-1" />
                            <span />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section_heading mb_30">
                  <span className="section_heading_title_small">
                    Venue Enquiry
                  </span>
                  <h2 className="section_heading_title_big">
                    Plan Your Event <br />
                    With Our Expert <br />
                    Venue Team
                  </h2>
                </div>

                <p className="mb_30">
                  Get in touch with us to enquire about venue availability,
                  event packages, and customized arrangements. Our team will
                  assist you in planning weddings, celebrations, and corporate
                  events with ease.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
