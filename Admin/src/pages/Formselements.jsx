import React from "react";
import Footer from "../common/Footer";

function Formselements() {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Elements</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item">
                        <a href="#">Forms</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Elements</li>
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
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Textual Inputs</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-text-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Text
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="text"
                              defaultValue="Artisanal kale"
                              id="example-text-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-email-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="email"
                              defaultValue="bootstrap@example.com"
                              id="example-email-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-tel-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Telephone
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="tel"
                              defaultValue="1-(555)-555-5555"
                              id="example-tel-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-password-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Password
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="password"
                              defaultValue="hunter2"
                              id="example-password-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-number-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Number
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="number"
                              defaultValue={42}
                              id="example-number-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-datetime-local-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Date and time
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="datetime-local"
                              defaultValue="2011-08-19T13:45:00"
                              id="example-datetime-local-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="exampleColorInput"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Color
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="color"
                              className="form-control form-control-color"
                              id="exampleColorInput"
                              defaultValue="#0b51b7"
                              title="Choose your color"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label className="col-sm-2 col-form-label text-end">
                            Select
                          </label>
                          <div className="col-sm-10">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Open this select menu</option>
                              <option value={1}>One</option>
                              <option value={2}>Two</option>
                              <option value={3}>Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-text-input-lg"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Large
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control form-control-lg"
                              type="text"
                              placeholder=".form-control-lg"
                              id="example-text-input-lg"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-text-input-sm"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Small
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              placeholder=".form-control-sm"
                              id="example-text-input-sm"
                            />
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6">
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-search-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Search
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="search"
                              defaultValue="How do I shoot web"
                              id="example-search-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-url-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            URL
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="url"
                              defaultValue="https://getbootstrap.com"
                              id="example-url-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-date-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Date
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="date"
                              defaultValue="2011-08-19"
                              id="example-date-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-month-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Month
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="month"
                              defaultValue="2011-08"
                              id="example-month-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-week-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Week
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="week"
                              defaultValue="2011-W33"
                              id="example-week-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row">
                          <label
                            htmlFor="example-time-input"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Time
                          </label>
                          <div className="col-sm-10">
                            <input
                              className="form-control"
                              type="time"
                              defaultValue="13:45:00"
                              id="example-time-input"
                            />
                          </div>
                        </div>
                        <div className="mb-3 row has-warning">
                          <label
                            htmlFor="inputHorizontalWarning"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              className="form-control form-control-warning"
                              id="inputHorizontalWarning"
                              placeholder="name@example.com"
                            />
                            <small className="form-text text-muted">
                              Example help text that remains unchanged.
                            </small>
                          </div>
                        </div>
                        <div className="mb-3 row has-success">
                          <label
                            htmlFor="inputHorizontalSuccess"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              className="form-control is-valid"
                              id="inputHorizontalSuccess"
                              placeholder="name@example.com"
                            />
                            <div className="valid-feedback">
                              Success! You've done it.
                            </div>
                          </div>
                        </div>
                        <div className="mb-3 row has-error">
                          <label
                            htmlFor="inputHorizontalDnger"
                            className="col-sm-2 col-form-label text-end"
                          >
                            Email
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              className="form-control is-invalid"
                              id="inputHorizontalDnger"
                              placeholder="name@example.com"
                            />
                            <div className="invalid-feedback">
                              Sorry, that username's taken. Try another?
                            </div>
                          </div>
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
                        <h4 className="card-title">Basic Form</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue
                          id="flexCheckDefaultdemo"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefaultdemo"
                        >
                          Check me out
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                      <button type="button" className="btn btn-danger">
                        Cancel
                      </button>
                    </form>
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
                        <h4 className="card-title">Horizontal Form</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form>
                      <div className="mb-3 row">
                        <label
                          htmlFor="horizontalInput1"
                          className="col-sm-2 col-form-label"
                        >
                          Email
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="email"
                            className="form-control"
                            id="horizontalInput1"
                            placeholder="Enter Email"
                          />
                        </div>
                      </div>
                      <div className="mb-3 row">
                        <label
                          htmlFor="horizontalInput2"
                          className="col-sm-2 col-form-label"
                        >
                          Password
                        </label>
                        <div className="col-sm-10">
                          <input
                            type="password"
                            className="form-control"
                            id="horizontalInput2"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-10 ms-auto">
                          <div className="form-check mb-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefaultdemo2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefaultdemo2"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-10 ms-auto">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                          <button type="button" className="btn btn-danger">
                            Cancel
                          </button>
                        </div>
                      </div>
                    </form>
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
                        <h4 className="card-title">Custom Styles</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form className>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="username"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="useremail">
                              Email address
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="useremail"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="subject">
                              Subject
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="message">
                              Message
                            </label>
                            <textarea
                              className="form-control"
                              rows={5}
                              id="message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
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
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Inline Form</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form className="row align-items-center">
                      <div className="col-auto">
                        <label
                          className="form-label visually-hidden"
                          htmlFor="inlineFormInputGroupUsername"
                        >
                          Username
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">@</div>
                          <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroupUsername"
                            placeholder="Username"
                          />
                        </div>
                      </div>
                      <div className="col-auto">
                        <label
                          className="form-label visually-hidden"
                          htmlFor="inlineFormSelectPref"
                        >
                          Preference
                        </label>
                        <select
                          className="form-select"
                          id="inlineFormSelectPref"
                        >
                          <option selected>Choose...</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Input Size</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form>
                      <input
                        className="form-control form-control-lg mb-2"
                        type="text"
                        placeholder=".form-control-lg"
                      />
                      <input
                        className="form-control form-control-sm "
                        type="text"
                        placeholder=".form-control-sm"
                      />
                    </form>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">File Browser</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="input-group mb-3">
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupFile01"
                      >
                        Upload
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile01"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile02"
                      />
                      <label
                        className="input-group-text"
                        htmlFor="inputGroupFile02"
                      >
                        Upload
                      </label>
                    </div>
                    <div className="input-group mb-3">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="inputGroupFileAddon03"
                      >
                        Button
                      </button>
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile03"
                        aria-describedby="inputGroupFileAddon03"
                        aria-label="Upload"
                      />
                    </div>
                    <div className="input-group">
                      <input
                        type="file"
                        className="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="inputGroupFileAddon04"
                      >
                        Button
                      </button>
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
                        <h4 className="card-title">Form Controls</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="exampleFormControlInput1"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="exampleFormControlSelect1"
                        >
                          Example select
                        </label>
                        <select
                          className="form-select"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="exampleFormControlSelect2"
                        >
                          Example multiple select
                        </label>
                        <select
                          multiple
                          className="form-select"
                          id="exampleFormControlSelect2"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className>
                        <label
                          className="form-label"
                          htmlFor="exampleFormControlTextarea1"
                        >
                          Example textarea
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                    </form>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Range</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <label htmlFor="customRange1" className="form-label">
                      Example range
                    </label>
                    <input
                      type="range"
                      className="form-range"
                      id="customRange1"
                    />
                    <label htmlFor="customRange2" className="form-label">
                      Min and max
                    </label>
                    <input
                      type="range"
                      className="form-range"
                      min={0}
                      max={5}
                      id="customRange2"
                    />
                    <label htmlFor="customRange3" className="form-label">
                      Steps
                    </label>
                    <input
                      type="range"
                      className="form-range"
                      min={0}
                      max={5}
                      step="0.5"
                      id="customRange3"
                    />
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Switches</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                          >
                            Default switch
                          </label>
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDisabled"
                            disabled
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDisabled"
                          >
                            Disabled switch{" "}
                          </label>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-4">
                        <div className="form-check form-switch form-switch-secondary">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customSwitchSecondary"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchSecondary"
                          >
                            Secondary
                          </label>
                        </div>
                        <div className="form-check form-switch form-switch-success">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customSwitchSuccess"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchSuccess"
                          >
                            Success
                          </label>
                        </div>
                        <div className="form-check form-switch form-switch-warning">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customSwitchWarning"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchWarning"
                          >
                            Warning
                          </label>
                        </div>
                        <div className="form-check form-switch form-switch-info">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customSwitchInfo"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchInfo"
                          >
                            Info
                          </label>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-4">
                        <div className="form-check form-switch form-switch-danger">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customSwitchDanger"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchDanger"
                          >
                            Danger
                          </label>
                        </div>
                        <div className="form-check form-switch form-switch-dark">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customSwitchDark"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchDark"
                          >
                            Dark
                          </label>
                        </div>
                        <div className="form-check form-switch form-switch-purple">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customSwitchPurple"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchPurple"
                          >
                            Purple
                          </label>
                        </div>
                        <div className="form-check form-switch form-switch-pink">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customSwitchPink"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customSwitchPink"
                          >
                            Pink
                          </label>
                        </div>
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
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Checkboxs</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form className="form">
                      <div className="mb-3 row">
                        <label className="col-md-3 my-2 control-label">
                          Checkboxes
                        </label>
                        <div className="col-md-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Default checkbox
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckChecked"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Checked checkbox
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckDisabled"
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDisabled"
                            >
                              Disabled checkbox
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="flexCheckCheckedDisabled"
                              defaultChecked
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckCheckedDisabled"
                            >
                              Disabled checked checkbox
                            </label>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end row*/}
                      <div className="row mb-3">
                        <label className="col-md-3 my-2 control-label">
                          Inline Checkboxes
                        </label>
                        <div className="col-md-9">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox1"
                              defaultValue="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineCheckbox1"
                            >
                              HTML5
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox2"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineCheckbox2"
                            >
                              Css3
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="inlineCheckbox3"
                              defaultValue="option3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineCheckbox3"
                            >
                              Javascript
                            </label>
                          </div>
                        </div>
                      </div>
                      {/*end row*/}
                      <div className="row">
                        <label className="col-md-3 my-1 control-label">
                          Button Checkbox
                        </label>
                        <div className="col-md-9">
                          <input
                            type="checkbox"
                            className="btn-check"
                            id="btn-check-outlined"
                            autoComplete="off"
                          />
                          <label
                            className="btn btn-outline-primary btn-sm"
                            htmlFor="btn-check-outlined"
                          >
                            Single toggle
                          </label>
                          <br />
                        </div>
                      </div>{" "}
                      {/*end row*/}
                    </form>
                    {/*end form*/}
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
                        <h4 className="card-title">Radios</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form className="form">
                      <div className="mb-3 row">
                        <label className="col-md-3 my-2 control-label">
                          Radios
                        </label>
                        <div className="col-md-9">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios1"
                              defaultValue="option1"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios1"
                            >
                              Default radio
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios2"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios2"
                            >
                              Second default radio
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="exampleRadios"
                              id="exampleRadios3"
                              defaultValue="option3"
                              disabled
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleRadios3"
                            >
                              Disabled radio
                            </label>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end row */}
                      <div className="row mb-3">
                        <label className="col-md-3 my-1 control-label">
                          Inline Radios
                        </label>
                        <div className="col-md-9">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio1"
                              defaultValue="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio1"
                            >
                              HTML5
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio2"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio2"
                            >
                              Css
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="inlineRadioOptions"
                              id="inlineRadio3"
                              defaultValue="option3"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="inlineRadio3"
                            >
                              Javascript
                            </label>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end row*/}
                      <div className="row">
                        <label className="col-md-3 my-1 control-label">
                          Button Radios
                        </label>
                        <div className="col-md-9">
                          <input
                            type="radio"
                            className="btn-check"
                            name="options-outlined"
                            id="success-outlined"
                            autoComplete="off"
                            defaultChecked
                          />
                          <label
                            className="btn btn-outline-success btn-sm"
                            htmlFor="success-outlined"
                          >
                            Checked success radio
                          </label>
                          <input
                            type="radio"
                            className="btn-check"
                            name="options-outlined"
                            id="danger-outlined"
                            autoComplete="off"
                          />
                          <label
                            className="btn btn-outline-danger btn-sm"
                            htmlFor="danger-outlined"
                          >
                            Danger radio
                          </label>
                        </div>
                      </div>{" "}
                      {/*end row*/}
                    </form>
                    {/*end form*/}
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
                        <h4 className="card-title">Input Groups Static</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">
                        @
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <span className="input-group-text" id="basic-addon2">
                        @mannatthemes.com
                      </span>
                    </div>
                    <label htmlFor="basic-url" className="form-label">
                      Your vanity URL
                    </label>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon3">
                        https://mannatthemes.com
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="basic-url"
                        aria-describedby="basic-addon3"
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">$</span>
                      <input
                        type="text"
                        className="form-control"
                        aria-label="AApprox (to the nearest dollar)"
                      />
                      <span className="input-group-text">.00</span>
                    </div>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                      />
                      <span className="input-group-text">@</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Server"
                        aria-label="Server"
                      />
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">With textarea</span>
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                        defaultValue={""}
                      />
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
                        <h4 className="card-title">Input Groups Buttons</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <form>
                      <div className="mb-3 row">
                        <div className="col-md-6">
                          <div className="input-group">
                            <div className="input-group-text">
                              <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                defaultValue
                                aria-label="Checkbox for following text input"
                              />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              aria-label="Text input with checkbox"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-group">
                            <div className="input-group-text">
                              <input
                                className="form-check-input mt-0"
                                type="radio"
                                defaultValue
                                aria-label="Radio button for following text input"
                              />
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              aria-label="Text input with radio button"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <button
                          className="btn btn-secondary"
                          type="button"
                          id="button-addon1"
                        >
                          <i className="fas fa-search" />
                        </button>
                        <input
                          type="text"
                          className="form-control"
                          placeholder
                          aria-label="Example text with button addon"
                          aria-describedby="button-addon1"
                        />
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          className="btn btn-secondary"
                          type="button"
                          id="button-addon2"
                        >
                          Go!
                        </button>
                      </div>
                      <div className="input-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          aria-label="Email"
                          aria-describedby="button-addon3"
                        />
                        <button
                          className="btn btn-secondary"
                          type="button"
                          id="button-addon2"
                        >
                          Submit
                        </button>
                      </div>
                      <div className="input-group">
                        <select
                          className="form-select"
                          id="inputGroupSelect04"
                          aria-label="Example select with button addon"
                        >
                          <option selected>Choose...</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                        </select>
                        <button className="btn btn-secondary" type="button">
                          Button
                        </button>
                      </div>
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

export default Formselements;
