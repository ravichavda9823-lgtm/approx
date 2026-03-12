import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

function Gallery() {
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
                  <h4 className="page-title">Gallery</h4>
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
                      <li className="breadcrumb-item active">Gallery</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Gallery</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div id="grid" className="row g-0">
                      <div className="col-md-4 col-lg-3 picture-item">
                        <a
                          href="assets/images/extra/card/img-1.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-1.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-4 col-lg-3 picture-item picture-item--overlay">
                        <a
                          href="assets/images/extra/card/img-2.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-2.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-4 col-lg-3 picture-item">
                        <a
                          href="assets/images/extra/card/img-3.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-3.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-4 col-lg-3 picture-item picture-item--h2">
                        <a
                          href="assets/images/extra/card/img-4.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-4.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-4 col-lg-3 picture-item">
                        <a
                          href="assets/images/extra/card/img-5.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-5.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-4 col-lg-3 picture-item picture-item--overlay">
                        <a
                          href="assets/images/extra/card/img-6.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-6.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-4 col-lg-3 picture-item picture-item--h2">
                        <a
                          href="assets/images/extra/card/img-2.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-2.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-4 col-lg-3 picture-item picture-item--h2">
                        <a
                          href="assets/images/extra/card/img-1.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-1.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
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

export default Gallery;
