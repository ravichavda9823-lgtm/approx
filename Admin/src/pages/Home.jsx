import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import api from "../utils/AxiosConfig";

function Home() {


    let[admin,setAdmin] = useState({});

    async function FetchAdmin() {
      try{
        let response = await api.get("/admin/dashborad");
        setAdmin(response.data.user);
      }catch(e){
        console.log(e);
       
      }
    }
    useEffect(()=>{
      FetchAdmin();
    },[])

    console.log(admin); 

  return (
    <>
      <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                  <h4 className="page-title">Dashboard</h4>
                  <div className>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <a href="#">Approx</a>
                      </li>
                      {/*end nav-item*/}
                      <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>
                {/*end page-title-box*/}
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card  bg-welcome-img overflow-hidden">
                      <div className="card-body">
                        <div className>
                          <h3 className="text-white fw-semibold fs-20 lh-base">
                            Upgrade you plan for
                            <br />
                            Great experience
                          </h3>
                          <a href="#" className="btn btn-sm btn-danger">
                            Upgarde Now
                          </a>
                          <img
                            src="assets/images/extra/fund.png"
                            alt
                            className=" mb-n4 float-end"
                            height={107}
                          />
                        </div>
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                  <div className="col-md-6">
                    <div className="card bg-globe-img">
                      <div className="card-body">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <span className="fs-16 fw-semibold">Balance</span>
                            <form className>
                              <select
                                id="dynamic-select"
                                name="example-select"
                                data-placeholder="Select an option"
                                data-dynamic-select
                              >
                                <option
                                  value={1}
                                  data-img="assets/images/logos/m-card.png"
                                >
                                  xx25
                                </option>
                                <option
                                  value={2}
                                  data-img="assets/images/logos/ame-bank.png"
                                >
                                  xx56
                                </option>
                              </select>
                            </form>
                          </div>
                          <h4 className="my-2 fs-24 fw-semibold">
                            122.5692.00 <small className="font-14">BTC</small>
                          </h4>
                          <p className="mb-3 text-muted fw-semibold">
                            <span className="text-success">
                              <i className="fas fa-arrow-up me-1" />
                              11.1%
                            </span>{" "}
                            Outstanding balance boost
                          </p>
                          <button
                            type="submit"
                            className="btn btn-soft-primary"
                          >
                            Transfer
                          </button>
                          <button type="button" className="btn btn-soft-danger">
                            Request
                          </button>
                        </div>
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
              <div className="col-lg-5">
                <div className="row justify-content-center">
                  <div className="col-md-6 col-lg-6">
                    <div className="card bg-corner-img">
                      <div className="card-body">
                        <div className="row d-flex justify-content-center">
                          <div className="col-9">
                            <p className="text-muted text-uppercase mb-0 fw-normal fs-13">
                              Total Revenue
                            </p>
                            <h4 className="mt-1 mb-0 fw-medium">$8365.00</h4>
                          </div>
                          {/*end col*/}
                          <div className="col-3 align-self-center">
                            <div className="d-flex justify-content-center align-items-center thumb-md border-dashed border-primary rounded mx-auto">
                              <i className="iconoir-dollar-circle fs-22 align-self-center mb-0 text-primary" />
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                  <div className="col-md-6 col-lg-6">
                    <div className="card bg-corner-img">
                      <div className="card-body">
                        <div className="row d-flex justify-content-center">
                          <div className="col-9">
                            <p className="text-muted text-uppercase mb-0 fw-normal fs-13">
                              New Order
                            </p>
                            <h4 className="mt-1 mb-0 fw-medium">722</h4>
                          </div>
                          {/*end col*/}
                          <div className="col-3 align-self-center">
                            <div className="d-flex justify-content-center align-items-center thumb-md border-dashed border-info rounded mx-auto">
                              <i className="iconoir-cart fs-22 align-self-center mb-0 text-info" />
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                  <div className="col-md-6 col-lg-6">
                    <div className="card bg-corner-img">
                      <div className="card-body">
                        <div className="row d-flex justify-content-center">
                          <div className="col-9">
                            <p className="text-muted text-uppercase mb-0 fw-normal fs-13">
                              Sessions
                            </p>
                            <h4 className="mt-1 mb-0 fw-medium">181</h4>
                          </div>
                          {/*end col*/}
                          <div className="col-3 align-self-center">
                            <div className="d-flex justify-content-center align-items-center thumb-md border-dashed border-warning rounded mx-auto">
                              <i className="iconoir-percentage-circle fs-22 align-self-center mb-0 text-warning" />
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end card-body*/}
                    </div>
                    {/*end card*/}
                  </div>
                  {/*end col*/}
                  <div className="col-md-6 col-lg-6">
                    <div className="card bg-corner-img">
                      <div className="card-body">
                        <div className="row d-flex justify-content-center">
                          <div className="col-9">
                            <p className="text-muted text-uppercase mb-0 fw-normal fs-13">
                              Avg. Order value
                            </p>
                            <h4 className="mt-1 mb-0 fw-medium">$1025.50</h4>
                          </div>
                          {/*end col*/}
                          <div className="col-3 align-self-center">
                            <div className="d-flex justify-content-center align-items-center thumb-md border-dashed border-danger rounded mx-auto">
                              <i className="iconoir-hexagon-dice fs-22 align-self-center mb-0 text-danger" />
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
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
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Report</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn bt btn-light dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="icofont-calendar fs-5 me-1" /> This
                            Month
                            <i className="las la-angle-down ms-1" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Week
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Month
                            </a>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div id="reports" className="apex-charts pill-bar" />
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Cash Flow</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn bt btn-light dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="icofont-calendar fs-5 me-1" />
                            Weekly
                            <i className="las la-angle-down ms-1" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                            <a className="dropdown-item" href="#">
                              Weekly
                            </a>
                            <a className="dropdown-item" href="#">
                              Monthly
                            </a>
                            <a className="dropdown-item" href="#">
                              Yearly
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div id="cashflow" className="apex-charts" />
                    <div className="row">
                      <div className="col-4">
                        <div className="text-center">
                          <p className="text-muted text-uppercase mb-0 fw-medium fs-13">
                            Income
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium">76%</h5>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-4">
                        <div className="text-center">
                          <p className="text-muted text-uppercase mb-0 fw-medium fs-13">
                            Expense
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium">23%</h5>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-4">
                        <div className="text-center">
                          <p className="text-muted text-uppercase mb-0 fw-medium fs-13">
                            Other
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium">1%</h5>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>
                    {/*end row*/}
                    <div className=" text-center mx-auto">
                      <img
                        src="assets/images/extra/rabit.png"
                        alt
                        className="d-inline-block"
                        height={105}
                      />
                    </div>
                    <div className="card-bg position-relative z-0">
                      <div className="p-3 bg-primary-subtle rounded position-relative">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 bg-primary-subtle text-primary thumb-lg rounded-circle">
                            <i className="iconoir-bright-star fs-3" />
                          </div>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="my-0 fw-normal text-dark fs-13 mb-0">
                              You have $1.53 remaining found over ...
                              <a
                                href="#"
                                className="text-primary fw-medium mb-0 text-decoration-underline"
                              >
                                View Details
                              </a>
                            </h6>
                          </div>
                          {/*end media-body*/}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-md-6 col-lg-3">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Exchange Rate</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <tbody>
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/flags/us_flag.jpg"
                                  className="me-2 align-self-center thumb-sm rounded-circle"
                                  alt="..."
                                />
                                <h6 className="m-0 text-truncate">USA</h6>
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-body ps-2 align-self-center text-end fw-medium">
                                0.835230{" "}
                                <span className="badge rounded text-success bg-success-subtle">
                                  1.10%
                                </span>
                              </span>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/flags/spain_flag.jpg"
                                  className="me-2 align-self-center thumb-sm rounded-circle"
                                  alt="..."
                                />
                                <h6 className="m-0 text-truncate">Spain</h6>
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-body ps-2 align-self-center text-end fw-medium">
                                0.896532{" "}
                                <span className="badge rounded text-success bg-success-subtle">
                                  0.91%
                                </span>
                              </span>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/flags/french_flag.jpg"
                                  className="me-2 align-self-center thumb-sm rounded-circle"
                                  alt="..."
                                />
                                <h6 className="m-0 text-truncate">French</h6>
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-body ps-2 align-self-center text-end fw-medium">
                                0.875433{" "}
                                <span className="badge rounded text-danger bg-danger-subtle">
                                  0.11%
                                </span>
                              </span>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/flags/germany_flag.jpg"
                                  className="me-2 align-self-center thumb-sm rounded-circle"
                                  alt="..."
                                />
                                <h6 className="m-0 text-truncate">Germany</h6>
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-body ps-2 align-self-center text-end fw-medium">
                                0.795621{" "}
                                <span className="badge rounded text-success bg-success-subtle">
                                  0.85%
                                </span>
                              </span>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/flags/french_flag.jpg"
                                  className="me-2 align-self-center thumb-sm rounded-circle"
                                  alt="..."
                                />
                                <h6 className="m-0 text-truncate">French</h6>
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-body ps-2 align-self-center text-end fw-medium">
                                0.875433{" "}
                                <span className="badge rounded text-danger bg-danger-subtle">
                                  0.11%
                                </span>
                              </span>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr className>
                            <td className="px-0 pb-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/flags/baha_flag.jpg"
                                  className="me-2 align-self-center thumb-sm rounded-circle"
                                  alt="..."
                                />
                                <h6 className="m-0 text-truncate">Bahamas</h6>
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 pb-0 text-end">
                              <span className="text-body ps-2 align-self-center text-end fw-medium">
                                0.845236{" "}
                                <span className="badge rounded text-danger bg-danger-subtle">
                                  0.22%
                                </span>
                              </span>
                            </td>
                          </tr>
                          {/*end tr*/}
                        </tbody>
                      </table>{" "}
                      {/*end table*/}
                    </div>
                    {/*end /div*/}
                    <hr className="hr-dashed" />
                    <div className="row">
                      <div className="col-lg-6 text-center">
                        <div className="p-2 border-dashed border-theme-color rounded">
                          <p className="text-muted text-uppercase mb-0 fw-normal fs-13">
                            Higher Rate
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium text-success">
                            0.833658
                          </h5>
                          <small>05 Sep 2024</small>
                        </div>
                      </div>
                      {/*end col*/}
                      <div className="col-lg-6 text-center">
                        <div className="p-2 border-dashed border-theme-color rounded">
                          <p className="text-muted text-uppercase mb-0 fw-normal fs-13">
                            Lower Rate
                          </p>
                          <h5 className="mt-1 mb-0 fw-medium text-danger">
                            0.812547
                          </h5>
                          <small>05 Sep 2024</small>
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
              <div className="col-md-6 col-lg-3 order-2 order-lg-1">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Balance Details</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <div className="p-2 border-dashed border-theme-color rounded">
                          <h5 className="mt-1 mb-0 fw-medium">$82365.00</h5>
                          <small className="text-muted">Available</small>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  <div className="card-body pt-0">
                    <div id="balance" className="apex-charts" />
                    <div className="bg-light py-3 px-2 mb-0 mt-3 text-center rounded">
                      <h6 className="mb-0">
                        <i className="icofont-calendar fs-5 me-1" /> 01 January
                        2024 to 31 December 2024
                      </h6>
                    </div>
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-12 col-lg-6 order-1 order-lg-2">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Transaction History</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="btn bt btn-light dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="icofont-calendar fs-5 me-1" /> This
                            Month
                            <i className="las la-angle-down ms-1" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">
                              Today
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Week
                            </a>
                            <a className="dropdown-item" href="#">
                              Last Month
                            </a>
                            <a className="dropdown-item" href="#">
                              This Year
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <thead className="table-light">
                          <tr>
                            <th className="border-top-0">Transaction</th>
                            <th className="border-top-0">Date</th>
                            <th className="border-top-0">AApprox</th>
                            <th className="border-top-0">Status</th>
                            <th className="border-top-0">Action</th>
                          </tr>
                          {/*end tr*/}
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/logos/lang-logo/chatgpt.png"
                                  height={40}
                                  className="me-3 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0">Chat Gpt</h6>
                                  <a href="#" className="fs-12 text-primary">
                                    ID: A3652
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>20 july 2024</td>
                            <td>$560</td>
                            <td>
                              <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                Successful
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/logos/lang-logo/gitlab.png"
                                  height={40}
                                  className="me-3 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0">Gitlab</h6>
                                  <a href="#" className="fs-12 text-primary">
                                    ID: B5784
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>09 July 2024</td>
                            <td>$2350</td>
                            <td>
                              <span className="badge bg-warning-subtle text-warning fs-11 fw-medium px-2">
                                Pending
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/logos/lang-logo/nextjs.png"
                                  height={40}
                                  className="me-3 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0">Nextjs</h6>
                                  <a href="#" className="fs-12 text-primary">
                                    ID: C9632
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>02 June 2024</td>
                            <td>$2200</td>
                            <td>
                              <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                Successful
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/logos/lang-logo/vue.png"
                                  height={40}
                                  className="me-3 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0">Vue</h6>
                                  <a href="#" className="fs-12 text-primary">
                                    ID: D8596
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>28 MAY 2024</td>
                            <td>$1320</td>
                            <td>
                              <span className="badge bg-danger-subtle text-danger fs-11 fw-medium px-2">
                                Cancle
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td>
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/logos/lang-logo/symfony.png"
                                  height={40}
                                  className="me-3 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0">Symfony</h6>
                                  <a href="#" className="fs-12 text-primary">
                                    ID: E7778
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                            </td>
                            <td>15 May 2024</td>
                            <td>$3650</td>
                            <td>
                              <span className="badge bg-success-subtle text-success fs-11 fw-medium px-2">
                                Successful
                              </span>
                            </td>
                            <td>
                              <a href="#">
                                <i className="las la-print text-secondary fs-18" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary fs-18" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                        </tbody>
                      </table>{" "}
                      {/*end table*/}
                    </div>
                    {/*end /div*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
              </div>{" "}
              {/*end col*/}
              <div className="col-md-6 col-lg-3 order-3 order-lg-3">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Send Money</h4>
                      </div>
                      {/*end col*/}
                      <div className="col-auto">
                        <div className="dropdown">
                          <a href="#" className="btn bt btn-light">
                            <i className="icofont-contact-add fs-5 me-1" /> Add
                            Member
                          </a>
                        </div>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table mb-0">
                        <tbody>
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-1.jpg"
                                  height={36}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0 text-truncate">
                                    Scott Holland
                                  </h6>
                                  <a
                                    href="#"
                                    className="font-12 text-muted text-decoration-underline"
                                  >
                                    #3652
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-primary ps-2 align-self-center text-end fw-medium">
                                $3325.00
                              </span>
                            </td>
                            <td className="px-0 text-end">
                              <a href="#" className="text-body">
                                <i className="las la-sync-alt" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-2.jpg"
                                  height={36}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0 text-truncate">
                                    Karen Savage
                                  </h6>
                                  <a
                                    href="#"
                                    className="font-12 text-muted text-decoration-underline"
                                  >
                                    #4789
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-primary ps-2 align-self-center text-end fw-medium">
                                $2548.00
                              </span>
                            </td>
                            <td className="px-0 text-end">
                              <a href="#" className="text-body">
                                <i className="las la-sync-alt" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-3.jpg"
                                  height={36}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0 text-truncate">
                                    Steven Sharp{" "}
                                  </h6>
                                  <a
                                    href="#"
                                    className="font-12 text-muted text-decoration-underline"
                                  >
                                    #4521
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-primary ps-2 align-self-center text-end fw-medium">
                                $2985.00
                              </span>
                            </td>
                            <td className="px-0 text-end">
                              <a href="#" className="text-body">
                                <i className="las la-sync-alt" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-4.jpg"
                                  height={36}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0 text-truncate">
                                    Teresa Himes
                                  </h6>
                                  <a
                                    href="#"
                                    className="font-12 text-muted text-decoration-underline"
                                  >
                                    #3269
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-primary ps-2 align-self-center text-end fw-medium">
                                $1845.00
                              </span>
                            </td>
                            <td className="px-0 text-end">
                              <a href="#" className="text-body">
                                <i className="las la-sync-alt" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-5.jpg"
                                  height={36}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0 text-truncate">
                                    Ralph Denton
                                  </h6>
                                  <a
                                    href="#"
                                    className="font-12 text-muted text-decoration-underline"
                                  >
                                    #4521
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-primary ps-2 align-self-center text-end fw-medium">
                                $1422.00
                              </span>
                            </td>
                            <td className="px-0 text-end">
                              <a href="#" className="text-body">
                                <i className="las la-sync-alt" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                          <tr className>
                            <td className="px-0">
                              <div className="d-flex align-items-center">
                                <img
                                  src="assets/images/users/avatar-9.jpg"
                                  height={36}
                                  className="me-2 align-self-center rounded"
                                  alt="..."
                                />
                                <div className="flex-grow-1 text-truncate">
                                  <h6 className="m-0 text-truncate">
                                    Steven Sharp{" "}
                                  </h6>
                                  <a
                                    href="#"
                                    className="font-12 text-muted text-decoration-underline"
                                  >
                                    #4521
                                  </a>
                                </div>
                                {/*end media body*/}
                              </div>
                              {/*end media*/}
                            </td>
                            <td className="px-0 text-end">
                              <span className="text-primary ps-2 align-self-center text-end fw-medium">
                                $2985.00
                              </span>
                            </td>
                            <td className="px-0 text-end">
                              <a href="#" className="text-body">
                                <i className="las la-sync-alt" />
                              </a>
                            </td>
                          </tr>
                          {/*end tr*/}
                        </tbody>
                      </table>{" "}
                      {/*end table*/}
                    </div>
                    {/*end /div*/}
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

export default Home;
