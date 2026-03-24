import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import cookie from "js-cookie";
import { LogoutwithoutNotification } from "../utils/Logout";
import CheckRole from "../utils/CheckRole";
import { toast } from "react-toastify";

function Feedback() {
  const [userProfile, setUserProfile] = useState({});
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
    loginId: "",
    createdAt: new Date(),
  });

  const FetchUserProfile = async () => {
    if (CheckRole() === "user") {
      try {
        const response = await api.get("/user/profile");
        console.log(response);

        setUserProfile(response.data.user);
        console.log(response.data.user);

        setFeedback((prev) => ({
          ...prev,
          loginId: response.data.user.id,
        }));
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          LogoutwithoutNotification();
        }
      }
    } else {
      LogoutwithoutNotification();
    }
  };

  useEffect(() => {
    FetchUserProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/feedback/addfeedback", feedback);
      console.log(response);

      if (response.data.token) {
        cookie.set("token", response.data.token);
      }
      toast.success("Feedback submitted successfully...", {
        onClose: () => {
          window.location.href = "/";
        },
      });
      setFeedback({
        name: "",
        email: "",
        rating: "",
        message: "",
        loginId: userProfile._id,
        createdAt: new Date(),
      });
    } catch (error) {
      console.error(error);
      toast.error("Invalid Details", {
        onClose: () => {
          window.location.href = "/feedback";
        },
      });
    }
  };

  console.log(feedback);

  return (
    <>
      <div>
        {/* Page Title */}
        <div
          className="page-title"
          style={{
            backgroundImage:
              "url(https://t3.ftcdn.net/jpg/05/15/51/58/360_F_515515800_Dt10H8JBYktfdxCo52pfQzGo27XzMPr6.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="auto-container">
            <h1>Feedback</h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bredcrumb-wrap">
          <div className="auto-container">
            <ul className="bredcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>

        {/* Feedback Section */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="row no-gutters justify-content-center">
              <div className="col-lg-5">
                <div className="form-alt form-alt3 with-shadow">
                  <form onSubmit={handleSubmit}>
                    <div className="section_heading mb_30 text-center">
                      <span className="section_heading_title_small">
                        Hotel Experience
                      </span>
                      <h3 className="section_heading_title_big">
                        Share Your Feedback
                      </h3>
                    </div>

                    {/* Name */}
                    <input
                      type="hidden"
                      name="loginId"
                      value={feedback.loginId}
                    />
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={feedback.name}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Email */}
                    <div className="form-group col-md-12">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={feedback.email}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Message */}
                    <div className="form-group col-md-12">
                      <textarea
                        rows="4"
                        name="message"
                        placeholder="Write your feedback here..."
                        value={feedback.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    {/* Rating */}
                    <div className="form-group col-md-12">
                      <label
                        style={{
                          marginBottom: "10px",
                          display: "block",
                        }}
                      >
                        Your Rating
                      </label>

                      <div>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            onClick={() =>
                              setFeedback({ ...feedback, rating: star })
                            }
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                            style={{
                              fontSize: "32px",
                              cursor: "pointer",
                              marginRight: "6px",
                              color:
                                (hoverRating || feedback.rating) >= star
                                  ? "#f5b301"
                                  : "#ccc",
                              transition:
                                "color 0.2s ease, transform 0.2s ease",
                              transform:
                                hoverRating === star
                                  ? "scale(1.2)"
                                  : "scale(1)",
                            }}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="form-group col-md-12">
                      <button type="submit" className="btn-1 w-100">
                        Submit Feedback
                      </button>
                    </div>

                    <div className="text-center mt_20">
                      <p>
                        Go back to <Link to="/">Home</Link>
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

export default Feedback;
