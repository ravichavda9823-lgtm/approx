import React from "react";
import Footer from "../common/Footer";

function Uitypography() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Typrography</h4>
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
                      <li className="breadcrumb-item active">Typrography</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-">
                    <div className="card">
                      <div className="card-body">
                        <span className="float-end text-muted fw-normal">
                          Normal / 400
                        </span>
                        <h1 className="display-4 fw-normal mt-0 mb-4">Aa</h1>
                        <h5 className="mb-0 fw-normal">Approx</h5>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>{" "}
                  {/*end col*/}
                  <div className="col-md-6 col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <span className="float-end text-muted fw-bold">
                          Bold / 700
                        </span>
                        <h1 className="display-4 fw-bold mt-0 mb-4">Aa</h1>
                        <h5 className="mb-0 fw-bold">Approx</h5>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>{" "}
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-body">
                    <pre className="py-0 my-0 rounded">
                      <code className="language-css">
                        {"\n"}font-family : 'Be Vietnam Pro', sans-serif;{"\n"}
                        {"                                    "}
                      </code>
                    </pre>
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
                        <h4 className="card-title">Heading</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <h1>h1. Bootstrap heading</h1>
                    <h2>h2. Bootstrap heading</h2>
                    <h3>h3. Bootstrap heading</h3>
                    <h4>h4. Bootstrap heading</h4>
                    <h5>h5. Bootstrap heading</h5>
                    <h6>h6. Bootstrap heading</h6>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Lead</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <p className="lead mb-0">
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                      dolor auctor.
                    </p>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Inline text elements</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <p>
                      You can use the mark tag to <mark>highlight</mark> text.
                    </p>
                    <p>
                      <del>
                        This line of text is meant to be treated as deleted
                        text.
                      </del>
                    </p>
                    <p>
                      <s>
                        This line of text is meant to be treated as no longer
                        accurate.
                      </s>
                    </p>
                    <p>
                      <ins>
                        This line of text is meant to be treated as an addition
                        to the document.
                      </ins>
                    </p>
                    <p>
                      <u>This line of text will render as underlined</u>
                    </p>
                    <p>
                      <small>
                        This line of text is meant to be treated as fine print.
                      </small>
                    </p>
                    <p>
                      <strong>This line rendered as bold text.</strong>
                    </p>
                    <p className="mb-0">
                      <em>This line rendered as italicized text.</em>
                    </p>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Unorder List</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="mb-0">
                      <li>Integer molestie lorem at massa</li>
                      <li>
                        Nulla volutpat aliquam velit
                        <ul>
                          <li>Phasellus iaculis neque</li>
                          <li>Purus sodales ultricies</li>
                          <li>Vestibulum laoreet porttitor sem</li>
                        </ul>
                      </li>
                      <li>Faucibus porta lacus fringilla vel</li>
                    </ul>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Order List</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ol className="mb-0">
                      <li>Integer molestie lorem at massa</li>
                      <li>Nulla volutpat aliquam velit </li>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Faucibus porta lacus fringilla vel</li>
                    </ol>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Unstyleed List</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="mb-0 list-unstyled">
                      <li>Integer molestie lorem at massa</li>
                      <li>Nulla volutpat aliquam velit </li>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Faucibus porta lacus fringilla vel</li>
                    </ul>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Inline List</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <i className="mdi mdi-circle-outline font-13 text-success me-1" />
                        Lorem ipsum
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-circle-outline font-13 text-success me-1" />
                        Phasellus iaculis
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-circle-outline font-13 text-success me-1" />
                        Nulla volutpat
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-circle-outline font-13 text-success me-1" />
                        Lorem ipsum
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-circle-outline font-13 text-success me-1" />
                        Phasellus iaculis
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-circle-outline font-13 text-success me-1" />
                        Nulla volutpat
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-circle-outline font-13 text-success me-1" />
                        Lorem ipsum
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-circle-outline font-13 text-success me-1" />
                        Phasellus iaculis
                      </li>
                      <li className="list-inline-item">
                        <i className="mdi mdi-circle-outline font-13 text-success me-1" />
                        Nulla volutpat
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
                        <h4 className="card-title">Display Heading</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <h1 className="display-1">Display 1</h1>
                    <h1 className="display-2">Display 2</h1>
                    <h1 className="display-3">Display 3</h1>
                    <h1 className="display-4">Display 4</h1>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Blockquote</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <blockquote className="blockquote">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer className="blockquote-footer font-14">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                    <blockquote className="blockquote blockquote-reverse">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer className="blockquote-footer font-14">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                    <blockquote className="blockquote blockquote-reverse mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                      <footer className="blockquote-footer font-14 text-right">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Colors</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <p className="text-primary">.text-primary</p>
                    <p className="text-secondary">.text-secondary</p>
                    <p className="text-success">.text-success</p>
                    <p className="text-danger">.text-danger</p>
                    <p className="text-warning">.text-warning</p>
                    <p className="text-info">.text-info</p>
                    <p className="text-light bg-dark">.text-light</p>
                    <p className="text-dark">.text-dark</p>
                    <p className="text-body">.text-body</p>
                    <p className="text-muted">.text-muted</p>
                    <p className="text-white bg-black">.text-white</p>
                    <p className="text-black-50">.text-black-50</p>
                    <p className="text-white-50 bg-black">.text-white-50</p>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">
                          Description List Alignment
                        </h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <dl className="row mb-0">
                      <dt className="col-sm-3">Description lists</dt>
                      <dd className="col-sm-9">
                        A description list is perfect for defining terms.
                      </dd>
                      <dt className="col-sm-3">Euismod</dt>
                      <dd className="col-sm-9">
                        Vestibulum id ligula porta felis euismod semper eget
                        lacinia odio sem nec elit.
                      </dd>
                      <dd className="col-sm-9 offset-sm-3">
                        Donec id elit non mi porta gravida at eget metus.
                      </dd>
                      <dt className="col-sm-3">Malesuada porta</dt>
                      <dd className="col-sm-9">
                        Etiam porta sem malesuada magna mollis euismod.
                      </dd>
                      <dt className="col-sm-3 text-truncate">
                        Truncated term is truncated
                      </dt>
                      <dd className="col-sm-9">
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris
                        condimentum nibh, ut fermentum massa justo sit amet
                        risus.
                      </dd>
                      <dt className="col-sm-3">Nesting</dt>
                      <dd className="col-sm-9 mb-0">
                        <dl className="row mb-0">
                          <dt className="col-sm-4">Nested definition list</dt>
                          <dd className="col-sm-8">
                            Aenean posuere, tortor sed cursus feugiat, nunc
                            augue blandit nunc.
                          </dd>
                        </dl>
                      </dd>
                    </dl>
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

export default Uitypography;
