import React from "react";
import Footer from "../common/Footer";

function Notification() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Notifications</h4>
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
                      <li className="breadcrumb-item active">Notifications</li>
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
                <div className="card" style={{ backgroundColor: "#ffd88e3b" }}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h6 className="mb-2 mt-1 fw-medium text-dark fs-18">
                          Notifications
                        </h6>
                        <p className="text-body fs-14 ">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical{" "}
                          <br /> Latin literature from 45 BC, making it over
                          2000 years old.{" "}
                        </p>
                        <button type="button" className="btn btn-warning px-2">
                          View All
                        </button>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-auto align-self-center">
                        <img
                          src="assets/images/extra/card/notification.gif"
                          alt
                          height={90}
                          className="rounded"
                        />
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card-body mb-3">
                  <h5 className="text-body m-0 d-inline-block">Today</h5>
                  <span className="text-pink bg-pink-subtle py-0 px-1 rounded fw-medium d-inline-block ms-1">
                    2
                  </span>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <a href="#" className>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-10.jpg"
                                alt
                                className="thumb-lg rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 text-truncate">
                              <h6 className="my-1 fw-medium text-dark fs-14">
                                Appointment with Charles Reiter
                                <small className="text-muted ps-2">
                                  01:30 PM
                                </small>
                              </h6>
                              <p className="text-muted mb-0 text-wrap">
                                Please ensure you have all necessary documents
                                or items required for the appointment{" "}
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                          {/*end media*/}
                        </a>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm px-2"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn bg-secondary-subtle text-secondary btn-sm"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <a href="#" className>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt
                                className="thumb-lg rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 text-truncate">
                              <h6 className="my-1 fw-medium text-dark fs-14">
                                New Session booked by Joseph Rust
                                <small className="text-muted ps-2">
                                  10:37 AM
                                </small>
                              </h6>
                              <p className="text-muted mb-0 text-wrap">
                                Please confirm this appointment and let us know
                                if you have any preferences or special
                                requirements. Looking forward to our session
                                together!{" "}
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                          {/*end media*/}
                        </a>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm px-2"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn bg-secondary-subtle text-secondary btn-sm"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <a href="#" className>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-9.jpg"
                                alt
                                className="thumb-lg rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 text-truncate">
                              <h6 className="my-1 fw-medium text-dark fs-14">
                                Payment Not Added
                                <small className="text-muted ps-2">
                                  04:10 AM
                                </small>
                              </h6>
                              <p className="text-muted mb-0 text-wrap">
                                This is to inform you that your recent payment
                                has not been successfully processed. Please
                                review your payment method and ensure that
                                sufficient funds are available or that the
                                provided details are accurate.
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                          {/*end media*/}
                        </a>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0 ">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm px-2"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn bg-secondary-subtle text-secondary btn-sm"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card-body mb-3">
                  <h5 className="text-muted m-0 d-inline-block">Yesterday</h5>
                  <span className="text-pink bg-pink-subtle py-0 px-1 rounded fw-medium d-inline-block ms-1">
                    5
                  </span>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <a href="#" className>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt
                                className="thumb-lg rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 text-truncate">
                              <h6 className="my-1 fw-medium text-dark fs-14">
                                Password change email sent
                                <small className="text-muted ps-2">
                                  07:45 PM
                                </small>
                              </h6>
                              <p className="text-muted mb-0 text-wrap">
                                This is to inform you that your password has
                                been successfully changed for your account.
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                          {/*end media*/}
                        </a>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm px-2"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn bg-secondary-subtle text-secondary btn-sm"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <a href="#" className>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt
                                className="thumb-lg rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 text-truncate">
                              <h6 className="my-1 fw-medium text-dark fs-14">
                                Meeting at 07:45 PM{" "}
                                <small className="text-muted ps-2">
                                  02:05 PM
                                </small>
                              </h6>
                              <p className="text-muted mb-0 text-wrap">
                                Meeting Reminder: Just a quick heads-up about
                                your meeting tonight at 07:45 PM. Don't forget
                                to prep any necessary materials and jot down any
                                questions or topics you'd like to discuss.{" "}
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                          {/*end media*/}
                        </a>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm px-2"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn bg-secondary-subtle text-secondary btn-sm"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <a href="#" className>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                alt
                                className="thumb-lg rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 text-truncate">
                              <h6 className="my-1 fw-medium text-dark fs-14">
                                Payment Not Added
                                <small className="text-muted ps-2">
                                  11:15 AM
                                </small>
                              </h6>
                              <p className="text-muted mb-0 text-wrap">
                                This is to inform you that your recent payment
                                has not been successfully processed. Please
                                review your payment method and ensure that
                                sufficient funds are available or that the
                                provided details are accurate.
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                          {/*end media*/}
                        </a>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0 ">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm px-2"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn bg-secondary-subtle text-secondary btn-sm"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <a href="#" className>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-8.jpg"
                                alt
                                className="thumb-lg rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 text-truncate">
                              <h6 className="my-1 fw-medium text-dark fs-14">
                                Payment Not Added
                                <small className="text-muted ps-2">
                                  09:44 AM
                                </small>
                              </h6>
                              <p className="text-muted mb-0 text-wrap">
                                This is to inform you that your recent payment
                                has not been successfully processed. Please
                                review your payment method and ensure that
                                sufficient funds are available or that the
                                provided details are accurate.
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                          {/*end media*/}
                        </a>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0 ">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm px-2"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn bg-secondary-subtle text-secondary btn-sm"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card-body mb-3">
                  <h5 className="text-muted m-0 d-inline-block">
                    01 June 2024
                  </h5>
                  <span className="text-pink bg-pink-subtle py-0 px-1 rounded fw-medium d-inline-block ms-1">
                    8
                  </span>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <a href="#" className>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt
                                className="thumb-lg rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 text-truncate">
                              <h6 className="my-1 fw-medium text-dark fs-14">
                                New system upgrade
                                <small className="text-muted ps-2">
                                  01:30 PM
                                </small>
                              </h6>
                              <p className="text-muted mb-0 text-wrap">
                                During this time, access may be temporarily
                                limited. We appreciate your patience and
                                understanding as we work to improve your
                                experience. Stay tuned for more details!
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                          {/*end media*/}
                        </a>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm px-2"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn bg-secondary-subtle text-secondary btn-sm"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <a href="#" className>
                          <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                              <img
                                src="assets/images/users/avatar-7.jpg"
                                alt
                                className="thumb-lg rounded-circle"
                              />
                            </div>
                            <div className="flex-grow-1 ms-2 text-truncate">
                              <h6 className="my-1 fw-medium text-dark fs-14">
                                New Session booked by Joseph Rust
                                <small className="text-muted ps-2">
                                  08:05 AM
                                </small>
                              </h6>
                              <p className="text-muted mb-0 text-wrap">
                                Please confirm this appointment and let us know
                                if you have any preferences or special
                                requirements. Looking forward to our session
                                together!{" "}
                              </p>
                            </div>
                            {/*end media-body*/}
                          </div>
                          {/*end media*/}
                        </a>
                      </div>{" "}
                      {/*end col*/}
                      <div className="col-md-2 text-end align-self-center mt-sm-2 mt-lg-0">
                        <button
                          type="button"
                          className="btn btn-primary btn-sm px-2"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn bg-secondary-subtle text-secondary btn-sm"
                        >
                          <i className="fas fa-trash" />
                        </button>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
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

export default Notification;
