import React from "react";

function Lockscreen() {
  return (
    <>
      <div className="container-xxl">
        <div className="row vh-100 d-flex justify-content-center">
          <div className="col-12 align-self-center">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 mx-auto">
                  <div className="card">
                    <div className="card-body p-0 bg-black auth-header-box rounded-top">
                      <div className="text-center p-3">
                        <a href="index.html" className="logo logo-admin">
                          <img
                            src="assets/images/logo-sm.png"
                            height={50}
                            alt="logo"
                            className="auth-logo"
                          />
                        </a>
                        <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">
                          Enter Password
                        </h4>
                        <p className="text-muted fw-medium mb-0">
                          Hello Mark, enter your password to unlock the screen !
                        </p>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <form
                        className="my-4"
                        action="https://mannatthemes.com/approx/default/index.html"
                      >
                        <div className="form-group mb-2">
                          <label className="form-label" htmlFor="userpassword">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="userpassword"
                            placeholder="Enter password"
                          />
                        </div>
                        {/*end form-group*/}
                        <div className="form-group mb-0 row">
                          <div className="col-12">
                            <div className="d-grid mt-3">
                              <button className="btn btn-primary" type="button">
                                Unlock <i className="fas fa-sign-in-alt ms-1" />
                              </button>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>{" "}
                        {/*end form-group*/}
                      </form>
                      {/*end form*/}
                      <div className="text-center  mb-2">
                        <p className="text-muted">
                          Not you ? return{" "}
                          <a
                            href="auth-register.html"
                            className="text-primary ms-2"
                          >
                            Sign in here
                          </a>
                        </p>
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

export default Lockscreen;
