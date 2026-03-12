import React from "react";
import Footer from "../common/Footer";

function Tablebasic() {
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
                        <a href="#">Tables</a>
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
              <div className="col-md-6 col-lg-6">
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Basic Example</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table  mb-0 table-centered">
                        <thead className="table-light">
                          <tr>
                            <th>Compny</th>
                            <th>Bill</th>
                            <th>Average Bill</th>
                            <th>Paid Bill</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="assets/images/logos/lang-logo/chatgpt.png"
                                alt
                                className="rounded-circle thumb-md me-1 d-inline"
                              />
                              Micromin
                            </td>
                            <td>4</td>
                            <td>$250</td>
                            <td>$800</td>
                            <td className="text-end">
                              <div className="dropdown d-inline-block">
                                <a
                                  className="dropdown-toggle arrow-none"
                                  id="dLabel11"
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  role="button"
                                  aria-haspopup="false"
                                  aria-expanded="false"
                                >
                                  <i className="las la-ellipsis-v fs-20 text-muted" />
                                </a>
                                <div
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="dLabel11"
                                >
                                  <a className="dropdown-item" href="#">
                                    Creat Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Open Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Tasks Details
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/logos/lang-logo/nextjs.png"
                                alt
                                className="rounded-circle thumb-md me-1 d-inline"
                              />
                              ZZ Diamond
                            </td>
                            <td>2</td>
                            <td>$180</td>
                            <td>$400</td>
                            <td className="text-end">
                              <div className="dropdown d-inline-block">
                                <a
                                  className="dropdown-toggle arrow-none"
                                  id="dLabel11"
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  role="button"
                                  aria-haspopup="false"
                                  aria-expanded="false"
                                >
                                  <i className="las la-ellipsis-v fs-20 text-muted" />
                                </a>
                                <div
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="dLabel11"
                                >
                                  <a className="dropdown-item" href="#">
                                    Creat Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Open Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Tasks Details
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/logos/lang-logo/reactjs.png"
                                alt
                                className="rounded-circle thumb-md me-1 d-inline"
                              />
                              Dairy Sweet
                            </td>
                            <td>6</td>
                            <td>$210</td>
                            <td>$500</td>
                            <td className="text-end">
                              <div className="dropdown d-inline-block">
                                <a
                                  className="dropdown-toggle arrow-none"
                                  id="dLabel11"
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  role="button"
                                  aria-haspopup="false"
                                  aria-expanded="false"
                                >
                                  <i className="las la-ellipsis-v fs-20 text-muted" />
                                </a>
                                <div
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="dLabel11"
                                >
                                  <a className="dropdown-item" href="#">
                                    Creat Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Open Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Tasks Details
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/logos/lang-logo/symfony.png"
                                alt
                                className="rounded-circle thumb-md me-1 d-inline"
                              />
                              Corner Tea
                            </td>
                            <td>3</td>
                            <td>$80</td>
                            <td>$350</td>
                            <td className="text-end">
                              <div className="dropdown d-inline-block">
                                <a
                                  className="dropdown-toggle arrow-none"
                                  id="dLabel11"
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  role="button"
                                  aria-haspopup="false"
                                  aria-expanded="false"
                                >
                                  <i className="las la-ellipsis-v fs-20 text-muted" />
                                </a>
                                <div
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="dLabel11"
                                >
                                  <a className="dropdown-item" href="#">
                                    Creat Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Open Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Tasks Details
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
                    {/*end /tableresponsive*/}
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
                        <h4 className="card-title">Bordered Table</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table table-bordered mb-0 table-centered">
                        <thead>
                          <tr>
                            <th>Transaction ID</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Order Status</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#124781</td>
                            <td>25/11/2018</td>
                            <td>$321</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown d-inline-block">
                                <a
                                  className="dropdown-toggle arrow-none"
                                  id="dLabel11"
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  role="button"
                                  aria-haspopup="false"
                                  aria-expanded="false"
                                >
                                  <i className="las la-ellipsis-v fs-20 text-muted" />
                                </a>
                                <div
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="dLabel11"
                                >
                                  <a className="dropdown-item" href="#">
                                    Creat Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Open Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Tasks Details
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#542136</td>
                            <td>19/11/2018</td>
                            <td>$227</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown d-inline-block">
                                <a
                                  className="dropdown-toggle arrow-none"
                                  id="dLabel11"
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  role="button"
                                  aria-haspopup="false"
                                  aria-expanded="false"
                                >
                                  <i className="las la-ellipsis-v fs-20 text-muted" />
                                </a>
                                <div
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="dLabel11"
                                >
                                  <a className="dropdown-item" href="#">
                                    Creat Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Open Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Tasks Details
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#234578</td>
                            <td>11/10/2018</td>
                            <td>$442</td>
                            <td>
                              <span className="badge bg-danger">Rejected</span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown d-inline-block">
                                <a
                                  className="dropdown-toggle arrow-none"
                                  id="dLabel11"
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  role="button"
                                  aria-haspopup="false"
                                  aria-expanded="false"
                                >
                                  <i className="las la-ellipsis-v fs-20 text-muted" />
                                </a>
                                <div
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="dLabel11"
                                >
                                  <a className="dropdown-item" href="#">
                                    Creat Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Open Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Tasks Details
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>#951357</td>
                            <td>03/12/2018</td>
                            <td>$625</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                            <td className="text-end">
                              <div className="dropdown d-inline-block">
                                <a
                                  className="dropdown-toggle arrow-none"
                                  id="dLabel11"
                                  data-bs-toggle="dropdown"
                                  href="#"
                                  role="button"
                                  aria-haspopup="false"
                                  aria-expanded="false"
                                >
                                  <i className="las la-ellipsis-v fs-20 text-muted" />
                                </a>
                                <div
                                  className="dropdown-menu dropdown-menu-end"
                                  aria-labelledby="dLabel11"
                                >
                                  <a className="dropdown-item" href="#">
                                    Creat Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Open Project
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    Tasks Details
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
                    {/*end /tableresponsive*/}
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
                        <h4 className="card-title">Striped Rows</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table table-striped mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Customer</th>
                            <th>Email</th>
                            <th>Contact No</th>
                            <th className="text-end">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img
                                src="assets/images/users/avatar-3.jpg"
                                alt
                                className="rounded-circle thumb-md me-1 d-inline"
                              />{" "}
                              Aaron Poulin
                            </td>
                            <td>Aaron@example.com</td>
                            <td>+21 21547896</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-pen text-secondary font-16" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary font-16" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/users/avatar-4.jpg"
                                alt
                                className="rounded-circle thumb-md me-1 d-inline"
                              />{" "}
                              Richard Ali
                            </td>
                            <td>Richard@example.com</td>
                            <td>+41 21547896</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-pen text-secondary font-16" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary font-16" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/users/avatar-5.jpg"
                                alt
                                className="rounded-circle thumb-md me-1 d-inline"
                              />{" "}
                              Juan Clark
                            </td>
                            <td>Juan@example.com</td>
                            <td>+65 21547896</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-pen text-secondary font-16" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary font-16" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img
                                src="assets/images/users/avatar-6.jpg"
                                alt
                                className="rounded-circle thumb-md me-1 d-inline"
                              />{" "}
                              Albert Hull
                            </td>
                            <td>Albert@example.com</td>
                            <td>+88 21547896</td>
                            <td className="text-end">
                              <a href="#">
                                <i className="las la-pen text-secondary font-16" />
                              </a>
                              <a href="#">
                                <i className="las la-trash-alt text-secondary font-16" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
                    {/*end /tableresponsive*/}
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
                        <h4 className="card-title">Table Head Options</h4>
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
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Access</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>XYZ@Example.com</td>
                            <td>
                              <span className="badge bg-transparent border border-success text-success">
                                Business
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>XYZ@Example.com</td>
                            <td>
                              <span className="badge bg-transparent border border-warning text-warning">
                                Personal
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>XYZ@Example.com</td>
                            <td>
                              <span className="badge bg-transparent border border-danger text-danger">
                                Disabled
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>XYZ@Example.com</td>
                            <td>
                              <span className="badge bg-transparent border border-success text-success">
                                Business
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Jacob</td>
                            <td>XYZ@Example.com</td>
                            <td>
                              <span className="badge bg-transparent border border-warning text-warning">
                                Personal
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
                    {/*end /tableresponsive*/}
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
                        <h4 className="card-title">Hoverable Rows</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
                    {/*end /tableresponsive*/}
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
                        <h4 className="card-title">Dark Table</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive">
                      <table className="table table-dark mb-0">
                        <thead>
                          <tr>
                            <th className="rounded-bottom-0">#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th className="rounded-bottom-0">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
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
                        <h4 className="card-title">Contextual Classes</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive-sm">
                      <table className="table mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table-primary">
                            <th scope="row">1</th>
                            <td className>Mark</td>
                            <td className>Otto</td>
                            <td className>@mdo</td>
                          </tr>
                          <tr className>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr className="table-secondary">
                            <th scope="row">3</th>
                            <td className>Larry</td>
                            <td className>the Bird</td>
                            <td className>@twitter</td>
                          </tr>
                          <tr className>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr className="table-success">
                            <th scope="row">5</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr className>
                            <th scope="row">6</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr className="table-info">
                            <th scope="row">7</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr className>
                            <th scope="row">8</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr className="table-warning">
                            <th scope="row">9</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr className>
                            <th scope="row">10</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
                    {/*end /tableresponsive*/}
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
                        <h4 className="card-title">Captions Table</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive-sm">
                      <table className="table mb-0">
                        <caption>List of users</caption>
                        <thead className="table-light">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
                    {/*end /tableresponsive*/}
                  </div>
                  {/*end card-body*/}
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <h4 className="card-title">Small Table</h4>
                      </div>
                      {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                  </div>
                  {/*end card-header*/}
                  <div className="card-body pt-0">
                    <div className="table-responsive-sm">
                      <table className="table table-sm mb-0">
                        <thead className="table-light">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                      {/*end /table*/}
                    </div>
                    {/*end /tableresponsive*/}
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

export default Tablebasic;
