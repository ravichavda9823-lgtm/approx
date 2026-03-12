import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import api from "../utils/AxiosConfig";

function ManageUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    role:"",
    status: "Active",
  });

  const fetchUsers = async () => {
    try {
      const response = await api.get("/auth/Signin");
      setUsers(response.data.data || []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setIsEdit(true);
    setEditId(user._id);

    setForm({
      name: user.username,
      email: user.email,
      role:user.role,
      status: user.status || "Active",
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/auth/update/${editId._id}`, { _id:editId,
        name: form.username,
        email: form.email,
        role:form.role,
        status: form.status,
      });

      alert("User Updated Successfully");

      setIsEdit(false);
      setEditId(null);
      setForm({
        name: "",
        email: "",
        role:"",
        status: "Active"
      });

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsEdit(false);
    setEditId(null);
    setForm({
      name: "",
      email: "",
      role:"",
      status: "Active",
    });
  };

  const FetchDeleteUser = async (id) => {
    try {
      let response = await api.delete(`/auth/delete/${id}`);
      if (response.status === 200) {
        alert("User Deleted Successfully");
        fetchUsers();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="container-fluid mt-4">

          <div className="row mb-3">
            <div className="col-12">
              <h3 className="fw-bold">
                {isEdit ? "Edit User" : "Manage Users"}
              </h3>
            </div>
          </div>

        
          {isEdit && (
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <form onSubmit={handleUpdate}>
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

                  <button className="btn btn-primary me-2">
                    Update User
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
                          <td colSpan="5" className="text-center py-3">
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
