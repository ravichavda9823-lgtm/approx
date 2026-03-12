import React from "react";
import Footer from "../common/Footer";

function Chat() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Chat</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Apps</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Chat</li>
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
                <div className="chat-box-left">
                  <ul
                    className="nav nav-tabs nav-justified"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link py-2 active"
                        id="messages_chat_tab"
                        data-bs-toggle="tab"
                        href="#messages_chat"
                        role="tab"
                      >
                        Messages
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link py-2"
                        id="active_chat_tab"
                        data-bs-toggle="tab"
                        href="#active_chat"
                        role="tab"
                      >
                        Active
                      </a>
                    </li>
                  </ul>
                  <div className="chat-search p-3">
                    <div className="p-1 bg-secondary-subtle rounded rounded-pill">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <button
                            id="button-addon2"
                            type="submit"
                            className="btn btn-link text-secondary"
                          >
                            <i className="fa fa-search" />
                          </button>
                        </div>
                        <input
                          type="search"
                          placeholder="Searching.."
                          aria-describedby="button-addon2"
                          className="form-control border-0 bg-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  {/*end chat-search*/}
                  <div className="chat-body-left px-3" data-simplebar>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="messages_chat"
                      >
                        <div className="row">
                          <div className="col">
                            <div className="p-2 border-dashed border-theme-color rounded mb-2">
                              <a href="#" className>
                                <div className="d-flex align-items-start">
                                  <div className="position-relative">
                                    <img
                                      src="assets/images/users/avatar-1.jpg"
                                      alt
                                      className="thumb-lg rounded-circle"
                                    />
                                    <span className="position-absolute bottom-0 end-0">
                                      <i className="fa-solid fa-circle text-success fs-10 border-2 border-theme-color" />
                                    </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                    <h6 className="my-0 fw-medium text-dark fs-14">
                                      Daniel Madsen
                                      <small className="float-end text-muted fs-11">
                                        5 min age
                                      </small>
                                    </h6>
                                    <p className="text-muted mb-0">
                                      <span className="text-primary fs-12">
                                        Typing...
                                      </span>
                                      <span className="badge float-end rounded text-white bg-success ">
                                        3
                                      </span>
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                                {/*end media*/}
                              </a>{" "}
                              {/*end*/}
                            </div>
                            {/*end div*/}
                            <div className="p-2 border-dashed border-theme-color rounded mb-2">
                              <a href="#" className>
                                <div className="d-flex align-items-start">
                                  <div className="position-relative">
                                    <img
                                      src="assets/images/users/avatar-2.jpg"
                                      alt
                                      className="thumb-lg rounded-circle"
                                    />
                                    <span className="position-absolute bottom-0 end-0">
                                      <i className="fa-solid fa-circle text-secondary fs-10 border-2 border-theme-color" />
                                    </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                    <h6 className="my-0 fw-medium text-dark fs-14">
                                      James Andrews
                                      <small className="float-end text-muted fs-11">
                                        30 min ago
                                      </small>
                                    </h6>
                                    <p className="text-muted mb-0">
                                      Amazing Work!! 🔥
                                      <span className="badge float-end rounded text-white bg-success ">
                                        1
                                      </span>
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                                {/*end media*/}
                              </a>{" "}
                              {/*end*/}
                            </div>
                            {/*end div*/}
                            <div className="p-2 border-dashed border-theme-color rounded mb-2">
                              <a href="#" className>
                                <div className="d-flex align-items-start">
                                  <div className="position-relative">
                                    <img
                                      src="assets/images/users/avatar-3.jpg"
                                      alt
                                      className="thumb-lg rounded-circle"
                                    />
                                    <span className="position-absolute bottom-0 end-0">
                                      <i className="fa-solid fa-circle text-secondary fs-10 border-2 border-theme-color" />
                                    </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                    <h6 className="my-0 fw-medium text-dark fs-14">
                                      Shauna Jones
                                      <small className="float-end text-muted fs-11">
                                        Yesterday
                                      </small>
                                    </h6>
                                    <p className="text-muted mb-0">
                                      Congratulations!
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                                {/*end media*/}
                              </a>{" "}
                              {/*end*/}
                            </div>
                            {/*end div*/}
                            <div className="p-2 border-dashed border-theme-color rounded mb-2">
                              <a href="#" className>
                                <div className="d-flex align-items-start">
                                  <div className="position-relative">
                                    <img
                                      src="assets/images/users/avatar-4.jpg"
                                      alt
                                      className="thumb-lg rounded-circle"
                                    />
                                    <span className="position-absolute bottom-0 end-0">
                                      <i className="fa-solid fa-circle text-success fs-10 border-2 border-theme-color" />
                                    </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                    <h6 className="my-0 fw-medium text-dark fs-14">
                                      Frank Wei
                                      <small className="float-end text-muted fs-11">
                                        1 Feb
                                      </small>
                                    </h6>
                                    <p className="text-muted mb-0">
                                      <i className="iconoir-microphone" /> Voice
                                      message!
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                                {/*end media*/}
                              </a>{" "}
                              {/*end*/}
                            </div>
                            {/*end div*/}
                            <div className="p-2 border-dashed border-theme-color rounded mb-2">
                              <a href="#" className>
                                <div className="d-flex align-items-start">
                                  <div className="position-relative">
                                    <img
                                      src="assets/images/users/avatar-5.jpg"
                                      alt
                                      className="thumb-lg rounded-circle"
                                    />
                                    <span className="position-absolute bottom-0 end-0">
                                      <i className="fa-solid fa-circle text-secondary fs-10 border-2 border-theme-color" />
                                    </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                    <h6 className="my-0 fw-medium text-dark fs-14">
                                      Karen Savage
                                      <small className="float-end text-muted fs-11">
                                        8 Feb
                                      </small>
                                    </h6>
                                    <p className="text-muted mb-0">
                                      Ok, I like it. 👍
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                                {/*end media*/}
                              </a>{" "}
                              {/*end*/}
                            </div>
                            {/*end div*/}
                            <div className="p-2 border-dashed border-theme-color rounded mb-2">
                              <a href="#" className>
                                <div className="d-flex align-items-start">
                                  <div className="position-relative">
                                    <img
                                      src="assets/images/users/avatar-6.jpg"
                                      alt
                                      className="thumb-lg rounded-circle"
                                    />
                                    <span className="position-absolute bottom-0 end-0">
                                      <i className="fa-solid fa-circle text-secondary fs-10 border-2 border-theme-color" />
                                    </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                    <h6 className="my-0 fw-medium text-dark fs-14">
                                      Carol Maier
                                      <small className="float-end text-muted fs-11">
                                        12 Feb
                                      </small>
                                    </h6>
                                    <p className="text-muted mb-0">
                                      Send a pic.!
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                                {/*end media*/}
                              </a>{" "}
                              {/*end*/}
                            </div>
                            {/*end div*/}
                            <div className="p-2 border-dashed border-theme-color rounded mb-2">
                              <a href="#" className>
                                <div className="d-flex align-items-start">
                                  <div className="position-relative">
                                    <img
                                      src="assets/images/users/avatar-3.jpg"
                                      alt
                                      className="thumb-lg rounded-circle"
                                    />
                                    <span className="position-absolute bottom-0 end-0">
                                      <i className="fa-solid fa-circle text-secondary fs-10 border-2 border-theme-color" />
                                    </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                    <h6 className="my-0 fw-medium text-dark fs-14">
                                      Shauna Jones
                                      <small className="float-end text-muted fs-11">
                                        15 Feb
                                      </small>
                                    </h6>
                                    <p className="text-muted mb-0">
                                      Congratulations!
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                                {/*end media*/}
                              </a>{" "}
                              {/*end*/}
                            </div>
                            {/*end div*/}
                            <div className="p-2 border-dashed border-theme-color rounded mb-2">
                              <a href="#" className>
                                <div className="d-flex align-items-start">
                                  <div className="position-relative">
                                    <img
                                      src="assets/images/users/avatar-5.jpg"
                                      alt
                                      className="thumb-lg rounded-circle"
                                    />
                                    <span className="position-absolute bottom-0 end-0">
                                      <i className="fa-solid fa-circle text-secondary fs-10 border-2 border-theme-color" />
                                    </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                    <h6 className="my-0 fw-medium text-dark fs-14">
                                      Frank Wei
                                      <small className="float-end text-muted fs-11">
                                        2 Mar
                                      </small>
                                    </h6>
                                    <p className="text-muted mb-0">
                                      <i className="iconoir-microphone" /> Voice
                                      message!
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                                {/*end media*/}
                              </a>{" "}
                              {/*end*/}
                            </div>
                            {/*end div*/}
                            <div className="p-2 border-dashed border-theme-color rounded mb-2">
                              <a href="#" className>
                                <div className="d-flex align-items-start">
                                  <div className="position-relative">
                                    <img
                                      src="assets/images/users/avatar-6.jpg"
                                      alt
                                      className="thumb-lg rounded-circle"
                                    />
                                    <span className="position-absolute bottom-0 end-0">
                                      <i className="fa-solid fa-circle text-secondary fs-10 border-2 border-theme-color" />
                                    </span>
                                  </div>
                                  <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                    <h6 className="my-0 fw-medium text-dark fs-14">
                                      Carol Maier
                                      <small className="float-end text-muted fs-11">
                                        14 Mar
                                      </small>
                                    </h6>
                                    <p className="text-muted mb-0">
                                      Send a pic.!
                                    </p>
                                  </div>
                                  {/*end media-body*/}
                                </div>
                                {/*end media*/}
                              </a>{" "}
                              {/*end*/}
                            </div>
                            {/*end div*/}
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end general chat*/}
                      <div className="tab-pane fade" id="active_chat">
                        <div className="p-2 border-dashed border-theme-color rounded mb-2">
                          <a href="#" className>
                            <div className="d-flex align-items-start">
                              <div className="position-relative">
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  alt
                                  className="thumb-lg rounded-circle"
                                />
                                <span className="position-absolute bottom-0 end-0">
                                  <i className="fa-solid fa-circle text-success fs-10 border-2 border-theme-color" />
                                </span>
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                <h6 className="my-0 fw-medium text-dark fs-14">
                                  Shauna Jones
                                  <small className="float-end text-muted fs-11">
                                    15 Feb
                                  </small>
                                </h6>
                                <p className="text-muted mb-0">
                                  Congratulations!
                                </p>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>{" "}
                          {/*end*/}
                        </div>
                        {/*end div*/}
                        <div className="p-2 border-dashed border-theme-color rounded mb-2">
                          <a href="#" className>
                            <div className="d-flex align-items-start">
                              <div className="position-relative">
                                <img
                                  src="assets/images/users/avatar-5.jpg"
                                  alt
                                  className="thumb-lg rounded-circle"
                                />
                                <span className="position-absolute bottom-0 end-0">
                                  <i className="fa-solid fa-circle text-success fs-10 border-2 border-theme-color" />
                                </span>
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                <h6 className="my-0 fw-medium text-dark fs-14">
                                  Frank Wei
                                  <small className="float-end text-muted fs-11">
                                    2 Mar
                                  </small>
                                </h6>
                                <p className="text-muted mb-0">
                                  <i className="iconoir-microphone" /> Voice
                                  message!
                                </p>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>{" "}
                          {/*end*/}
                        </div>
                        {/*end div*/}
                        <div className="p-2 border-dashed border-theme-color rounded mb-2">
                          <a href="#" className>
                            <div className="d-flex align-items-start">
                              <div className="position-relative">
                                <img
                                  src="assets/images/users/avatar-6.jpg"
                                  alt
                                  className="thumb-lg rounded-circle"
                                />
                                <span className="position-absolute bottom-0 end-0">
                                  <i className="fa-solid fa-circle text-success fs-10 border-2 border-theme-color" />
                                </span>
                              </div>
                              <div className="flex-grow-1 ms-2 text-truncate align-self-center">
                                <h6 className="my-0 fw-medium text-dark fs-14">
                                  Carol Maier
                                  <small className="float-end text-muted fs-11">
                                    14 Mar
                                  </small>
                                </h6>
                                <p className="text-muted mb-0">Send a pic.!</p>
                              </div>
                              {/*end media-body*/}
                            </div>
                            {/*end media*/}
                          </a>{" "}
                          {/*end*/}
                        </div>
                        {/*end div*/}
                      </div>
                      {/*end group chat*/}
                    </div>
                    {/*end tab-content*/}
                  </div>
                </div>
                {/*end chat-box-left */}
                <div className="chat-box-right">
                  <div className="p-3 d-flex justify-content-between card-bg rounded">
                    <a href="#" className="d-flex align-self-center">
                      <div className="flex-shrink-0">
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          alt="user"
                          className="rounded-circle thumb-lg"
                        />
                      </div>
                      {/* media-left */}
                      <div className="flex-grow-1 ms-2 align-self-center">
                        <div>
                          <h6 className="my-0 fw-medium text-dark fs-14">
                            Mary Schneider
                          </h6>
                          <p className="text-muted mb-0">
                            Last seen: 2 hours ago
                          </p>
                        </div>
                      </div>
                      {/* end media-body */}
                    </a>
                    {/*end media*/}
                    <div className="d-none d-sm-inline-block align-self-center">
                      <a
                        href="#"
                        className="me-2 text-muted"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Call"
                        data-bs-custom-class="tooltip-primary"
                      >
                        <i className="iconoir-phone fs-22" />
                      </a>
                      <a
                        href="#"
                        className="me-2 text-muted"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Video call"
                        data-bs-custom-class="tooltip-primary"
                      >
                        <i className="iconoir-video-camera fs-22" />
                      </a>
                      <a
                        href="#"
                        className="me-2 text-muted"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Delete"
                        data-bs-custom-class="tooltip-primary"
                      >
                        <i className="iconoir-trash fs-22" />
                      </a>
                      <a href="#" className="text-muted">
                        <i className="iconoir-menu-scale fs-22" />
                      </a>
                    </div>
                  </div>
                  {/* end chat-header */}
                  <div className="chat-body" data-simplebar>
                    <div className="chat-detail">
                      <div className="d-flex">
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          alt="user"
                          className="rounded-circle thumb-md"
                        />
                        <div className="ms-1 chat-box w-100">
                          <div className="user-chat">
                            <p className>Good Morning !</p>
                            <p className>
                              There are many variations of passages of Lorem
                              Ipsum available.
                            </p>
                          </div>
                          <div className="chat-time">yesterday</div>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                      <div className="d-flex flex-row-reverse">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt="user"
                          className="rounded-circle thumb-md"
                        />
                        <div className="me-1 chat-box w-100 reverse">
                          <div className="user-chat">
                            <p className>Hi,</p>
                            <p className>
                              Can be verified on any platform using docker?
                            </p>
                          </div>
                          <div className="chat-time">12:35pm</div>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                      <div className="d-flex">
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          alt="user"
                          className="rounded-circle thumb-md"
                        />
                        <div className="ms-1 chat-box w-100">
                          <div className="user-chat">
                            <p className>Have a nice day !</p>
                            <p className>
                              Command was run with root privileges. I'm sure
                              about that.
                            </p>
                            <p className>ok</p>
                          </div>
                          <div className="chat-time">11:10pm</div>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                      <div className="d-flex flex-row-reverse">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt="user"
                          className="rounded-circle thumb-md"
                        />
                        <div className="me-1 chat-box w-100 reverse">
                          <div className="user-chat">
                            <p className>
                              Thanks for your message David. I thought I'm alone
                              with this issue. Please, 👍 the issue to support
                              it :)
                            </p>
                          </div>
                          <div className="chat-time">10:10pm</div>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                      <div className="d-flex">
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          alt="user"
                          className="rounded-circle thumb-md"
                        />
                        <div className="ms-1 chat-box w-100">
                          <div className="user-chat">
                            <p className>Sorry, I just back !</p>
                            <p className>
                              It seems like you are from Mac OS world. There is
                              no /Users/ folder on linux 😄
                            </p>
                          </div>
                          <div className="chat-time">11:15am</div>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                      <div className="d-flex flex-row-reverse">
                        <img
                          src="assets/images/users/avatar-3.jpg"
                          alt="user"
                          className="rounded-circle thumb-md"
                        />
                        <div className="me-1 chat-box w-100 reverse">
                          <div className="user-chat">
                            <p className>Good Morning !</p>
                            <p className>
                              There are many variations of passages of Lorem
                              Ipsum available.
                            </p>
                          </div>
                          <div className="chat-time">9:02am</div>
                        </div>
                        {/*end media-body*/}
                      </div>
                      {/*end media*/}
                    </div>{" "}
                    {/* end chat-detail */}
                  </div>
                  {/* end chat-body */}
                  <div className="chat-footer">
                    <div className="row">
                      <div className="col-12 col-md-8">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type something here..."
                        />
                      </div>
                      {/* col-8 */}
                      <div className="col-4 text-end">
                        <div className="d-none d-sm-inline-block chat-features">
                          <a href="#">
                            <i className="iconoir-camera" />
                          </a>
                          <a href="#">
                            <i className="iconoir-attachment" />
                          </a>
                          <a href="#">
                            <i className="iconoir-microphone" />
                          </a>
                          <a href="#" className="text-primary">
                            <i className="iconoir-send-solid" />
                          </a>
                        </div>
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                  </div>
                  {/* end chat-footer */}
                </div>
                {/*end chat-box-right */}
              </div>{" "}
              {/* end col */}
            </div>
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

export default Chat;
