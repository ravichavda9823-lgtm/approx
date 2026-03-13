import React, { useState } from "react";
import cookie from "js-cookie";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import api from "../utils/AxiosConfig";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  let [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  function handelInputChange(e) {
    let { name, value } = e.target;

    setAdmin((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handelSubmit(e) {
    e.preventDefault();
    try {
      let response = await axios.post("https://backend-t1tu.onrender.com/api/auth/Signin",admin);
      console.log(response.data); 

      if (response.data.token) {
        cookie.set("token", response.data.token);
        alert("Login Successfully..");
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error.response);
      alert("Invalid Details");
      
    }
  }

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
                        <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">
                          Let's Get Started
                        </h4>
                        <p className="text-muted fw-medium mb-0">
                          Sign in to continue
                        </p>
                      </div>
                    </div>

                    <div className="card-body pt-0">
                      <form onSubmit={handelSubmit} className="my-4">
                        {/* Email */}
                        <div className="form-group mb-2">
                          <label className="form-label">Email</label>

                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter Email"
                            onChange={handelInputChange}
                            value={admin.email}
                          />
                        </div>

                        {/* Password with Eye Icon */}
                        <div
                          className="form-group"
                          style={{ position: "relative" }}
                        >
                          <label className="form-label">Password</label>

                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            name="password"
                            placeholder="Enter password"
                            onChange={handelInputChange}
                            value={admin.password}
                            style={{ paddingRight: "40px" }}
                          />

                          <span
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                              position: "absolute",
                              right: "12px",
                              top: "38px",
                              cursor: "pointer",
                              color: "#666",
                            }}
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>

                        <div className="form-group row mt-3">
                          <div className="col-sm-6">
                            <div className="form-check form-switch form-switch-success">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <label className="form-check-label">
                                Remember me
                              </label>
                            </div>
                          </div>

                          <div className="col-sm-6 text-end">
                            <a href="#" className="text-muted font-13">
                              Forgot password?
                            </a>
                          </div>
                        </div>

                        <div className="form-group mb-0 row">
                          <div className="col-12">
                            <div className="d-grid mt-3">
                              <button className="btn btn-primary" type="submit">
                                Log In
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
