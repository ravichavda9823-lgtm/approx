import React from "react";
import Footer from "../common/Footer";

function Pricing() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Pricing</h4>
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
                      <li className="breadcrumb-item active">Pricing</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">
                        Basic plan
                      </h6>
                      <p className="text-muted pt-2 mb-0">
                        It is a long established fact that a reader will be
                        distracted by the readable.
                      </p>
                      <div className="pt-3">
                        <h1 className="d-inline-block fw-bold">$39.00</h1>
                        <small className="font-12 text-muted">/month</small>
                      </div>
                      <hr className="hr-dashed" />
                      <ul className="list-unstyled pricing-content text-start pt-3 border-0 mb-0">
                        <li>30GB Disk Space</li>
                        <li>30 Email Accounts</li>
                        <li>30GB Monthly Bandwidth</li>
                        <li>06 Subdomains</li>
                        <li>10 Domains</li>
                      </ul>
                      <a href="#" className="btn btn-dark py-2 px-5 mt-3 w-100">
                        <span>Get Started</span>
                      </a>
                    </div>
                    {/*end pricing Table*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <span className="badge bg-pink-subtle text-pink mt-0 py-1 px-2 mx-auto">
                        Popular
                      </span>
                      <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">
                        Premium Plan
                      </h6>
                      <p className="text-muted pt-2 mb-0">
                        It is a long established fact that a reader will be
                        distracted by the readable.
                      </p>
                      <div className="pt-3">
                        <h1 className="d-inline-block fw-bold">$49.00</h1>
                        <small className="font-12 text-muted">/month</small>
                      </div>
                      <hr className="hr-dashed" />
                      <ul className="list-unstyled pricing-content text-start pt-3 border-0 mb-0">
                        <li>30GB Disk Space</li>
                        <li>30 Email Accounts</li>
                        <li>30GB Monthly Bandwidth</li>
                        <li>06 Subdomains</li>
                        <li>10 Domains</li>
                      </ul>
                      <a
                        href="#"
                        className="btn btn-primary py-2 px-5 mt-3 w-100"
                      >
                        <span>Get Started</span>
                      </a>
                    </div>
                    {/*end pricing Table*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">
                        Plus Plan
                      </h6>
                      <p className="text-muted pt-2 mb-0">
                        It is a long established fact that a reader will be
                        distracted by the readable.
                      </p>
                      <div className="pt-3">
                        <h1 className="d-inline-block fw-bold">$69.00</h1>
                        <small className="font-12 text-muted">/month</small>
                      </div>
                      <hr className="hr-dashed" />
                      <ul className="list-unstyled pricing-content text-start pt-3 border-0 mb-0">
                        <li>30GB Disk Space</li>
                        <li>30 Email Accounts</li>
                        <li>30GB Monthly Bandwidth</li>
                        <li>06 Subdomains</li>
                        <li>10 Domains</li>
                      </ul>
                      <a href="#" className="btn btn-dark py-2 px-5 mt-3 w-100">
                        <span>Get Started</span>
                      </a>
                    </div>
                    {/*end pricing Table*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">
                        Master Plan
                      </h6>
                      <p className="text-muted pt-2 mb-0">
                        It is a long established fact that a reader will be
                        distracted by the readable.
                      </p>
                      <div className="pt-3">
                        <h1 className="d-inline-block fw-bold">$199.00</h1>
                        <small className="font-12 text-muted">/month</small>
                      </div>
                      <hr className="hr-dashed" />
                      <ul className="list-unstyled pricing-content text-start pt-3 border-0 mb-0">
                        <li>30GB Disk Space</li>
                        <li>30 Email Accounts</li>
                        <li>30GB Monthly Bandwidth</li>
                        <li>06 Subdomains</li>
                        <li>10 Domains</li>
                      </ul>
                      <a href="#" className="btn btn-dark py-2 px-5 mt-3 w-100">
                        <span>Get Started</span>
                      </a>
                    </div>
                    {/*end pricing Table*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body bg-soft-blue text-center rounded-top">
                    <i className="icofont-bird-wings d-inline-block mt-2 mb-3 display-4 text-blue" />
                  </div>
                  {/*end card-body*/}
                  <div className="card-body mt-n52">
                    <div className="text-center">
                      <div className="py-2 px-3 shadow-sm d-inline-block rounded-pill card-bg">
                        <h1 className="d-inline-block fw-bold mb-0">$39.00</h1>
                        <small className="font-12 text-muted">/month</small>
                      </div>
                      <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">
                        Basic plan
                      </h6>
                      <ul className="list-unstyled pricing-content text-center pt-2 border-0 mb-3">
                        <li>30GB Disk Space</li>
                        <li>30 Email Accounts</li>
                        <li>30GB Monthly Bandwidth</li>
                        <li>06 Subdomains</li>
                        <li>10 Domains</li>
                      </ul>
                      <hr className="hr-dashed" />
                      <a href="#" className="btn btn-dark py-2 px-3 mt-2">
                        <span>Get Started</span>
                      </a>
                    </div>
                    {/*end pricing Table*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body bg-soft-pink text-center rounded-top">
                    <i className="icofont-woman-bird d-inline-block mt-2 mb-3 display-4 text-pink" />
                  </div>
                  {/*end card-body*/}
                  <div className="card-body mt-n52">
                    <div className="text-center">
                      <div className="py-2 px-3 shadow-sm d-inline-block rounded-pill card-bg">
                        <h1 className="d-inline-block fw-bold mb-0">$49.00</h1>
                        <small className="font-12 text-muted">/month</small>
                      </div>
                      <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">
                        Premium Plan
                      </h6>
                      <ul className="list-unstyled pricing-content text-center pt-2 border-0 mb-3">
                        <li>30GB Disk Space</li>
                        <li>30 Email Accounts</li>
                        <li>30GB Monthly Bandwidth</li>
                        <li>06 Subdomains</li>
                        <li>10 Domains</li>
                      </ul>
                      <hr className="hr-dashed" />
                      <a href="#" className="btn btn-dark py-2 px-3 mt-2">
                        <span>Get Started</span>
                      </a>
                    </div>
                    {/*end pricing Table*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body bg-soft-success text-center rounded-top">
                    <i className="icofont-elk d-inline-block mt-2 mb-3 display-4 text-success" />
                  </div>
                  {/*end card-body*/}
                  <div className="card-body mt-n52">
                    <div className="text-center">
                      <div className="py-2 px-3 shadow-sm d-inline-block rounded-pill card-bg">
                        <h1 className="d-inline-block fw-bold mb-0">$69.00</h1>
                        <small className="font-12 text-muted">/month</small>
                      </div>
                      <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">
                        Plus Plan
                      </h6>
                      <ul className="list-unstyled pricing-content text-center pt-2 border-0 mb-3">
                        <li>30GB Disk Space</li>
                        <li>30 Email Accounts</li>
                        <li>30GB Monthly Bandwidth</li>
                        <li>06 Subdomains</li>
                        <li>10 Domains</li>
                      </ul>
                      <hr className="hr-dashed" />
                      <a href="#" className="btn btn-dark py-2 px-3 mt-2">
                        <span>Get Started</span>
                      </a>
                    </div>
                    {/*end pricing Table*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body bg-soft-warning text-center rounded-top">
                    <i className="icofont-fire-burn d-inline-block mt-2 mb-3 display-4 text-warning" />
                  </div>
                  {/*end card-body*/}
                  <div className="card-body mt-n52">
                    <div className="text-center">
                      <div className="py-2 px-3 shadow-sm d-inline-block rounded-pill card-bg">
                        <h1 className="d-inline-block fw-bold mb-0">$199.00</h1>
                        <small className="font-12 text-muted">/month</small>
                      </div>
                      <h6 className="pt-3 pb-2 m-0 fs-18 fw-medium">
                        Master Plan
                      </h6>
                      <ul className="list-unstyled pricing-content text-center pt-2 border-0 mb-3">
                        <li>30GB Disk Space</li>
                        <li>30 Email Accounts</li>
                        <li>30GB Monthly Bandwidth</li>
                        <li>06 Subdomains</li>
                        <li>10 Domains</li>
                      </ul>
                      <hr className="hr-dashed" />
                      <a href="#" className="btn btn-dark py-2 px-3 mt-2">
                        <span>Get Started</span>
                      </a>
                    </div>
                    {/*end pricing Table*/}
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

export default Pricing;
