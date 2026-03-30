import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import api from "../utils/AxiosConfig";
import Header from "../common/Header";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

function ManageUser() {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
    phone: "", // ✅ added
  });

  const fetchUsers = async () => {
    try {
      const response = await api.get("/auth/Signin");
      return response.data.data || [];
    } catch (e) {
      console.log(e);
    }
  };

  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const handleEdit = (user) => {
    setIsEdit(true);
    setEditId(user._id);

    setForm({
      name: user.username,
      email: user.email,
      role: user.role,
      status: user.status || "Active",
      phone: user.phone || "", // ✅ added
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateUser = async ({ form, editId }) => {
    const response = await api.put(`/auth/update/${editId}`, {
      username: form.name || "", // ✅ fixed (no null)
      email: form.email || "",
      role: form.role || "",
      status: form.status || "Active",
      phone: form.phone || "",
    });

    return response.data;
  };

  const mutation = useMutation({
    mutationFn: updateUser,

    onSuccess: () => {
      toast.success("User Updated Successfully...");

      setIsEdit(false);
      setEditId(null);

      setForm({
        name: "",
        email: "",
        role: "",
        status: "Active",
        phone: "",
      });

      queryClient.invalidateQueries({ queryKey: ["users"] });
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ form, editId });
  };

  const handleCancel = () => {
    setIsEdit(false);
    setEditId(null);
    setForm({
      name: "",
      email: "",
      role: "",
      status: "Active",
      phone: "",
    });
  };

  const FetchDeleteUser = async (id) => {
    try {
      let response = await api.delete(`/auth/delete/${id}`);
      if (response.status === 200) {
        toast.success("User Deleted Successfully");
        queryClient.invalidateQueries({ queryKey: ["users"] });
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
              <h3 className="fw-bold">
                {isEdit ? "Edit User" : "Manage Users"}
              </h3>
            </div>
            <div className="col-md-6 d-flex justify-content-md-end justify-content-start mt-2 mt-md-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 small">
                  <li className="breadcrumb-item">
                    <a href="#" className="text-decoration-none text-muted">
                      Dashboard
                    </a>
                  </li>
                  <li className="breadcrumb-item active fw-medium text-primary">
                    User
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {isEdit && (
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Name</label>
                      <input
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Role</label>
                      <input
                        type="text"
                        className="form-control"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary me-2"
                    type="submit"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Updating..." : "Update User"}
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
              {isLoading ? (
                <p className="p-3">Loading users...</p>
              ) : (
                <div className="table-responsive">
                  <table className="table mb-0 align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Phone</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.length > 0 ? (
                        users.map((value, index) => (
                          <tr key={value._id}>
                            <td>{index + 1}</td>
                            <td>{value.username}</td>
                            <td>{value.email}</td>
                            <td>{value.role}</td>
                            <td>{value.phone || "-"}</td>
                            <td className="text-end pe-3">
                              <button
                                className="btn btn-sm btn-light me-2"
                                onClick={() => handleEdit(value)}
                              >
                                <i className="fa fa-edit text-info"></i>
                              </button>
                              <button
                                className="btn btn-sm btn-light"
                                onClick={() => FetchDeleteUser(value._id)}
                              >
                                <i className="fa fa-trash text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center py-3">
                            No users found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ManageUser;
