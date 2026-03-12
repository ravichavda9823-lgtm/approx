import React from "react";
import Footer from "../common/Footer";

function Uigrids() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Grids</h4>
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
                      <li className="breadcrumb-item active">Grids</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Grids</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped table-centered">
                        <thead>
                          <tr>
                            <th scope="col" />
                            <th scope="col">
                              xs
                              <br />
                              <span className="fw-normal">&lt;576px</span>
                            </th>
                            <th scope="col">
                              sm
                              <br />
                              <span className="fw-normal">≥576px</span>
                            </th>
                            <th scope="col">
                              md
                              <br />
                              <span className="fw-normal">≥768px</span>
                            </th>
                            <th scope="col">
                              lg
                              <br />
                              <span className="fw-normal">≥992px</span>
                            </th>
                            <th scope="col">
                              xl
                              <br />
                              <span className="fw-normal">≥1200px</span>
                            </th>
                            <th scope="col">
                              xxl
                              <br />
                              <span className="fw-normal">≥1400px</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="text-nowrap" scope="row">
                              Container{" "}
                              <code className="fw-normal">max-width</code>
                            </th>
                            <td>None (auto)</td>
                            <td>540px</td>
                            <td>720px</td>
                            <td>960px</td>
                            <td>1140px</td>
                            <td>1320px</td>
                          </tr>
                          <tr>
                            <th className="text-nowrap" scope="row">
                              Class prefix
                            </th>
                            <td>
                              <code>.col-</code>
                            </td>
                            <td>
                              <code>.col-sm-</code>
                            </td>
                            <td>
                              <code>.col-md-</code>
                            </td>
                            <td>
                              <code>.col-lg-</code>
                            </td>
                            <td>
                              <code>.col-xl-</code>
                            </td>
                            <td>
                              <code>.col-xxl-</code>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-nowrap" scope="row">
                              # of columns
                            </th>
                            <td colSpan={6}>12</td>
                          </tr>
                          <tr>
                            <th className="text-nowrap" scope="row">
                              Gutter width
                            </th>
                            <td colSpan={6}>
                              1.5rem (.75rem on left and right)
                            </td>
                          </tr>
                          <tr>
                            <th className="text-nowrap" scope="row">
                              Custom gutters
                            </th>
                            <td colSpan={6}>
                              <a href="#">Yes</a>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-nowrap" scope="row">
                              Nestable
                            </th>
                            <td colSpan={6}>
                              <a href="#">Yes</a>
                            </td>
                          </tr>
                          <tr>
                            <th className="text-nowrap" scope="row">
                              Column ordering
                            </th>
                            <td colSpan={6}>
                              <a href="#">Yes</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Grid-Example</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row text-center">
                      <div className="col-sm-3">
                        <span className="border py-2 bg-light d-block mb-2 mb-lg-0">
                          .col-sm-3
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <span className="border py-2 bg-light d-block mb-2 mb-lg-0">
                          .col-sm-3
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <span className="border py-2 bg-light d-block mb-2 mb-lg-0">
                          .col-sm-3
                        </span>
                      </div>
                      <div className="col-sm-3">
                        <span className="border py-2 bg-light d-block">
                          .col-sm-3
                        </span>
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
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Grid-Example</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row text-center">
                      <div className="col-md-3">
                        <span className="border py-2 bg-light d-block mb-2 mb-lg-0">
                          .col-md-3
                        </span>
                      </div>
                      <div className="col-md-6">
                        <span className="border py-2 bg-light d-block mb-2 mb-lg-0">
                          .col-md-6
                        </span>
                      </div>
                      <div className="col-md-3">
                        <span className="border py-2 bg-light d-block">
                          .col-md-3
                        </span>
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
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Grid-Example</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row text-center">
                      <div className="col-lg-6">
                        <span className="border py-2 bg-light d-block mb-2 mb-lg-0">
                          .col-lg-6
                        </span>
                      </div>
                      <div className="col-lg-6">
                        <span className="border py-2 bg-light d-block">
                          .col-lg-6
                        </span>
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
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Grid-Example</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row  text-center">
                      <div className="col-lg-4">
                        <span className="border py-2 bg-light d-block mb-2 mb-lg-0">
                          .col-xl-4
                        </span>
                      </div>
                      <div className="col-lg-4">
                        <span className="border py-2 bg-light d-block mb-2 mb-lg-0">
                          .col-xl-4
                        </span>
                      </div>
                      <div className="col-lg-4">
                        <span className="border py-2 bg-light d-block">
                          .col-xl-4
                        </span>
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
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Grid-Example</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row  text-center">
                      <div className="col-xxl-6">
                        <span className="border py-2 bg-light d-block mb-2 mb-lg-0">
                          .col-xxl-6
                        </span>
                      </div>
                      <div className="col-xxl-6">
                        <span className="border py-2 bg-light d-block">
                          .col-xxl-6
                        </span>
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
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Grid-Example</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="text-center">
                      <div className="row">
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                        <div className="col-sm-1">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-1
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-2">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-2
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-2
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-2
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-2
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-2
                          </span>
                        </div>
                        <div className="col-sm-2">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-2
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-3
                          </span>
                        </div>
                        <div className="col-sm-3">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-3
                          </span>
                        </div>
                        <div className="col-sm-3">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-3
                          </span>
                        </div>
                        <div className="col-sm-3">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-3
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-4
                          </span>
                        </div>
                        <div className="col-sm-4">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-4
                          </span>
                        </div>
                        <div className="col-sm-4">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-4
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-6
                          </span>
                        </div>
                        <div className="col-sm-6">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-6
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <span className="border py-2 bg-light d-block">
                            .col-sm-12
                          </span>
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
              <div className="col-md-12 col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Grid-Example</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="text-center">
                      <div className="row">
                        <div className="col-sm-8 offset-sm-2">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-8 offset-sm-2
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3 ml-auto">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-3 ml-auto
                          </span>
                        </div>
                        <div className="col-sm-3 ml-auto">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-3 ml-auto
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-3
                          </span>
                        </div>
                        <div className="col-sm-3 offset-sm-3">
                          <span className="border py-2 bg-light d-block mb-2">
                            .col-sm-3 offset-sm-3
                          </span>
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

export default Uigrids;
