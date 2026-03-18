import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function Contact() {
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      let response =  await api.post("/user/inquiry/addinquiry", formData);
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

  console.log(formData);
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
            <h1>Contact Us</h1>
          </div>
        </div>
        <div className="bredcrumb-wrap">
          <div className="auto-container">
            <ul className="bredcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <section className="section-padding ">
          <div className="auto-container">
            <div className="section_heading mb_40">
              <span className="section_heading_title_small">Our location</span>
              <h2 className="section_heading_title_big">
                Explore Our Office <br /> Worldwide
              </h2>
            </div>
            <ul className="contact-info-1 d-flex flex-wrap mb_40">
              <li>
                <h4 className="fs_20 mb_10">
                  <i className="icon-27 mr_10 fs_18" />
                  Location
                </h4>
                <p> SG Highway, Ahmedabad</p>
              </li>
              <li>
                <h4 className="fs_20 mb_10">
                  <i className="icon-28 mr_10 fs_18" />
                  Phone No
                </h4>
                <p>
                  <Link href="tel:(+91) 333 666 0021">(+91) 9876543210</Link>
                </p>
              </li>
              <li>
                <h4 className="fs_20 mb_10">
                  <i className="icon-29 mr_10 fs_15" />
                  Email
                </h4>
                <p>
                  <Link href="mailto:support@example.com">occazone@venuebooking.com</Link>
                </p>
              </li>
            </ul>
            <div className="row no-gutters">
              <div className="col-lg-5">
                <div className="form-alt form-alt3 with-shadow">
                  <form method="post" id="contact-form"  onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleInputChange}
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
                        <input
                          id="form_botcheck"
                          name="form_botcheck"
                          className="form-control"
                          type="hidden"
                        />
                        <button
                          className="btn-1"
                          type="submit"
                        >
                          Submit Now <i className="flaticon-right-arrow-1" />
                          <span />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="map mb_30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55945.16225505631!2d-73.90847969206546!3d40.66490264739892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1601263396347!5m2!1sen!2sbd"
                    width={600}
                    height={535}
                    frameBorder={0}
                    style={{ border: 0, width: "100%" }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
