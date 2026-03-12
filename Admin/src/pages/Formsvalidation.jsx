import React from "react";
import Footer from "../common/Footer";

function Formsvalidation() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Validation</h4>
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
                      <li className="breadcrumb-item active">Validation</li>
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
                        <h4 className="card-title">Bootstrap Custom Styles</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-md-4">
                        <label
                          htmlFor="validationCustom01"
                          className="form-label"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom01"
                          defaultValue="Mark"
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="validationCustom02"
                          className="form-label"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom02"
                          defaultValue="Otto"
                          required
                        />
                        <div className="valid-feedback">Looks good!</div>
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="validationCustomUsername"
                          className="form-label"
                        >
                          Username
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="validationCustomUsername"
                            aria-describedby="inputGroupPrepend"
                            required
                          />
                          <div className="invalid-feedback">
                            Please choose a username.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="validationCustom03"
                          className="form-label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom03"
                          required
                        />
                        <div className="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label
                          htmlFor="validationCustom04"
                          className="form-label"
                        >
                          State
                        </label>
                        <select
                          className="form-select"
                          id="validationCustom04"
                          required
                        >
                          <option selected disabled value>
                            Choose...
                          </option>
                          <option>...</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid state.
                        </div>
                      </div>
                      <div className="col-md-3">
                        <label
                          htmlFor="validationCustom05"
                          className="form-label"
                        >
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustom05"
                          required
                        />
                        <div className="invalid-feedback">
                          Please provide a valid zip.
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="invalidCheck"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="invalidCheck"
                          >
                            Agree to terms and conditions
                          </label>
                          <div className="invalid-feedback">
                            You must agree before submitting.
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary" type="submit">
                          Submit form
                        </button>
                      </div>
                    </form>
                    {/*end form*/}
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
                        <h4 className="card-title">Validation Tooltips</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-md-4 position-relative">
                        <label
                          htmlFor="validationTooltip01"
                          className="form-label"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationTooltip01"
                          defaultValue="Mark"
                          required
                        />
                        <div className="valid-tooltip">Looks good!</div>
                      </div>
                      <div className="col-md-4 position-relative">
                        <label
                          htmlFor="validationTooltip02"
                          className="form-label"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationTooltip02"
                          defaultValue="Otto"
                          required
                        />
                        <div className="valid-tooltip">Looks good!</div>
                      </div>
                      <div className="col-md-4 position-relative">
                        <label
                          htmlFor="validationTooltipUsername"
                          className="form-label"
                        >
                          Username
                        </label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="validationTooltipUsernamePrepend"
                          >
                            @
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="validationTooltipUsername"
                            aria-describedby="validationTooltipUsernamePrepend"
                            required
                          />
                          <div className="invalid-tooltip">
                            Please choose a unique and valid username.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 position-relative">
                        <label
                          htmlFor="validationTooltip03"
                          className="form-label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationTooltip03"
                          required
                        />
                        <div className="invalid-tooltip">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div className="col-md-3 position-relative">
                        <label
                          htmlFor="validationTooltip04"
                          className="form-label"
                        >
                          State
                        </label>
                        <select
                          className="form-select"
                          id="validationTooltip04"
                          required
                        >
                          <option selected disabled value>
                            Choose...
                          </option>
                          <option>...</option>
                        </select>
                        <div className="invalid-tooltip">
                          Please select a valid state.
                        </div>
                      </div>
                      <div className="col-md-3 position-relative">
                        <label
                          htmlFor="validationTooltip05"
                          className="form-label"
                        >
                          Zip
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationTooltip05"
                          required
                        />
                        <div className="invalid-tooltip">
                          Please provide a valid zip.
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary" type="submit">
                          Submit form
                        </button>
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
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Custom Validation Form</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form id="form-validation-2" className="form">
                      <div className="mb-2">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="username"
                          placeholder="Enter Username"
                        />
                        <small>Error Message</small>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="email"
                          placeholder="Enter email"
                        />
                        <small>Error Message</small>
                      </div>
                      <div className="mb-2">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          placeholder="Enter password"
                        />
                        <small>Error Message</small>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="password2" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          id="password2"
                          placeholder="Enter password again"
                        />
                        <small>Error Message</small>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit form
                      </button>
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

export default Formsvalidation;
