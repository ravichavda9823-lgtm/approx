import React from "react";
import { Link } from "react-router-dom";

function Packagedetails() {
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
            backgroundImage: "url(assets/images/background/page-title-12.jpg)",
          }}
        >
          <div className="auto-container">
            <h1>Package Single</h1>
          </div>
        </div>
        <div className="bredcrumb-wrap">
          <div className="auto-container">
            <ul className="bredcrumb-list">
              <li>
                 <Link to="/">Home</Link>
              </li>
              <li>Package Single</li>
            </ul>
          </div>
        </div>
        <section className="section-padding">
          <div className="auto-container">
            <div className="single-post">
              <div className="feature-image mb_90">
                <img src="assets/images/resource/feature-image-15.jpg" alt />
              </div>
              <span className="section_heading_title_small">form $55.00</span>
              <h2 className="section_heading_title_big mb_60">
                Wellness &amp; Facial Treatments
              </h2>
              <p className="mb_20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
                turpis cum tempor vitae. Curabitur at amet, enim sit commodo
                semper lectus phasellus. Non egestas ultrices magna gravida est
                sociis non ornare bibendum. tellus Dignissim ornare metus,
                interdum et, tellus justo. Urna libero, in scelerisque porttitor
                et, sagittis, et ut. Eget quam at at etiam accumsan integer
                facilisi justo. Lorem ut tempus cursus fames ultrices nisl,
                laoreet tortor, blandit. Leo diam, donec pretium, massa
                pellentesque et eleifend ut. Porta proin malesuada volutpat
                purus.{" "}
              </p>
              <p className="mb_70">
                At quam ac ipsum volutpat non. Duis sagittis, sollicitudin eget
                tristique consectetur et facilisi. Viverra sit non sed orci
                magna venenatis. Magna pharetra non ornare lectus sed risus
                maecenas adipiscing. Cras pretium vivamus nunc posuere.
              </p>
              <h4 className="mb_20 fs_40">Offer Includes:</h4>
              <p className="mb_50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Adipiscing integer ultrices suspendisse varius etiam est. Est,
                felis, tempus nec vitae orci sodales Metus, velit nec at diam in
                sed. Massa dui ipsum ornare sagittis dolor sagittis amet odio
                est. Sit semper et velit fusce.
              </p>
              <ul className="list-2 mb_30">
                <li>
                  <i className="icon-23" /> 7 nigths for 2 people in signature
                  suite
                </li>
                <li>
                  <i className="icon-23" /> Pick up in Zurich or Geneva by
                  helicopter
                </li>
                <li>
                  <i className="icon-23" /> 2 spa treatments per person
                </li>
                <li>
                  <i className="icon-23" /> DNA Full Check-up: guests makes DNA
                  test at home 5 weeks prior and sends to clinic
                </li>
                <li>
                  <i className="icon-23" /> Aesthetics retreat : Full week of
                  Cryolipolysis all body, with healthy retreat options in
                  regards to workout and menu
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Feature three */}
        <section className="section-padding gray-bg">
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
      </div>
    </>
  );
}

export default Packagedetails;
