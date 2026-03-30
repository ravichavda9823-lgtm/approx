import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

function ForgotPassword() {
  const [email, setEmail] = useState("");
    let navigate = useNavigate();

  function handleChange(e) {
    setEmail(e.target.value);
  }

  const forgotPassword = async (email) => {
    const response = await axios.post(
      "http://localhost:8000/api/user/password/forgotpassword",
      { email }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: forgotPassword,

    onSuccess: () => {
      toast.success("Reset link sent to your email.", {
        onClose: () => {
        navigate("/");
        },
      });
      setEmail("");
    },

    onError: () => {
      toast.error("Something went wrong.", {
        onClose: () => {
         navigate("/forgetpassword");
        },
      });
    },
  });


   async function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(email);
  }

  return (
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
          <h1>Forgot Password</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Forgot Password</li>
          </ul>
        </div>
      </div>

      {/* Form Section */}
      <section className="section-padding">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="form-alt form-alt3 with-shadow">
                <form onSubmit={handleSubmit}>
                  <div className="section_heading mb_30 text-center">
                    <span className="section_heading_title_small">
                      Password Assistance
                    </span>
                    <h2 className="section_heading_title_big">
                      Reset Your Password
                    </h2>
                  </div>

                  <div className="form-group col-md-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your registered email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <button
                      className="btn-1 w-100"
                      type="submit"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending
                        ? "Sending..."
                        : "Send Reset Link"}
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
  );
}

export default ForgotPassword;