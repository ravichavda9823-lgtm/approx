import React from "react";
import Footer from "../common/Footer";

function Toasts() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Toasts</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Advanced UI</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Toasts</li>
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
                        <h4 className="card-title">Basic</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div
                      className="toast"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="toast-header">
                        <img
                          src="assets/images/logo-sm.png"
                          alt
                          height={20}
                          className="me-1"
                        />
                        <h5 className="me-auto my-0">Approx</h5>
                        <small>11 mins ago</small>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        />
                      </div>
                      <div className="toast-body ">
                        Hello, world! This is a toast message.
                      </div>
                    </div>
                    {/*end toast*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Stacking</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="bg-light rounded p-3">
                      <div className="toast-container position-relative">
                        <div
                          className="toast"
                          role="alert"
                          aria-live="assertive"
                          aria-atomic="true"
                        >
                          <div className="toast-header">
                            <img
                              src="assets/images/logo-sm.png"
                              alt
                              height={20}
                              className="me-1"
                            />
                            <h5 className="me-auto my-0">Approx</h5>
                            <small>11 mins ago</small>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="toast"
                              aria-label="Close"
                            />
                          </div>
                          <div className="toast-body ">
                            Hello, world! This is a toast message.
                          </div>
                        </div>
                        {/*end toast*/}
                        <div
                          className="toast"
                          role="alert"
                          aria-live="assertive"
                          aria-atomic="true"
                        >
                          <div className="toast-header">
                            <img
                              src="assets/images/logo-sm.png"
                              alt
                              height={20}
                              className="me-1"
                            />
                            <h5 className="me-auto my-0">Approx</h5>
                            <small>11 mins ago</small>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="toast"
                              aria-label="Close"
                            />
                          </div>
                          <div className="toast-body ">
                            Hello, world! This is a toast message.
                          </div>
                        </div>
                        {/*end toast*/}
                      </div>
                      {/*end toast-container*/}
                    </div>{" "}
                    {/*end /div*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Toast Placement</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form>
                      <div className="form-group mb-3">
                        <select
                          className="form-select"
                          id="selectToastPlacement"
                        >
                          <option value selected>
                            Select a position...
                          </option>
                          <option value="top-0 start-0">Top left</option>
                          <option value="top-0 start-50 translate-middle-x">
                            Top center
                          </option>
                          <option value="top-0 end-0">Top right</option>
                          <option value="top-50 start-0 translate-middle-y">
                            Middle left
                          </option>
                          <option value="top-50 start-50 translate-middle">
                            Middle center
                          </option>
                          <option value="top-50 end-0 translate-middle-y">
                            Middle right
                          </option>
                          <option value="bottom-0 start-0">Bottom left</option>
                          <option value="bottom-0 start-50 translate-middle-x">
                            Bottom center
                          </option>
                          <option value="bottom-0 end-0">Bottom right</option>
                        </select>
                      </div>
                    </form>
                    <div
                      aria-live="polite"
                      aria-atomic="true"
                      className="position-relative bd-example-toasts"
                      style={{
                        height: 260,
                        backgroundColor: "rgba(235, 240, 247, 0.1)",
                      }}
                    >
                      <div
                        className="toast-container position-absolute p-3"
                        id="toastPlacement"
                      >
                        <div className="toast">
                          <div className="toast-header">
                            <img
                              src="assets/images/logo-sm.png"
                              alt
                              height={20}
                              className="me-1"
                            />
                            <h5 className="me-auto my-0">Approx</h5>
                            <small>11 mins ago</small>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="toast"
                              aria-label="Close"
                            />
                          </div>
                          <div className="toast-body ">
                            Hello, world! This is a toast message.
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end toast*/}
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
                        <h4 className="card-title">Translucent</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="bg-light rounded p-3">
                      <div
                        className="toast"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-header">
                          <img
                            src="assets/images/logo-sm.png"
                            alt
                            height={20}
                            className="me-1"
                          />
                          <h5 className="me-auto my-0">Approx</h5>
                          <small>11 mins ago</small>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                          />
                        </div>
                        <div className="toast-body ">
                          Hello, world! This is a toast message.
                        </div>
                      </div>
                      {/*end toast*/}
                    </div>{" "}
                    {/*end /div*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Custom Content</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="bg-light rounded p-3">
                      <div
                        className="toast d-flex align-items-center mb-2"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-body">
                          Hello, world! This is a toast message.
                        </div>
                        <button
                          type="button"
                          className="btn-close ms-auto me-2"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        />
                      </div>
                      <div
                        className="toast mb-2"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-body">
                          Hello, world! This is a toast message.
                          <div className="mt-2 pt-2 border-top">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Take action
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="toast"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        className="toast d-flex align-items-center text-white bg-primary border-0"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                      >
                        <div className="toast-body">
                          Hello, world! This is a toast message.
                        </div>
                        <button
                          type="button"
                          className="btn-close btn-close-white ms-auto me-2"
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        />
                      </div>
                    </div>{" "}
                    {/*end /div*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Custom Toast</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div
                      className="toast"
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                    >
                      <div className="toast-header border-0">
                        <button
                          type="button"
                          className="btn-close ms-auto "
                          data-bs-dismiss="toast"
                          aria-label="Close"
                        />
                      </div>
                      <div className="toast-body  text-center">
                        <img
                          src="assets/images/users/avatar-5.jpg"
                          alt
                          className="d-block mx-auto rounded-circle thumb-xl"
                        />
                        <h5 className="fw-bold mt-2 mb-1">Charles Smith</h5>
                        <p className="text-muted mb-0">
                          UI/UX front end developer
                        </p>
                        <div className="mt-3 mb-2">
                          <button
                            type="button"
                            className="btn btn-outline-primary btn-icon-circle btn-icon-circle-sm"
                          >
                            <i className="fab fa-facebook-f" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-info btn-icon-circle btn-icon-circle-sm"
                          >
                            <i className="fab fa-twitter" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-pink btn-icon-circle btn-icon-circle-sm"
                          >
                            <i className="fab fa-dribbble" />
                          </button>
                        </div>
                      </div>
                      {/* end toast-body */}
                    </div>
                    {/*end toast*/}
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

export default Toasts;
