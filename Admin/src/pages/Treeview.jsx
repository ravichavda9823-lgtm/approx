import React from "react";
import Footer from "../common/Footer";

function Treeview() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Treeview</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Pages</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Treeview</li>
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
                        <h4 className="card-title">Listree Example</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="listree">
                      <li>
                        <div className="listree-submenu-heading">Metrics</div>
                        <ul className="listree-submenu-items">
                          <li>
                            <div className="listree-submenu-heading">
                              Daily Metrics
                            </div>
                            <ul className="listree-submenu-items">
                              <li>
                                <div className="listree-submenu-heading">
                                  Daily Order Metrics
                                </div>
                                <ul className="listree-submenu-items">
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Categorywise Daily order metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Categorywise daily order count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Categorywise daily bookings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Storewise Daily order metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Storewise daily order count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">Storewise daily bookings</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="listree-submenu-heading">
                                  Daily Invoice Metrics
                                </div>
                                <ul className="listree-submenu-items">
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Categorywise Daily invoice metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Categorywise daily invoice count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Categorywise daily revenue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Storewise Daily invoice metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Storewise daily invoice count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">Storewise daily revenue</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="listree-submenu-heading">
                              Monthly Metrics
                            </div>
                            <ul className="listree-submenu-items">
                              <li>
                                <div className="listree-submenu-heading">
                                  Monthly Order Metrics
                                </div>
                                <ul className="listree-submenu-items">
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Categorywise Monthly order metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Categorywise monthly order count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Categorywise monthly bookings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Storewise Monthly order metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Storewise monthly order count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Storewise monthly bookings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="listree-submenu-heading">
                                  Monthly Invoice Metrics
                                </div>
                                <ul className="listree-submenu-items">
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Categorywise Monthly invoice metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Categorywise monthly invoice count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Categorywise monthly revenue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Storewise Monthly invoice metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Storewise monthly invoice count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Storewise monthly revenue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="listree-submenu-heading">Settings</div>
                        <ul className="listree-submenu-items">
                          <li>
                            <div className="listree-submenu-heading">
                              Personal Settings
                            </div>
                            <ul className="listree-submenu-items">
                              <li>
                                <a href="#">Password Settings</a>
                              </li>
                              <li>
                                <a href="#">Viewing Preferences</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="listree-submenu-heading">
                              Org Settings
                            </div>
                            <ul className="listree-submenu-items">
                              <li>
                                <a href="#">Teams</a>
                              </li>
                              <li>
                                <a href="#">Billing</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
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
                        <h4 className="card-title">
                          Listree Custom Folder Icon
                        </h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="listree folder-icon">
                      <li>
                        <div className="listree-submenu-heading">Metrics</div>
                        <ul className="listree-submenu-items">
                          <li>
                            <div className="listree-submenu-heading">
                              Daily Metrics
                            </div>
                            <ul className="listree-submenu-items">
                              <li>
                                <div className="listree-submenu-heading">
                                  Daily Order Metrics
                                </div>
                                <ul className="listree-submenu-items">
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Categorywise Daily order metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Categorywise daily order count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Categorywise daily bookings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Storewise Daily order metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Storewise daily order count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">Storewise daily bookings</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="listree-submenu-heading">
                                  Daily Invoice Metrics
                                </div>
                                <ul className="listree-submenu-items">
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Categorywise Daily invoice metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Categorywise daily invoice count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Categorywise daily revenue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Storewise Daily invoice metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Storewise daily invoice count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">Storewise daily revenue</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="listree-submenu-heading">
                              Monthly Metrics
                            </div>
                            <ul className="listree-submenu-items">
                              <li>
                                <div className="listree-submenu-heading">
                                  Monthly Order Metrics
                                </div>
                                <ul className="listree-submenu-items">
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Categorywise Monthly order metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Categorywise monthly order count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Categorywise monthly bookings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Storewise Monthly order metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Storewise monthly order count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Storewise monthly bookings
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <div className="listree-submenu-heading">
                                  Monthly Invoice Metrics
                                </div>
                                <ul className="listree-submenu-items">
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Categorywise Monthly invoice metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Categorywise monthly invoice count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Categorywise monthly revenue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <div className="listree-submenu-heading">
                                      Storewise Monthly invoice metrics
                                    </div>
                                    <ul className="listree-submenu-items">
                                      <li>
                                        <a href="#">
                                          Storewise monthly invoice count
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          Storewise monthly revenue
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="listree-submenu-heading">Settings</div>
                        <ul className="listree-submenu-items">
                          <li>
                            <div className="listree-submenu-heading">
                              Personal Settings
                            </div>
                            <ul className="listree-submenu-items">
                              <li>
                                <a href="#">Password Settings</a>
                              </li>
                              <li>
                                <a href="#">Viewing Preferences</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="listree-submenu-heading">
                              Org Settings
                            </div>
                            <ul className="listree-submenu-items">
                              <li>
                                <a href="#">Teams</a>
                              </li>
                              <li>
                                <a href="#">Billing</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
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

export default Treeview;
