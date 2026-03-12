import React from "react";
import Footer from "../common/Footer";

function Emailalert() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Alert</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Email Tem.</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Alert</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-12">
                <table
                  className="body-wrap"
                  style={{
                    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                    boxSizing: "border-box",
                    fontSize: 14,
                    width: "100%",
                    backgroundColor: "transparent",
                    margin: 0,
                  }}
                  bgcolor="transparent"
                >
                  <tbody>
                    <tr>
                      <td
                        className="container"
                        width={600}
                        style={{
                          display: "block !important",
                          maxWidth: "600px !important",
                          clear: "both !important",
                        }}
                        valign="top"
                      >
                        <div className="content" style={{ padding: 20 }}>
                          <table
                            className="main"
                            width="100%"
                            cellPadding={0}
                            cellSpacing={0}
                            style={{
                              border: "1px solid rgba(130, 134, 156, 0.15)",
                            }}
                            bgcolor="transparent"
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="alert alert-primary border-0 bg-primary"
                                  style={{ padding: 20, borderRadius: 0 }}
                                  align="center"
                                  valign="top"
                                >
                                  <img
                                    src="assets/images/extra/bell.png"
                                    alt
                                    style={{
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                      display: "block",
                                      width: 60,
                                    }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="alert alert-dark border-0"
                                  style={{
                                    color: "#ffffff",
                                    backgroundColor: "#212f56",
                                    padding: 20,
                                    borderRadius: 0,
                                  }}
                                  align="center"
                                  valign="top"
                                >
                                  Warning: You're approaching your limit. Please
                                  upgrade.
                                </td>
                              </tr>
                              <tr>
                                <td
                                  className="content-wrap"
                                  style={{ padding: 20 }}
                                  valign="top"
                                >
                                  <table
                                    width="100%"
                                    cellPadding={0}
                                    cellSpacing={0}
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          className="content-block"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            fontSize: 14,
                                            padding: 10,
                                          }}
                                          valign="top"
                                        >
                                          You have{" "}
                                          <strong
                                            style={{
                                              fontFamily:
                                                '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                              boxSizing: "border-box",
                                              fontSize: 14,
                                              margin: 0,
                                            }}
                                          >
                                            1 free report
                                          </strong>{" "}
                                          remaining.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="content-block"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            fontSize: 14,
                                            padding: "10px 10px 20px",
                                          }}
                                          valign="top"
                                        >
                                          Add your credit card now to upgrade
                                          your account to a premium plan to
                                          ensure you don't miss out on any
                                          reports.
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="content-block"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            fontSize: 14,
                                            padding: "0 0 20px",
                                          }}
                                          valign="top"
                                        >
                                          <a
                                            href="#"
                                            className="btn btn-primary"
                                            style={{
                                              fontSize: 14,
                                              textDecoration: "none",
                                              lineHeight: "2em",
                                              fontWeight: "bold",
                                              textAlign: "center",
                                              cursor: "pointer",
                                              display: "block",
                                              borderRadius: 5,
                                              textTransform: "capitalize",
                                              border: "none",
                                              padding: "10px 20px",
                                            }}
                                          >
                                            Upgrade my account
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="content-block"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            fontSize: 14,
                                            textAlign: "center",
                                          }}
                                          valign="top"
                                        >
                                          Thanks for choosing <b>Approx</b>{" "}
                                          Admin.
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                      <td
                        style={{
                          fontFamily:
                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
                          boxSizing: "border-box",
                          fontSize: 14,
                          verticalAlign: "top",
                          margin: 0,
                        }}
                        valign="top"
                      />
                    </tr>
                  </tbody>
                </table>
                {/*end table*/}
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

export default Emailalert;
