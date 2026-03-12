import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function ResetPassword() {
  const { token } = useParams();
  console.log(token);
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post(`/user/password/resetpassword/${token}`, { newPassword: passwordData.newPassword })
      if (response.data.status) {
        alert("Password reset successfully");
        window.location.href = "/login";
      }

    } catch (error) {
      alert("Invalid or expired reset link");
    }
     finally {
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
            <h1>Reset Password</h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bredcrumb-wrap">
          <div className="auto-container">
            <ul className="bredcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Reset Password</li>
            </ul>
          </div>
        </div>

        {/* Reset Form Section */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-5">
                <div className="form-alt form-alt3 with-shadow">
                  <form onSubmit={handleSubmit}>
                    <div className="section_heading mb_30 text-center">
                      <span className="section_heading_title_small">
                        Secure Access
                      </span>
                      <h2 className="section_heading_title_big">
                        Set New Password
                      </h2>
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={passwordData.newPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={passwordData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="btn-1 w-100"
                        type="submit"
                        
                      >
                       Reset Password
                      </button>
                    </div>

                    <div className="text-center mt_20">
                      <Link to="/login">Back to Login</Link>
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

export default ResetPassword;