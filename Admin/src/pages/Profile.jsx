import React from "react";
import Footer from "../common/Footer";

function Profile() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Profile</h4>
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
                      <li className="breadcrumb-item active">Profile</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body p-4  rounded text-center img-bg"></div>
                  {/*end card-body*/}
                  <div className="position-relative">
                    <div className="shape overflow-hidden text-card-bg">
                      <svg
                        viewBox="0 0 2880 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="card-body mt-n6">
                    <div className="row align-items-center">
                      <div className="col ">
                        <div className="d-flex align-items-center">
                          <div className="position-relative">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt
                              className="rounded-circle img-fluid"
                            />
                            <div className="position-absolute top-50 start-100 translate-middle">
                              <img
                                src="assets/images/flags/baha_flag.jpg"
                                alt
                                className="rounded-circle thumb-sm border border-3 border-white"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1 text-truncate ms-3 align-self-end">
                            <h5 className="m-0 fs-3 fw-bold">Karen Savage</h5>
                            <p className="text-muted mb-0">@karen</p>
                          </div>
                          {/*end media body*/}
                        </div>
                        {/*end media*/}
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className="row align-items-center">
                      <div className="col-lg-12">
                        <div className="mt-3">
                          <div className="text-body mb-2  d-flex align-items-center">
                            <i className="iconoir-language fs-20 me-1 text-muted" />
                            <span className="text-body fw-semibold">
                              Language :
                            </span>{" "}
                            English / French / Spanish
                          </div>
                          <div className="text-muted mb-2 d-flex align-items-center">
                            <i className="iconoir-mail-out fs-20 me-1" />
                            <span className="text-body fw-semibold">
                              Email :
                            </span>
                            <a
                              href="#"
                              className="text-primary text-decoration-underline"
                            >
                              example@example.com
                            </a>
                          </div>
                          <div className="text-body mb-3 d-flex align-items-center">
                            <i className="iconoir-phone fs-20 me-1 text-muted" />
                            <span className="text-body fw-semibold">
                              Phone :
                            </span>{" "}
                            +1 123 456 789
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary  d-inline-block"
                          >
                            Follow
                          </button>
                          <button
                            type="button"
                            className="btn btn-light  d-inline-block"
                          >
                            Hire Me
                          </button>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Personal Information</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <a
                          href="#"
                          className="float-end text-muted d-inline-flex text-decoration-underline"
                        >
                          <i className="iconoir-edit-pencil fs-18 me-1" />
                          Edit
                        </a>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <p className="text-muted fw-medium mb-3">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <div className="mb-3">
                      <span className="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                        Javascript
                      </span>
                      <span className="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                        Python
                      </span>
                      <span className="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                        Angular
                      </span>
                      <span className="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                        Reactjs
                      </span>
                      <span className="badge bg-transparent border border-light text-gray-700 fs-12 fw-medium mb-1">
                        Flutter
                      </span>
                    </div>
                    <ul className="list-unstyled mb-0">
                      <li className>
                        <i className="las la-birthday-cake me-2 text-secondary fs-22 align-middle" />{" "}
                        <b> Birth Date </b> : 06 June 1989
                      </li>
                      <li className="mt-2">
                        <i className="las la-briefcase me-2 text-secondary fs-22 align-middle" />{" "}
                        <b> Position </b> : Full Stack Developer
                      </li>
                      <li className="mt-2">
                        <i className="las la-university me-2 text-secondary fs-22 align-middle" />{" "}
                        <b> Education </b> : Stanford Univercity
                      </li>
                      <li className="mt-2">
                        <i className="las la-language me-2 text-secondary fs-22 align-middle" />{" "}
                        <b> Languages </b> : English, French, Spanish
                      </li>
                      <li className="mt-2">
                        <i className="las la-phone me-2 text-secondary fs-22 align-middle" />{" "}
                        <b> Phone </b> : +91 23456 78910
                      </li>
                      <li className="mt-2">
                        <i className="las la-envelope text-secondary fs-22 align-middle me-2" />{" "}
                        <b> Email </b> : mannat.theme@gmail.com
                      </li>
                    </ul>
                    <div className="row justify-content-center mt-4">
                      <div className="col-auto text-end border-end">
                        <span className="thumb-md justify-content-center d-flex align-items-center bg-blue text-white rounded-circle ms-auto mb-1">
                          <i className="fab fa-facebook-f" />
                        </span>
                        <p className="mb-0 fw-semibold">Facebook</p>
                        <h4 className="m-0 fw-bold">
                          25k{" "}
                          <span className="text-muted fs-12 fw-normal">
                            Followers
                          </span>
                        </h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <span className="thumb-md justify-content-center d-flex align-items-center bg-black text-white rounded-circle mb-1">
                          <i className="fab fa-x-twitter" />
                        </span>
                        <p className="mb-0 fw-semibold">Twitter</p>
                        <h4 className="m-0 fw-bold">
                          58k{" "}
                          <span className="text-muted fs-12 fw-normal">
                            Followers
                          </span>
                        </h4>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-8">
                <ul className="nav nav-tabs mb-3" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link fw-medium active"
                      data-bs-toggle="tab"
                      href="#post"
                      role="tab"
                      aria-selected="true"
                    >
                      Post
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fw-medium"
                      data-bs-toggle="tab"
                      href="#gallery"
                      role="tab"
                      aria-selected="false"
                    >
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link fw-medium"
                      data-bs-toggle="tab"
                      href="#settings"
                      role="tab"
                      aria-selected="false"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
                {/* Tab panes */}
                <div className="tab-content">
                  <div className="tab-pane active" id="post" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row d-flex justify-content-center">
                              <div className="col">
                                <p className="text-dark mb-1 fw-semibold">
                                  Views
                                </p>
                                <h3 className="my-2 fs-24 fw-bold">24k</h3>
                                <p className="mb-0 text-truncate text-muted">
                                  <i className="iconoir-bell text-warning fs-18" />
                                  <span className="text-dark fw-semibold">
                                    1500
                                  </span>{" "}
                                  New subscribers this week
                                </p>
                              </div>
                              <div className="col-auto align-self-center">
                                <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                                  <i className="iconoir-eye fs-30 align-self-center text-muted" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*end card-body*/}
                        </div>
                        {/*end card*/}
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="card">
                          <div className="card-body">
                            <div className="row d-flex justify-content-center">
                              <div className="col">
                                <p className="text-dark mb-1 fw-semibold">
                                  Comments
                                </p>
                                <h3 className="my-2 fs-24 fw-bold">15k</h3>
                                <p className="mb-0 text-truncate text-muted">
                                  <i className="ti ti-thumb-up text-success fs-18" />
                                  <span className="text-dark fw-semibold">
                                    854
                                  </span>{" "}
                                  New Like this week
                                </p>
                              </div>
                              <div className="col-auto align-self-center">
                                <div className="d-flex justify-content-center align-items-center thumb-xl bg-light rounded-circle mx-auto">
                                  <i className="iconoir-chat-lines fs-30 align-self-center text-muted" />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*end card-body*/}
                        </div>
                        {/*end card*/}
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
                                <div className="d-flex align-items-center">
                                  <img
                                    src="assets/images/users/avatar-10.jpg"
                                    className="thumb-md align-self-center rounded-circle"
                                    alt="..."
                                  />
                                  <div className="flex-grow-1 ms-2">
                                    <h5 className="m-0 fs-14">
                                      Anderson Vanhron
                                    </h5>
                                    <p className="text-muted mb-0 fs-12">
                                      online
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                              </div>
                              {/*end col*/}
                              <div className="col-auto">
                                <div className="d-none d-sm-inline-block align-self-center">
                                  <a
                                    href="#"
                                    className="me-2 text-muted"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Call"
                                    data-bs-custom-class="tooltip-primary"
                                  >
                                    <i className="iconoir-media-image fs-18" />
                                  </a>
                                  <a
                                    href="#"
                                    className="me-2 text-muted"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Attachment"
                                    data-bs-custom-class="tooltip-primary"
                                  >
                                    <i className="iconoir-attachment fs-18" />
                                  </a>
                                  <a
                                    href="#"
                                    className="me-2 text-muted"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Delete"
                                    data-bs-custom-class="tooltip-primary"
                                  >
                                    <i className="iconoir-calendar fs-18" />
                                  </a>
                                  <div className="dropdown d-inline-block">
                                    <a
                                      className="dropdown-toggle arrow-none text-muted"
                                      data-bs-toggle="dropdown"
                                      href="#"
                                      role="button"
                                      aria-haspopup="false"
                                      aria-expanded="true"
                                    >
                                      <i className="iconoir-more-vert fs-18" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end pb-0">
                                      <a className="dropdown-item" href="#">
                                        Profile
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Add archive
                                      </a>
                                      <a className="dropdown-item" href="#">
                                        Delete
                                      </a>
                                      <a
                                        className="dropdown-item text-danger"
                                        href="#"
                                      >
                                        Block
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/*end col*/}
                            </div>{" "}
                            {/*end row*/}
                          </div>
                          {/*end card-header*/}
                          <div className="card-body pt-0">
                            <form action="#">
                              <div className>
                                <textarea
                                  className="form-control mb-2"
                                  id="post-1"
                                  rows={5}
                                  placeholder="Write here.."
                                  defaultValue={""}
                                />
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Post
                                </button>
                              </div>
                            </form>
                          </div>
                          {/*end card-body*/}
                        </div>
                        {/*end card*/}
                      </div>
                      {/*end col*/}
                      <div className="col-12">
                        <div className="card">
                          <div className="card-body">
                            <img
                              src="assets/images/extra/card/post-1.jpg"
                              alt
                              className="img-fluid"
                            />
                            <div className="post-title mt-3">
                              <div className="row">
                                <div className="col">
                                  <span className="badge bg-primary-subtle text-primary">
                                    Natural
                                  </span>
                                </div>
                                {/*end col*/}
                                <div className="col-auto">
                                  <span className="text-muted">
                                    <i className="far fa-calendar me-1" />
                                    02 July 2024
                                  </span>
                                </div>
                                {/*end col*/}
                              </div>
                              {/*end row*/}
                              <h5
                                href="#"
                                className="fs-20 fw-bold d-block my-3"
                              >
                                There is nothing more beautiful than nature.
                              </h5>
                              <span className="fs-15 bg-light py-2 px-3 rounded">
                                Taking pictures is savouring life intensely.
                              </span>
                              <p className="fs-15 mt-3">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy.
                              </p>
                              <blockquote className="blockquote border-start ps-4">
                                <p className="fs-18">
                                  <i>
                                    "Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Integer posuere erat a
                                    ante."
                                  </i>
                                </p>
                                <footer className="blockquote-footer mt-1">
                                  Someone famous in{" "}
                                  <cite title="Source Title">Source Title</cite>
                                </footer>
                              </blockquote>
                              <p className="fs-15">
                                Taking pictures is savouring life intensely,
                                every hundredth of a second – Marc Riboud. Joy
                                in looking and comprehending is nature’s most
                                beautiful gift.
                              </p>
                              <p className="fs-15 mb-0">
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy.
                              </p>
                            </div>
                          </div>
                          <div className="card-body pt-0">
                            <div className="row mb-3">
                              <div className="col">
                                <p className="text-dark fw-semibold mb-0">
                                  Artical tags
                                </p>
                              </div>
                            </div>
                            <span className="badge bg-light text-dark px-3 py-2 fw-semibold">
                              Music
                            </span>
                            <span className="badge bg-light text-dark px-3 py-2 fw-semibold">
                              Animals
                            </span>
                            <span className="badge bg-light text-dark px-3 py-2 fw-semibold">
                              Natural
                            </span>
                            <span className="badge bg-light text-dark px-3 py-2 fw-semibold">
                              Food
                            </span>
                            <span className="badge bg-light text-dark px-3 py-2 fw-semibold">
                              Fashion
                            </span>
                            <span className="badge bg-light text-dark px-3 py-2 fw-semibold">
                              Helth
                            </span>
                            <span className="badge bg-light text-dark px-3 py-2 fw-semibold">
                              Charity
                            </span>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-body pb-0">
                            <div className="row">
                              <div className="col">
                                <p className="text-dark fw-semibold mb-0">
                                  Comments (205)
                                </p>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end card-body*/}
                          <div className="card-body border-bottom-dashed">
                            <ul className="list-unstyled mb-0">
                              <li>
                                <div className="row">
                                  <div className="col-auto">
                                    <img
                                      src="assets/images/users/avatar-2.jpg"
                                      alt
                                      className="thumb-md rounded-circle"
                                    />
                                  </div>
                                  {/*end col*/}
                                  <div className="col">
                                    <div className="bg-light rounded ms-n2 bg-light-alt p-3">
                                      <div className="row">
                                        <div className="col">
                                          <p className="text-dark fw-semibold mb-2">
                                            Martin Luther
                                          </p>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-auto">
                                          <span className="text-muted">
                                            <i className="far fa-clock me-1" />
                                            30 min ago
                                          </span>
                                        </div>
                                        {/*end col*/}
                                      </div>
                                      {/*end row*/}
                                      <p>
                                        It is a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout. The point of using Lorem
                                        Ipsum is that it has a more-or-less
                                        normal distribution of letters, as
                                        opposed to using 'Content here, content
                                        here', making it look like readable
                                        English.
                                      </p>
                                      <a href="#" className="text-primary">
                                        <i className="fas fa-reply me-1" />
                                        Replay
                                      </a>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                </div>
                                {/*end row*/}
                                <ul className="list-unstyled ms-5">
                                  <li>
                                    <div className="row mt-3">
                                      <div className="col-auto">
                                        <img
                                          src="assets/images/logo-sm.png"
                                          alt
                                          className="thumb-md rounded-circle"
                                        />
                                      </div>
                                      {/*end col*/}
                                      <div className="col">
                                        <div className="bg-light rounded ms-n2 bg-light-alt p-3">
                                          <div className="row">
                                            <div className="col">
                                              <p className="text-dark fw-semibold mb-2">
                                                Metrica Author
                                              </p>
                                            </div>
                                            {/*end col*/}
                                            <div className="col-auto">
                                              <span className="text-muted">
                                                <i className="far fa-clock me-1" />
                                                37 min ago
                                              </span>
                                            </div>
                                            {/*end col*/}
                                          </div>
                                          {/*end row*/}
                                          <p>
                                            It is a long established fact that a
                                            reader will be distracted by the
                                            readable content of a page when
                                            looking at its layout.
                                          </p>
                                          <p className="mb-0">Thank you</p>
                                        </div>
                                      </div>
                                      {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                  </li>
                                </ul>
                              </li>
                              <li className="mt-3">
                                <div className="row">
                                  <div className="col-auto">
                                    <img
                                      src="assets/images/users/avatar-1.jpg"
                                      alt
                                      className="thumb-md rounded-circle"
                                    />
                                  </div>
                                  {/*end col*/}
                                  <div className="col">
                                    <div className="bg-light rounded ms-n2 bg-light-alt p-3">
                                      <div className="row">
                                        <div className="col">
                                          <p className="text-dark fw-semibold mb-2">
                                            Joseph Rust
                                          </p>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-auto">
                                          <span className="text-muted">
                                            <i className="far fa-clock me-1" />
                                            40 min ago
                                          </span>
                                        </div>
                                        {/*end col*/}
                                      </div>
                                      {/*end row*/}
                                      <p>
                                        Is it a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout?
                                      </p>
                                      <a href="#" className="text-primary">
                                        <i className="fas fa-reply me-1" />
                                        Replay
                                      </a>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                </div>
                                {/*end row*/}
                              </li>
                              <li className="mt-3">
                                <div className="row">
                                  <div className="col-auto">
                                    <img
                                      src="assets/images/users/avatar-5.jpg"
                                      alt
                                      className="thumb-md rounded-circle"
                                    />
                                  </div>
                                  {/*end col*/}
                                  <div className="col">
                                    <div className="bg-light rounded ms-n2 bg-light-alt p-3">
                                      <div className="row">
                                        <div className="col">
                                          <p className="text-dark fw-semibold mb-2">
                                            Matt Rosales
                                          </p>
                                        </div>
                                        {/*end col*/}
                                        <div className="col-auto">
                                          <span className="text-muted">
                                            <i className="far fa-clock me-1" />
                                            40 min ago
                                          </span>
                                        </div>
                                        {/*end col*/}
                                      </div>
                                      {/*end row*/}
                                      <p>
                                        Is it a long established fact that a
                                        reader will be distracted by the
                                        readable content of a page when looking
                                        at its layout?
                                      </p>
                                      <a href="#" className="text-primary">
                                        <i className="fas fa-reply me-1" />
                                        Replay
                                      </a>
                                    </div>
                                  </div>
                                  {/*end col*/}
                                </div>
                                {/*end row*/}
                                <ul className="list-unstyled ms-5">
                                  <li>
                                    <div className="row mt-3">
                                      <div className="col-auto">
                                        <img
                                          src="assets/images/logo-sm.png"
                                          alt
                                          className="thumb-md rounded-circle"
                                        />
                                      </div>
                                      {/*end col*/}
                                      <div className="col">
                                        <div className="bg-light rounded ms-n2 bg-light-alt p-3">
                                          <div className="row">
                                            <div className="col">
                                              <p className="text-dark fw-semibold mb-2">
                                                Metrica Author
                                              </p>
                                            </div>
                                            {/*end col*/}
                                            <div className="col-auto">
                                              <span className="text-muted">
                                                <i className="far fa-clock me-1" />
                                                37 min ago
                                              </span>
                                            </div>
                                            {/*end col*/}
                                          </div>
                                          {/*end row*/}
                                          <p>
                                            It is a long established fact that a
                                            reader will be distracted by the
                                            readable content of a page when
                                            looking at its layout.
                                          </p>
                                          <p className="mb-0">Thank you</p>
                                        </div>
                                      </div>
                                      {/*end col*/}
                                    </div>
                                    {/*end row*/}
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          {/*end card-body*/}
                          <div className="card-body">
                            <div className="row">
                              <div className="col">
                                <p className="text-dark fw-semibold mb-0">
                                  Leave a comment
                                </p>
                              </div>
                              {/*end col*/}
                            </div>
                            {/*end row*/}
                          </div>
                          {/*end card-body*/}
                          <div className="card-body pt-0">
                            <form>
                              <div className="form-group mb-3">
                                <textarea
                                  className="form-control"
                                  rows={5}
                                  id="leave_comment"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="row">
                                <div className="col-sm-12 text-end">
                                  <button
                                    type="submit"
                                    className="btn btn-primary px-4"
                                  >
                                    Send Message
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                          {/*end card-body*/}
                        </div>{" "}
                        {/*end card*/}
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  <div className="tab-pane p-3" id="gallery" role="tabpanel">
                    <div id="grid" className="row g-0">
                      <div className="col-md-6 col-lg-4 picture-item">
                        <a
                          href="assets/images/extra/card/img-1.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-1.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-4 picture-item picture-item--overlay">
                        <a
                          href="assets/images/extra/card/img-2.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-2.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-4 picture-item">
                        <a
                          href="assets/images/extra/card/img-3.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-3.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-4 picture-item picture-item--h2">
                        <a
                          href="assets/images/extra/card/img-4.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-4.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-4 picture-item">
                        <a
                          href="assets/images/extra/card/img-5.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-5.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                      <div className="col-md-6 col-lg-4 picture-item picture-item--overlay">
                        <a
                          href="assets/images/extra/card/img-6.jpg"
                          className="lightbox"
                        >
                          <img
                            src="assets/images/extra/card/img-6.jpg"
                            alt
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane p-3" id="settings" role="tabpanel">
                    <div className="card">
                      <div className="card-header">
                        <div className="row align-items-center">
                          <div className="col">
                            <h4 className="card-title">Personal Information</h4>
                          </div>
                          {/*end col*/}
                        </div>{" "}
                        {/*end row*/}
                      </div>
                      {/*end card-header*/}
                      <div className="card-body pt-0">
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            First Name
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="Rosa"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            Last Name
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="Dodson"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            Company Name
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="MannatThemes"
                            />
                            <span className="form-text text-muted font-12">
                              We'll never share your email with anyone else.
                            </span>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            Contact Phone
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="las la-phone" />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={+123456789}
                                placeholder="Phone"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            Email Address
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="las la-at" />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="rosa.dodson@demo.com"
                                placeholder="Email"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            Website Link
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <div className="input-group">
                              <span className="input-group-text">
                                <i className="la la-globe" />
                              </span>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue=" https://mannatthemes.com/"
                                placeholder="Email"
                                aria-describedby="basic-addon1"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            USA
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <select className="form-select">
                              <option>London</option>
                              <option>India</option>
                              <option>USA</option>
                              <option>Canada</option>
                              <option>Thailand</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-lg-9 col-xl-8 offset-lg-3">
                            <button type="submit" className="btn btn-primary">
                              Submit
                            </button>
                            <button type="button" className="btn btn-danger">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Change Password</h4>
                      </div>
                      {/*end card-header*/}
                      <div className="card-body pt-0">
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            Current Password
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Password"
                            />
                            <a href="#" className="text-primary font-12">
                              Forgot password ?
                            </a>
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            New Password
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="New Password"
                            />
                          </div>
                        </div>
                        <div className="form-group mb-3 row">
                          <label className="col-xl-3 col-lg-3 text-end mb-lg-0 align-self-center form-label">
                            Confirm Password
                          </label>
                          <div className="col-lg-9 col-xl-8">
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Re-Password"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="col-lg-9 col-xl-8 offset-lg-3">
                            <button type="submit" className="btn btn-primary">
                              Change Password
                            </button>
                            <button type="button" className="btn btn-danger">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Other Settings</h4>
                      </div>
                      {/*end card-header*/}
                      <div className="card-body pt-0">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="Email_Notifications"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="Email_Notifications"
                          >
                            Email Notifications
                          </label>
                          <span className="form-text text-muted fs-12 mt-0">
                            Do you need them?
                          </span>
                        </div>
                        <div className="form-check mt-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="API_Access"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="API_Access"
                          >
                            API Access
                          </label>
                          <span className="form-text text-muted font-12 mt-0">
                            Enable/Disable access
                          </span>
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                </div>
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

export default Profile;
