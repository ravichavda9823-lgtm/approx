import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { useQuery } from "@tanstack/react-query";

function ViewHotels() {
  const [filters, setFilters] = useState({
    city: "",
    type: "",
  });

  const [applyFilter, setApplyFilter] = useState(false);

  // ✅ FETCH FUNCTIONS (SAFE)
  const fetchHotel = async () => {
    const response = await api.get("/user/hotel");
    return response?.data?.data || [];
  };

  const fetchCities = async () => {
    const response = await api.get("/user/city");
    return response?.data?.data || [];
  };

  const fetchTypes = async () => {
    const response = await api.get("/user/venuetype");
    return response?.data?.data || [];
  };

  // ✅ REACT QUERY
  const {
    data: hotel = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["hotel"],
    queryFn: fetchHotel,

  });

  const { data: cities = [] } = useQuery({
    queryKey: ["cities"],
    queryFn: fetchCities,
 
  });

  const { data: types = [] } = useQuery({
    queryKey: ["types"],
    queryFn: fetchTypes,
  });

  // ✅ FILTER HANDLER
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setApplyFilter(true);
  };

  // ✅ SAFE FILTER
  const filteredHotels = applyFilter
    ? hotel.filter((item) => {
        return (
          (filters.city === "" || item.city === filters.city) &&
          (filters.type === "" ||
            item.type === filters.type ||
            item.type?.name === filters.type)
        );
      })
    : hotel;

  return (
    <>
      {/* PAGE TITLE */}
      <div
        className="page-title"
        style={{
          backgroundImage:
            "url(https://cdn0.hitched.co.uk/vendor/2811/3_2/960/jpg/haynehouse-jadeg-379_4_192811-170324482894495.jpeg)",
          backgroundSize: "cover",
        }}
      >
        <div className="auto-container">
          <h1>Available Hotels & Rooms</h1>
        </div>
      </div>

      {/* FILTER */}
      <div className="hotel-booking-form-1 gray-bg">
        <div className="auto-container">
          <form onSubmit={handleSearch} className="d-flex flex-wrap gap-3">

            {/* CITY */}
            <select name="city" onChange={handleChange}>
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city._id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>

            {/* TYPE */}
            <select name="type" onChange={handleChange}>
              <option value="">All Types</option>
              {types.map((type) => (
                <option key={type._id} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>

            <button type="submit" className="btn-1">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* HOTELS */}
      <div className="container">
        <div className="row mt-5">

          {/* LOADING */}
          {isLoading && (
            <p className="text-center">Loading hotels...</p>
          )}

          {/* ERROR */}
          {isError && (
            <p className="text-danger text-center">Error loading hotels</p>
          )}

          {/* NO DATA */}
          {!isLoading && filteredHotels.length === 0 && (
            <p className="text-center">❌ No hotels found</p>
          )}

          {/* DATA */}
          {!isLoading &&
            filteredHotels.map((value) => (
              <div key={value._id} className="col-lg-4 col-md-6 mt-4 mb-4">
                <div className="card shadow h-100">

                  <Link to={`/viewvenue/${value._id}`}>
                    <img
                      src={`${api.defaults.baseURL}/uploads/${value?.image}`}
                      className="card-img-top"
                      style={{ height: "300px", objectFit: "cover" }}
                      alt={value?.name}
                    />
                  </Link>

                  <div className="card-body">
                    <h5>{value?.name}</h5>

                    <span className="badge bg-success">
                      {value?.type?.name || value?.type}
                    </span>

                    <p className="mt-2">📍 {value?.city}</p>

                    <p>₹{value?.price} / Night</p>

                    <Link
                      to={`/hoteldetails/${value._id}`}
                      className="btn-1 w-100"
                    >
                      View Details
                    </Link>
                  </div>

                </div>
              </div>
            ))}

        </div>
      </div>
    </>
  );
}

export default ViewHotels;