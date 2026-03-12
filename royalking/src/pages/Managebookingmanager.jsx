import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { LogoutwithoutNotification } from "../utils/Logout";
import CheckRole from "../utils/CheckRole";

function ManageBookingsManager() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
   const [userProfile, setUserProfile] = useState({});


    const FetchUserProfile = async () => {
    if (CheckRole() === "manager") {
      try {
        const response = await api.get("/manager/managerprofile");
        console.log(response);

        setUserProfile(response.data.manager);
        console.log(response.data.manager);

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

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await api.get("/manager/booking");
      console.log(response.data);
      setBookings(response.data.data);
    } catch (error) {
      console.log("Booking fetch error", error);
    } finally {
      setLoading(false);
    }
  };

  console.log(bookings);

  return (
    <>
      <style>
        {`
          .page-header { background: #0f172a; padding: 70px 0; color: white; text-align: center; margin-bottom: 20px; }
          .booking-card { 
            background: #fff; border-radius: 20px; border: 1px solid #f1f5f9; 
            transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
            position: relative; overflow: hidden; height: 100%; cursor: pointer;
          }
          .booking-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); }
          .card-body { padding: 25px; }
          .venue-img { height: 190px; width: 100%; object-fit: cover; border-radius: 15px; margin-bottom: 15px; }
          .status-tag { 
             position: absolute; top: 15px; right: 15px; padding: 5px 12px; 
             border-radius: 50px; font-size: 11px; font-weight: 700; text-transform: uppercase;
          }
          .id-label { font-size: 12px; color: #6366f1; font-weight: 700; background: #eef2ff; padding: 2px 10px; border-radius: 5px; }
        `}
      </style>

      {/* Hero Header Section */}
      {/* 1. Page Title */}
      <div
        className="page-title"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1621293954908-907159247fc8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="auto-container">
          <h1>Manage Booking</h1>
        </div>
      </div>

      {/* 2. Breadcrumbs */}
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>Booking</li>
          </ul>
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {loading ? (
              <h4 className="text-center">Loading...</h4>
            ) : bookings.length === 0 ? (
              <h4 className="text-center">No Bookings Found</h4>
            ) : (
              bookings.map((value, index) => {
              

                return (
                  <div className="col-lg-4 col-md-6" key={value._id || index}>
                    <div className="booking-card shadow-sm bg-white p-3 rounded-4 position-relative">
                      {/* Status Tag */}
                      <span
                        className={`position-absolute top-0 end-0 m-3 px-3 py-1 rounded-pill fw-bold small ${
                          value.status === "Pending"
                            ? "bg-warning text-dark"
                            : value.status === "Confirmed"
                              ? "bg-success text-white"
                              : "bg-danger text-white"
                        }`}
                      >
                        {value.status}
                      </span>

                      {/* Image */}
                      <img
                        src={`${api.defaults.baseURL}/uploads/${value.hotel_image}`}
                        alt="hotel"
                        className="img-fluid rounded-3 mb-3"
                        style={{
                          height: "180px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />

                      {/* Booking Info */}
                      <span className="badge bg-light text-primary mb-2">
                        ID: #{value._id?.slice(-6)}
                      </span>

                      <h5 className="fw-bold mb-1">
                        {userProfile.name || "Customer"}
                      </h5>

                      <p className="text-muted small mb-2">
                        {value.hotel_name || "Hotel Name"}
                      </p>

                      <div className="d-flex justify-content-between align-items-center border-top pt-3">
                        <span className="fw-bold text-primary fs-5">
                          ₹{value.totalAmount  || 0}
                        </span>

                        <Link to="/managerbookinghistory" state={ value } className="btn btn-dark btn-sm rounded-pill px-3">
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ManageBookingsManager;
