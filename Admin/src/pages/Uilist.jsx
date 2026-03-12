import React from "react";
import Footer from "../common/Footer";

function Uilist() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Lists</h4>
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
                      <li className="breadcrumb-item active">Lists</li>
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
                        <h4 className="card-title">Badge Examples</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="la la-check text-success me-2" />
                        Cras justo odio
                      </li>
                      <li className="list-group-item">
                        <i className="la la-check text-success me-2" />
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">
                        <i className="la la-check text-success me-2" />
                        Morbi leo risus
                      </li>
                      <li className="list-group-item disabled">
                        <i className="la la-check text-success me-2" />
                        Disabled
                      </li>
                    </ul>
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
                        <h4 className="card-title">Active Items</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="la la-arrow-right text-secondary me-2" />
                        Cras justo odio
                      </li>
                      <li className="list-group-item active">
                        <i className="la la-arrow-right me-2" />
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">
                        <i className="la la-arrow-right text-secondary me-2" />
                        Morbi leo risus
                      </li>
                      <li className="list-group-item">
                        <i className="la la-arrow-right text-secondary me-2" />
                        Porta ac consectetur ac
                      </li>
                    </ul>
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
                        <h4 className="card-title">Links And Buttons</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="list-group">
                      <button
                        type="button"
                        className="list-group-item list-group-item-action active"
                      >
                        <i className="la la-hand-o-right me-2" />
                        Button Active
                      </button>
                      <button
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                        <i className="la la-hand-o-right text-primary me-2" />
                        Button
                      </button>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action"
                      >
                        <i className="la la-hand-o-right text-primary me-2" />
                        Link
                      </a>
                      <a
                        href="#"
                        className="list-group-item list-group-item-action disabled"
                        tabIndex={-1}
                        aria-disabled="true"
                      >
                        <i className="la la-hand-o-right text-primary me-2" />
                        Link disabled
                      </a>
                    </div>
                    {/*end list-group*/}
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
                        <h4 className="card-title">Flush</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <i className="la la-angle-double-right text-info me-2" />
                        Cras justo odio
                      </li>
                      <li className="list-group-item">
                        <i className="la la-angle-double-right text-info me-2" />
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">
                        <i className="la la-angle-double-right text-info me-2" />
                        Morbi leo risus
                      </li>
                      <li className="list-group-item">
                        <i className="la la-angle-double-right text-info me-2" />
                        Vestibulum at eros
                      </li>
                    </ul>
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
                        <h4 className="card-title">Contextual Classes</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="list-group">
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item list-group-item-primary">
                        A simple primary list group item
                      </li>
                      <li className="list-group-item list-group-item-secondary">
                        A simple secondary list group item
                      </li>
                      <li className="list-group-item list-group-item-success">
                        A simple success list group item
                      </li>
                      <li className="list-group-item list-group-item-danger">
                        A simple danger list group item
                      </li>
                      <li className="list-group-item list-group-item-warning">
                        A simple warning list group item
                      </li>
                      <li className="list-group-item list-group-item-info">
                        A simple info list group item
                      </li>
                      <li className="list-group-item list-group-item-light">
                        A simple light list group item
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        A simple dark list group item
                      </li>
                    </ul>
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
                        <h4 className="card-title">Horizontal</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="list-group list-group-horizontal-md">
                      <li className="list-group-item">
                        <i className="la la-angle-double-right text-info me-2" />
                        Cras justo
                      </li>
                      <li className="list-group-item">
                        <i className="la la-angle-double-right text-info me-2" />
                        Dapibus
                      </li>
                      <li className="list-group-item">
                        <i className="la la-angle-double-right text-info me-2" />
                        Morbi leo
                      </li>
                    </ul>
                    {/*end list-group*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">With Badges</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <i className="la la-check text-muted font-16 me-2" />
                          Cras justo odio
                        </div>
                        <span className="badge border border-primary text-primary badge-pill">
                          4
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <i className="la la-bell text-muted font-18 me-2" />
                          New Notifications
                        </div>
                        <span className="badge border border-secondary text-secondary badge-pill">
                          New
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <i className="la la-money text-muted font-16 me-2" />
                          Payment Successfull
                        </div>
                        <span className="badge border border-success text-success badge-pill">
                          Successfully
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <i className="la la-warning text-muted font-16 me-2" />
                          Payment pending
                        </div>
                        <span className="badge border border-warning text-warning">
                          Pending
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <i className="la la-comments text-muted font-16 me-2" />
                          Good Morning!
                        </div>
                        <span className="badge border border-info text-info badge-pill">
                          1
                        </span>
                      </li>
                    </ul>
                    {/*end list-group*/}
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

export default Uilist;
