import React from "react";
import Footer from "../common/Footer";

function Uialerts() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Alerts</h4>
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
                      <li className="breadcrumb-item active">Alerts</li>
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
                        <h4 className="card-title">Default Alerts</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div
                      className="alert alert-success shadow-sm border-theme-white-2"
                      role="alert"
                    >
                      <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-success rounded-circle mx-auto me-1">
                        <i className="fas fa-check align-self-center mb-0 text-white " />
                      </div>
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </div>
                    <div
                      className="alert alert-danger shadow-sm border-theme-white-2"
                      role="alert"
                    >
                      <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-danger rounded-circle mx-auto me-1">
                        <i className="fas fa-xmark align-self-center mb-0 text-white " />
                      </div>
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                    </div>
                    <div
                      className="alert alert-warning shadow-sm border-theme-white-2"
                      role="alert"
                    >
                      <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-warning rounded-circle mx-auto me-1">
                        <i className="fas fa-exclamation align-self-center mb-0 text-white " />
                      </div>
                      <strong>Well done!</strong> An example warning alert with
                      an icon.
                    </div>
                    <div
                      className="alert alert-purple shadow-sm border-theme-white-2 mb-0"
                      role="alert"
                    >
                      <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-purple rounded-circle mx-auto me-1">
                        <i className="fas fa-info align-self-center mb-0 text-white " />
                      </div>
                      A simple primary alert with{" "}
                      <a href="#" className="alert-link">
                        an example link
                      </a>
                      . Give it a click if you like.
                    </div>
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
                        <h4 className="card-title">Outline Alerts</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div
                      className="alert border-2 border-success text-success"
                      role="alert"
                    >
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </div>
                    <div
                      className="alert border-2 border-danger text-danger"
                      role="alert"
                    >
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                    </div>
                    <div
                      className="alert border-2 border-warning text-warning"
                      role="alert"
                    >
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                    </div>
                    <div
                      className="alert border-2 border-info mb-0 text-info"
                      role="alert"
                    >
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again. 🎉
                    </div>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Dismissible Alerts</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div
                      className="alert alert-success alert-dismissible fade show shadow-sm border-theme-white-2 rounded-pill"
                      role="alert"
                    >
                      <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-success rounded-circle mx-auto me-1">
                        <i className="fas fa-check align-self-center mb-0 text-white " />
                      </div>
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      />
                    </div>
                    <div
                      className="alert alert-danger alert-dismissible fade show shadow-sm border-theme-white-2 mb-0"
                      role="alert"
                    >
                      <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-danger rounded-circle mx-auto me-1">
                        <i className="fas fa-xmark align-self-center mb-0 text-white " />
                      </div>
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      />
                    </div>
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
                        <h4 className="card-title">
                          Dismissible Outline Alerts
                        </h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div
                      className="alert border-2 border-success text-success alert-dismissible fade show rounded-pill"
                      role="alert"
                    >
                      <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-success rounded-circle mx-auto me-1">
                        <i className="fas fa-check align-self-center mb-0 text-white " />
                      </div>
                      <strong>Well done!</strong> You successfully read this
                      important alert message.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      />
                    </div>
                    <div
                      className="alert  border-2 border-danger text-danger alert-dismissible fade show mb-0"
                      role="alert"
                    >
                      <div className="d-inline-flex justify-content-center align-items-center thumb-xs bg-danger rounded-circle mx-auto me-1">
                        <i className="fas fa-xmark align-self-center mb-0 text-white " />
                      </div>
                      <strong>Oh snap!</strong> Change a few things up and try
                      submitting again.
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      />
                    </div>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Custom Icon Alerts</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div
                      className="alert alert-danger alert-dismissible fade show  border-start border-2 border-danger mb-0"
                      role="alert"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <i className="fas fa-skull-crossbones align-self-center fs-30 text-danger " />
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h5 className="mb-1 fw-bold mt-0">Primary</h5>
                          <p className="mb-0">
                            Oh snap! Change a few things up and try submitting
                            again.
                          </p>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          />
                        </div>
                        {/*end media-body*/}
                      </div>
                    </div>
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
                        <h4 className="card-title">Additional Content</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div
                      className="alert alert-info mb-0 border-2"
                      role="alert"
                    >
                      <h4 className="alert-heading font-18">Well done!</h4>
                      <p>
                        Aww yeah, you successfully read this important alert
                        message. This example text is going to run a bit longer
                        so that you can see how spacing within an alert works
                        with this kind of content.
                      </p>
                      <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to
                        keep things nice and tidy.
                      </p>
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

export default Uialerts;
