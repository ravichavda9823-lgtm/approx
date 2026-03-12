import React from "react";
import Footer from "../common/Footer";

function Emailbilling() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Billing</h4>
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
                      <li className="breadcrumb-item active">Billing</li>
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
                      <td valign="top" />
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
                            style={{ border: "1px dashed #a5adc3" }}
                          >
                            <tbody>
                              <tr>
                                <td
                                  className="content-wrap aligncenter"
                                  style={{
                                    padding: 20,
                                    backgroundColor: "transparent",
                                  }}
                                  align="center"
                                  valign="top"
                                >
                                  <table
                                    width="100%"
                                    cellPadding={0}
                                    cellSpacing={0}
                                  >
                                    <tbody>
                                      <tr>
                                        <td>
                                          <a href="#">
                                            <img
                                              src="assets/images/logo-sm.png"
                                              alt
                                              style={{
                                                height: 50,
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                marginBottom: 8,
                                                display: "block",
                                              }}
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="content-block"
                                          style={{ padding: "0 0 20px" }}
                                          valign="top"
                                        >
                                          <h2
                                            className="aligncenter"
                                            style={{
                                              fontFamily:
                                                '"Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif',
                                              fontSize: 24,
                                              color: "#98a2bd",
                                              lineHeight: "1.2em",
                                              fontWeight: 600,
                                              textAlign: "center",
                                            }}
                                            align="center"
                                          >
                                            Thanks for using{" "}
                                            <span
                                              style={{
                                                color: "#22c55e",
                                                fontWeight: 700,
                                              }}
                                            >
                                              Approx
                                            </span>
                                            .
                                          </h2>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="content-block aligncenter"
                                          style={{ padding: "0 0 20px" }}
                                          align="center"
                                          valign="top"
                                        >
                                          <table
                                            className="invoice"
                                            style={{ width: "80%" }}
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  style={{
                                                    fontFamily:
                                                      '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                    fontSize: 14,
                                                    padding: "5px 0",
                                                  }}
                                                  valign="top"
                                                >
                                                  Mannatthemes
                                                  <br />
                                                  Invoice #12345
                                                  <br />
                                                  01 Sep 2021
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  style={{ padding: "5px 0" }}
                                                  valign="top"
                                                >
                                                  <table
                                                    className="invoice-items"
                                                    cellPadding={0}
                                                    cellSpacing={0}
                                                    style={{ width: "100%" }}
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td
                                                          style={{
                                                            fontFamily:
                                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                            fontSize: 14,
                                                            verticalAlign:
                                                              "top",
                                                            borderTopWidth: 1,
                                                            borderTopColor:
                                                              "#eee",
                                                            borderTopStyle:
                                                              "solid",
                                                            margin: 0,
                                                            padding: "10px 0",
                                                          }}
                                                          valign="top"
                                                        >
                                                          Apple iphone X
                                                        </td>
                                                        <td
                                                          className="alignright"
                                                          style={{
                                                            fontFamily:
                                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                            fontSize: 14,
                                                            verticalAlign:
                                                              "top",
                                                            textAlign: "right",
                                                            borderTopWidth: 1,
                                                            borderTopColor:
                                                              "#eee",
                                                            borderTopStyle:
                                                              "solid",
                                                            margin: 0,
                                                            padding: "10px 0",
                                                          }}
                                                          align="right"
                                                          valign="top"
                                                        >
                                                          $ 1499.99
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td
                                                          style={{
                                                            fontFamily:
                                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                            fontSize: 14,
                                                            verticalAlign:
                                                              "top",
                                                            borderTopWidth: 1,
                                                            borderTopColor:
                                                              "#eee",
                                                            borderTopStyle:
                                                              "solid",
                                                            margin: 0,
                                                            padding: "10px 0",
                                                          }}
                                                          valign="top"
                                                        >
                                                          Data cable
                                                        </td>
                                                        <td
                                                          className="alignright"
                                                          style={{
                                                            fontFamily:
                                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                            fontSize: 14,
                                                            verticalAlign:
                                                              "top",
                                                            textAlign: "right",
                                                            borderTopWidth: 1,
                                                            borderTopColor:
                                                              "#eee",
                                                            borderTopStyle:
                                                              "solid",
                                                            margin: 0,
                                                            padding: "10px 0",
                                                          }}
                                                          align="right"
                                                          valign="top"
                                                        >
                                                          $ 20.00
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td
                                                          style={{
                                                            fontFamily:
                                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                            fontSize: 14,
                                                            verticalAlign:
                                                              "top",
                                                            borderTopWidth: 1,
                                                            borderTopColor:
                                                              "#eee",
                                                            borderTopStyle:
                                                              "solid",
                                                            margin: 0,
                                                            padding: "10px 0",
                                                          }}
                                                          valign="top"
                                                        >
                                                          Phone Cover
                                                        </td>
                                                        <td
                                                          className="alignright"
                                                          style={{
                                                            fontFamily:
                                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                            fontSize: 14,
                                                            verticalAlign:
                                                              "top",
                                                            textAlign: "right",
                                                            borderTopWidth: 1,
                                                            borderTopColor:
                                                              "#eee",
                                                            borderTopStyle:
                                                              "solid",
                                                            margin: 0,
                                                            padding: "10px 0",
                                                          }}
                                                          align="right"
                                                          valign="top"
                                                        >
                                                          $ 40.00
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td
                                                          className="alignright"
                                                          width="80%"
                                                          style={{
                                                            fontFamily:
                                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                            fontSize: 14,
                                                            verticalAlign:
                                                              "top",
                                                            textAlign: "right",
                                                            borderTopWidth: 2,
                                                            borderTopColor:
                                                              "#50649c",
                                                            borderTopStyle:
                                                              "solid",
                                                            borderBottomColor:
                                                              "#50649c",
                                                            borderBottomWidth: 2,
                                                            borderBottomStyle:
                                                              "solid",
                                                            fontWeight: 700,
                                                            margin: 0,
                                                            padding: "10px 0",
                                                          }}
                                                          align="right"
                                                          valign="top"
                                                        >
                                                          Total
                                                        </td>
                                                        <td
                                                          className="alignright"
                                                          style={{
                                                            fontFamily:
                                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                                            fontSize: 14,
                                                            verticalAlign:
                                                              "top",
                                                            textAlign: "right",
                                                            borderTopWidth: 2,
                                                            borderTopColor:
                                                              "#50649c",
                                                            borderTopStyle:
                                                              "solid",
                                                            borderBottomColor:
                                                              "#50649c",
                                                            borderBottomWidth: 2,
                                                            borderBottomStyle:
                                                              "solid",
                                                            fontWeight: 700,
                                                            margin: 0,
                                                            padding: "10px 0",
                                                          }}
                                                          align="right"
                                                          valign="top"
                                                        >
                                                          $ 1559.99
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="content-block aligncenter"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            fontSize: 14,
                                            verticalAlign: "top",
                                            textAlign: "center",
                                            margin: 0,
                                            padding: "0 0 20px",
                                          }}
                                          align="center"
                                          valign="top"
                                        >
                                          <a
                                            href="#"
                                            style={{
                                              fontFamily:
                                                '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                              fontSize: 14,
                                              color: "#22c55e",
                                              textDecoration: "underline",
                                              margin: 0,
                                            }}
                                          >
                                            View in browser
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td
                                          className="content-block aligncenter"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            fontSize: 14,
                                            verticalAlign: "top",
                                            textAlign: "center",
                                            margin: 0,
                                            padding: "0 0 20px",
                                          }}
                                          align="center"
                                          valign="top"
                                        >
                                          Approx Inc. 123 my street, And my
                                          Country
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  {/*end table*/}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          {/*end table*/}
                        </div>
                        {/*end content*/}
                      </td>
                      <td
                        style={{
                          fontFamily:
                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
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

export default Emailbilling;
