import React from "react";
import Footer from "../common/Footer";

function Taxes() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Taxes</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Taxes</li>
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
                        <h4 className="card-title">Taxes Details</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <button
                          className="btn bg-primary text-white"
                          data-bs-toggle="modal"
                          data-bs-target="#addRate"
                        >
                          <i className="fas fa-plus me-1" /> Add Rate
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
                            <th>Tax Rate (Band)</th>
                            <th>Tax Rate</th>
                            <th>Taxable Income 22/23</th>
                            <th>Taxable Income23/24</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Tax-free Personal Allowance</td>
                            <td>0%</td>
                            <td>Up to $12500</td>
                            <td>Up to $14000</td>
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
                            <td>Starter Rate</td>
                            <td>15%</td>
                            <td>$12500 to $14500</td>
                            <td>$14500 to $16500</td>
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
                            <td>Basic Rate</td>
                            <td>20%</td>
                            <td>$13500 to $15500</td>
                            <td>$16500 to $18500</td>
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
                            <td>Intermediate Rate</td>
                            <td>24%</td>
                            <td>$16500 to $18500</td>
                            <td>$18500 to $20000</td>
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
                            <td>Higher Rate</td>
                            <td>32%</td>
                            <td>$18500 to $20000</td>
                            <td>$20000 to $21000</td>
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
                            <td>Additional Rate</td>
                            <td>45%</td>
                            <td>Over $20000</td>
                            <td>Over $21000</td>
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
    </>
  );
}

export default Taxes;
