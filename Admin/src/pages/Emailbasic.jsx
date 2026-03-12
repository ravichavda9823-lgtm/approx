import React from "react";
import Footer from "../common/Footer";

function Emailbasic() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Basic</h4>
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
                      <li className="breadcrumb-item active">Basic</li>
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
                    <tr
                      style={{
                        fontFamily:
                          '"Helvetica Neue",Helvetica,Arial,sans-serif',
                        boxSizing: "border-box",
                        fontSize: 14,
                        margin: 0,
                      }}
                    >
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
                      <td
                        className="container"
                        width={600}
                        style={{
                          fontFamily:
                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
                          boxSizing: "border-box",
                          fontSize: 14,
                          verticalAlign: "top",
                          display: "block !important",
                          maxWidth: "600px !important",
                          clear: "both !important",
                          margin: "0 auto",
                        }}
                        valign="top"
                      >
                        <div
                          className="content"
                          style={{
                            fontFamily:
                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                            boxSizing: "border-box",
                            fontSize: 14,
                            maxWidth: 600,
                            display: "block",
                            margin: "0 auto",
                            padding: 20,
                          }}
                        >
                          <table
                            className="main"
                            width="100%"
                            cellPadding={0}
                            cellSpacing={0}
                            itemProp="action"
                            itemScope
                            itemType="http://schema.org/ConfirmAction"
                            style={{
                              fontFamily:
                                '"Helvetica Neue",Helvetica,Arial,sans-serif',
                              boxSizing: "border-box",
                              fontSize: 14,
                              borderRadius: 3,
                              backgroundColor: "transparent",
                              margin: 0,
                              border: "1px dashed #a5adc3",
                            }}
                            bgcolor="#fff"
                          >
                            <tbody>
                              <tr
                                style={{
                                  fontFamily:
                                    '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                  boxSizing: "border-box",
                                  fontSize: 14,
                                  margin: 0,
                                }}
                              >
                                <td
                                  className="content-wrap"
                                  style={{
                                    fontFamily:
                                      '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                    boxSizing: "border-box",
                                    fontSize: 14,
                                    verticalAlign: "top",
                                    margin: 0,
                                    padding: 20,
                                  }}
                                  valign="top"
                                >
                                  <meta
                                    itemProp="name"
                                    content="Confirm Email"
                                    style={{
                                      fontFamily:
                                        '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                      boxSizing: "border-box",
                                      fontSize: 14,
                                      margin: 0,
                                    }}
                                  />
                                  <table
                                    width="100%"
                                    cellPadding={0}
                                    cellSpacing={0}
                                    style={{
                                      fontFamily:
                                        '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                      boxSizing: "border-box",
                                      fontSize: 14,
                                      margin: 0,
                                    }}
                                  >
                                    <tbody>
                                      <tr>
                                        <td>
                                          <a href="#">
                                            <img
                                              src="assets/images/logo-sm.png"
                                              alt
                                              style={{
                                                marginLeft: "auto",
                                                marginRight: "auto",
                                                display: "block",
                                                marginBottom: 10,
                                                height: 40,
                                              }}
                                            />
                                          </a>
                                        </td>
                                      </tr>
                                      <tr
                                        style={{
                                          fontFamily:
                                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                          boxSizing: "border-box",
                                          fontSize: 14,
                                          margin: 0,
                                        }}
                                      >
                                        <td
                                          className="content-block"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            boxSizing: "border-box",
                                            color: "#98a2bd",
                                            fontSize: 24,
                                            fontWeight: 700,
                                            textAlign: "center",
                                            verticalAlign: "top",
                                            margin: 0,
                                            padding: "0 0 10px",
                                          }}
                                          valign="top"
                                        >
                                          WelCome To Approx
                                        </td>
                                      </tr>
                                      <tr
                                        style={{
                                          fontFamily:
                                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                          boxSizing: "border-box",
                                          fontSize: 14,
                                          margin: 0,
                                        }}
                                      >
                                        <td
                                          className="content-block"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            boxSizing: "border-box",
                                            color: "#3f5db3",
                                            fontSize: 14,
                                            verticalAlign: "top",
                                            margin: 0,
                                            padding: "10px 10px",
                                          }}
                                          valign="top"
                                        >
                                          Please confirm your email address by
                                          clicking the link below.
                                        </td>
                                      </tr>
                                      <tr
                                        style={{
                                          fontFamily:
                                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                          boxSizing: "border-box",
                                          fontSize: 14,
                                          margin: 0,
                                        }}
                                      >
                                        <td
                                          className="content-block"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            boxSizing: "border-box",
                                            fontSize: 14,
                                            verticalAlign: "top",
                                            margin: 0,
                                            padding: "10px 10px",
                                          }}
                                          valign="top"
                                        >
                                          We may need to send you critical
                                          information about our service and it
                                          is important that we have an accurate
                                          email address.
                                        </td>
                                      </tr>
                                      <tr
                                        style={{
                                          fontFamily:
                                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                          boxSizing: "border-box",
                                          fontSize: 14,
                                          margin: 0,
                                        }}
                                      >
                                        <td
                                          className="content-block"
                                          itemProp="handler"
                                          itemScope
                                          itemType="http://schema.org/HttpActionHandler"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            boxSizing: "border-box",
                                            fontSize: 14,
                                            verticalAlign: "top",
                                            margin: 0,
                                            padding: "10px 10px",
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
                                            Confirm email address
                                          </a>
                                        </td>
                                      </tr>
                                      <tr
                                        style={{
                                          fontFamily:
                                            '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                          boxSizing: "border-box",
                                          fontSize: 14,
                                          margin: 0,
                                        }}
                                      >
                                        <td
                                          className="content-block"
                                          style={{
                                            fontFamily:
                                              '"Helvetica Neue",Helvetica,Arial,sans-serif',
                                            boxSizing: "border-box",
                                            fontSize: 14,
                                            paddingTop: 5,
                                            verticalAlign: "top",
                                            margin: 0,
                                            textAlign: "right",
                                          }}
                                          valign="top"
                                        >
                                          — <b>Approx</b> - Admin Dashboard
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
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

export default Emailbasic;
