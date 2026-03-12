import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";

function ViewHotels() {
  const [cities, setCities] = useState([]);
  const [types, setTypes] = useState([]);
  const [hotel, setHotel] = useState([]);

  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    city: "",
    type: "",
  });

  const [applyFilter, setApplyFilter] = useState(false);

  // FETCH CITIES
  const fetchCities = async () => {
    try {
      const response = await api.get("/user/city");
      setCities(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH TYPES
  const fetchTypes = async () => {
    try {
      const response = await api.get("/user/venuetype");
      setTypes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH HOTELS
  const fetchHotel = async () => {
    try {
      setLoading(true);
      const response = await api.get("/user/hotel");
      setHotel(response.data.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchTypes();
    fetchHotel();
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // SEARCH BUTTON
  const handleSearch = (e) => {
    e.preventDefault();
    setApplyFilter(true);
  };

  // FILTER LOGIC
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

      {/* FILTER SECTION */}
      <div className="hotel-booking-form-1 gray-bg">
        <div className="auto-container">
          <div className="hotel-booking-form-1-wrap">
            <form
              className="hotel-booking-form-1-form d-flex flex-wrap align-items-end"
              onSubmit={handleSearch}
            >
              {/* CITY */}
              <div className="form-group">
                <p className="hotel-booking-form-1-label">City</p>
                <select name="city" onChange={handleChange}>
                  <option value="">All Cities</option>

                  {cities.map((city) => (
                    <option key={city._id} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* TYPE */}
              <div className="form-group">
                <p className="hotel-booking-form-1-label">Venue Type</p>

                <select name="type" onChange={handleChange}>
                  <option value="">All Types</option>

                  {types.map((type) => (
                    <option key={type._id} value={type.name}>
                      {type.name}
                    </option>
                  ))}
                </select>
              </div>
           
              {/* <div className="form-group">
                {" "}
                <p className="hotel-booking-form-1-label">Check In</p>{" "}
                <input
                  type="date"
                  name="checkin"
                  onChange={handleChange}
                />{" "}
              </div>{" "}
            
              <div className="form-group">
                {" "}
                <p className="hotel-booking-form-1-label">Check Out</p>{" "}
                <input
                  type="date"
                  name="checkout"
                  onChange={handleChange}
                />{" "}
              </div> */}
              {/* BUTTON */}
              <div className="form-group">
                <button type="submit" className="btn-1">
                  Search Hotels
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* HOTEL LIST */}
      <div className="container">
        <div className="row mt-5">
          {loading && <p className="text-center">Loading hotels...</p>}

          {!loading && filteredHotels.length === 0 && (
            <p className="text-center">❌ No hotels found</p>
          )}

          {filteredHotels.map((value) => (
            <div key={value._id} className="col-lg-4 col-md-6 mt-4 mb-4">
              <div className="card shadow h-100">
                <Link to={`/viewvenue/${value._id}`}>
                  <img
                    src={`${api.defaults.baseURL}/uploads/${value.image}`}
                    className="card-img-top"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                    }}
                    alt={value.name}
                  />
                </Link>

                <div className="card-body">
                  <h5>{value.name}</h5>

                  {/* TYPE */}
                  <span className="badge bg-success">
                    {value.type?.name || value.type}
                  </span>

                  {/* CITY */}
                  <p className="mt-2">📍 {value.city}</p>

                  {/* PRICE */}
                  <p>₹{value.price} / Night</p>

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
