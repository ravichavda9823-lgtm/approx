import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import api from "../utils/AxiosConfig";
import Header from "../common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function ManageOccasion() {
  const [formDataState, setFormDataState] = useState({
    name: "",
    desc: "",
    status: "Active",
  });

  const [editId, setEditId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchOccasions = async () => {
    try {
      const response = await api.get("/admin/occasion");
      return response.data.data || [];
    } catch (err) {
      console.log(err);
    }
  };

  const {
    data: occasionList = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["occasionList"],
    queryFn: fetchOccasions,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataState((prev) => ({
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

    if (!formDataState.name || !formDataState.desc) {
      toast.error("All fields are required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", formDataState.name);
      formData.append("desc", formDataState.desc);
      formData.append("status", formDataState.status);

      if (selectedFile) {
        formData.append("image", selectedFile);
      }

      if (editId) {
        await api.put(`/admin/occasion/update/${editId}`, formData);
        toast.success("Occasion Updated Successfully");
      } else {
        await api.post("/admin/occasion/addoccasion", formData);
        toast.success("Occasion Added Successfully");
      }

      handleCancel();
      fetchOccasions();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (value) => {
    setEditId(value._id);

    setFormDataState({
      name: value.name,
      desc: value.desc,
      status: value.status || "Active",
    });

    setPreview(value.image);
    setIsFormVisible(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`/admin/occasion/delete/${id}`);
      if (response.status === 200) {
        toast.success("Occasion Deleted Successfully");
        fetchOccasions();
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setFormDataState({
      name: "",
      desc: "",
      status: "Active",
    });
    setSelectedFile(null);
    setPreview(null);
    setIsFormVisible(false);
  };

  return (
    <div className="page-wrapper bg-light min-vh-100">
      <Header />
      <div className="page-content container-fluid py-4">
        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold text-dark mb-0">Occasion Management</h3>
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
                  occasion
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {isFormVisible ? (
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-header bg-white py-3 border-bottom">
              <h5 className="mb-0 fw-bold">
                {editId ? "Edit Occasion" : "Add New Occasion"}
              </h5>
            </div>

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="card-body p-4">
                <div className="row g-4">
                  <div className="col-md-4">
                    {preview && (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-100 rounded"
                        style={{
                          height: "180px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </div>

                  <div className="col-md-8">
                    <div className="mb-3">
                      <label className="form-label fw-bold small">
                        Upload Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleFileChange}
                        required={!editId}
                      />
                    </div>

                    <div className="row g-3">
                      <div className="col-md-8">
                        <label className="form-label fw-bold small">
                          Occasion Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          value={formDataState.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-bold small">
                          Status
                        </label>
                        <select
                          name="status"
                          className="form-select"
                          value={formDataState.status}
                          onChange={handleInputChange}
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-3">
                      <label className="form-label fw-bold small">
                        Description
                      </label>
                      <textarea
                        name="desc"
                        className="form-control"
                        value={formDataState.desc}
                        onChange={handleInputChange}
                        rows="3"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <button className="btn btn-primary fw-bold me-2">
                  {editId ? "Update Now" : "Save Occasion"}
                </button>
                <button
                  type="button"
                  className="btn btn-light fw-bold"
                  onClick={handleCancel}
                >
                  Back to List
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
            <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold text-secondary">
                Registered Occasions
              </h5>
              <button
                className="btn btn-primary fw-bold px-4"
                onClick={() => setIsFormVisible(true)}
              >
                + Add New Occasion
              </button>
            </div>

            <div className="table-responsive">
              {isLoading ? (
                <p className="p-3">Loading Occasion...</p>
              ) : (
                <>
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light text-uppercase small">
                      <tr>
                        <th className="ps-4">Occasion</th>
                        <th>Status</th>
                        <th>ID</th>
                        <th className="text-end pe-4">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {occasionList.map((value) => (
                        <tr key={value._id}>
                          <td className="ps-4">
                            <div className="d-flex align-items-center">
                              <img
                                src={`${api.defaults.baseURL}/uploads/${value.image}`}
                                alt={value.name}
                                className="rounded-3 me-3"
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  objectFit: "cover",
                                }}
                              />
                              <div className="fw-bold">{value.name}</div>
                            </div>
                          </td>

                          <td>{value.status}</td>

                          <td>
                            OCC-
                            {value._id.toString().slice(-4).padStart(4, "0")}
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
                              onClick={() => handleDelete(value._id)}
                            >
                              <i className="fa fa-trash text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      ))}

                      {occasionList.length === 0 && (
                        <tr>
                          <td colSpan="4" className="text-center py-4">
                            No occasions found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </>
              )}
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default ManageOccasion;
