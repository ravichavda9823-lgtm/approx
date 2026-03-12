import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

function Blog() {
  return (
    <>
      <div className="page-wrapper">
        <Header/>
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Blogs</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Blogs</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className>
                      <img
                        src="assets/images/extra/card/img-1.jpg"
                        alt
                        className="img-fluid rounded"
                      />
                      <div className="mt-3">
                        <span className="badge bg-purple-subtle text-purple px-2 py-1 fw-semibold ">
                          Finance
                        </span>{" "}
                        |
                        <p className="mb-0 text-muted fs-12 d-inline-block">
                          15 Sep 2024
                        </p>
                      </div>
                      <a
                        href="#"
                        className="d-block fs-22 fw-semibold text-body my-2 text-truncate"
                      >
                        How does cancer grow and spread?
                      </a>
                      <p className="text-muted">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <hr className="hr-dashed" />
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/users/avatar-10.jpg"
                              alt
                              className="thumb-md rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate text-start">
                            <h6 className="m-0 text-dark">Billy Pearson</h6>
                            <p className="mb-0 text-muted">
                              by <a href="#">admin</a>
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="align-self-center">
                          <a href="#" className="btn btn-sm btn-primary">
                            Read more{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end blog-card*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className>
                      <img
                        src="assets/images/extra/card/img-2.jpg"
                        alt
                        className="img-fluid rounded"
                      />
                      <div className="mt-3 ">
                        <span className="badge bg-purple-subtle text-purple px-2 py-1 fw-semibold ">
                          Food
                        </span>{" "}
                        |
                        <p className="mb-0 text-muted fs-12 d-inline-block">
                          31 Dec 2023
                        </p>
                      </div>
                      <a
                        href="#"
                        className="d-block fs-22 fw-semibold text-body my-2 text-truncate"
                      >
                        Where does psoriasis usually start?
                      </a>
                      <p className="text-muted">
                        The standard chunk of Lorem Ipsum used since the
                        reproduced below for those interested. Cum sociis
                        natoque penatibus et magnis.
                      </p>
                      <hr className="hr-dashed" />
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/users/avatar-9.jpg"
                              alt
                              className="thumb-md rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate text-start">
                            <h6 className="m-0 text-dark">Harry Simpson</h6>
                            <p className="mb-0 text-muted">
                              by <a href="#">admin</a>
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="align-self-center">
                          <a href="#" className="btn btn-sm btn-primary">
                            Read more{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end blog-card*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className>
                      <img
                        src="assets/images/extra/card/img-3.jpg"
                        alt
                        className="img-fluid rounded"
                      />
                      <div className="mt-3 ">
                        <span className="badge bg-purple-subtle text-purple px-2 py-1 fw-semibold ">
                          Health
                        </span>{" "}
                        |
                        <p className="mb-0 text-muted fs-12 d-inline-block">
                          18 Oct 2024
                        </p>
                      </div>
                      <a
                        href="#"
                        className="d-block fs-22 fw-semibold text-body my-2 text-truncate"
                      >
                        What Can Yoga Do for Migraine Relief?
                      </a>
                      <p className="text-muted">
                        When an unknown printer took a galley of type and
                        scrambled generator on the Internet it to make a type
                        specimen book.{" "}
                      </p>
                      <hr className="hr-dashed" />
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt
                              className="thumb-md rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate text-start">
                            <h6 className="m-0 text-dark">Larry Wells</h6>
                            <p className="mb-0 text-muted">
                              by <a href="#">admin</a>
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="align-self-center">
                          <a href="#" className="btn btn-sm btn-primary">
                            Read more{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end blog-card*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="assets/images/extra/card/img-4.jpg"
                        alt
                        className="img-fluid rounded"
                      />
                      <div className="mt-3 ">
                        <span className="badge bg-purple-subtle text-purple px-2 py-1 fw-semibold ">
                          Nature
                        </span>{" "}
                        |
                        <p className="mb-0 text-muted fs-12 d-inline-block">
                          12 Feb 2024
                        </p>
                      </div>
                      <a
                        href="#"
                        className="d-block fs-22 fw-semibold text-body my-3 text-truncate"
                      >
                        How Long Do Migraine Attacks Last? What to Expect
                      </a>
                      <p className="text-muted">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                      <hr className="hr-dashed" />
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/users/avatar-7.jpg"
                              alt
                              className="thumb-md rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate text-start">
                            <h6 className="m-0 text-dark">Steven Warner</h6>
                            <p className="mb-0 text-muted">
                              by <a href="#">admin</a>
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="align-self-center">
                          <a href="#" className="btn btn-sm btn-primary">
                            Read more{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end blog-card*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="assets/images/extra/card/img-5.jpg"
                        alt
                        className="img-fluid rounded"
                      />
                      <div className="mt-3 ">
                        <span className="badge bg-purple-subtle text-purple px-2 py-1 fw-semibold ">
                          Economic
                        </span>{" "}
                        |
                        <p className="mb-0 text-muted fs-12 d-inline-block">
                          26 jun 2024
                        </p>
                      </div>
                      <a
                        href="#"
                        className="d-block fs-22 fw-semibold text-body my-3 text-truncate"
                      >
                        Your 5-Minute Read on Beating Stress
                      </a>
                      <p className="text-muted">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature.
                      </p>
                      <hr className="hr-dashed" />
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/users/avatar-6.jpg"
                              alt
                              className="thumb-md rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate text-start">
                            <h6 className="m-0 text-dark">Morgan Smith</h6>
                            <p className="mb-0 text-muted">
                              by <a href="#">admin</a>
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="align-self-center">
                          <a href="#" className="btn btn-sm btn-primary">
                            Read more{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end blog-card*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="assets/images/extra/card/img-6.jpg"
                        alt
                        className="img-fluid rounded"
                      />
                      <div className="mt-3 ">
                        <span className="badge bg-purple-subtle text-purple px-2 py-1 fw-semibold ">
                          Fashion
                        </span>{" "}
                        |
                        <p className="mb-0 text-muted fs-12 d-inline-block">
                          01 Aug 2024
                        </p>
                      </div>
                      <a
                        href="#"
                        className="d-block fs-22 fw-semibold text-body my-3 text-truncate"
                      >
                        World Oral Health Day 2023
                      </a>
                      <p className="text-muted">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority web page editors now have
                        suffered
                      </p>
                      <hr className="hr-dashed" />
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              alt
                              className="thumb-md rounded-circle"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate text-start">
                            <h6 className="m-0 text-dark">Cecil Herbert</h6>
                            <p className="mb-0 text-muted">
                              by <a href="#">admin</a>
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="align-self-center">
                          <a href="#" className="btn btn-sm btn-primary">
                            Read more{" "}
                            <i className="fas fa-long-arrow-alt-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*end blog-card*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
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

export default Blog;
