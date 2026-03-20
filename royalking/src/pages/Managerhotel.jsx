import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";

function ManagerViewHotels() {

  const [cities, setCities] = useState([]);
  const [types, setTypes] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(false);

  const [filters, setFilters] = useState({
    city: "",
    type: "",
  });

  // FETCH CITIES
  const fetchCities = async () => {
    try {
      const response = await api.get("/manager/city");
      setCities(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH TYPES
  const fetchTypes = async () => {
    try {
      const response = await api.get("/manager/venuetype");
      setTypes(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // FETCH HOTELS
  const fetchHotel = async () => {
    try {

      setLoading(true);

      const response = await api.get("/manager/hotel");

      setHotel(response.data.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchCities();
    fetchTypes();
    fetchHotel();
  }, []);

  // HANDLE SELECT CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFilters({
      ...filters,
      [name]: value,
    });

  };

  // SEARCH BUTTON
  const handleSearch = (e) => {
    e.preventDefault();
  };

  // FILTER LOGIC
  const filteredHotels = hotel.filter((item) => {

    return (
      (filters.city === "" || item.city === filters.city) &&
      (filters.type === "" ||
        item.type === filters.type ||
        item.type?.name === filters.type)
    );

  });

  // DELETE HOTEL
  const FetchDeleteHotel = async (id) => {

    try {

      const response = await api.delete(`/manager/hotel/delete/${id}`);

      if (response.status === 200) {

        toast.success("Hotel Deleted Successfully...");

        fetchHotel();

      }

    } catch (e) {

      console.log(e);
      toast.error("Invalid Details...")

    }

  };

  return (
    <>
      {/* PAGE TITLE */}
      <div
        className="page-title"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/13036817/pexels-photo-13036817.jpeg)",
          backgroundSize: "cover",
        }}
      >
        <div className="auto-container">
          <h1>Manager Hotels</h1>
        </div>
      </div>

      {/* FILTER SECTION */}
      <div className="hotel-booking-form-1 gray-bg">

        <div className="auto-container">

          <form
            className="hotel-booking-form-1-form d-flex flex-wrap align-items-end"
            onSubmit={handleSearch}
          >

            {/* CITY */}
            <div className="form-group">

              <p className="hotel-booking-form-1-label">City</p>

              <select
                name="city"
                value={filters.city}
                onChange={handleChange}
              >

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

              <select
                name="type"
                value={filters.type}
                onChange={handleChange}
              >

                <option value="">All Types</option>

                {types.map((type) => (

                  <option key={type._id} value={type.name}>
                    {type.name}
                  </option>

                ))}

              </select>

            </div>

            <div className="form-group">
              <button type="submit" className="btn-1">
                Search Hotels
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* HOTEL LIST */}
      <div className="container">

        <div className="row mt-5">

          {loading && (
            <p className="text-center">Loading hotels...</p>
          )}

          {!loading && filteredHotels.length === 0 && (
            <p className="text-center">❌ No hotels found</p>
          )}

          {filteredHotels.map((value) => (

            <div key={value._id} className="col-lg-4 col-md-6 mb-4">

              <div className="card shadow h-100">

                <Link to={`/managerhoteldetails/${value._id}`}>

                  <img
                    src={`${api.defaults.baseURL}/uploads/${value.image}`}
                    alt={value.name}
                    className="card-img-top"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />

                </Link>

                <div className="card-body">

                  <h5>{value.name}</h5>

                  <span className="badge bg-success">
                    {value.type?.name || value.type}
                  </span>

                  <p className="mt-2">📍 {value.city}</p>

                  <p>₹{value.price} / Night</p>

                  <div className="d-flex gap-2 mt-3">

                    <Link
                      to={`/edithotel/${value._id}`}
                      state={value}
                      className="btn-1 w-50"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => FetchDeleteHotel(value._id)}
                      className="btn-1 w-50"
                      style={{ background: "#d9534f" }}
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default ManagerViewHotels;