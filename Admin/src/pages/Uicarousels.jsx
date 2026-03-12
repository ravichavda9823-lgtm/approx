import React from "react";
import Footer from "../common/Footer";

function Uicarousels() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Carousels</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">UI Kit</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Carousels</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-5 offset-lg-1 align-self-center">
                        <div className="p-3">
                          <span className="bg-pink-subtle p-1 rounded text-pink fw-medium">
                            Basic Examples{" "}
                          </span>
                          <h1 className="my-4 font-weight-bold">
                            Manage Your Work With{" "}
                            <span className="text-primary">Approx</span>.
                          </h1>
                          <p className="fs-14 text-muted">
                            Approx is a Bootstrap 5 admin dashboard, It is fully
                            responsive and included awesome features to help
                            build web applications fast and easy.
                          </p>
                          <button type="button" className="btn btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-5 offset-lg-1 text-center">
                        <div
                          id="carouselExampleSlidesOnly"
                          className="carousel slide"
                          data-bs-ride="carousel"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                src="assets/images/extra/card/img-2.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="assets/images/extra/card/img-1.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="assets/images/extra/card/img-3.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-5 text-center">
                        <div id="carouselExample" className="carousel slide">
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                src="assets/images/extra/card/img-4.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="assets/images/extra/card/img-5.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="assets/images/extra/card/img-6.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-5 offset-lg-1 align-self-center">
                        <div className="p-3">
                          <span className="bg-pink-subtle p-1 rounded text-pink fw-medium">
                            Indicators
                          </span>
                          <h1 className="my-4 font-weight-bold">
                            Manage Your Work With{" "}
                            <span className="text-primary">Approx</span>.
                          </h1>
                          <p className="fs-14 text-muted">
                            Approx is a Bootstrap 5 admin dashboard, It is fully
                            responsive and included awesome features to help
                            build web applications fast and easy.
                          </p>
                          <button type="button" className="btn btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-5 offset-lg-1 align-self-center">
                        <div className="p-3">
                          <span className="bg-pink-subtle p-1 rounded text-pink fw-medium">
                            Captions{" "}
                          </span>
                          <h1 className="my-4 font-weight-bold">
                            Manage Your Work With{" "}
                            <span className="text-primary">Approx</span>.
                          </h1>
                          <p className="fs-14 text-muted">
                            Approx is a Bootstrap 5 admin dashboard, It is fully
                            responsive and included awesome features to help
                            build web applications fast and easy.
                          </p>
                          <button type="button" className="btn btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-5 offset-lg-1 text-center">
                        <div
                          id="carouselExampleIndicators"
                          className="carousel slide"
                        >
                          <div className="carousel-indicators">
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide-to={0}
                              className="active"
                              aria-current="true"
                              aria-label="Slide 1"
                            />
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide-to={1}
                              aria-label="Slide 2"
                            />
                            <button
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide-to={2}
                              aria-label="Slide 3"
                            />
                          </div>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                src="assets/images/extra/card/img-4.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="assets/images/extra/card/img-5.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="assets/images/extra/card/img-6.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-5 text-center">
                        <div
                          id="carouselExampleFade"
                          className="carousel slide carousel-fade"
                          data-bs-ride="carousel"
                        >
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img
                                src="assets/images/extra/card/img-6.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="assets/images/extra/card/img-1.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src="assets/images/extra/card/img-3.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                            </div>
                          </div>
                          <a
                            className="carousel-control-prev"
                            href="#carouselExampleFade"
                            role="button"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            href="#carouselExampleFade"
                            role="button"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Next</span>
                          </a>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-5 offset-lg-1 align-self-center">
                        <div className="p-3">
                          <span className="bg-pink-subtle p-1 rounded text-pink fw-medium">
                            Crossfade
                          </span>
                          <h1 className="my-4 font-weight-bold">
                            Manage Your Work With{" "}
                            <span className="text-primary">Approx</span>.
                          </h1>
                          <p className="fs-14 text-muted">
                            Approx is a Bootstrap 5 admin dashboard, It is fully
                            responsive and included awesome features to help
                            build web applications fast and easy.
                          </p>
                          <button type="button" className="btn btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-5 offset-lg-1 align-self-center">
                        <div className="p-3">
                          <span className="bg-pink-subtle p-1 rounded text-pink fw-medium">
                            Dark variant{" "}
                          </span>
                          <h1 className="my-4 font-weight-bold">
                            Manage Your Work With{" "}
                            <span className="text-primary">Approx</span>.
                          </h1>
                          <p className="fs-14 text-muted">
                            Approx is a Bootstrap 5 admin dashboard, It is fully
                            responsive and included awesome features to help
                            build web applications fast and easy.
                          </p>
                          <button type="button" className="btn btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-5 offset-lg-1 text-center">
                        <div
                          id="carouselExampleDark"
                          className="carousel carousel-dark slide"
                        >
                          <div className="carousel-indicators">
                            <button
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide-to={0}
                              className="active"
                              aria-current="true"
                              aria-label="Slide 1"
                            />
                            <button
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide-to={1}
                              aria-label="Slide 2"
                            />
                            <button
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide-to={2}
                              aria-label="Slide 3"
                            />
                          </div>
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval={10000}
                            >
                              <img
                                src="assets/images/extra/card/img-5.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                              <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>
                                  Some representative placeholder content for
                                  the first slide.
                                </p>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval={2000}
                            >
                              <img
                                src="assets/images/extra/card/img-4.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                              <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>
                                  Some representative placeholder content for
                                  the second slide.
                                </p>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <img
                                src="assets/images/extra/card/img-6.jpg"
                                className="d-block w-100"
                                alt="..."
                              />
                              <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>
                                  Some representative placeholder content for
                                  the third slide.
                                </p>
                              </div>
                            </div>
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            />
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/* container */}
          {/*Start Rightbar*/}
          {/*Start Rightbar/offcanvas*/}
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="Appearance"
            aria-labelledby="AppearanceLabel"
          >
            <div className="offcanvas-header border-bottom justify-content-between">
              <h5 className="m-0 font-14" id="AppearanceLabel">
                Appearance
              </h5>
              <button
                type="button"
                className="btn-close text-reset p-0 m-0 align-self-center"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <h6>Account Settings</h6>
              <div className="p-2 text-start mt-3">
                <div className="form-check form-switch mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch1"
                  >
                    Auto updates
                  </label>
                </div>
                {/*end form-switch*/}
                <div className="form-check form-switch mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch2"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch2"
                  >
                    Location Permission
                  </label>
                </div>
                {/*end form-switch*/}
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch3"
                  >
                    Show offline Contacts
                  </label>
                </div>
                {/*end form-switch*/}
              </div>
              {/*end /div*/}
              <h6>General Settings</h6>
              <div className="p-2 text-start mt-3">
                <div className="form-check form-switch mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch4"
                  >
                    Show me Online
                  </label>
                </div>
                {/*end form-switch*/}
                <div className="form-check form-switch mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch5"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch5"
                  >
                    Status visible to all
                  </label>
                </div>
                {/*end form-switch*/}
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="settings-switch6"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="settings-switch6"
                  >
                    Notifications Popup
                  </label>
                </div>
                {/*end form-switch*/}
              </div>
              {/*end /div*/}
            </div>
            {/*end offcanvas-body*/}
          </div>
          {/*end Rightbar/offcanvas*/}
          {/*end Rightbar*/}
          {/*Start Footer*/}
        <Footer />
          {/*end footer*/}
        </div>
        {/* end page content */}
      </div>
    </>
  );
}

export default Uicarousels;
