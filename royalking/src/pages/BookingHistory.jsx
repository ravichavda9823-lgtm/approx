import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { useQuery } from "@tanstack/react-query";

function BookingHistory() {


  const fetchBookings = async () => {
    try {
      const response = await api.get("/user/booking/");
   
      return response.data.data;
    } catch (error) {
      console.log("Booking fetch error", error);
    }
  };

 

  
    const { data: bookings = [] } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings
 
  });

  return (
    <>
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
          <h1>My Bookings</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Booking History</li>
          </ul>
        </div>
      </div>

      {/* Booking History */}
      <section className="section-padding pt-5">
        <div className="auto-container">
          {/* Page Intro */}
          <div className="mb-5 text-center">
            <h2 className="display-3 mb-2 fw-bold">Booking History</h2>
            <p className="fs-4">
              Manage and view all your hotel bookings in one place
            </p>
          </div>

          {/* 🔥 Dynamic Booking Cards */}
          {bookings.length === 0 ? (
            <div className="text-center">
              <h4>No Bookings Found</h4>
            </div>
          ) : (
            bookings.map((value) => (
              <div
                key={value._id}
                style={{
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  padding: "20px",
                  marginBottom: "20px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <div className="row">
                  <div className="col-lg-8">
                    <h4>{value.hotel_name}</h4>
                    <p>📍 {value.hotel_city}</p>
                    
                    <p>
                      <strong>CheckIn :</strong>{" "}
                      {new Date(value.checkin).toLocaleDateString()} 
                    
                    </p>

                    <p>
                      <strong>CheckOut :</strong>{" "}
                      {new Date(value.checkout).toLocaleDateString()} 
                    
                    </p>
                  </div>

                  <div className="col-lg-4 text-end">
                    <h4>₹{value.totalAmount || 0}</h4>
                    <span
                      className={`badge ${
                        value.status === "Confirmed"
                          ? "bg-success"
                          : "bg-warning"
                      }`}
                    >
                      {value.status || "Pending"}
                    </span>

                    <div className="mt_20">
                      <Link
                        to="/bookingdetails"
                        state={value}
                        className="btn-1"
                      >
                        View Details <span />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Action */}
          <div className="text-center mt_30">
            <Link to="/viewhotels" className="btn-1">
              Book Another Hotel <span />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingHistory;
