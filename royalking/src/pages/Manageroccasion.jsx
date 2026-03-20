import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import axios from "axios";
import { toast } from "react-toastify";

function ManagerOccasion() {
  const [occasions, setOccasions] = useState([]);
  const [loading, setLoading] = useState(true);
 

  const fetchOccasions = async () => {
    try {
      const response = await api.get("/manager/occasion");
      setOccasions(response.data.data);
    } catch (error) {
      console.log("Occasion API error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOccasions();
  }, []);
  const FetchDeleteOccasion = async (id) => {
    try {
      const response = await api.delete(`/manager/occasion/delete/${id}`);

      if (response.status === 200) {
        toast.success("Occasion Deleted Successfully...");
        window.location.href = "/manageroccasion";
      }
    } catch (e) {
      console.log(e);
      toast.error("Invalid Details..")
    }
  };

  return (
    <>
      {/* 🔹 INTERNAL CSS */}
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

          .manager-btn {
            transition: all 0.25s ease;
          }

          .manager-btn:hover {
            transform: translateY(-2px);
            opacity: 0.9;
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
          backgroundImage:
            "url(https://cdn0.hitched.co.uk/vendor/2811/3_2/960/jpg/haynehouse-jadeg-379_4_192811-170324482894495.jpeg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="auto-container">
          <h1>Manage Occasion</h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Occasion</li>
          </ul>
        </div>
      </div>

      {/* SECTION */}
      <section className="section-padding pt-5">
        <div className="auto-container">
          <div className="row">
            {loading && <p className="text-center">Loading occasions...</p>}

            {!loading && occasions.length === 0 && (
              <p className="text-center">No occasions found</p>
            )}

            {occasions.map((value) => (
              <div className="col-lg-4 col-md-6 mb_30" key={value._id}>
                <div className="manager-card h-100 d-flex flex-column">
                  {/* IMAGE */}
                  <img
                    src={`${api.defaults.baseURL}/uploads/${value.image}`}
                    alt={value.name}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                    }}
                  />

                  {/* CONTENT */}
                  <div className="p_30 d-flex flex-column justify-content-between h-100">
                    <div>
                      <h3>{value.name}</h3>
                      <p style={{ color: "#666" }}>{value.desc}</p>
                    </div>

                    {/* BUTTONS */}
                    <div className="d-flex gap-2 mt-3">
                      <Link
                        to={`/editoccasion/${value._id}`}
                        state={value}
                        className="btn-1 w-50 manager-btn text-center"
                      >
                        Edit <span />
                      </Link>

                      <button
                        className="btn-1 w-50 manager-btn delete-btn"
                        onClick={() => FetchDeleteOccasion(value._id)}
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

export default ManagerOccasion;
