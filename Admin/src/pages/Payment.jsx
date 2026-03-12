import React from "react";
import Footer from "../common/Footer";

function Payment() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Payments</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Payments</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-md-4">
                <div className="card bg-globe-img">
                  <div className="card-body">
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="fs-16 fw-semibold">Balance</span>
                        <form className>
                          <select
                            id="dynamic-select"
                            name="example-select"
                            data-placeholder="Select an option"
                            data-dynamic-select
                          >
                            <option
                              value={1}
                              data-img="assets/images/logos/m-card.png"
                            >
                              xx25
                            </option>
                            <option
                              value={2}
                              data-img="assets/images/logos/ame-bank.png"
                            >
                              xx56
                            </option>
                          </select>
                        </form>
                      </div>
                      <h4 className="my-2 fs-24 fw-semibold">
                        122.5692.00 <small className="font-14">BTC</small>
                      </h4>
                      <p className="mb-3 text-muted fw-semibold">
                        <span className="text-success">
                          <i className="fas fa-arrow-up me-1" />
                          11.1%
                        </span>{" "}
                        Outstanding balance boost
                      </p>
                      <button type="submit" className="btn btn-soft-primary">
                        Transfer
                      </button>
                      <button type="button" className="btn btn-soft-danger">
                        Request
                      </button>
                    </div>
                    <div className="row mt-3">
                      <div className="col-4">
                        <div className="p-2 border-dashed border-theme-color rounded">
                          <h5 className="mt-1 mb-0 fw-medium">$82365.00</h5>
                          <small className="text-muted">BTC/USD</small>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-4">
                        <div className="p-2 border-dashed border-theme-color rounded">
                          <h5 className="mt-1 mb-0 fw-medium">$15482.00</h5>
                          <small className="text-muted">EUR/USD</small>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-4">
                        <div className="p-2 border-dashed border-theme-color rounded">
                          <h5 className="mt-1 mb-0 fw-medium">$95628.00</h5>
                          <small className="text-muted">GBP/USD</small>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                    <p className="mb-0  mt-2 text-success fst-italic">
                      The last transaction $2560.00 is Successful!
                    </p>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-md-6 col-lg-4">
                <div className="card bg-corner-img">
                  <div className="card-body">
                    <div className="row d-flex justify-content-center">
                      <div className="col-9">
                        <p className="text-muted text-uppercase mb-0 fw-normal fs-13">
                          Gross Volume
                        </p>
                        <h4 className="mt-1 mb-0 fw-medium">$8659.50</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-3 align-self-center">
                        <div className="d-flex justify-content-center align-items-center thumb-md border-dashed border-danger rounded mx-auto">
                          <i className="iconoir-send-dollars fs-22 align-self-center mb-0 text-danger" />
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card bg-corner-img">
                  <div className="card-body">
                    <div className="row d-flex justify-content-center">
                      <div className="col-9">
                        <p className="text-muted text-uppercase mb-0 fw-normal fs-13">
                          Net Volume
                        </p>
                        <h4 className="mt-1 mb-0 fw-medium">$5523.50</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-3 align-self-center">
                        <div className="d-flex justify-content-center align-items-center thumb-md border-dashed border-danger rounded mx-auto">
                          <i className="iconoir-dollar-circle fs-22 align-self-center mb-0 text-danger" />
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card bg-corner-img">
                  <div className="card-body">
                    <div className="row d-flex justify-content-center">
                      <div className="col-9">
                        <p className="text-muted text-uppercase mb-0 fw-normal fs-13">
                          Per Customer
                        </p>
                        <h4 className="mt-1 mb-0 fw-medium">$450.50</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-3 align-self-center">
                        <div className="d-flex justify-content-center align-items-center thumb-md border-dashed border-danger rounded mx-auto">
                          <i className="iconoir-user fs-22 align-self-center mb-0 text-danger" />
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
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Balance Details</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  <div className="card-body pt-0">
                    <div id="customers" className="apex-charts" />
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Payments History</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn bt btn-light dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="icofont-calendar fs-5 me-1" /> This
                            Month
                            <i className="las la-angle-down ms-1" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Week
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Month
                            </a>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead className="table-light">
                          <tr>
                            <th className="border-top-0">Members</th>
                            <th className="border-top-0">Invoice</th>
                            <th className="border-top-0">Payment Details</th>
                            <th className="border-top-0">Date</th>
                            <th className="border-top-0">AApprox</th>
                            <th className="border-top-0">Status</th>
                            <th className="border-top-0">Action</th>
                          </tr>
                          {/*end tr*/}
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-1.jpg"
                                  height={40}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate align-self-center">
                                  <h6 className="m-0">William Hirsch</h6>
                                  <p className="fs-12 text-muted mb-0">USA</p>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>
                              <a
                                href="apps-invoice.html"
                                className="fs-12 text-primary"
                              >
                                INV-5784
                              </a>{" "}
                            </td>
                            <td>Service Fee</td>
                            <td>
                              20 July 2024 <span>03:25pm</span>
                            </td>
                            <td>$560</td>
                            <td>
                              <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                Paid
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-download text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-2.jpg"
                                  height={40}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate align-self-center">
                                  <h6 className="m-0">Louise Black</h6>
                                  <p className="fs-12 text-muted mb-0">
                                    Germany
                                  </p>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>
                              <a
                                href="apps-invoice.html"
                                className="fs-12 text-primary"
                              >
                                INV-3256
                              </a>{" "}
                            </td>
                            <td>UI/UX Project</td>
                            <td>
                              15 July 2024 <span>012:35pm</span>
                            </td>
                            <td>$700</td>
                            <td>
                              <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                Paid
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-download text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  height={40}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate align-self-center">
                                  <h6 className="m-0">Robert Douglas</h6>
                                  <p className="fs-12 text-muted mb-0">
                                    France
                                  </p>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>
                              <a
                                href="apps-invoice.html"
                                className="fs-12 text-primary"
                              >
                                INV-9865
                              </a>{" "}
                            </td>
                            <td>Freelancer Fee</td>
                            <td>
                              12 July 2024 <span>10:05am</span>
                            </td>
                            <td>$980</td>
                            <td>
                              <span className="badge bg-warning-subtle text-warning fs-11 fw-medium px-2">
                                Pending
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-download text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-4.jpg"
                                  height={40}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate align-self-center">
                                  <h6 className="m-0">Annabelle Reny</h6>
                                  <p className="fs-12 text-muted mb-0">
                                    Canada
                                  </p>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>
                              <a
                                href="apps-invoice.html"
                                className="fs-12 text-primary"
                              >
                                INV-9960
                              </a>{" "}
                            </td>
                            <td>Monthly SIP Plan</td>
                            <td>
                              30 June 2024 <span>11:12pm</span>
                            </td>
                            <td>$250</td>
                            <td>
                              <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                Paid
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-download text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-5.jpg"
                                  height={40}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate align-self-center">
                                  <h6 className="m-0">Russell Regnier</h6>
                                  <p className="fs-12 text-muted mb-0">
                                    Russia
                                  </p>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>
                              <a
                                href="apps-invoice.html"
                                className="fs-12 text-primary"
                              >
                                INV-5847
                              </a>{" "}
                            </td>
                            <td>Hotel Booking</td>
                            <td>
                              19 June 2024 <span>07:15pm</span>
                            </td>
                            <td>$430</td>
                            <td>
                              <span className="badge bg-danger-subtle text-danger fs-11 fw-medium px-2">
                                Cancle
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-download text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-6.jpg"
                                  height={40}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate align-self-center">
                                  <h6 className="m-0">John Singer</h6>
                                  <p className="fs-12 text-muted mb-0">India</p>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>
                              <a
                                href="apps-invoice.html"
                                className="fs-12 text-primary"
                              >
                                INV-4111
                              </a>{" "}
                            </td>
                            <td>Server Subscription </td>
                            <td>
                              05 June 2024 <span>02:40pm</span>
                            </td>
                            <td>$600</td>
                            <td>
                              <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                Paid
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-download text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                        </tbody>
                      </table>{" "}
                      {/*end table*/}
                    </div>
                    {/*end /div*/}
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

export default Payment;
