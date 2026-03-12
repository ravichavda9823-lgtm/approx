import React from "react";
import Footer from "../common/Footer";

function Formsadvanced() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Advanced</h4>
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
                      <li className="breadcrumb-item active">Advanced</li>
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
                        <h4 className="card-title">Selectr Componentse</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-md-4">
                        <label className="mb-2">Default Select</label>
                        <select id="default">
                          <option value="value-1">Value 1</option>
                          <option value="value-2">Value 2</option>
                          <option value="value-3">Value 3</option>
                        </select>
                      </div>
                      {/* end col */}
                      <div className="col-md-4">
                        <label className="mb-2">Multi Select</label>
                        <select id="multiSelect">
                          <option value="value-1">Value 1</option>
                          <option value="value-2">Value 2</option>
                          <option value="value-3">Value 3</option>
                        </select>
                      </div>{" "}
                      {/* end col */}
                      <div className="col-md-4">
                        <label className="mb-2">Taggable Select</label>
                        <select id="taggableSelect">
                          <option value="value-1">Value 1</option>
                          <option value="value-2">Value 2</option>
                          <option value="value-3">Value 3</option>
                        </select>
                      </div>{" "}
                      {/* end col */}
                    </div>
                    {/* end row */}
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
                        <h4 className="card-title">Huebee Color</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-md-4">
                        <input
                          className="form-control color-input"
                          defaultValue="#22c55e"
                        />
                      </div>
                      {/* end col */}
                      <div className="col-md-4">
                        <input
                          className="form-control "
                          defaultValue="#fac146"
                          data-huebee
                        />
                      </div>{" "}
                      {/* end col */}
                      <div className="col-md-4">
                        <input
                          className="form-control "
                          defaultValue="#f7f8f9"
                          data-huebee='{ "setBGColor": true, "saturations": 2 }'
                        />
                      </div>{" "}
                      {/* end col */}
                    </div>
                    {/* end row */}
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
                        <h4 className="card-title">Custom Touch Spin</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="input-group qty-icons w-50">
                      <button
                        className="btn btn-primary"
                        onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="form-control"
                        min={0}
                        name="quantity"
                        defaultValue={0}
                        style={{ pointerEvents: "none" }}
                      />
                      <button
                        className="btn btn-primary"
                        onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                      >
                        +
                      </button>
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
                        <h4 className="card-title">Vanilla JS Datepicker</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="mb-2">Default Datepicker</label>
                        <input
                          className="form-control mb-3"
                          type="text"
                          name="foo"
                        />
                        <label className="mb-2">Date Range Picker</label>
                        <div className="input-group" id="DateRange">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Start"
                            aria-label="StartDate"
                          />
                          <span className="input-group-text">to</span>
                          <input
                            type="text"
                            className="form-control rounded-end"
                            placeholder="End"
                            aria-label="EndDate"
                          />
                        </div>
                      </div>
                      {/* end col */}
                      <div className="col-md-6">
                        <label className="my-2">Inline Datepicker</label>
                        <div id="inline_calendar" />
                      </div>{" "}
                      {/* end col */}
                    </div>
                    {/* end row */}
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
                        <h4 className="card-title">Mask</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="mb-2">
                      <label className="mb-2">
                        RegExp (Russian postal code){" "}
                        <span className="desc ms-2 font-11 text-muted">
                          /^[1-6]\d{"{"}0,5{"}"}$/
                        </span>
                      </label>
                      <input
                        id="regexp-mask"
                        type="text"
                        defaultValue
                        className="form-control"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="mb-2">
                        Type here against mask{" "}
                        <span className="desc ms-2 font-11 text-muted">
                          +{"{"}7{"}"}(000)000-00-00
                        </span>
                      </label>
                      <input
                        id="start-phone-mask"
                        type="text"
                        defaultValue
                        className="form-control"
                      />
                      <div className="desc font-11 text-muted">
                        unmasked: <span id="start-phone-unmasked" />
                        <span
                          id="start-phone-complete"
                          className="example__complete"
                        />
                      </div>
                    </div>
                    <div className="mb-2">
                      <label className="mb-2">
                        Mask in overwrite and autofix modes
                      </label>
                      <input
                        id="date-overwrite-mask"
                        type="text"
                        defaultValue
                        className="form-control"
                      />
                    </div>
                    <div className="mb-2">
                      <label className="mb-2">Type to uppercase</label>
                      <input
                        id="uppercase-mask"
                        type="text"
                        defaultValue
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label className="mb-2">Date and time</label>
                      <input
                        id="moment-mask"
                        type="text"
                        defaultValue
                        className="form-control"
                      />
                      <div className="desc font-11 text-muted">
                        date: <span id="moment-value" />
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

export default Formsadvanced;
