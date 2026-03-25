import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { useQuery } from "@tanstack/react-query";

function SelectOccasion() {
  const [occasions, setOccasions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOccasions = async () => {
    try {
      const response = await api.get("user/occasion");
      setOccasions(response.data.data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOccasions();
  }, []);

  
//  const { data: occasion, isLoading, isError, error } = useQuery({
//     queryKey: ["occasion"],
//     queryFn: fetchOccasions,
//   });

  return (
    <>
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
          <h1>Select Occasion</h1>
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
      <section className="section-padding">
        <div className="auto-container">
          <div className="row">
            {loading ? (
              <h4 className="text-center mt-4">Loading occasions...</h4>
            ) : (
              occasions.map((value) => (
                <div
                  className="col-lg-4 col-md-6 col-12 mb_30"
                  key={value.id}
                >
                  <div className="occasion-card with-shadniche ow d-flex flex-column">
                    
                    {/* IMAGE */}
                    <img
                      src={`${api.defaults.baseURL}/uploads/${value.image}`}
                      alt={value.name}
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: "200px",
                        objectFit: "cover",
                      }}
                    />

                    {/* CONTENT */}
                    <div
                      className="p_30 d-flex flex-column justify-content-between"
                      style={{ minHeight: "150px" }}
                    >
                      <div>
                        <h3 className="mb-3">{value.name}</h3>
                        <p>{value.desc}</p>
                      </div>

                      <Link to="/viewhotels" className="btn-1 mt-3">
                        Choose {value.name} <span />
                      </Link>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default SelectOccasion;