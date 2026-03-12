import React from "react";
import Footer from "../common/Footer";

function AdvanceFile() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Files</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Advanced UI</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Files</li>
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
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="text-muted fs-16 dropdown-toggle p-1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          View Detail
                        </a>
                        <a className="dropdown-item" href="#">
                          Clear All
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                    <img
                      src="assets/images/logos/lang-logo/gdrive.png"
                      className="me-2 align-self-center thumb-xl"
                      alt="..."
                    />
                    <h5 className="fw-semibold mt-3 fs-14">Google Drive</h5>
                    <div className="d-flex justify-content-between my-2">
                      <p className="text-muted mb-0 fs-13 fw-semibold">
                        <span className="text-dark">34 </span>Files
                      </p>
                      <p className="text-muted mb-0 fs-13 fw-semibold">
                        <span className="text-dark">500 </span>GB
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 text-truncate">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress bg-secondary-subtle w-100"
                            style={{ height: 5 }}
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-secondary"
                              style={{ width: "38%" }}
                            />
                          </div>
                          <small className="flex-shrink-1 ms-1">38%</small>
                        </div>
                      </div>
                      {/*end media body*/}
                    </div>
                    {/*end media*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="text-muted fs-16 dropdown-toggle p-1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          View Detail
                        </a>
                        <a className="dropdown-item" href="#">
                          Clear All
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                    <img
                      src="assets/images/logos/lang-logo/dropbox.png"
                      className="me-2 align-self-center thumb-xl"
                      alt="..."
                    />
                    <h5 className="fw-semibold mt-3 fs-14">Dropbox</h5>
                    <div className="d-flex justify-content-between my-2">
                      <p className="text-muted mb-0 fs-13 fw-semibold">
                        <span className="text-dark">68 </span>Files
                      </p>
                      <p className="text-muted mb-0 fs-13 fw-semibold">
                        <span className="text-dark">500 </span>GB
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 text-truncate">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress bg-secondary-subtle w-100"
                            style={{ height: 5 }}
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-secondary"
                              style={{ width: "15%" }}
                            />
                          </div>
                          <small className="flex-shrink-1 ms-1">15%</small>
                        </div>
                      </div>
                      {/*end media body*/}
                    </div>
                    {/*end media*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="text-muted fs-16 dropdown-toggle p-1 "
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          View Detail
                        </a>
                        <a className="dropdown-item" href="#">
                          Clear All
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                    <img
                      src="assets/images/logos/lang-logo/onedrive.png"
                      className="me-2 align-self-center thumb-xl"
                      alt="..."
                    />
                    <h5 className="fw-semibold mt-3 fs-14">Onedrive</h5>
                    <div className="d-flex justify-content-between my-2">
                      <p className="text-muted mb-0 fs-13 fw-semibold">
                        <span className="text-dark">192 </span>Files
                      </p>
                      <p className="text-muted mb-0 fs-13 fw-semibold">
                        <span className="text-dark">500 </span>GB
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 text-truncate">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress bg-secondary-subtle w-100"
                            style={{ height: 5 }}
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-secondary"
                              style={{ width: "48%" }}
                            />
                          </div>
                          <small className="flex-shrink-1 ms-1">48%</small>
                        </div>
                      </div>
                      {/*end media body*/}
                    </div>
                    {/*end media*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="text-muted fs-16 dropdown-toggle p-1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-ellipsis-vertical" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          View Detail
                        </a>
                        <a className="dropdown-item" href="#">
                          Clear All
                        </a>
                        <a className="dropdown-item" href="#">
                          Delete
                        </a>
                      </div>
                    </div>
                    <img
                      src="assets/images/logos/lang-logo/server.png"
                      className="me-2 align-self-center thumb-xl"
                      alt="..."
                    />
                    <h5 className="fw-semibold mt-3 fs-14">Server</h5>
                    <div className="d-flex justify-content-between my-2">
                      <p className="text-muted mb-0 fs-13 fw-semibold">
                        <span className="text-dark">81 </span>Files
                      </p>
                      <p className="text-muted mb-0 fs-13 fw-semibold">
                        <span className="text-dark">500 </span>GB
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 text-truncate">
                        <div className="d-flex align-items-center">
                          <div
                            className="progress bg-secondary-subtle w-100"
                            style={{ height: 5 }}
                            role="progressbar"
                            aria-label="Success example"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar bg-secondary"
                              style={{ width: "76%" }}
                            />
                          </div>
                          <small className="flex-shrink-1 ms-1">76%</small>
                        </div>
                      </div>
                      {/*end media body*/}
                    </div>
                    {/*end media*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="clearfix">
                  <div className="btn-group float-end ms-2">
                    <button
                      type="button"
                      className="btn btn-secondary me-0 overflow-hidden"
                    >
                      Upload File
                      <input
                        type="file"
                        name="file"
                        className="overflow-hidden position-absolute top-0 start-0 opacity-0"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="las la-angle-down" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      <a className="dropdown-item" href="#">
                        <i className="las la-file-upload fs-16 me-1 align-text-bottom" />{" "}
                        Upload File
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="las la-cloud-upload-alt fs-16 me-1 align-text-bottom" />
                        Upload Folder
                      </a>
                    </div>
                  </div>
                  <ul className="nav nav-tabs my-4" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link fw-semibold active py-2"
                        data-bs-toggle="tab"
                        href="#documents"
                        role="tab"
                        aria-selected="true"
                      >
                        <i className="fa-regular fa-folder-open me-1" />{" "}
                        Documents{" "}
                        <span className="badge rounded text-blue bg-blue-subtle ms-1">
                          32
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link fw-semibold py-2"
                        data-bs-toggle="tab"
                        href="#images"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="fa-regular fa-image me-1" /> Images{" "}
                        <span className="badge rounded text-blue bg-blue-subtle ms-1">
                          85
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link fw-semibold py-2"
                        data-bs-toggle="tab"
                        href="#audio"
                        role="tab"
                        aria-selected="false"
                      >
                        <i className="fa-solid fa-headphones me-1" /> Audio{" "}
                        <span className="badge rounded text-blue bg-blue-subtle ms-1">
                          21
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Files</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="text-body text-decoration-underline"
                          >
                            View All
                          </a>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="documents"
                        role="tabpanel"
                      >
                        <div className="table-responsive browser_users">
                          <table className="table mb-0">
                            <thead className="table-light">
                              <tr>
                                <th className="border-top-0">Name</th>
                                <th className="border-top-0 text-end">
                                  Last Modified
                                </th>
                                <th className="border-top-0 text-end">Size</th>
                                <th className="border-top-0 text-end">
                                  Members
                                </th>
                                <th className="border-top-0 text-end">
                                  Action
                                </th>
                              </tr>
                              {/*end tr*/}
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-blue-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-file-pdf fs-18 align-self-center mb-0 text-blue" />
                                  </div>
                                  <a href="#" className="text-body">
                                    payment.pdf
                                  </a>
                                </td>
                                <td className="text-end">18 Jul 2024</td>
                                <td className="text-end"> 2.3 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-2.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-5.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-3.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-blue-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-file-pdf fs-18 align-self-center mb-0 text-blue" />
                                  </div>
                                  <a href="#" className="text-body">
                                    statement.pdf
                                  </a>
                                </td>
                                <td className="text-end">08 Dec 2024</td>
                                <td className="text-end"> 3.7 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-3.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-10.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-blue-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-file-pdf fs-18 align-self-center mb-0 text-blue" />
                                  </div>
                                  <a href="#" className="text-body">
                                    idcard.pdf
                                  </a>
                                </td>
                                <td className="text-end">30 Nov 2024</td>
                                <td className="text-end"> 1.5 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-7.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-2.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-blue-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-file-pdf fs-18 align-self-center mb-0 text-blue" />
                                  </div>
                                  <a href="#" className="text-body">
                                    invoice.pdf
                                  </a>
                                </td>
                                <td className="text-end">09 Sep 2024</td>
                                <td className="text-end"> 3.2 MB</td>
                                <td className="text-end">-</td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-blue-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-file-pdf fs-18 align-self-center mb-0 text-blue" />
                                  </div>
                                  <a href="#" className="text-body">
                                    tutorial.pdf
                                  </a>
                                </td>
                                <td className="text-end">14 Aug 2024</td>
                                <td className="text-end"> 12.7 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-2.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-3.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-8.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-blue-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-file-pdf fs-18 align-self-center mb-0 text-blue" />
                                  </div>
                                  <a href="#" className="text-body">
                                    project.pdf
                                  </a>
                                </td>
                                <td className="text-end">12 Aug 2024</td>
                                <td className="text-end"> 5.2 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-1.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-4.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-6.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
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
                      </div>
                      <div className="tab-pane" id="images" role="tabpanel">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <thead className="table-light">
                              <tr>
                                <th className="border-top-0">Name</th>
                                <th className="border-top-0 text-end">
                                  Last Modified
                                </th>
                                <th className="border-top-0 text-end">Size</th>
                                <th className="border-top-0 text-end">
                                  Members
                                </th>
                                <th className="border-top-0 text-end">
                                  Action
                                </th>
                              </tr>
                              {/*end tr*/}
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-danger-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-image fs-18 align-self-center mb-0 text-danger" />
                                  </div>
                                  <a href="#" className="text-body">
                                    img52315.jpeg
                                  </a>
                                </td>
                                <td className="text-end">18 Jul 2024</td>
                                <td className="text-end"> 2.3 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-2.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-5.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-3.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-danger-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-image fs-18 align-self-center mb-0 text-danger" />
                                  </div>
                                  <a href="#" className="text-body">
                                    img63695.jpeg
                                  </a>
                                </td>
                                <td className="text-end">08 Dec 2024</td>
                                <td className="text-end"> 3.7 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-3.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-10.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-danger-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-image fs-18 align-self-center mb-0 text-danger" />
                                  </div>
                                  <a href="#" className="text-body">
                                    img00021.jpeg
                                  </a>
                                </td>
                                <td className="text-end">30 Nov 2024</td>
                                <td className="text-end"> 1.5 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-7.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-2.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-danger-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-image fs-18 align-self-center mb-0 text-danger" />
                                  </div>
                                  <a href="#" className="text-body">
                                    img36251.jpeg
                                  </a>
                                </td>
                                <td className="text-end">09 Sep 2024</td>
                                <td className="text-end"> 3.2 MB</td>
                                <td className="text-end">-</td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-danger-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-image fs-18 align-self-center mb-0 text-danger" />
                                  </div>
                                  <a href="#" className="text-body">
                                    img362511.jpeg
                                  </a>
                                </td>
                                <td className="text-end">14 Aug 2024</td>
                                <td className="text-end"> 12.7 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-2.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-3.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-8.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-danger-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-image fs-18 align-self-center mb-0 text-danger" />
                                  </div>
                                  <a href="#" className="text-body">
                                    img963852.jpeg
                                  </a>
                                </td>
                                <td className="text-end">12 Aug 2024</td>
                                <td className="text-end"> 5.2 MB</td>
                                <td className="text-end">
                                  <div className="img-group d-flex justify-content-end">
                                    <a
                                      className="user-avatar position-relative d-inline-block"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-1.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-4.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                    <a
                                      className="user-avatar position-relative d-inline-block ms-n2"
                                      href="#"
                                    >
                                      <img
                                        src="assets/images/users/avatar-6.jpg"
                                        alt="avatar"
                                        className="thumb-md shadow-sm rounded-circle"
                                      />
                                    </a>
                                  </div>
                                </td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
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
                      </div>
                      <div className="tab-pane" id="audio" role="tabpanel">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <thead className="table-light">
                              <tr>
                                <th className="border-top-0">Name</th>
                                <th className="border-top-0 text-end">
                                  Last Modified
                                </th>
                                <th className="border-top-0 text-end">Size</th>
                                <th className="border-top-0 text-end">
                                  Action
                                </th>
                              </tr>
                              {/*end tr*/}
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-secondary-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-microphone fs-18 align-self-center mb-0 text-secondary" />
                                  </div>
                                  <a href="#" className="text-body">
                                    audio52315..
                                  </a>
                                </td>
                                <td className="text-end">18 Jul 2024</td>
                                <td className="text-end"> 2.3 MB</td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-secondary-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-microphone fs-18 align-self-center mb-0 text-secondary" />
                                  </div>
                                  <a href="#" className="text-body">
                                    audio63695..
                                  </a>
                                </td>
                                <td className="text-end">08 Dec 2024</td>
                                <td className="text-end"> 3.7 MB</td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-secondary-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-microphone fs-18 align-self-center mb-0 text-secondary" />
                                  </div>
                                  <a href="#" className="text-body">
                                    audio00021..
                                  </a>
                                </td>
                                <td className="text-end">30 Nov 2024</td>
                                <td className="text-end"> 1.5 MB</td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-secondary-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-microphone fs-18 align-self-center mb-0 text-secondary" />
                                  </div>
                                  <a href="#" className="text-body">
                                    audio36251..
                                  </a>
                                </td>
                                <td className="text-end">09 Sep 2024</td>
                                <td className="text-end"> 3.2 MB</td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-secondary-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-microphone fs-18 align-self-center mb-0 text-secondary" />
                                  </div>
                                  <a href="#" className="text-body">
                                    audio362511..
                                  </a>
                                </td>
                                <td className="text-end">14 Aug 2024</td>
                                <td className="text-end"> 12.7 MB</td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-trash-alt text-secondary fs-18" />
                                  </a>
                                </td>
                              </tr>
                              {/*end tr*/}
                              <tr>
                                <td>
                                  <div className="d-inline-flex justify-content-center align-items-center thumb-md bg-secondary-subtle rounded mx-auto me-1">
                                    <i className="fa-solid fa-microphone fs-18 align-self-center mb-0 text-secondary" />
                                  </div>
                                  <a href="#" className="text-body">
                                    audio963852..
                                  </a>
                                </td>
                                <td className="text-end">12 Aug 2024</td>
                                <td className="text-end"> 5.2 MB</td>
                                <td className="text-end">
                                  <a href="#">
                                    <i className="las la-download text-secondary fs-18" />
                                  </a>
                                  <a href="#">
                                    <i className="las la-pen text-secondary fs-18" />
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

export default AdvanceFile;
