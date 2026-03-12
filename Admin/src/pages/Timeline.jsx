import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

function Timeline() {
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
                  <h4 className="page-title">Timeline</h4>
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
                      <li className="breadcrumb-item active">Timeline</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Timeline</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body px-0 pt-0">
                    <div
                      className="activity p-3 pt-0"
                      data-simplebar
                      style={{ height: 500 }}
                    >
                      <div className="activity-info">
                        <div className="icon-info-activity ">
                          <i className="las la-check-circle text-primary" />
                        </div>
                        <div className="activity-info-text">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="m-0 w-75">Task finished</h6>
                            <span className="text-muted d-block">
                              10 Min ago
                            </span>
                          </div>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                            <a href="#" className="text-primary">
                              [more info]
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="activity-info">
                        <div className="icon-info-activity">
                          <i className="las la-user-clock text-danger" />
                        </div>
                        <div className="activity-info-text">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="m-0  w-75">Task Overdue</h6>
                            <span className="text-muted">50 Min ago</span>
                          </div>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                            <a href="#" className="text-primary">
                              [more info]
                            </a>
                          </p>
                          <span className="badge badge-soft-secondary">
                            Design
                          </span>
                          <span className="badge badge-soft-secondary">
                            HTML
                          </span>
                        </div>
                      </div>
                      <div className="activity-info">
                        <div className="icon-info-activity">
                          <i className="las la-clipboard-check text-primary" />
                        </div>
                        <div className="activity-info-text">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="m-0  w-75">New Task</h6>
                            <span className="text-muted">10 hours ago</span>
                          </div>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                            <a href="#" className="text-primary">
                              [more info]
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="activity-info">
                        <div className="icon-info-activity">
                          <i className="las la-comment-dots text-danger" />
                        </div>
                        <div className="activity-info-text">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="m-0">New Comment</h6>
                            <span className="text-muted">Yesterday</span>
                          </div>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                            <a href="#" className="text-primary">
                              [more info]
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="activity-info">
                        <div className="icon-info-activity">
                          <i className="las la-user-friends text-primary" />
                        </div>
                        <div className="activity-info-text">
                          <div className="d-flex justify-content-between align-items-center">
                            <h6 className="m-0">New Lead Miting</h6>
                            <span className="text-muted">14 Nov 2019</span>
                          </div>
                          <p className="text-muted mt-3">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                            alteration.
                            <a href="#" className="text-primary">
                              [more info]
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*end activity*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Timeline</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="tracking-list">
                      <div className="tracking-item">
                        <div className="tracking-icon icon-inner">
                          <i className="fas fa-circle" />
                        </div>
                        <div className="tracking-date">
                          Sep 18, 2024
                          <span className="d-block fs-12 text-muted">
                            05:01 PM
                          </span>
                        </div>
                        <p className="mb-0 text-muted">
                          It is a long established fact that a reader will be
                          distracted.
                        </p>
                      </div>
                      <div className="tracking-item">
                        <div className="tracking-icon icon-inner">
                          <i className="fas fa-circle" />
                        </div>
                        <div className="tracking-date">
                          Aug 10, 2024
                          <span className="d-block fs-12 text-muted">
                            11:19 AM
                          </span>
                        </div>
                        <p className="mb-0 text-muted">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority{" "}
                        </p>
                      </div>
                      <div className="tracking-item">
                        <div className="tracking-icon icon-inner">
                          <i className="fas fa-circle" />
                        </div>
                        <div className="tracking-date">
                          Aug 10, 2024
                          <span className="d-block fs-12 text-muted">
                            11:19 AM
                          </span>
                        </div>
                        <p className="mb-0 text-muted">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority{" "}
                        </p>
                      </div>
                      <div className="tracking-item">
                        <div className="tracking-icon icon-inner">
                          <i className="fas fa-circle" />
                        </div>
                        <div className="tracking-date">
                          Aug 10, 2024
                          <span className="d-block fs-12 text-muted">
                            11:19 AM
                          </span>
                        </div>
                        <p className="mb-0 text-muted">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority{" "}
                        </p>
                      </div>
                      <div className="tracking-item">
                        <div className="tracking-icon icon-inner">
                          <i className="fas fa-circle" />
                        </div>
                        <div className="tracking-date">
                          Jul 06, 2024
                          <span className="d-block fs-12 text-muted">
                            02:02 PM
                          </span>
                        </div>
                        <p className="mb-0 text-muted">
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested.
                        </p>
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

export default Timeline;
