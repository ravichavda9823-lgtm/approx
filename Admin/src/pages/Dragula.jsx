import React from "react";
import Footer from "../common/Footer";

function Dragula() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Dragula</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Advanced UI</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Dragula</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-4 col-lg-4">
                <div className="border-dashed border-theme-color rounded">
                  <div className="card bg-light ">
                    <div className="card-body border-dashed-bottom border-theme-color">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary px-2 d-inline-flex align-items-center float-end"
                      >
                        <i className="iconoir-chat-bubble fs-14 me-1" />
                        Message
                      </button>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            alt
                            className="rounded-circle thumb-xxl mx-auto d-inline-block"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h5 className="m-0 fw-bold">Carol Maier</h5>
                          <p className="text-muted mb-0">@carol</p>
                        </div>
                      </div>
                      <div className="row mt-3 align-items-center">
                        <div className="col-12">
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
                          <div className="text-body  d-flex align-items-center">
                            <i className="iconoir-phone fs-20 me-1 text-muted" />
                            <span className="text-body fw-semibold">
                              Phone :
                            </span>{" "}
                            +1 123 456 789
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                  <div id="project-list-start" className="p-3 pt-0">
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-success bg-transparent border border-primary">
                            In Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-3 pb-2 border-dashed-bottom">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/meta.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">Meta App</h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>Aaron
                              Poulin
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="d-flex justify-content-between fw-semibold align-items-center  my-3">
                          <div className="img-group d-flex justify-content-center">
                            <a
                              className="user-avatar position-relative d-inline-block"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              className="user-avatar position-relative d-inline-block ms-n2"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              className="user-avatar position-relative d-inline-block ms-n2"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-6.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              href="#"
                              className="user-avatar position-relative d-inline-block ms-1"
                            >
                              <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                                +6
                              </span>
                            </a>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm px-3"
                          >
                            Details
                          </button>
                        </div>
                        <div className>
                          <div className="d-flex justify-content-between fw-semibold align-items-center">
                            <p className="mb-1 d-inline-flex align-items-center">
                              <i className="iconoir-task-list fs-18 text-muted me-1" />
                              91 Tasks
                            </p>
                            <small className="text-end text-body-emphasis d-block ms-auto">
                              70%
                            </small>
                          </div>
                          <div
                            className="progress bg-secondary-subtle"
                            style={{ height: 5 }}
                          >
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "15%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "30%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "20%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="row mt-3 align-items-center">
                            <div className="col-auto col-md-5">
                              <div className="text-start">
                                <h5 className="fs-16 fw-semibold mb-0">
                                  $33,100
                                </h5>
                                <p className="mb-0  text-muted">Total Budget</p>
                              </div>
                            </div>
                            <div className="col col-md-7 text-end align-self-center">
                              <h6 className="fw-normal text-muted fs-12 mb-1">
                                Start :{" "}
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  08 Dec 2023
                                </span>
                              </h6>
                              <h6 className="fw-normal text-muted mb-0 fs-12">
                                Deadline :{" "}
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  28 Fab 2024
                                </span>
                              </h6>
                            </div>
                            {/*end col*/}
                          </div>{" "}
                          {/*end row*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-success bg-transparent border border-primary">
                            90%
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/nextjs.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">
                              Nextjs Developer
                            </h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>
                              Richard Ali
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-success bg-transparent border border-primary">
                            90%
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/reactjs.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">
                              Reactjs Developer
                            </h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>
                              Crystal Darling
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-success bg-transparent border border-primary">
                            In Progress
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-3 pb-2 border-dashed-bottom">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/chatgpt.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">AI App</h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>
                              Charles Fang
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="d-flex justify-content-between fw-semibold align-items-center  my-3">
                          <div className="img-group d-flex justify-content-center">
                            <a
                              className="user-avatar position-relative d-inline-block"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-2.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              className="user-avatar position-relative d-inline-block ms-n2"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-1.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              className="user-avatar position-relative d-inline-block ms-n2"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-9.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              href="#"
                              className="user-avatar position-relative d-inline-block ms-1"
                            >
                              <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                                +3
                              </span>
                            </a>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm px-3"
                          >
                            Details
                          </button>
                        </div>
                        <div className>
                          <div className="d-flex justify-content-between fw-semibold align-items-center">
                            <p className="mb-1 d-inline-flex align-items-center">
                              <i className="iconoir-task-list fs-18 text-muted me-1" />
                              22 Tasks
                            </p>
                            <small className="text-end text-body-emphasis d-block ms-auto">
                              80%
                            </small>
                          </div>
                          <div
                            className="progress bg-secondary-subtle"
                            style={{ height: 5 }}
                          >
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "30%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "30%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "20%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="row mt-3 align-items-center">
                            <div className="col-auto col-md-5">
                              <div className="text-start">
                                <h5 className="fs-16 fw-semibold mb-0">
                                  $42,400
                                </h5>
                                <p className="mb-0  text-muted">Total Budget</p>
                              </div>
                            </div>
                            <div className="col col-md-7 text-end align-self-center">
                              <h6 className="fw-normal text-muted fs-12 mb-1">
                                Start :{" "}
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  10 Mar 2023
                                </span>
                              </h6>
                              <h6 className="fw-normal text-muted mb-0 fs-12">
                                Deadline :{" "}
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  15 Jan 2024
                                </span>
                              </h6>
                            </div>
                            {/*end col*/}
                          </div>{" "}
                          {/*end row*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end project-list-start*/}
                </div>
                {/*end div*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-4 col-lg-4">
                <div className="border-dashed border-theme-color rounded">
                  <div className="card bg-light ">
                    <div className="card-body border-dashed-bottom border-theme-color">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary px-2 d-inline-flex align-items-center float-end"
                      >
                        <i className="iconoir-chat-bubble fs-14 me-1" />
                        Message
                      </button>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/users/avatar-8.jpg"
                            alt
                            className="rounded-circle thumb-xxl mx-auto d-inline-block"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h5 className="m-0 fw-bold">Thomas Milligan</h5>
                          <p className="text-muted mb-0">@thomas</p>
                        </div>
                      </div>
                      <div className="row mt-3 align-items-center">
                        <div className="col-12">
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
                          <div className="text-body  d-flex align-items-center">
                            <i className="iconoir-phone fs-20 me-1 text-muted" />
                            <span className="text-body fw-semibold">
                              Phone :
                            </span>{" "}
                            +1 123 456 789
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                  <div id="project-list-center" className="p-3 pt-0">
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-success bg-transparent border border-primary">
                            90%
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/nextjs.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">
                              Nextjs Developer
                            </h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>Wendy
                              Keen
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-success bg-transparent border border-primary">
                            70%
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/nodejs.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">
                              Nodejs Developer
                            </h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>Jack
                              Jackson
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-warning bg-transparent border border-warning">
                            Pending
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-3 pb-2 border-dashed-bottom">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/gitlab.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">Gitlab App</h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>
                              Marvin Turner
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="d-flex justify-content-between fw-semibold align-items-center  my-3">
                          <div className="img-group d-flex justify-content-center">
                            <a
                              className="user-avatar position-relative d-inline-block"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              className="user-avatar position-relative d-inline-block ms-n2"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              href="#"
                              className="user-avatar position-relative d-inline-block ms-1"
                            >
                              <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                                +2
                              </span>
                            </a>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm px-3"
                          >
                            Details
                          </button>
                        </div>
                        <div className>
                          <div className="d-flex justify-content-between fw-semibold align-items-center">
                            <p className="mb-1 d-inline-flex align-items-center">
                              <i className="iconoir-task-list fs-18 text-muted me-1" />
                              28 Tasks
                            </p>
                            <small className="text-end text-body-emphasis d-block ms-auto">
                              50%
                            </small>
                          </div>
                          <div
                            className="progress bg-secondary-subtle"
                            style={{ height: 5 }}
                          >
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "15%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "15%" }}
                              aria-valuenow={15}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "20%" }}
                              aria-valuenow={20}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="row mt-3 align-items-center">
                            <div className="col-auto col-md-5">
                              <div className="text-start">
                                <h5 className="fs-16 fw-semibold mb-0">
                                  $14,830
                                </h5>
                                <p className="mb-0  text-muted">Total Budget</p>
                              </div>
                            </div>
                            <div className="col col-md-7 text-end align-self-center">
                              <h6 className="fw-normal text-muted fs-12 mb-1">
                                Start :{" "}
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  02 Jan 2024
                                </span>
                              </h6>
                              <h6 className="fw-normal text-muted mb-0 fs-12">
                                Deadline :{" "}
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  01 Jul 2024
                                </span>
                              </h6>
                            </div>
                            {/*end col*/}
                          </div>{" "}
                          {/*end row*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-success bg-transparent border border-primary">
                            60%
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/vue.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">
                              Vuejs Developer
                            </h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>
                              Robert Kipp
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end project-list-start*/}
                </div>
                {/*end div*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-4 col-lg-4">
                <div className="border-dashed border-theme-color rounded">
                  <div className="card bg-light ">
                    <div className="card-body border-dashed-bottom border-theme-color">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-primary px-2 d-inline-flex align-items-center float-end"
                      >
                        <i className="iconoir-chat-bubble fs-14 me-1" />
                        Message
                      </button>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/users/avatar-7.jpg"
                            alt
                            className="rounded-circle thumb-xxl mx-auto d-inline-block"
                          />
                        </div>
                        <div className="flex-grow-1 ms-2 text-truncate">
                          <h5 className="m-0 fw-bold">Juan Clark</h5>
                          <p className="text-muted mb-0">@juan</p>
                        </div>
                      </div>
                      <div className="row mt-3 align-items-center">
                        <div className="col-12">
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
                          <div className="text-body  d-flex align-items-center">
                            <i className="iconoir-phone fs-20 me-1 text-muted" />
                            <span className="text-body fw-semibold">
                              Phone :
                            </span>{" "}
                            +1 123 456 789
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*end card-body*/}
                  </div>
                  {/*end card*/}
                  <div id="project-list-end" className="p-3 pt-0">
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-success bg-transparent border border-primary">
                            90%
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/symfony.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">
                              Symfony Developer
                            </h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>
                              Willie Miller
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-danger bg-transparent border border-danger">
                            Complated
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-3 pb-2 border-dashed-bottom">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/slack.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">Slack App</h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>Nancy
                              Perdue
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                        <div className="d-flex justify-content-between fw-semibold align-items-center  my-3">
                          <div className="img-group d-flex justify-content-center">
                            <a
                              className="user-avatar position-relative d-inline-block"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-8.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              className="user-avatar position-relative d-inline-block ms-n2"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-7.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              className="user-avatar position-relative d-inline-block ms-n2"
                              href="#"
                            >
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt="avatar"
                                className="thumb-md shadow-sm rounded-circle"
                              />
                            </a>
                            <a
                              href="#"
                              className="user-avatar position-relative d-inline-block ms-1"
                            >
                              <span className="thumb-md shadow-sm justify-content-center d-flex align-items-center bg-info-subtle rounded-circle fw-semibold fs-6">
                                +2
                              </span>
                            </a>
                          </div>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm px-3"
                          >
                            Details
                          </button>
                        </div>
                        <div className>
                          <div className="d-flex justify-content-between fw-semibold align-items-center">
                            <p className="mb-1 d-inline-flex align-items-center">
                              <i className="iconoir-task-list fs-18 text-muted me-1" />
                              52 Tasks
                            </p>
                            <small className="text-end text-body-emphasis d-block ms-auto">
                              100%
                            </small>
                          </div>
                          <div
                            className="progress bg-secondary-subtle"
                            style={{ height: 5 }}
                          >
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "40%" }}
                              aria-valuenow={40}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "30%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                            <div
                              className="progress-bar bg-secondary rounded-pill"
                              role="progressbar"
                              style={{ marginRight: 2, width: "30%" }}
                              aria-valuenow={30}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <div className="row mt-3 align-items-center">
                            <div className="col-auto col-md-5">
                              <div className="text-start">
                                <h5 className="fs-16 fw-semibold mb-0">
                                  $22,500
                                </h5>
                                <p className="mb-0  text-muted">Total Budget</p>
                              </div>
                            </div>
                            <div className="col col-md-7 text-end align-self-center">
                              <h6 className="fw-normal text-muted fs-12 mb-1">
                                Start :{" "}
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  20 Dec 2023
                                </span>
                              </h6>
                              <h6 className="fw-normal text-muted mb-0 fs-12">
                                Deadline :{" "}
                                <span className="text-dark fw-semibold">
                                  {" "}
                                  30 Aug 2024
                                </span>
                              </h6>
                            </div>
                            {/*end col*/}
                          </div>{" "}
                          {/*end row*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                    <div className="card">
                      <div className="card-body">
                        <div className="position-absolute  end-0 me-3">
                          <span className="badge rounded text-success bg-transparent border border-primary">
                            90%
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              src="assets/images/logos/lang-logo/python.png"
                              alt
                              height={50}
                              className="rounded-circle d-inline-block"
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 text-truncate">
                            <h5 className="fw-bold mb-1 fs-15">
                              Python Developer
                            </h5>
                            <p className="text-dark mb-0 fs-13 fw-semibold">
                              <span className="text-muted">Client : </span>
                              Joseph Cate
                            </p>
                          </div>
                          {/*end media-body*/}
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end project-list-start*/}
                </div>
                {/*end div*/}
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

export default Dragula;
