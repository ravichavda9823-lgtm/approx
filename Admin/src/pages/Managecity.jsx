import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { toast } from "react-toastify";

function ManageCity() {

  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");
  const [editCityId, setEditCityId] = useState(null);


  const fetchCities = async () => {
    try {
      const response = await api.get("/admin/city");
      setCities(response.data.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editCityId) {
        await api.put(`/admin/city/update/${editCityId}`, {
          name: cityName,
        });
        toast.success("City Updated Successfully");
      } else {
        await api.post("/admin/city/addcity", {
          name: cityName,
        });
        toast.success("City Added Successfully");
      }

      setCityName("");
      setEditCityId(null);
      fetchCities();
    } catch (err) {
      console.log(err);
      toast.error("Invalid Details...")
    }
  };


  const deleteCity = async (id) => {
    try {
      await api.delete(`/admin/city/delete/${id}`);
      toast.success("City Deleted Successfully");
      fetchCities();
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <div className="page-wrapper bg-light min-vh-100">
      <Header/>
      <div className="page-content container-fluid py-4">
        {/* HEADER */}
         <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold text-dark mb-0">
            Manage Cities
            </h3>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-start mt-2 mt-md-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 small">
                <li className="breadcrumb-item">
                  <a
                    href="#"
                    className="text-decoration-none text-muted"
                   
                  >
                    Dashboard
                  </a>
                </li>
                <li className="breadcrumb-item active fw-medium text-primary">
                  Cities
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* CARD */}
        <div className="row justify-content-center p-4">
          <div className="col-xl-12">
            <div className="card border-0 shadow-sm rounded-4">
              {/* CARD HEADER */}
              <div className="card-header bg-white border-0 p-4">
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 p-2 rounded-3 me-3">
                    <i className="fa fa-city text-primary"></i>
                  </div>
                  <h5 className="mb-0 fw-bold">City Management</h5>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="card-body p-4">
                {/* FORM */}
                <form
                  className="row g-3 mb-4 p-3 bg-light rounded-3"
                  onSubmit={handleSubmit}
                >
                  <div className="col-md-8">
                    <label className="form-label fw-bold small">
                      City Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg border-0 shadow-sm"
                      placeholder="e.g. Ahmedabad"
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-md-4 d-flex align-items-end">
                    <button
                      className={`btn btn-lg w-100 fw-bold ${
                        editCityId ? "btn-warning" : "btn-primary"
                      }`}
                    >
                      {editCityId ? "Update City" : "Add City"}
                    </button>
                  </div>
                </form>

                {/* TABLE */}
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr className="text-uppercase small text-muted">
                        <th className="ps-3">#</th>
                        <th>City Name</th>
                        <th className="text-end pe-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cities.length === 0 ? (
                        <tr>
                          <td
                            colSpan="3"
                            className="text-center py-4 text-muted"
                          >
                            No cities found
                          </td>
                        </tr>
                      ) : (
                        cities.map((city, index) => (
                          <tr key={city._id}>
                            <td className="ps-3">{index + 1}</td>
                            <td className="fw-bold">{city.name}</td>
                            <td className="text-end pe-3">
                              <button
                                className="btn btn-sm btn-light me-2"
                                onClick={() => {
                                  setCityName(city.name);
                                  setEditCityId(city._id);
                                }}
                              >
                                <i className="fa fa-edit text-info"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-light"
                                onClick={() => deleteCity(city._id)}
                              >
                                <i className="fa fa-trash text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ManageCity;
