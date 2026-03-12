import React from "react";
import Footer from "../common/Footer";

function Contactlist() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Contacts</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Apps</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Contacts</li>
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
                        <h4 className="card-title">Contacts</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <form className="row g-2">
                          <div className="col-auto">
                            <a
                              className="btn bg-primary-subtle text-primary dropdown-toggle d-flex align-items-center arrow-none"
                              data-bs-toggle="dropdown"
                              href="#"
                              role="button"
                              aria-haspopup="false"
                              aria-expanded="false"
                              data-bs-auto-close="outside"
                            >
                              <i className="iconoir-filter-alt me-1" /> Filter
                            </a>
                            <div className="dropdown-menu dropdown-menu-start">
                              <div className="p-2">
                                <div className="form-check mb-2">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                    id="filter-all"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="filter-all"
                                  >
                                    All
                                  </label>
                                </div>
                                <div className="form-check mb-2">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                    id="filter-one"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="filter-one"
                                  >
                                    New
                                  </label>
                                </div>
                                <div className="form-check mb-2">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                    id="filter-two"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="filter-two"
                                  >
                                    Active
                                  </label>
                                </div>
                                <div className="form-check">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    defaultChecked
                                    id="filter-three"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="filter-three"
                                  >
                                    Inactive
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#addBoard"
                            >
                              <i className="fa-solid fa-plus me-1" /> Add
                              Contact
                            </button>
                          </div>
                          {/*end col*/}
                        </form>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table
                        className="table mb-0 checkbox-all"
                        id="datatable_1"
                      >
                        <thead className="table-light">
                          <tr>
                            <th style={{ width: 16 }}>
                              <div className="form-check mb-0 ms-n1">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="select-all"
                                  id="select-all"
                                />
                              </div>
                            </th>
                            <th className="ps-0">Customer</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Status</th>
                            <th>Source</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck1"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Andy Timmons
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                dummy@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+1) 123 456 789</td>
                            <td>
                              <span className="badge bg-secondary-subtle text-secondary">
                                Inactive
                              </span>
                            </td>
                            <td>Direct</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck2"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Jeff Beck
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                fake@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+2) 234 567 890</td>
                            <td>
                              <span className="badge bg-success-subtle text-success">
                                Active
                              </span>
                            </td>
                            <td>Direct</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck3"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Vince Nelson
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                exemple@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+3) 123 456 789</td>
                            <td>
                              <span className="badge bg-success-subtle text-success">
                                Active
                              </span>
                            </td>
                            <td>Social</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck4"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  David Gilmour
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                only@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+4) 123 456 789</td>
                            <td>
                              <span className="badge bg-secondary-subtle text-secondary">
                                Inactive
                              </span>
                            </td>
                            <td>Website</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck5"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-6.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Dianna Smiley
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                dummy@exemple.com
                              </a>{" "}
                            </td>
                            <td>(+5) 123 456 789</td>
                            <td>
                              <span className="badge bg-success-subtle text-success">
                                Active
                              </span>
                            </td>
                            <td>Social</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck6"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-7.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Adolfo Hess
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                dummy2dummay@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+6) 123 456 789</td>
                            <td>
                              <span className="badge bg-success-subtle text-success">
                                Active
                              </span>
                            </td>
                            <td>Direct</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck7"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-8.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  James Ahern
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                dummy10@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+7) 123 456 789</td>
                            <td>
                              <span className="badge bg-blue-subtle text-blue me-1">
                                New
                              </span>
                              <span className="badge bg-success-subtle text-success">
                                Active
                              </span>
                            </td>
                            <td>Website</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck8"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-9.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Simon Young
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                totaldummy@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+8) 123 456 789</td>
                            <td>
                              <span className="badge bg-secondary-subtle text-secondary">
                                Inactive
                              </span>
                            </td>
                            <td>Direct</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck9"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-10.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Robert Lewis
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                Exemple@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+9) 123 456 789</td>
                            <td>
                              <span className="badge bg-secondary-subtle text-secondary">
                                Inactive
                              </span>
                            </td>
                            <td>Social</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck10"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Erik Brim
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                onlyfake@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+10) 123 456 789</td>
                            <td>
                              <span className="badge bg-success-subtle text-success">
                                Active
                              </span>
                            </td>
                            <td>Direct</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck11"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Kevin Powers
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                exemple@exe.com
                              </a>{" "}
                            </td>
                            <td>(+11) 123 456 789</td>
                            <td>
                              <span className="badge bg-blue-subtle text-blue">
                                Repeat
                              </span>
                            </td>
                            <td>Website</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck12"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Wendy Keen
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                Exemple@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+12) 123 456 789</td>
                            <td>
                              <span className="badge bg-success-subtle text-success">
                                Active
                              </span>
                            </td>
                            <td>Direct</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-pen text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ width: 16 }}>
                              <div className="form-check">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="check"
                                  id="customCheck13"
                                />
                              </div>
                            </td>
                            <td className="ps-0">
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt
                                className="thumb-md d-inline rounded-circle me-1"
                              />
                              <p className="d-inline-block align-middle mb-0">
                                <span className="font-13 fw-medium">
                                  Wendy Keen
                                </span>
                              </p>
                            </td>
                            <td>
                              <a
                                href="#"
                                className="d-inline-block align-middle mb-0 text-body"
                              >
                                Exemple@dummy.com
                              </a>{" "}
                            </td>
                            <td>(+13) 123 456 789</td>
                            <td>
                              <span className="badge bg-success-subtle text-success">
                                Active
                              </span>
                            </td>
                            <td>Website</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-info-circle text-secondary fs-18" />
                              </a>
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
    </>
  );
}

export default Contactlist;
