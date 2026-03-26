import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function ManagerVenue() {
  // const [venues, setVenues] = useState([]);
  // const [loading, setLoading] = useState(true);

  // FETCH VENUES
  const fetchVenues = async () => {
    try {
      const response = await api.get("/manager/venue");
      return response.data.data || [];
    } catch (error) {
      console.log("Venue API error:", error);
    } 
  };

  // useEffect(() => {
  //   fetchVenues();
  // }, []);

    const {
    data: venues,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["venues"],
    queryFn: fetchVenues,

  });

  // DELETE VENUE
  const FetchDeleteVenue = async (id) => {
    try {
      const response = await api.delete(`/manager/venue/delete/${id}`);
      if (response.status === 200) {
        toast.success("Venue Deleted Successfully...", {
          onClose: () => {
            window.location.href = "/managervenue";
          },
        });
        fetchVenues(); // reload list
      }
    } catch (e) {
      console.log(e);
      toast.error("Invalid Details...", {
        onClose: () => {
          window.location.href = "/managervenue";
        },
      });
    }
  };

  // HELPERS
  const formatPrice = (price) => new Intl.NumberFormat("en-IN").format(price);

  const truncateText = (text, limit = 90) =>
    text && text.length > limit ? text.substring(0, limit) + "..." : text;

  return (
    <>
      {/* INTERNAL CSS */}
      <style>
        {`
          .manager-card {
            transition: all 0.35s ease;
            border-radius: 14px;
            overflow: hidden;
            background: #fff;
          }

          .manager-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .manager-card img {
            transition: transform 0.4s ease;
          }

          .manager-card:hover img {
            transform: scale(1.08);
          }

          .price-text {
            font-weight: 600;
            font-size: 16px;
            margin-top: 10px;
          }

          .delete-btn {
            background: #d9534f;
          }

          .delete-btn:hover {
            background: #c9302c;
          }
        `}
      </style>

      {/* PAGE TITLE */}
      <div
        className="page-title"
        style={{
          backgroundImage: "url(assets/images/background/page-title-6.jpg)",
        }}
      >
        <div className="auto-container">
          <h1>Manage Venue</h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Venue</li>
          </ul>
        </div>
      </div>

      {/* SECTION */}
      <section className="section-padding pt-5">
        <div className="auto-container">
          <div className="row">
            {isLoading && <p className="text-center">Loading venues...</p>}

            {!isLoading && venues.length === 0 && (
              <p className="text-center">No venues available</p>
            )}

            {venues?.map((venue) => (
              <div className="col-lg-4 col-md-6 mb_30" key={venue._id}>
                <div className="manager-card h-100 d-flex flex-column">
                  {/* IMAGE */}
                  <img
                    src={`${api.defaults.baseURL}/uploads/${venue.image}`}
                    alt={venue.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  {/* CONTENT */}
                  <div className="p_30 d-flex flex-column justify-content-between h-100">
                    <div>
                      <h3 className="mb-2">{venue.name}</h3>

                      {/* TYPE + CITY */}
                      <div className="d-flex justify-content-between mb-3">
                        {venue.type && (
                          <span className="fw-bold">{venue.type}</span>
                        )}

                        {venue.city && (
                          <span className="fw-bold">{venue.city}</span>
                        )}
                      </div>

                      {/* SHORT DESCRIPTION */}
                      <p
                        style={{
                          color: "#666",
                          fontSize: "14px",
                          lineHeight: "1.6",
                        }}
                      >
                        {truncateText(venue.shortdesc)}
                      </p>

                      {/* PRICE */}
                      {venue.price && (
                        <p className="price-text">
                          ₹ {formatPrice(venue.price)}
                          <span
                            style={{
                              color: "#777",
                              fontSize: "14px",
                            }}
                          >
                            {" "}
                            / event
                          </span>
                        </p>
                      )}
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="d-flex gap-2 mt-3">
                      <Link
                        to={`/editvenue/${venue._id}`}
                        state={venue}
                        className="btn-1 w-50 text-center"
                      >
                        Edit <span />
                      </Link>

                      <button
                        className="btn-1 w-50 delete-btn"
                        onClick={() => FetchDeleteVenue(venue._id)}
                      >
                        Delete <span />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ManagerVenue;
