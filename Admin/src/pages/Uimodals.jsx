import React from "react";
import Footer from "../common/Footer";

function Uimodals() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Modals</h4>
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
                      <li className="breadcrumb-item active">Modals</li>
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
                        <h4 className="card-title">Optional Sizes</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped mb-0">
                        <thead>
                          <tr>
                            <th>Size</th>
                            <th>Class</th>
                            <th>Modal max-width</th>
                            <th>Modal Demo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Small</td>
                            <td>
                              <code>.modal-sm</code>
                            </td>
                            <td>
                              <code>300px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalSmall"
                              >
                                Launch demo modal
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Default</td>
                            <td className="text-muted">None</td>
                            <td>
                              <code>500px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalDefault"
                              >
                                Launch demo modal
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Large</td>
                            <td>
                              <code>.modal-lg</code>
                            </td>
                            <td>
                              <code>800px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalLarge"
                              >
                                Launch demo modal
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Extra large</td>
                            <td>
                              <code>.modal-xl</code>
                            </td>
                            <td>
                              <code>1140px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#bd-example-modal-xl"
                              >
                                Launch demo modal
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Default (Center Modal)</td>
                            <td className="text-muted">
                              <code>.modal-dialog-centered</code>
                            </td>
                            <td>
                              <code>500px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalCenter"
                              >
                                Launch demo modal
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>Default (Scroll Modal)</td>
                            <td className="text-muted">
                              <code>.modal-dialog-scrollable</code>
                            </td>
                            <td>
                              <code>500px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalScrollable"
                              >
                                Launch demo modal
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Modal */}
                    <div
                      className="modal fade bd-example-modal-sm"
                      id="exampleModalSmall"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="mySmallModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title m-0"
                              id="mySmallModalLabel"
                            >
                              Small Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="text-center py-3">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt
                              className="thumb-lg rounded-circle d-block mx-auto mb-1"
                            />
                            <h5 className="mb-1">Good Morning!</h5>
                            <p className="mb-0 text-muted">
                              Hi, Aaron Gish ! Congratulations.
                            </p>
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade"
                      id="exampleModalDefault"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalDefaultLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title m-0"
                              id="exampleModalDefaultLabel"
                            >
                              Default Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-3 text-center align-self-center">
                                <img
                                  src="assets/images/extra/card/btc.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-9">
                                <h5>Crypto Market Services</h5>
                                <span className="badge bg-light text-dark">
                                  Disable Services
                                </span>
                                <small className="text-muted ms-2">
                                  07 Oct 2024
                                </small>
                                <ul className="mt-2 mb-0">
                                  <li>Lorem Ipsum is dummy text.</li>
                                  <li>It is a long established reader.</li>
                                  <li>
                                    Contrary to popular belief, Lorem simply.
                                  </li>
                                </ul>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade bd-example-modal-lg"
                      id="exampleModalLarge"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="myLargeModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title m-0"
                              id="myLargeModalLabel"
                            >
                              Large Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-4 text-center">
                                <img
                                  src="assets/images/extra/card/find.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-8 align-self-center">
                                <div className="error-content text-center">
                                  <h1 className="fw-bold display-5">404!</h1>
                                  <h4 className=" mb-3">
                                    Looks like you've got lost...
                                  </h4>
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                  >
                                    Back to Dashboard
                                  </button>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade bd-example-modal-xl"
                      id="bd-example-modal-xl"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="myExtraLargeModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title m-0"
                              id="myExtraLargeModalLabel"
                            >
                              Extra Large Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <h5 className="mt-0">
                              Overflowing text to show scroll behavior
                            </h5>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade"
                      id="exampleModalCenter"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title m-0"
                              id="exampleModalCenterTitle"
                            >
                              Center Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-3 text-center align-self-center">
                                <img
                                  src="assets/images/extra/card/btc.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-9">
                                <h5>Crypto Market Services</h5>
                                <span className="badge bg-light text-dark">
                                  Disable Services
                                </span>
                                <small className="text-muted ms-2">
                                  07 Oct 2024
                                </small>
                                <ul className="mt-2 mb-0">
                                  <li>Lorem Ipsum is dummy text.</li>
                                  <li>It is a long established reader.</li>
                                  <li>
                                    Contrary to popular belief, Lorem simply.
                                  </li>
                                </ul>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade"
                      id="exampleModalScrollable"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalScrollableTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-scrollable"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title m-0"
                              id="exampleModalScrollableTitle"
                            >
                              Center Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
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
                        <h4 className="card-title">Fullscreen Modal</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped mb-0">
                        <thead>
                          <tr>
                            <th>Class</th>
                            <th>Availability</th>
                            <th>Modal Demo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <code>.modal-fullscreen</code>
                            </td>
                            <td>Always</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalFullscreen"
                              >
                                Full screen
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <code>.modal-fullscreen-sm-down</code>
                            </td>
                            <td>
                              Below <code>576px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalFullscreenSm"
                              >
                                Full screen below sm
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <code>.modal-fullscreen-md-down</code>
                            </td>
                            <td>
                              Below <code>768px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalFullscreenMd"
                              >
                                Full screen below md
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <code>.modal-fullscreen-lg-down</code>
                            </td>
                            <td>
                              Below <code>992px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalFullscreenLg"
                              >
                                Full screen below lg
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <code>.modal-fullscreen-xl-down</code>
                            </td>
                            <td>
                              Below <code>1200px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalFullscreenLg"
                              >
                                Full screen below lg
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <code>.modal-fullscreen-xxl-down</code>
                            </td>
                            <td>
                              Below <code>1400px</code>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModalFullscreenXxl"
                              >
                                Full screen below xxl
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalFullscreen"
                      tabIndex={-1}
                      aria-labelledby="exampleModalFullscreenLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title"
                              id="exampleModalFullscreenLabel"
                            >
                              Full screen modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalFullscreenSm"
                      tabIndex={-1}
                      aria-labelledby="exampleModalFullscreenSmLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-fullscreen-sm-down">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title"
                              id="exampleModalFullscreenSmLabel"
                            >
                              Full screen below sm
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <p className="mb-0">
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalFullscreenMd"
                      tabIndex={-1}
                      aria-labelledby="exampleModalFullscreenMdLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-fullscreen-md-down">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title"
                              id="exampleModalFullscreenMdLabel"
                            >
                              Full screen below md
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <p className="mb-0">
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalFullscreenLg"
                      tabIndex={-1}
                      aria-labelledby="exampleModalFullscreenLgLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-fullscreen-lg-down">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title"
                              id="exampleModalFullscreenLgLabel"
                            >
                              Full screen below lg
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <p className="mb-0">
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalFullscreenXl"
                      tabIndex={-1}
                      aria-labelledby="exampleModalFullscreenXlLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-fullscreen-xl-down">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title"
                              id="exampleModalFullscreenXlLabel"
                            >
                              Full screen below xl
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <p className="mb-0">
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalFullscreenXxl"
                      tabIndex={-1}
                      aria-labelledby="exampleModalFullscreenXxlLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-fullscreen-xxl-down">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6
                              className="modal-title"
                              id="exampleModalFullscreenXxlLabel"
                            >
                              Full screen below xxl
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <p className="mb-0">
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
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
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Theme Color Modal</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="button-items">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalPrimary"
                      >
                        Primary
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalSecondary"
                      >
                        Secondary
                      </button>
                      <button
                        type="button"
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalSuccess"
                      >
                        Success
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalWarning"
                      >
                        Warning
                      </button>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalInfo"
                      >
                        Info
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalDanger"
                      >
                        Danger
                      </button>
                      <button
                        type="button"
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalDark"
                      >
                        Dark
                      </button>
                    </div>
                    <div
                      className="modal fade"
                      id="exampleModalPrimary"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalPrimary1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header bg-primary">
                            <h6
                              className="modal-title m-0 text-white"
                              id="exampleModalPrimary1"
                            >
                              Primary Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-3 text-center align-self-center">
                                <img
                                  src="assets/images/extra/card/btc.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-9">
                                <h5>Crypto Market Services</h5>
                                <span className="badge bg-light text-dark">
                                  Disable Services
                                </span>
                                <small className="text-muted ms-2">
                                  07 Oct 2024
                                </small>
                                <ul className="mt-2 mb-0">
                                  <li>Lorem Ipsum is dummy text.</li>
                                  <li>It is a long established reader.</li>
                                  <li>
                                    Contrary to popular belief, Lorem simply.
                                  </li>
                                </ul>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade"
                      id="exampleModalSecondary"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalSecondary1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header bg-secondary">
                            <h6
                              className="modal-title m-0 text-white"
                              id="exampleModalSecondary1"
                            >
                              Secondary Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-3 text-center align-self-center">
                                <img
                                  src="assets/images/extra/card/btc.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-9">
                                <h5>Crypto Market Services</h5>
                                <span className="badge bg-light text-dark">
                                  Disable Services
                                </span>
                                <small className="text-muted ms-2">
                                  07 Oct 2024
                                </small>
                                <ul className="mt-2 mb-0">
                                  <li>Lorem Ipsum is dummy text.</li>
                                  <li>It is a long established reader.</li>
                                  <li>
                                    Contrary to popular belief, Lorem simply.
                                  </li>
                                </ul>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade"
                      id="exampleModalSuccess"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalSuccess1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header bg-success">
                            <h6
                              className="modal-title m-0 text-white"
                              id="exampleModalSuccess1"
                            >
                              Success Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-3 text-center align-self-center">
                                <img
                                  src="assets/images/extra/card/btc.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-9">
                                <h5>Crypto Market Services</h5>
                                <span className="badge bg-light text-dark">
                                  Disable Services
                                </span>
                                <small className="text-muted ms-2">
                                  07 Oct 2024
                                </small>
                                <ul className="mt-2 mb-0">
                                  <li>Lorem Ipsum is dummy text.</li>
                                  <li>It is a long established reader.</li>
                                  <li>
                                    Contrary to popular belief, Lorem simply.
                                  </li>
                                </ul>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-success btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade"
                      id="exampleModalWarning"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalWarning1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header bg-warning">
                            <h6
                              className="modal-title m-0 text-white"
                              id="exampleModalWarning1"
                            >
                              Warning Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-3 text-center align-self-center">
                                <img
                                  src="assets/images/extra/card/btc.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-9">
                                <h5>Crypto Market Services</h5>
                                <span className="badge bg-light text-dark">
                                  Disable Services
                                </span>
                                <small className="text-muted ms-2">
                                  07 Oct 2024
                                </small>
                                <ul className="mt-2 mb-0">
                                  <li>Lorem Ipsum is dummy text.</li>
                                  <li>It is a long established reader.</li>
                                  <li>
                                    Contrary to popular belief, Lorem simply.
                                  </li>
                                </ul>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade"
                      id="exampleModalInfo"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalInfo1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header bg-info">
                            <h6
                              className="modal-title m-0 text-white"
                              id="exampleModalInfo1"
                            >
                              Info Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-3 text-center align-self-center">
                                <img
                                  src="assets/images/extra/card/btc.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-9">
                                <h5>Crypto Market Services</h5>
                                <span className="badge bg-light text-dark">
                                  Disable Services
                                </span>
                                <small className="text-muted ms-2">
                                  07 Oct 2024
                                </small>
                                <ul className="mt-2 mb-0">
                                  <li>Lorem Ipsum is dummy text.</li>
                                  <li>It is a long established reader.</li>
                                  <li>
                                    Contrary to popular belief, Lorem simply.
                                  </li>
                                </ul>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-info btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade"
                      id="exampleModalDanger"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalDanger1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header bg-danger">
                            <h6
                              className="modal-title m-0 text-white"
                              id="exampleModalDanger1"
                            >
                              Danger Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-3 text-center align-self-center">
                                <img
                                  src="assets/images/extra/card/btc.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-9">
                                <h5>Crypto Market Services</h5>
                                <span className="badge bg-light text-dark">
                                  Disable Services
                                </span>
                                <small className="text-muted ms-2">
                                  07 Oct 2024
                                </small>
                                <ul className="mt-2 mb-0">
                                  <li>Lorem Ipsum is dummy text.</li>
                                  <li>It is a long established reader.</li>
                                  <li>
                                    Contrary to popular belief, Lorem simply.
                                  </li>
                                </ul>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
                    <div
                      className="modal fade"
                      id="exampleModalDark"
                      tabIndex={-1}
                      role="dialog"
                      aria-labelledby="exampleModalDark1"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header bg-dark">
                            <h6
                              className="modal-title m-0 text-white"
                              id="exampleModalDark1"
                            >
                              Drak Modal
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          {/*end modal-header*/}
                          <div className="modal-body">
                            <div className="row">
                              <div className="col-lg-3 text-center align-self-center">
                                <img
                                  src="assets/images/extra/card/btc.png"
                                  alt
                                  className="img-fluid"
                                />
                              </div>
                              {/*end col*/}
                              <div className="col-lg-9">
                                <h5>Crypto Market Services</h5>
                                <span className="badge bg-light text-dark">
                                  Disable Services
                                </span>
                                <small className="text-muted ms-2">
                                  07 Oct 2024
                                </small>
                                <ul className="mt-2 mb-0">
                                  <li>Lorem Ipsum is dummy text.</li>
                                  <li>It is a long established reader.</li>
                                  <li>
                                    Contrary to popular belief, Lorem simply.
                                  </li>
                                </ul>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end modal-body*/}
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-dark btn-sm"
                            >
                              Save changes
                            </button>
                          </div>
                          {/*end modal-footer*/}
                        </div>
                        {/*end modal-content*/}
                      </div>
                      {/*end modal-dialog*/}
                    </div>
                    {/*end modal*/}
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

export default Uimodals;
