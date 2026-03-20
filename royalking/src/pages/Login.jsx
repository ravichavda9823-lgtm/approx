import axios from "axios";
import cookie from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handelInputChange(e) {
    let { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true)

    try {
      let response = await axios.post(
        "https://backend-t1tu.onrender.com/api/auth/Signin",
        user,
      );
      if (response.data.token) {
        cookie.set("token", response.data.token);
        cookie.set("role", response.data.role);

        setUser({
          email: "",
          password: "",
        });

        toast.success("Login Successfully.." , {onClose: ()=> {window.location.href = "/"}});
      }
    } catch (e) {
      setUser({
        email: "",
        password: "",
      });

      toast.error("Invalid Details..." , {onClose: ()=> {window.location.href = "/login"}});
    } finally {
      setLoading(false); // ✅ stop loading (IMPORTANT)
    }
  }

  return (
    <>
      <div>
        {/* Page Title */}
        <div
          className="page-title"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1621293954908-907159247fc8?fm=jpg&q=60&w=3000&auto=format&fit=crop)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="auto-container">
            <h1>Login Page</h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bredcrumb-wrap">
          <div className="auto-container">
            <ul className="bredcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Login</li>
            </ul>
          </div>
        </div>

        {/* Login Section */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-5 col-md-8 col-sm-12">
                <div className="form-alt form-alt3 with-shadow">
                  <form onSubmit={handelSubmit}>
                    <div className="section_heading mb_30 text-center">
                      <span className="section_heading_title_small">
                        Welcome Back
                      </span>
                      <h2 className="section_heading_title_big">
                        Login to Your Account
                      </h2>
                    </div>

                    {/* Email */}
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handelInputChange}
                        value={user.email}
                      />
                    </div>

                    {/* Password */}
                    <div
                      className="form-group col-md-12"
                      style={{ position: "relative" }}
                    >
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        onChange={handelInputChange}
                        value={user.password}
                        style={{ paddingRight: "40px" }}
                      />

                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: "absolute",
                          right: "15px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                          color: "#555",
                          fontSize: "16px",
                        }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>

                    <div className="form-group col-md-12 d-flex justify-content-between">
                      <label>
                        <input type="checkbox" /> Remember Me
                      </label>
                      <Link to="/forgetpassword">Forgot Password?</Link>
                    </div>

                    <div className="form-group col-md-12">
                      <button className="btn-1 w-100" type="submit" disabled={loading}>
                        {loading ? "Logining in..." : "Login Now"}
                      </button>
                    </div>

                    <div className="text-center mt_20">
                      <p>
                        Don’t have an account?{" "}
                        <Link to="/registartion">Register Now</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
