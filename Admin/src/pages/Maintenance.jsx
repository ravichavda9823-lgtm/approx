import React from "react";
import { Link } from "react-router-dom";

function Maintenance() {
  return (
    <>
      <div className="container-xxl">
        <div className="row vh-100 d-flex justify-content-center">
          <div className="col-12 align-self-center">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6 mx-auto">
                  <div className="card">
                    <div className="card-body p-5">
                      <div className="text-center">
                        <img
                          src="assets/images/extra/card/maintenance.png"
                          alt
                          className="img-fluid mb-3"
                        />
                        <h6 className="mb-2 fw-medium text-dark fs-24">
                          We are down on maintenance right now
                        </h6>
                        <p className="text-muted mb-0 text-wrap fs-15">
                          This website is currently undergoing Scheduled
                          maintenance.
                        </p>
                        <div className="mt-3 text-center">
                          <Link className="btn btn-primary w-50" to="/  ">
                            Back to Dashboard <i className="fas fa-redo ms-1" />
                          </Link>
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
            </div>
            {/*end card-body*/}
          </div>
          {/*end col*/}
        </div>
        {/*end row*/}
      </div>
    </>
  );
}

export default Maintenance;
