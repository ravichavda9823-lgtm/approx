import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import CheckRole from "../utils/CheckRole";
import { LogoutwithoutNotification } from "../utils/Logout";
import api from "../utils/AxiosConfig";

function BookingDetailsUser() {
  const bookingData = useLocation().state;
  const [booking, setBooking] = useState(bookingData);
  console.log("bookingData",booking);
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState({});

  if (!booking) {
    return (
      <div className="container text-center py-5">
        <h4 className="text-muted">No details found.</h4>
        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate("/bookinghistory")}
        >
          Go Back
        </button>
      </div>
    );
  }
    const FetchUserProfile = async () => {
    if (CheckRole() === "user") {
      try {
        const response = await api.get("/user/profile");
        console.log(response);

        setUserProfile(response.data.user);
        console.log(response.data.user);

        setBooking((prev) => ({
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

    console.log(userProfile);

  return (
    <>
      <style>
        {`
          /* 1. Page Title Section */
          .page-title-section { 
            background: linear-gradient(rgba(30, 41, 59, 0.9), rgba(30, 41, 59, 0.9)), 
                        url('assets/images/background/page-title-6.jpg'); 
            background-size: cover;
            background-position: center;
            padding: 80px 0; 
            color: white; 
            text-align: center; 
          }
          .page-title-section h1 { font-size: 40px; font-weight: 800; margin-bottom: 10px; }

          /* 2. Breadcrumbs Style */
          .breadcrumb-wrap { background: #f8fafc; padding: 15px 0; border-bottom: 1px solid #e2e8f0; }
          .breadcrumb-list { list-style: none; padding: 0; margin: 0; display: flex; justify-content: center; gap: 10px; }
          .breadcrumb-list li { font-size: 14px; color: #64748b; }
          .breadcrumb-list li a { color: #3b82f6; text-decoration: none; }
          .breadcrumb-list li::after { content: "/"; margin-left: 10px; color: #cbd5e1; }
          .breadcrumb-list li:last-child::after { content: ""; }

          /* 3. Detail Card Content */
          .detail-main-card { 
            background: #ffffff; 
            border-radius: 20px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
            margin-top: 40px; 
            overflow: hidden; 
            border: 1px solid #f1f5f9;
          }
          .info-block { padding: 40px; }
          .venue-detail-img { width: 100%; height: 100%; object-fit: cover; min-height: 400px; }
          .status-indicator { 
            display: inline-block; padding: 6px 16px; border-radius: 50px; 
            font-size: 12px; font-weight: 700; text-transform: uppercase; 
          }
          .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin-top: 30px; }
          .grid-item { border-bottom: 1px solid #f1f5f9; padding-bottom: 15px; }
          .label-text { font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
          .value-text { font-size: 16px; color: #1e293b; font-weight: 700; margin-top: 5px; }
        `}
      </style>

      {/* --- 1. PAGE TITLE SECTION --- */}
      <div
        className="page-title"
        style={{
          backgroundImage:
            "url(https://thumbs.dreamstime.com/b/defocused-abstract-luxury-living-room-elegant-furniture-soft-lighting-ideal-as-high-end-design-background-blurred-photo-374465668.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="auto-container">
          <h1> Booking Details</h1>
        </div>
      </div>

      {/* --- 2. BREADCRUMBS --- */}
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/managerbooking  ">Booking</Link>
            </li>
            <li>Details</li>
          </ul>
        </div>
      </div>

      {/* --- 3. MAIN DETAILS SECTION --- */}
      <section className="pb-5 bg-light">
        <div className="container">
          <div className="detail-main-card">
            <div className="row g-0">
              {/* Left Side: Image */}
              <div className="col-lg-5 col-md-12">
                <img
                  src={`${api.defaults.baseURL}/uploads/${booking.hotel_image}`}
                  className="venue-detail-img"
                  alt={booking.hotel_name}
                />
              </div>

              {/* Right Side: Information */}
              <div className="col-lg-7 col-md-12">
                <div className="info-block">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h2 className="fw-bold text-dark mb-4">
                        {booking.hotel_name}
                      </h2>

                      <p className="text-muted mb-0">
                        <i className="fa fa-calendar-check me-2 text-primary"></i>
                        CheckIn Date: <strong>{new Date(booking?.checkin).toDateString()}</strong>
                      </p>
                      <p className="text-muted mb-0">
                        <i className="fa fa-calendar-check me-2 text-primary"></i>
                        CheckOut Date: <strong>{new Date(booking?.checkout).toDateString()}</strong>
                      </p>
                    </div>
                    <span
                      className={`status-indicator ${booking.status === "Confirmed" ? "bg-success text-white" : "bg-warning text-dark"}`}
                    >
                      {booking.status}
                    </span>
                  </div>

                  <hr />

                  <div className="info-grid">
                    <div className="grid-item">
                      <div className="label-text">Guest Name</div>
                      <div className="value-text">{booking.user_name}</div>
                    </div>
                    <div className="grid-item">
                      <div className="label-text">Email Address</div>
                      <div className="value-text">{booking.user_email}</div>
                    </div>
                    <div className="grid-item">
                      <div className="label-text">Booking ID</div>
                      <div className="value-text">{booking._id}</div>
                    </div>
                    <div className="grid-item">
                      <div className="label-text">Payment Amount</div>
                      <div className="value-text text-primary">
                        ₹{booking.totalAmount}
                      </div>
                    </div>
                    {/* <div className="grid-item">
                      <div className="label-text">Phone Number</div>
                      <div className="value-text">
                        +91 {userProfile.phone || "null"}
                      </div>
                    </div> */}
                   
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-3 mt-5">
                    <button
                      className="btn btn-outline-secondary px-4 py-2 rounded-pill fw-bold"
                      onClick={() => navigate(-1)}
                    >
                      <i className="fa fa-arrow-left me-2"></i> Back to History
                    </button>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingDetailsUser;
