import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-1-middle">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="contact-widget-1 mb_30">
                  <div className="footer-widget-title">
                    <h4>Contact Us</h4>
                  </div>
                  <ul className="contact-widget-1-list">
                    <li>
                      <span>Add:</span> SG Highway, Ahmedabad
                    </li>
                    <li>
                      <span>Email:</span>
                      <Link href="mailto:occazone@venuebookingresort.com">
                       occazone@venuebooking.com
                      </Link>
                    </li>
                    <li>
                      <span>Phone:</span>
                      <a href="tel:9876543210">9876543210</a>
                    </li>
                  </ul>
                  <ul className="footer-social-icon d-flex align-items-center">
                    <li>
                      <Link to="">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="link-widget-1 mb_30">
                  <div className="footer-widget-title">
                    <h4>Links</h4>
                  </div>
                  <ul className="link-widget-1-list">
                     <li>
                      <Link to="/"> Home</Link>
                    </li>
                    
                    <li>
                      <Link to="/about"> About Us</Link>
                    </li>
                    <li>
                      <Link to="/selectoccasion">Occasion</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="link-widget-1 mb_30">
                  <div className="footer-widget-title">
                    <h4>Hours</h4>
                  </div>
                  <p className="mb_25">
                    Tincidunt neque pretium lectus <br />
                    donec risus.
                  </p>
                  <p>
                    Mon - Fri: 9:00AM - 6:00PM <br /> Sat - Sun: 8:00AM - 4:00PM
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="about-widget-1 mb_30">
                  <div className="footer-widget-title">
                    <h4>Newsletter</h4>
                  </div>
                  <div className="about-widget-1-text">
                    <p className="mb_30">
                      Tincidunt neque pretium lectus <br />
                      donec risus.
                    </p>
                    <div className="footer-newsletter">
                      <form>
                        <input type="email" placeholder="Email address" />
                        <button className="btn-1">
                          Subscribe <span />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="footer-bottom-row">
              <div className="footer-bottom-text">
                Copyright 2026 by <a href="javascript:void(0);">Venue</a>{" "}
                theme All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
