import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../utils/AxiosConfig";

function ManagerHotelDetails() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 FETCH SINGLE HOTEL
  const fetchVenueDetails = async () => {
    try {
      const response = await api.get(`/manager/hotel/${id}`);
      setVenue(response.data.data);
    } catch (error) {
      console.log("Venue details error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVenueDetails();
  }, [id]);



  if (loading) {
    return <p className="text-center mt-5">Loading venue details...</p>;
  }

  if (!venue) {
    return <p className="text-center mt-5">Venue not found</p>;
  }

  return (
    <>
      {/* Page Title */}
      <div
        className="page-title"
        style={{
           backgroundImage:
              "url(https://images.pexels.com/photos/13036817/pexels-photo-13036817.jpeg?cs=srgb&dl=pexels-reneterp-13036817.jpg&fm=jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
      >
        <div className="auto-container">
          <h1>Hotel Details</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{venue.name}</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding pt-5">
        <div className="auto-container">

          {/* Hotel Header */}
          <div className="mb_30">
            <h2>{venue.name}</h2>
            <p>📍 {venue.city}</p>
          </div>

          {/* Image + Booking Info */}
          <div className="row mb_40">
            {/* Left Image */}
            <div className="col-lg-12">
              <img
                src={`${api.defaults.baseURL}/uploads/${venue.hotel_image}`}
                alt={venue.name}
                style={{ width: "100%", borderRadius: "12px", height:"400px" }}
              />
            </div>

            {/* Right Card */}
           
          </div>

          {/* Hotel Info */}
          <div className="row mb_40">
            <div className="col-lg-6">
              <h5>Hotel Information</h5>
              <p><strong>City:</strong> {venue.city}</p>
              <p><strong>Hotel Type:</strong> {venue.type}</p>
              <p><strong>Price:</strong> ₹{venue.price}</p>
              <p><strong>Short Description:</strong> {venue.shortdesc}</p>
            </div>

            <div className="col-lg-6">
              <h5>Facilities</h5>
              <ul>
                <li>✔ Free Wi-Fi</li>
                <li>✔ Swimming Pool</li>
                <li>✔ Restaurant & Bar</li>
                <li>✔ Free Parking</li>
                <li>✔ Air Conditioning</li>
                <li>✔ 24/7 Room Service</li>
              </ul>
            </div>
          </div>

          {/* Description */}
          <div className="mb_40">
            <h5>About this Hotel</h5>
            <p>{venue.desc || "No description available."}</p>
          </div>

          {/* 🔥 MANAGER ACTION BUTTONS (BOTTOM) */}
         
            <div className="text-center mt-4">
              <Link
                to=""
                className="btn-1"
              >
                Edit Hotel <span />
              </Link>

              &nbsp;&nbsp;

              <button
               
                className="btn-1"
                style={{ background: "#d9534f" }}
              >
                Delete Hotel <span />
              </button>
            </div>
       
          {/* BACK */}
          <div className="text-center mt-4">
            <Link to="/managerviewhotel" className="btn-1">
              Back to Hotels <span />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

export default ManagerHotelDetails;
