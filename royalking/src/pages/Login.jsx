import axios from "axios";
import cookie from "js-cookie";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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

    setLoading(true); // ✅ start loading

    try {
      let response = await axios.post(
        "https://backend-t1tu.onrender.com/api/auth/Signin",
        user
      );

      if (response.data.token) {
        cookie.set("token", response.data.token);
        cookie.set("role", response.data.role);

        setUser({
          email: "",
          password: "",
        });

        alert("Login Successfully..");
        window.location.href = "/"; 
      }
    } catch (e) {
      setUser({
        email: "",
        password: "",
      });

      alert("Invalid Details");
          window.location.href = "/login"; 
    } finally {
      setLoading(false); 
    }
  }

  return (
    <>
      <div>
        {/* Login Section */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-5 col-md-8 col-sm-12">
                <div className="form-alt form-alt3 with-shadow">
                  <form onSubmit={handelSubmit}>
                    
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
                        }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>

                    {/* Button */}
                    <div className="form-group col-md-12">
                      <button
                        className="btn-1 w-100"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Logining..." : "Login Now"}
                      </button>
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