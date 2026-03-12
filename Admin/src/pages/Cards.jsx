import React from "react";
import Footer from "../common/Footer";

function Cards() {
  return (
    <>
      <div>
        <div className="page-wrapper">
          {/* Page Content*/}
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                    <h4 className="page-title">Cards</h4>
                    <div className>
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <a href="#">Approx</a>
                        </li>
                        {/*end nav-item*/}
                        <li className="breadcrumb-item active">Cards</li>
                      </ol>
                    </div>
                  </div>
                  {/*end page-title-box*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
              <div className="row mb-3">
                <div className="col-md-12 col-lg-3">
                  <div className="card  h-100 bg-blue bg-globe-img">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-9">
                          <p className="text-white text-uppercase mb-0 fw-semibold fs-14">
                            Master Card
                          </p>
                        </div>
                        {/*end col*/}
                        <div className="col-3 align-self-center text-end">
                          <img
                            src="assets/images/logos/m-card.png"
                            alt
                            className
                            height={20}
                          />
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                      <div className="row mt-3 mb-1">
                        <div className="col-9">
                          <p className="text-white-50 text-uppercase mb-0 fw-normal fs-12">
                            Balance
                          </p>
                          <h5 className="mt-1 mb-0 fw-semibold fs-20 text-white">
                            $98659.50
                          </h5>
                        </div>
                        {/*end col*/}
                        <div className="col-3 align-self-center text-end">
                          <i className="iconoir-wifi fs-24 trans-90 text-white-50" />
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end card-body*/}
                    <div className="card-body p-2 bg-black rounded-bottom">
                      <div className="row">
                        <div className="col-6">
                          <p className="text-white-50 text-uppercase mb-0 fw-normal fs-12">
                            Expiry: 01/32
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium fs-14 text-white">
                            Daniel Leonard
                          </h5>
                        </div>
                        {/*end col*/}
                        <div className="col-6 align-self-center text-end">
                          <p className="text-white-50 text-uppercase mb-0 fw-normal fs-12">
                            CVV: 301
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium fs-14 text-white">
                            **** **** **** 1234
                          </h5>
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
                <div className="col-md-12 col-lg-3">
                  <div className="card  h-100 bg-warning bg-globe-img">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-9">
                          <p className="text-white text-uppercase mb-0 fw-semibold fs-14">
                            Visa Card
                          </p>
                        </div>
                        {/*end col*/}
                        <div className="col-3 align-self-center text-end">
                          <img
                            src="assets/images/logos/visa.png"
                            alt
                            className
                            height={20}
                          />
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                      <div className="row mt-3 mb-1">
                        <div className="col-9">
                          <p className="text-white-50 text-uppercase mb-0 fw-normal fs-12">
                            Balance
                          </p>
                          <h5 className="mt-1 mb-0 fw-semibold fs-20 text-white">
                            $44125.50
                          </h5>
                        </div>
                        {/*end col*/}
                        <div className="col-3 align-self-center text-end">
                          <i className="iconoir-wifi fs-24 trans-90 text-white-50" />
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end card-body*/}
                    <div className="card-body p-2 bg-black rounded-bottom">
                      <div className="row">
                        <div className="col-6">
                          <p className="text-white-50 text-uppercase mb-0 fw-normal fs-12">
                            Expiry: 01/35
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium fs-14 text-white">
                            Mary Mallory
                          </h5>
                        </div>
                        {/*end col*/}
                        <div className="col-6 align-self-center text-end">
                          <p className="text-white-50 text-uppercase mb-0 fw-normal fs-12">
                            CVV: 650
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium fs-14 text-white">
                            **** **** **** 1234
                          </h5>
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
                <div className="col-md-12 col-lg-3">
                  <div className="card  h-100 bg-black bg-globe-img">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-9">
                          <p className="text-white text-uppercase mb-0 fw-semibold fs-14">
                            Master Card
                          </p>
                        </div>
                        {/*end col*/}
                        <div className="col-3 align-self-center text-end">
                          <img
                            src="assets/images/logos/m-card.png"
                            alt
                            className
                            height={20}
                          />
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                      <div className="row mt-3 mb-1">
                        <div className="col-9">
                          <p className="text-white-50 text-uppercase mb-0 fw-normal fs-12">
                            Balance
                          </p>
                          <h5 className="mt-1 mb-0 fw-semibold fs-20 text-white">
                            $36251.50
                          </h5>
                        </div>
                        {/*end col*/}
                        <div className="col-3 align-self-center text-end">
                          <i className="iconoir-wifi fs-24 trans-90 text-white-50" />
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end card-body*/}
                    <div className="card-body p-2 bg-soft-secondary rounded-bottom">
                      <div className="row">
                        <div className="col-6">
                          <p className="text-white-50 text-uppercase mb-0 fw-normal fs-12">
                            Expiry: 01/30
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium fs-14 text-white">
                            John Carter
                          </h5>
                        </div>
                        {/*end col*/}
                        <div className="col-6 align-self-center text-end">
                          <p className="text-white-50 text-uppercase mb-0 fw-normal fs-12">
                            CVV: 511
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium fs-14 text-white">
                            **** **** **** 1234
                          </h5>
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
                <div className="col-md-12 col-lg-3">
                  <div className="card  h-100 bg-dark-subtle bg-globe-img">
                    <div className="card-body text-center">
                      <a
                        href="#"
                        className="h-100 d-block"
                        data-bs-toggle="modal"
                        data-bs-target="#addCard"
                      >
                        <div className="position-relative h-100 d-block">
                          <div className="position-absolute top-50 start-50 translate-middle">
                            <i className="fas fa-plus fs-30" />
                            <h5 className="fw-medium fs-18 text-muted">
                              Add Card
                            </h5>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
              <div className="row justify-content-center">
                <div className="col-md-12 col-lg-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h4 className="card-title">All Transactions</h4>
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
                              <th className="border-top-0">Date</th>
                              <th className="border-top-0">Type</th>
                              <th className="border-top-0">Description</th>
                              <th className="border-top-0">AApprox</th>
                              <th className="border-top-0">Status</th>
                              <th className="border-top-0">Action</th>
                            </tr>
                            {/*end tr*/}
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                20 July 2024 <span>03:25pm</span>
                              </td>
                              <td>Transfer</td>
                              <td>Service Fee</td>
                              <td>$560</td>
                              <td>
                                <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                  Credit
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
                                15 July 2024 <span>012:35pm</span>
                              </td>
                              <td>Card Payment</td>
                              <td>UI/UX Project</td>
                              <td>$700</td>
                              <td>
                                <span className="badge bg-danger-subtle text-danger fs-11 fw-medium px-2">
                                  Debit
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
                                12 July 2024 <span>10:05am</span>
                              </td>
                              <td>Card Payment</td>
                              <td>Freelancer Fee</td>
                              <td>$980</td>
                              <td>
                                <span className="badge bg-danger-subtle text-danger fs-11 fw-medium px-2">
                                  Debit
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
                                30 June 2024 <span>11:12pm</span>
                              </td>
                              <td>Transfer</td>
                              <td>Monthly SIP Plan</td>
                              <td>$250</td>
                              <td>
                                <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                  Credit
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
                                19 June 2024 <span>07:15pm</span>
                              </td>
                              <td>Card Payment</td>
                              <td>Hotel Booking</td>
                              <td>$430</td>
                              <td>
                                <span className="badge bg-danger-subtle text-danger fs-11 fw-medium px-2">
                                  Debit
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
                                05 June 2024 <span>02:40pm</span>
                              </td>
                              <td>Card Payment</td>
                              <td>Server Subscription </td>
                              <td>$600</td>
                              <td>
                                <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                  Credit
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
                      <div className="d-lg-flex justify-content-lg-between mt-2">
                        <div className="mb-2 mb-lg-0">
                          <button
                            type="submit"
                            className="btn btn-primary px-4"
                          >
                            Add Transaction
                          </button>
                        </div>
                        <div>
                          <ul className="pagination">
                            <li className="page-item disabled">
                              <a className="page-link" href="#" tabIndex={-1}>
                                Previous
                              </a>
                            </li>
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                1
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                Next
                              </a>
                            </li>
                          </ul>
                          {/*end pagination*/}
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
        {/* end page-wrapper */}
        <div
          className="modal fade"
          id="addCard"
          tabIndex={-1}
          aria-labelledby="addCardLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addCardLabel">
                  Add Card Detail
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className=" mb-2">
                  <label htmlFor="fullName">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text" id="fullName">
                      <i className="fas fa-user" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      aria-label="FullName"
                    />
                  </div>
                </div>
                <div className=" mb-2">
                  <label htmlFor="cardNumber">Card Number</label>
                  <div className="input-group">
                    <span className="input-group-text" id="cardNumber">
                      <i className="fas fa-credit-card" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="**** **** **** ****"
                      aria-label="cardNumber"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <label htmlFor="ExpiryDate">Expiry Date</label>
                      <div className="input-group">
                        <span className="input-group-text" id="ExpiryDate">
                          <i className="far fa-calendar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="01/35"
                          aria-label="ExpiryDate"
                        />
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-2">
                      <label htmlFor="Cvv">CVV</label>
                      <div className="input-group">
                        <span className="input-group-text" id="CVV">
                          <i className="fas fa-ellipsis" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={123}
                          aria-label="CVV"
                        />
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary w-100">
                  Add Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
