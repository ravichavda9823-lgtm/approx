import React, { useState, useNavigate } from "react";
import cookie from "js-cookie";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  

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


    const login = async (admin) => {
     let response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/Signin`,admin);
    return response.data;
  };

    const mutation = useMutation({
    mutationFn: login,

    onSuccess: (response) => {
      if (response.token) {
        cookie.set("token", response.token);
        toast.success("Login Successfully...", {
          onClose: () => {
            window.location.href = "/";
          },
        });
      }
    },
    onError: () => {
      toast.error("Invalid Details", {
        onClose: () => {
          window.location.href = "/login";
        },
      });
      return;
    },
  });


  async function handelSubmit(e) {
    e.preventDefault();
   mutation.mutate(admin);
  }
  console.log(admin); 
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

                          {/* <div className="col-sm-6 text-end">
                            <a href="#" className="text-muted font-13">
                              Forgot password?
                            </a>
                          </div> */}
                        </div>

                        <div className="form-group mb-0 row">
                          <div className="col-12">
                            <div className="d-grid mt-3">
                              <button className="btn btn-primary" type="submit" disabled={mutation.isPending}>
                                  {mutation.isPending ? " Log In..." : " Log In "}
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
