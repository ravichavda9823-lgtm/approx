import React from "react";
import Footer from "../common/Footer";

function Fromswizard() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Wizard</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Forms</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Wizard</li>
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
                        <h4 className="card-title">Custom Steps Wizard</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form action="#" method="post" id="custom-step">
                      <nav>
                        <div className="nav nav-tabs" id="nav-tab">
                          <a
                            className="nav-link py-2 active"
                            id="step1-tab"
                            data-bs-toggle="tab"
                            href="#step1"
                          >
                            Seller Details
                          </a>
                          <a
                            className="nav-link py-2"
                            id="step2-tab"
                            data-bs-toggle="tab"
                            href="#step2"
                          >
                            Company Document
                          </a>
                          <a
                            className="nav-link py-2"
                            id="step3-tab"
                            data-bs-toggle="tab"
                            href="#step3"
                          >
                            Bank Details
                          </a>
                          <a
                            className="nav-link py-2"
                            id="step4-tab"
                            data-bs-toggle="tab"
                            href="#step4"
                          >
                            Confirm Detail
                          </a>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane active" id="step1">
                          <h4 className="card-title my-4  fs-15">
                            Seller Details
                          </h4>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtFirstNameBilling"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Contact Person
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtFirstNameBilling"
                                    name="txtFirstNameBilling"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtLastNameBilling"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Mobile No.
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtLastNameBilling"
                                    name="txtLastNameBilling"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtCompanyBilling"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Landline No.
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtCompanyBilling"
                                    name="txtCompanyBilling"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtEmailAddressBilling"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Email Address
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtEmailAddressBilling"
                                    name="txtEmailAddressBilling"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtAddress1Billing"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Address 1
                                </label>
                                <div className="col-lg-9">
                                  <textarea
                                    id="txtAddress1Billing"
                                    name="txtAddress1Billing"
                                    rows={4}
                                    className="form-control"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtAddress2Billing"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Warehouse Address
                                </label>
                                <div className="col-lg-9">
                                  <textarea
                                    id="txtAddress2Billing"
                                    name="txtAddress2Billing"
                                    rows={4}
                                    className="form-control"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtCityBilling"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Company Type
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtCityBilling"
                                    name="txtCityBilling"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtStateProvinceBilling"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Live Market A/C
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtStateProvinceBilling"
                                    name="txtStateProvinceBilling"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtTelephoneBilling"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Product Category
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtTelephoneBilling"
                                    name="txtTelephoneBilling"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtFaxBilling"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Product Sub Category
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtFaxBilling"
                                    name="txtFaxBilling"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div className="mt-2">
                            <button
                              type="button"
                              id="step1Next"
                              className="btn btn-primary float-end"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                        <div className="tab-pane" id="step2">
                          <h4 className="card-title my-4 fs-15">
                            Company Document
                          </h4>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtFirstNameShipping"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  PAN Card
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtFirstNameShipping"
                                    name="txtFirstNameShipping"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtLastNameShipping"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  VAT/TIN No.
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtLastNameShipping"
                                    name="txtLastNameShipping"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtCompanyShipping"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  CST No.
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtCompanyShipping"
                                    name="txtCompanyShipping"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtEmailAddressShipping"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Service Tax No.
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtEmailAddressShipping"
                                    name="txtEmailAddressShipping"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtCityShipping"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Company UIN
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtCityShipping"
                                    name="txtCityShipping"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtStateProvinceShipping"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Declaration
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtStateProvinceShipping"
                                    name="txtStateProvinceShipping"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div>
                            <button
                              type="button"
                              id="step2Prev"
                              className="btn btn-secondary float-start mt-2"
                            >
                              Previous
                            </button>
                            <button
                              type="button"
                              id="step2Next"
                              className="btn btn-primary float-end mt-2"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                        <div className="tab-pane" id="step3">
                          <h4 className="card-title my-4 fs-15">
                            Bank Details
                          </h4>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtNameCard"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Name on Card
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtNameCard"
                                    name="txtNameCard"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="ddlCreditCardType"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Credit Card Type
                                </label>
                                <div className="col-lg-9">
                                  <select
                                    id="ddlCreditCardType"
                                    name="ddlCreditCardType"
                                    className="form-select"
                                  >
                                    <option value>--Please Select--</option>
                                    <option value="AE">American Express</option>
                                    <option value="VI">Visa</option>
                                    <option value="MC">MasterCard</option>
                                    <option value="DI">Discover</option>
                                  </select>
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtCreditCardNumber"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Credit Card Number
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtCreditCardNumber"
                                    name="txtCreditCardNumber"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtCardVerificationNumber"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Card Verification Number
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtCardVerificationNumber"
                                    name="txtCardVerificationNumber"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group row mb-2">
                                <label
                                  htmlFor="txtExpirationDate"
                                  className="col-lg-3 col-form-label text-end"
                                >
                                  Expiration Date
                                </label>
                                <div className="col-lg-9">
                                  <input
                                    id="txtExpirationDate"
                                    name="txtExpirationDate"
                                    type="text"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              {/*end form-group*/}
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                          <div>
                            <button
                              type="button"
                              id="step3Prev"
                              className="btn btn-secondary float-start mt-2"
                            >
                              Previous
                            </button>
                            <button
                              type="button"
                              id="step3Next"
                              className="btn btn-primary float-end mt-2"
                            >
                              Next
                            </button>
                          </div>
                        </div>
                        <div className="tab-pane" id="step4">
                          <h4 className="card-title my-4 fs-15">
                            Confirm Detail
                          </h4>
                          <div className="form-check my-4 text-center">
                            <img
                              src="assets/images/extra/task.png"
                              className="mb-3"
                              height={60}
                              alt
                            />
                            <h4 className="mb-1 fs-16">You are all set!</h4>
                            <p className="text-muted">
                              Now you can access your account anytime anywhere
                            </p>
                            <div>
                              <input
                                className="form-check-input float-none"
                                type="checkbox"
                                defaultValue
                                id="flexCheckDefault"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                              >
                                I agree with the Terms and Conditions.
                              </label>
                            </div>
                          </div>
                          <div>
                            <button
                              type="button"
                              id="step4Prev"
                              className="btn btn-secondary float-start mt-2"
                            >
                              Previous
                            </button>
                            <button
                              type="button"
                              id="step4Finish"
                              className="btn btn-danger float-end mt-2"
                            >
                              Finish
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/*end form*/}
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

export default Fromswizard;
