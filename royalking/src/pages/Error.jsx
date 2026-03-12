import React from "react";
import { Link } from "react-router-dom";

function Error() {
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
            backgroundImage: "url(assets/images/background/page-title.jpg)",
          }}
        >
          <div className="auto-container">
            <h1>404 Page</h1>
          </div>
        </div>
        <div className="bredcrumb-wrap">
          <div className="auto-container">
            <ul className="bredcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>404 Page</li>
            </ul>
          </div>
        </div>
        <section className="section-padding">
          <div className="auto-container">
            <div className="content text-center">
              <h1>404</h1>
              <h2 className="mb_30">Oops! That page can’t be found</h2>
              <p className="mb_30">
                Sorry, but the page you are looking for does not existing
              </p>
              <div className="link-box mb_30">
                <Link to="/" className="btn-1">
                  Go to Homepage <i className="flaticon-right-arrow-1" />
                  <span />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Error;
