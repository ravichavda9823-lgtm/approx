import React from "react";
import Footer from "../common/Footer";

function Users() {
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
                    <h4 className="page-title">Users</h4>
                    <div className>
                      <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                          <a href="#">Approx</a>
                        </li>
                        {/*end nav-item*/}
                        <li className="breadcrumb-item active">Users</li>
                      </ol>
                    </div>
                  </div>
                  {/*end page-title-box*/}
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col">
                          <h4 className="card-title">Users Details</h4>
                        </div>
                        {/*end col*/}
                        <div className="col-auto">
                          <button
                            className="btn bg-primary text-white"
                            data-bs-toggle="modal"
                            data-bs-target="#addUser"
                          >
                            <i className="fas fa-plus me-1" /> Add User
                          </button>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    {/*end card-header*/}
                    <div className="card-body pt-0">
                      <div className="table-responsive">
                        <table className="table mb-0" id="datatable_1">
                          <thead className="table-light">
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Mobile No</th>
                              <th>Registered On</th>
                              <th>Status</th>
                              <th className="text-end">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-1.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Unity Pugh</h6>
                                    <p className="fs-12 text-muted mb-0">USA</p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  dummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>22 August 2024</td>
                              <td>
                                <span className="badge rounded text-success bg-success-subtle">
                                  Active
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-1.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Scott Holland</h6>
                                    <p className="fs-12 text-muted mb-0">USA</p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  extradummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>20 August 2024</td>
                              <td>
                                <span className="badge rounded text-success bg-success-subtle">
                                  Active
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-2.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Karen Savage</h6>
                                    <p className="fs-12 text-muted mb-0">
                                      Canada
                                    </p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  dummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>15 August 2024</td>
                              <td>
                                <span className="badge rounded text-success bg-success-subtle">
                                  Active
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-3.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Steven Sharp</h6>
                                    <p className="fs-12 text-muted mb-0">
                                      France
                                    </p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  extradummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>08 August 2024</td>
                              <td>
                                <span className="badge rounded text-secondary bg-secondary-subtle">
                                  Inactive
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-4.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Teresa Himes</h6>
                                    <p className="fs-12 text-muted mb-0">
                                      India
                                    </p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  extradummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>02 August 2024</td>
                              <td>
                                <span className="badge rounded text-success bg-success-subtle">
                                  Active
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-5.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Ralph Denton</h6>
                                    <p className="fs-12 text-muted mb-0">UK</p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  dummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>28 July 2024</td>
                              <td>
                                <span className="badge rounded text-secondary bg-secondary-subtle">
                                  Inactive
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-1.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Unity Pugh</h6>
                                    <p className="fs-12 text-muted mb-0">
                                      Germany
                                    </p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  extradummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>19 July 2024</td>
                              <td>
                                <span className="badge rounded text-success bg-success-subtle">
                                  Active
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-1.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Scott Holland</h6>
                                    <p className="fs-12 text-muted mb-0">USA</p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  dummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>14 July 2024</td>
                              <td>
                                <span className="badge rounded text-success bg-success-subtle">
                                  Active
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-2.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Karen Savage</h6>
                                    <p className="fs-12 text-muted mb-0">USA</p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  extradummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>10 July 2024</td>
                              <td>
                                <span className="badge rounded text-success bg-success-subtle">
                                  Active
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-3.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Steven Sharp</h6>
                                    <p className="fs-12 text-muted mb-0">
                                      Russia
                                    </p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  dummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>21 June 2024</td>
                              <td>
                                <span className="badge rounded text-secondary bg-secondary-subtle">
                                  Inactive
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-4.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Teresa Himes</h6>
                                    <p className="fs-12 text-muted mb-0">USA</p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  extradummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>12 June 2024</td>
                              <td>
                                <span className="badge rounded text-success bg-success-subtle">
                                  Active
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-5.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Ralph Denton</h6>
                                    <p className="fs-12 text-muted mb-0">
                                      ShriSri Lanka
                                    </p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  dummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>17 May 2024</td>
                              <td>
                                <span className="badge rounded text-secondary bg-secondary-subtle">
                                  Inactive
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td className="d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-2.jpg"
                                    className="me-2 thumb-md align-self-center rounded"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 text-truncate">
                                    <h6 className="m-0">Karen Savage</h6>
                                    <p className="fs-12 text-muted mb-0">USA</p>
                                  </div>
                                  {/*end media body*/}
                                </div>
                              </td>
                              <td>
                                <a
                                  href="#"
                                  className="text-body text-decoration-underline"
                                >
                                  extradummy@gmail.com
                                </a>
                              </td>
                              <td>+1 234 567 890</td>
                              <td>07 May 2024</td>
                              <td>
                                <span className="badge rounded text-success bg-success-subtle">
                                  Active
                                </span>
                              </td>
                              <td className="text-end">
                                <a href="#">
                                  <i className="las la-pen text-secondary fs-18" />
                                </a>
                                <a href="#">
                                  <i className="las la-trash-alt text-secondary fs-18" />
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* end col */}
              </div>{" "}
              {/* end row */}
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
          id="addUser"
          tabIndex={-1}
          aria-labelledby="addUserLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addUserLabel">
                  Add User Detail
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="form-group mb-2">
                  <div className="d-flex align-items-center">
                    <i className="fas fa-user text-muted thumb-xl rounded me-2 border-dashed" />
                    <div className="flex-grow-1 text-truncate">
                      <label className="btn btn-primary text-light">
                        Add Avatar <input type="file" hidden />
                      </label>
                    </div>
                    {/*end media body*/}
                  </div>
                </div>
                <div className=" mb-2">
                  <label htmlFor="fullName">Full Name</label>
                  <div className="input-group">
                    <span className="input-group-text" id="fullName">
                      <i className="far fa-user" />
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
                  <label htmlFor="email">Email</label>
                  <div className="input-group">
                    <span className="input-group-text" id="email">
                      <i className="far fa-envelope" />
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email address"
                      aria-label="email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-2">
                      <label htmlFor="ragisterDate">Register Date</label>
                      <div className="input-group">
                        <span className="input-group-text" id="ragisterDate">
                          <i className="far fa-calendar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="00/2024"
                          aria-label="ragisterDate"
                        />
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="mb-2">
                      <label htmlFor="mobilleNo">Mobille No</label>
                      <div className="input-group">
                        <span className="input-group-text" id="mobilleNo">
                          <i className="fas fa-phone" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+1 234 567 890"
                          aria-label="mobilleNo"
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
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
