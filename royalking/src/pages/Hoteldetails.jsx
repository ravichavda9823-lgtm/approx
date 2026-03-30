import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../utils/AxiosConfig";

function Hoteldetails() {
  const { id } = useParams(); // 👈 URL se ID
  const [venue, setVenue] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 FETCH SINGLE HOTEL
  const fetchHotelDetails = async () => {
    try {
      const response = await api.get(`/user/hotel/${id}`);
      console.log(response.data)
      setVenue(response.data.data);
    } catch (error) {
      console.log("Venue details error", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchHotelDetails();
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
            "url(https://cdn0.hitched.co.uk/vendor/2811/3_2/960/jpg/haynehouse-jadeg-379_4_192811-170324482894495.jpeg)",
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
            <div className="col-lg-8">
              <img
                src={`${api.defaults.baseURL}/uploads/${venue.image}`}
                alt={venue.name}
                style={{ width: "100%", borderRadius: "12px" }}
              />
            </div>

            {/* Right Booking Card */}
            <div className="col-lg-4">
              <div
                style={{
                  border: "1px solid #eee",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                }}
              >
                <h4>
                  ₹{venue.price} <small>/ night</small>
                </h4>

                <p className="mb-2">{venue.type}</p>

                <Link
                  to={`/booking/${venue._id}`}
                   state={{ price: venue.price }}
                  className="btn-1 w-100 text-center mb-3"
                >
                  Book Now <span />
                </Link>
                <hr />
                <p><strong>Check-in:</strong> 12:00 PM</p>
                <p><strong>Check-out:</strong> 11:00 AM</p>
                <p><strong>Cancellation:</strong> Free till 24 hours</p>
                <p><strong>Payment:</strong> Pay at Hotel / Online</p>
              </div>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="row mb_40">
            <div className="col-lg-6">
              <h5>Hotel Information</h5>
              <p><strong>City:</strong> {venue.city}</p>
              <p><strong>Hotel Type:</strong> {venue.type}</p>
                 <p><strong>Hotel price:</strong> {venue.price}</p>
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
            <p>
              {venue.desc || "No description available."}
            </p>
          </div>

          {/* Actions */}
          <div className="text-center">
            <Link to={`/booking/${venue._id}`}  state={{ price: venue.price }} className="btn-1 me-2">
              Book This Hotel <span />
            </Link>
       
            <Link to="/viewhotels" className="btn-1">
              Back to Hotels <span />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}

export default Hoteldetails;
