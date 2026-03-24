import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import api from "../utils/AxiosConfig";
import Header from "../common/Header";
import { toast } from "react-toastify";

function ManageHotel() {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [form, setForm] = useState({
    name: "",
    city: "",
    image: "",
    type: "",
    price: "",
    shortdesc: "",
    desc: "",
    status: "Active",
  });

  const fetchHotel = async () => {
    try {
      const response = await api.get("/admin/hotel");
      setHotel(response.data.data || []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotel();
  }, []);

  const handleAdd = () => {
    setIsFormOpen(true);
    setIsEdit(false);
    setEditId(null);
    setForm({
      name: "",
      image: "",
      city: "",
      type: "",
      price: "",
      shortdesc: "",
      desc: "",
      status: "Active",
    });
  };

  const handleEdit = (value) => {
    setIsFormOpen(true);
    setIsEdit(true);
    setEditId(value._id);

    setForm({
      name: value.name,
      city: value.city,
      type: value.type,
      image: value.image,
      price: value.price,
      shortdesc: value.shortdesc,
      desc: value.desc,
      status: value.status,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("city", form.city);
      formData.append("type", form.type);
      formData.append("price", form.price);
      formData.append("shortdesc", form.shortdesc);
      formData.append("desc", form.desc);
      formData.append("status", form.status);
      formData.append("image", selectedFile);

      if (isEdit) {
        let response = await api.put(`/admin/hotel/update/${editId}`, formData);
        setEditId(response.data.data);
        toast.success("Hotel Updated Successfully...");
      } else {
        let response = await api.post("/admin/hotel/addhotel", formData);
        setHotel(response.data.data);
        toast.success("Hotel Added Successfully...", {
          onClose: () => {
            window.location.href = "/managehotel";
          },
        });
      }

      handleCancel();
      fetchHotel();
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setIsEdit(false);
    setEditId(null);
  };

  const FetchDeleteHotel = async (id) => {
    try {
      const response = await api.delete(`/admin/hotel/delete/${id}`);
      if (response.status === 200) {
        toast.success("Hotel Deleted Successfully");
        fetchHotel();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page-wrapper">
      <Header />
      <div className="page-content">
        <div className="container-fluid mt-4">
          <div className="row mb-4 align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold text-dark mb-0">Manage Hotels</h3>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-start mt-2 mt-md-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 small">
                  <li className="breadcrumb-item">
                    <a
                      href="#"
                      className="text-decoration-none text-muted"
                      onClick={() => setIsDetailView(false)}
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="breadcrumb-item active fw-medium text-primary">
                    Hotel
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* ===== HEADER ===== */}
          <div className="mb-3 row ">
            <div className="col-2 ms-5  ms-auto">
              <button
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={handleAdd}
              >
                + Add Hotel
              </button>
            </div>
          </div>

          {/* ===== ADD / EDIT FORM ===== */}
          {isFormOpen && (
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <h5 className="mb-3">{isEdit ? "Edit Hotel" : "Add Hotel"}</h5>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Hotel Name</label>
                      <input
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Image Url</label>
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        required={!editId}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">City</label>
                      <input
                        className="form-control"
                        name="city"
                        value={form.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">ShortDesc</label>
                      <input
                        className="form-control"
                        name="shortdesc"
                        value={form.shortdesc}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Description</label>
                      <input
                        className="form-control"
                        name="desc"
                        value={form.desc}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Hotel Type</label>
                      <input
                        className="form-control"
                        name="type"
                        value={form.type}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={form.price}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        name="status"
                        value={form.status}
                        onChange={handleInputChange}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>

                  <button className="btn btn-success me-2">
                    {isEdit ? "Update Hotel" : "Add Hotel"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}

          <div className="card shadow-sm">
            <div className="card-body p-0">
              {loading ? (
                <p className="p-3">Loading hotels...</p>
              ) : (
                <table className="table mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>City</th>
                      <th>Type</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotel.map((value, index) => (
                      <tr key={value._id}>
                        <td>{index + 1}</td>
                        <td>{value.name}</td>
                        <td>{value.city}</td>
                        <td>{value.type}</td>
                        <td>{value.price}</td>
                        <td>
                          <span
                            className={`badge ${
                              value.status === "Active"
                                ? "bg-success-subtle text-success"
                                : "bg-danger-subtle text-danger"
                            }`}
                          >
                            {value.status}
                          </span>
                        </td>
                        <td className="text-end pe-3">
                          <button
                            className="btn btn-sm btn-light me-2"
                            onClick={() => handleEdit(value)}
                          >
                            <i className="fa fa-edit text-info"></i>
                          </button>
                          <button
                            className="btn btn-sm btn-light"
                            onClick={() => FetchDeleteHotel(value._id)}
                          >
                            <i className="fa fa-trash text-danger"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ManageHotel;
