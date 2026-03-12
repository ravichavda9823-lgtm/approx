import React from "react";
import Footer from "../common/Footer";

function Uinvbar() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Navbar</h4>
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
                      <li className="breadcrumb-item active">Navbar</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Basic Navbar</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                          Navbar
                        </a>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent"
                        >
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Link
                              </a>
                            </li>
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown <i className="la la-angle-down" />
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link disabled"
                                href="#"
                                tabIndex={-1}
                                aria-disabled="true"
                              >
                                Disabled
                              </a>
                            </li>
                          </ul>
                          <form className="d-flex">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <button
                                className="btn btn-soft-secondary"
                                type="button"
                                id="button-addon2"
                              >
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/*end container*/}
                    </nav>{" "}
                    {/*end nav*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Navbar With Brand Image</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                          <img
                            src="assets/images/logo-sm.png"
                            height={26}
                            alt
                            className="me-1"
                          />
                        </a>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent2"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent2"
                        >
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Link
                              </a>
                            </li>
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown <i className="la la-angle-down" />
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link disabled"
                                href="#"
                                tabIndex={-1}
                                aria-disabled="true"
                              >
                                Disabled
                              </a>
                            </li>
                          </ul>
                          <form className="d-flex">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <button
                                className="btn btn-soft-secondary"
                                type="button"
                                id="button-addon2"
                              >
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/*end container*/}
                    </nav>{" "}
                    {/*end nav*/}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light mt-2">
                      <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                          <img
                            src="assets/images/logo-sm.png"
                            height={26}
                            alt
                            className="me-2"
                          />
                          <img
                            src="assets/images/logo-dark.png"
                            height={16}
                            alt
                          />
                        </a>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent3"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent3"
                        >
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Link
                              </a>
                            </li>
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown <i className="la la-angle-down" />
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link disabled"
                                href="#"
                                tabIndex={-1}
                                aria-disabled="true"
                              >
                                Disabled
                              </a>
                            </li>
                          </ul>
                          <form className="d-flex">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <button
                                className="btn btn-soft-secondary"
                                type="button"
                                id="button-addon2"
                              >
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/*end container*/}
                    </nav>{" "}
                    {/*end nav*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Theme Colors</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-2">
                      <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                          Navbar
                        </a>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent4"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent4"
                        >
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Link
                              </a>
                            </li>
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown <i className="la la-angle-down" />
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link disabled"
                                href="#"
                                tabIndex={-1}
                                aria-disabled="true"
                              >
                                Disabled
                              </a>
                            </li>
                          </ul>
                          <form className="d-flex">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control bg-white bg-opacity-25 border-white border-opacity-25"
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <button
                                className="btn btn-dark"
                                type="button"
                                id="button-addon2"
                              >
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/*end container*/}
                    </nav>{" "}
                    {/*end nav*/}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary mb-2">
                      <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                          Navbar
                        </a>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent5"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent5"
                        >
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Link
                              </a>
                            </li>
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown <i className="la la-angle-down" />
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link disabled"
                                href="#"
                                tabIndex={-1}
                                aria-disabled="true"
                              >
                                Disabled
                              </a>
                            </li>
                          </ul>
                          <form className="d-flex">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control bg-white bg-opacity-25 border-white border-opacity-25"
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <button
                                className="btn btn-dark"
                                type="button"
                                id="button-addon2"
                              >
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/*end container*/}
                    </nav>{" "}
                    {/*end nav*/}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                          Navbar
                        </a>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent6"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon" />
                        </button>
                        <div
                          className="collapse navbar-collapse"
                          id="navbarSupportedContent6"
                        >
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                              >
                                Home
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#">
                                Link
                              </a>
                            </li>
                            <li className="nav-item dropdown">
                              <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                Dropdown <i className="la la-angle-down" />
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                              >
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <hr className="dropdown-divider" />
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link disabled"
                                href="#"
                                tabIndex={-1}
                                aria-disabled="true"
                              >
                                Disabled
                              </a>
                            </li>
                          </ul>
                          <form className="d-flex">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control bg-white bg-opacity-25 border-white border-opacity-25"
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                              />
                              <button
                                className="btn btn-secondary"
                                type="button"
                                id="button-addon2"
                              >
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/*end container*/}
                    </nav>{" "}
                    {/*end nav*/}
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

export default Uinvbar;
