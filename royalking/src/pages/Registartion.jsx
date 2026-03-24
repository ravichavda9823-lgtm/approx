import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  let [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  let [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    roleError: "",
  });

  function handelInputChange(e) {
    let { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function ValidateForm() {
    let isvalid = true;

    let emailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let phoneFormat = /^(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;

    let passwordFormat =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

    if (!user.username) {
      errors.usernameError = "Username is required";
      isvalid = false;
    } else {
      errors.usernameError = "";
    }

    if (!user.email) {
      errors.emailError = "Email is required";
      isvalid = false;
    } else if (!emailFormat.test(user.email)) {
      errors.emailError = "Provide valid email";
      isvalid = false;
    } else {
      errors.emailError = "";
    }

    if (!user.phone) {
      errors.phoneError = "Phone is required";
      isvalid = false;
    } else if (!phoneFormat.test(user.phone)) {
      errors.phoneError = "Provide valid phone number";
      isvalid = false;
    } else {
      errors.phoneError = "";
    }

    if (!user.role) {
      errors.roleError = "Role is required";
      isvalid = false;
    } else {
      errors.roleError = "";
    }

    if (!user.password) {
      errors.passwordError = "Password is required";
      isvalid = false;
    } else if (!passwordFormat.test(user.password)) {
      errors.passwordError =
        "Password must contain uppercase, lowercase, special char & number";
      isvalid = false;
    } else {
      errors.passwordError = "";
    }

    setErrors((prev) => ({ ...prev }));

    return isvalid;
  }

  async function handelSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!ValidateForm()) return;

    try {
      const response = await axios.post(
        "https://backend-t1tu.onrender.com/api/auth/Signup",
        user,
      );

      if (response.data.status) {
        toast.success("Registration Successfully...", {
        onClose: () => {
          window.location.href = "/login";
        },
      });
      }
    } catch (e) {
      setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });
      toast.error("Invalid Details", {
        onClose: () => {
          window.location.href = "/registartion";
        },
      });

    } finally {
      setLoading(false);
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
            <h1>Registration Page</h1>
          </div>
        </div>

        {/* Registration Section */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-6">
                <div className="form-alt form-alt3 with-shadow">
                  <form onSubmit={handelSubmit}>
                    <div className="section_heading mb_30 text-center">
                      <span className="section_heading_title_small">
                        Create Account
                      </span>
                      <h2>Register Now</h2>
                    </div>

                    {/* Username */}
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="username"
                        placeholder="Full Name"
                        onChange={handelInputChange}
                        value={user.username}
                      />
                      <p style={{ color: "red" }}>{errors.usernameError}</p>
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
                      <p style={{ color: "red" }}>{errors.emailError}</p>
                    </div>

                    {/* Phone */}
                    <div className="form-group col-md-12">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handelInputChange}
                        value={user.phone}
                      />
                      <p style={{ color: "red" }}>{errors.phoneError}</p>
                    </div>

                    {/* Role */}
                    <div className="form-group col-md-12">
                      <select
                        name="role"
                        value={user.role}
                        onChange={handelInputChange}
                      >
                        <option value="">Select Role</option>
                        <option value="user">User</option>
                        <option value="manager">Manager</option>
                      </select>
                      <p style={{ color: "red" }}>{errors.roleError}</p>
                    </div>

                    {/* Password with Eye Icon */}
                    <div
                      className="form-group col-md-12"
                      style={{ position: "relative" }}
                    >
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handelInputChange}
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
                          color: "#666",
                        }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>

                      <p style={{ color: "red" }}>{errors.passwordError}</p>
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="btn-1 w-100"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Signing up..." : "Register Now"}
                      </button>
                    </div>

                    <div className="text-center mt_20">
                      <p>
                        Already have an account?{" "}
                        <Link to="/login">Login Here</Link>
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

export default Register;
