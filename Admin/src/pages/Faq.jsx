import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

function Faq() {
  return (
    <>
      <div className="page-wrapper">
        <Header/>
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">FAQ</h4>
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
                      <li className="breadcrumb-item active">FAQ</li>
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
                <div className="card">
                  <div className="card-header text-center">
                    <h4 className="card-title pt-2 fw-semibold mb-2 fs-18">
                      Most Commonly Asked Questions
                    </h4>
                    <p>
                      {" "}
                      <i className="la la-grip-lines text-primary fs-18" />{" "}
                      <i className="la la-question-circle text-primary fs-18" />{" "}
                      <i className="la la-grip-lines text-primary fs-18" />
                    </p>
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className=" p-4 rounded mb-3 border-dashed border-theme-color">
                          <div className="mb-2">
                            <div className="d-inline-flex justify-content-center align-items-center thumb-md card-bg border border border-secondary-subtle  rounded mx-auto">
                              <i className="iconoir-hexagon-dice h5 align-self-center mb-0 text-dark" />
                            </div>
                            <h6 className="fs-15 d-inline-block ms-1">
                              {" "}
                              What is Approx ?
                            </h6>
                          </div>
                          <p className="fs-14 ms-45 text-muted mb-0">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English.
                          </p>
                        </div>
                        <div className=" p-4 rounded mb-3   border-dashed border-theme-color">
                          <div className="mb-2">
                            <div className="d-inline-flex justify-content-center align-items-center thumb-md card-bg border border border-secondary-subtle  rounded mx-auto">
                              <i className="iconoir-flower h5 align-self-center mb-0 text-dark" />
                            </div>
                            <h6 className="fs-15 d-inline-block ms-1">
                              What cryptocurrency can i use to buy Approx ?
                            </h6>
                          </div>
                          <p className="fs-14 ms-45 text-muted mb-0">
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for 'lorem ipsum' will uncover
                            many web sites still in their infancy. Various
                            versions have evolved over the years, sometimes by
                            accident.
                          </p>
                        </div>
                        <div className=" p-4 rounded mb-3   border-dashed border-theme-color">
                          <div className="mb-2">
                            <div className="d-inline-flex justify-content-center align-items-center thumb-md card-bg border border border-secondary-subtle  rounded mx-auto">
                              <i className="iconoir-wolf h5 align-self-center mb-0 text-dark" />
                            </div>
                            <h6 className="fs-15 d-inline-block ms-1">
                              Can i trade Approx ?
                            </h6>
                          </div>
                          <p className="fs-14 ms-45 text-muted mb-0">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which don't look even slightly believable.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className=" p-4 rounded mb-3   border-dashed border-theme-color">
                          <div className="mb-2">
                            <div className="d-inline-flex justify-content-center align-items-center thumb-md card-bg border border border-secondary-subtle  rounded mx-auto">
                              <i className="iconoir-magic-wand h5 align-self-center mb-0 text-dark" />
                            </div>
                            <h6 className="fs-15 d-inline-block ms-1">
                              {" "}
                              How buy Approx on coin ?
                            </h6>
                          </div>
                          <p className="fs-14 ms-45 text-muted mb-0">
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure .
                          </p>
                        </div>
                        <div className=" p-4 rounded mb-3   border-dashed border-theme-color">
                          <div className="mb-2">
                            <div className="d-inline-flex justify-content-center align-items-center thumb-md card-bg border border border-secondary-subtle  rounded mx-auto">
                              <i className="iconoir-emoji h5 align-self-center mb-0 text-dark" />
                            </div>
                            <h6 className="fs-15 d-inline-block ms-1">
                              {" "}
                              Where can i download the wallet ?
                            </h6>
                          </div>
                          <p className="fs-14 ms-45 text-muted mb-0">
                            The standard chunk of Lorem Ipsum used since the
                            1500s is reproduced below for those interested.
                            Sections 1.10.32 and 1.10.33 from "de Finibus
                            Bonorum et Malorum" by Cicero are also reproduced in
                            their exact original form, accompanied by English
                            versions from the 1914 translation by H. Rackham.
                          </p>
                        </div>
                        <div className=" p-4 rounded mb-3   border-dashed border-theme-color">
                          <div className="mb-2">
                            <div className="d-inline-flex justify-content-center align-items-center thumb-md card-bg border border border-secondary-subtle  rounded mx-auto">
                              <i className="iconoir-bitcoin-circle h5 align-self-center mb-0 text-dark" />
                            </div>
                            <h6 className="fs-15 d-inline-block ms-1">
                              {" "}
                              What is Approx ?
                            </h6>
                          </div>
                          <p className="fs-14 ms-45 text-muted mb-0">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English.
                          </p>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Questions With Accordion</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="accordion" id="accordionExample-faq">
                      <div className="accordion-item">
                        <h5 className="accordion-header m-0" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What is Approx?
                          </button>
                        </h5>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample-faq"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the first item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5 className="accordion-header m-0" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How buy Approx on coin?
                          </button>
                        </h5>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample-faq"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5 className="accordion-header m-0" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What cryptocurrency can i use to buy Approx?
                          </button>
                        </h5>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample-faq"
                        >
                          <div className="accordion-body">
                            <strong>
                              This is the third item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
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
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Have More Questions</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form>
                      <div className="form-group row">
                        <div className="col-lg-6">
                          <input
                            className="form-control mb-2"
                            type="text"
                            id="name"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            className="form-control mb-2"
                            type="email"
                            id="example-email-input3"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-12">
                          <input
                            className="form-control mb-2"
                            type="text"
                            id="subject2"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control mb-2"
                          id="exampleFormControlTextarea1"
                          rows={4}
                          placeholder="Your message"
                          defaultValue={""}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block px-4"
                      >
                        Send Email
                      </button>
                    </form>
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

export default Faq;
