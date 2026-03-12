import React from "react";
import Footer from "../common/Footer";

function Uibadges() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Badges</h4>
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
                      <li className="breadcrumb-item active">Badges</li>
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
                    <span className="badge bg-primary">Primary</span>
                    <span className="badge bg-secondary">Secondary</span>
                    <span className="badge bg-success">Success</span>
                    <span className="badge bg-danger">Danger</span>
                    <span className="badge bg-warning">Warning</span>
                    <span className="badge bg-info">Info</span>
                    <span className="badge bg-light text-dark">Light</span>
                    <span className="badge bg-dark">Dark</span>
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
                        <h4 className="card-title">Pill Badges</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <span className="badge rounded-pill bg-primary">
                      Primary
                    </span>
                    <span className="badge rounded-pill bg-secondary">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-success">
                      Success
                    </span>
                    <span className="badge rounded-pill bg-danger">Danger</span>
                    <span className="badge rounded-pill bg-warning">
                      Warning
                    </span>
                    <span className="badge rounded-pill bg-info">Info</span>
                    <span className="badge rounded-pill text-dark bg-light">
                      Light
                    </span>
                    <span className="badge rounded-pill bg-dark">Dark</span>
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
                        <h4 className="card-title">Links Badges</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <a href="#" className="badge bg-primary">
                      Primary
                    </a>
                    <a href="#" className="badge bg-secondary">
                      Secondary
                    </a>
                    <a href="#" className="badge bg-success">
                      Success
                    </a>
                    <a href="#" className="badge bg-danger">
                      Danger
                    </a>
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
                        <h4 className="card-title">Links Pill Badges</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <a href="#" className="badge rounded-pill bg-primary">
                      Primary
                    </a>
                    <a href="#" className="badge rounded-pill bg-secondary">
                      Secondary
                    </a>
                    <a href="#" className="badge rounded-pill bg-success">
                      Success
                    </a>
                    <a href="#" className="badge rounded-pill bg-danger">
                      Danger
                    </a>
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
                        <h4 className="card-title">Badges Subtle</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <span className="badge bg-primary-subtle text-primary">
                      Primary
                    </span>
                    <span className="badge bg-secondary-subtle text-secondary">
                      Secondary
                    </span>
                    <span className="badge bg-success-subtle text-success">
                      Success
                    </span>
                    <span className="badge bg-danger-subtle text-danger">
                      Danger
                    </span>
                    <span className="badge bg-warning-subtle text-warning">
                      Warning
                    </span>
                    <span className="badge bg-info-subtle text-info">Info</span>
                    <span className="badge bg-purple-subtle text-purple">
                      Purple
                    </span>
                    <span className="badge bg-dark-subtle text-dark">Dark</span>
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
                        <h4 className="card-title">Badges Pill Subtle</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <span className="badge rounded-pill bg-primary-subtle text-primary">
                      Primary
                    </span>
                    <span className="badge rounded-pill bg-secondary-subtle text-secondary">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-success-subtle text-success">
                      Success
                    </span>
                    <span className="badge rounded-pill bg-danger-subtle text-danger">
                      Danger
                    </span>
                    <span className="badge rounded-pill bg-warning-subtle text-warning">
                      Warning
                    </span>
                    <span className="badge rounded-pill bg-info-subtle text-info">
                      Info
                    </span>
                    <span className="badge rounded-pill bg-pink-subtle text-pink">
                      Pink
                    </span>
                    <span className="badge rounded-pill bg-dark-subtle text-dark">
                      Dark
                    </span>
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
                        <h4 className="card-title">Outline Badges</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <span className="badge bg-transparent border border-primary text-primary">
                      Primary
                    </span>
                    <span className="badge bg-transparent border border-secondary text-secondary">
                      Secondary
                    </span>
                    <span className="badge bg-transparent border border-success text-success">
                      Success
                    </span>
                    <span className="badge bg-transparent border border-danger text-danger">
                      Danger
                    </span>
                    <span className="badge bg-transparent border border-warning text-warning">
                      Warning
                    </span>
                    <span className="badge bg-transparent border border-info text-info">
                      Info
                    </span>
                    <span className="badge bg-transparent border border-purple text-purple">
                      Purple
                    </span>
                    <span className="badge bg-transparent border border-dark text-dark">
                      Dark
                    </span>
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
                        <h4 className="card-title">Outline Pill Badges</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <span className="badge rounded-pill bg-transparent border border-primary text-primary">
                      Primary
                    </span>
                    <span className="badge rounded-pill bg-transparent border border-secondary text-secondary">
                      Secondary
                    </span>
                    <span className="badge rounded-pill bg-transparent border border-success text-success">
                      Success
                    </span>
                    <span className="badge rounded-pill bg-transparent border border-danger text-danger">
                      Danger
                    </span>
                    <span className="badge rounded-pill bg-transparent border border-warning text-warning">
                      Warning
                    </span>
                    <span className="badge rounded-pill bg-transparent border border-info text-info">
                      Info
                    </span>
                    <span className="badge rounded-pill bg-transparent border border-purple text-purple">
                      Purple
                    </span>
                    <span className="badge rounded-pill bg-transparent border border-dark text-dark">
                      Dark
                    </span>
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
                        <h4 className="card-title">Buttons With Badge</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <button type="button" className="btn btn-primary btn-sm">
                      Notifications{" "}
                      <span className="badge bg-light text-dark">4</span>
                    </button>
                    <button type="button" className="btn btn-secondary btn-sm">
                      Notifications{" "}
                      <span className="badge bg-light text-dark">8</span>
                    </button>
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
                          Buttons With Positioned Badge
                        </h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <button
                      type="button"
                      className="btn btn-primary position-relative"
                    >
                      Notifications
                      <span className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle">
                        <small className="thumb-xs">12</small>
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary position-relative ms-2"
                    >
                      Notifications
                      <span className="position-absolute top-0 start-100 translate-middle bg-primary px-1 border border-light rounded">
                        <small className="fs-10">New</small>
                      </span>
                    </button>
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

export default Uibadges;
