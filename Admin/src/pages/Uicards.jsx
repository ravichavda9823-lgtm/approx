import React from "react";
import Footer from "../common/Footer";

function Uicards() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Cards</h4>
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
                      <li className="breadcrumb-item active">Cards</li>
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
                  <img
                    className="card-img-top img-fluid bg-light-alt"
                    src="assets/images/extra/card/img-1.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Card title</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <img
                          className="rounded-circle"
                          src="assets/images/users/avatar-7.jpg"
                          alt
                          height={24}
                        />
                        <span className="badge bg-primary-subtle text-primary">
                          30 May 2024
                        </span>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <p className="card-text text-muted ">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Go somewhere
                    </a>
                  </div>
                  {/*end card -body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Card Body</h4>
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <p className="card-subtitle fs-14 mb-2">
                      This is the card subtitle
                    </p>
                    <p className="card-text text-muted">
                      Some quick example text the bulk of the card's content. It
                      is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                  {/*end card -body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-subtitle fs-14 mb-2">
                      This is the card subtitle
                    </h6>
                    <p className="card-text text-muted">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="card-link text-primary">
                      Card link
                    </a>
                    <a href="#" className="card-link text-primary">
                      Another link
                    </a>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-header bg-primary">
                    <h4 className="card-title text-white">Header - Primary</h4>
                  </div>
                  {/*end card-header*/}
                  <div className="card-body">
                    <p className="card-text text-muted">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                  {/*end card-body*/}
                  <p className="card-footer bg-light-alt m-0">
                    Footer - 2024 Approx
                  </p>
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-body">
                    <blockquote className="card-bodyquote mb-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a amet, consectetur adipiscing elit
                        ante.
                      </p>
                      <footer className="blockquote-footer fs-14 mb-0 mt-2">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">List Group</h4>
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <ul className="list-group list-group-flush border mb-3">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <p className="card-text text-muted">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      Go somewhere
                    </a>
                    <a href="#" className="btn btn-outline-secondary btn-sm">
                      Finish
                    </a>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src="assets/images/extra/card/v-card.jpg"
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    {/*end col*/}
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-lg-4">
                <div className="card text-center">
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          Active
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Link
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link disabled"
                          href="#"
                          tabIndex={-1}
                          aria-disabled="true"
                        >
                          Disabled
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*end card-header*/}
                  <div className="card-body">
                    <h5 className="card-title mb-2">Special title treatment</h5>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Go somewhere
                    </a>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-lg-4">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text">
                          <small className="text-body-secondary">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-md-4">
                      <img
                        src="assets/images/extra/card/v-card.jpg"
                        className="img-fluid rounded-end"
                        alt="..."
                      />
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Special title treatment</h4>
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <p className="card-text text-muted ">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Go somewhere
                    </a>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-lg-4">
                <div className="card text-center">
                  <div className="card-header">
                    <h4 className="card-title">Special title treatment</h4>
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <p className="card-text text-muted ">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Go somewhere
                    </a>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-lg-4">
                <div className="card text-end">
                  <div className="card-header">
                    <h4 className="card-title">Special title treatment</h4>
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <p className="card-text text-muted ">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href="#" className="btn btn-primary btn-sm">
                      Go somewhere
                    </a>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row">
              <div className="col-lg-6">
                <div className="card-group mb-3">
                  <div className="card">
                    <img
                      className="img-fluid bg-light-alt"
                      src="assets/images/extra/card/ex-card.png"
                      alt="Card image"
                    />
                    <div className="card-header">
                      <h4 className="card-title">Card Groups</h4>
                    </div>
                    {/*end card-header*/}
                    <div className="card-body pt-0">
                      <p className="card-text">
                        This is a wider card supporting text below to content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                  <div className="card">
                    <img
                      className="img-fluid bg-light-alt"
                      src="assets/images/extra/card/ex-card.png"
                      alt="Card image"
                    />
                    <div className="card-header">
                      <h4 className="card-title">Card Groups</h4>
                    </div>
                    {/*end card-header*/}
                    <div className="card-body pt-0">
                      <p className="card-text">
                        This is a wider card supporting text below to content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                  <div className="card">
                    <img
                      className="img-fluid bg-light-alt"
                      src="assets/images/extra/card/ex-card.png"
                      alt="Card image"
                    />
                    <div className="card-header">
                      <h4 className="card-title">Card Groups</h4>
                    </div>
                    {/*end card-header*/}
                    <div className="card-body pt-0">
                      <p className="card-text">
                        This is a wider card supporting text below to content.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                </div>
                {/*end card-group*/}
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4 bg-light-alt align-self-center">
                      <img
                        src="assets/images/extra/card/ex-card.png"
                        alt="..."
                        className="img-fluid bg-light-alt"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text mb-0">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                        <p className="card-text mb-0">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
              <div className="col-lg-6">
                <div className="row row-cols-1 row-cols-md-2 gx-3">
                  <div className="col">
                    <div className="card">
                      <img
                        src="assets/images/extra/card/ex-card.png"
                        className="card-img-top bg-light-alt"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                  <div className="col">
                    <div className="card">
                      <img
                        src="assets/images/extra/card/ex-card.png"
                        className="card-img-top bg-light-alt"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                  <div className="col">
                    <div className="card">
                      <img
                        src="assets/images/extra/card/ex-card.png"
                        className="card-img-top bg-light-alt"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                  <div className="col">
                    <div className="card">
                      <img
                        src="assets/images/extra/card/ex-card.png"
                        className="card-img-top bg-light-alt"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
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

export default Uicards;
