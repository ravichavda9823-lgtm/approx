import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

function ManageVenueType() {
  const [venueName, setVenueName] = useState("");
  const [editVenueId, setEditVenueId] = useState(null);
  const queryClient = useQueryClient();

  const fetchVenueTypes = async () => {
    try {
      const response = await api.get("/admin/venuetype");
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data: venuetype = [], isLoading } = useQuery({
    queryKey: ["venuetype"],
    queryFn: fetchVenueTypes,
  });

  const saveVenueType = async ({ venueName, editVenueId }) => {
    if (editVenueId) {
      const res = await api.put(`/admin/venuetype/update/${editVenueId}`, {
        name: venueName,
      });

      return { data: res.data, isEdit: true };
    } else {
      const res = await api.post("/admin/venuetype/addvenuetype", {
        name: venueName,
      });

      return { data: res.data, isEdit: false };
    }
  };

  const mutation = useMutation({
    mutationFn: saveVenueType,

    onSuccess: (result) => {
      if (result.isEdit) {
        toast.success("Venue Type Updated Successfully...");
      } else {
        toast.success("Venue Added Successfully...");
      }

      setVenueName("");
      setEditVenueId(null);

      queryClient.invalidateQueries({ queryKey: ["venuetype"] });
    },

    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      venueName,
      editVenueId,
    });
  };
  const deleteVenueType = async (id) => {
    try {
      const response = await api.delete(`/admin/venuetype/delete/${id}`);
      if (response.status === 200) {
        toast.success("Venue Type Deleted...");
        queryClient.invalidateQueries({ queryKey: ["venuetype"] });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-wrapper bg-light min-vh-100">
      <Header />
      <div className="page-content container-fluid py-4">
        {/* HEADER */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold text-dark mb-0">Manage Venue Type</h3>
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
                  Venuetype
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
                  <div className="bg-success bg-opacity-10 p-2 rounded-3 me-3">
                    <i className="fa fa-layer-group text-success"></i>
                  </div>
                  <h5 className="mb-0 fw-bold">Venue Type Management</h5>
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
                      Venue Type Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg border-0 shadow-sm"
                      placeholder="e.g. Banquet Hall"
                      value={venueName}
                      onChange={(e) => setVenueName(e.target.value)}
                    />
                  </div>

                  <div className="col-md-4 d-flex align-items-end">
                    <button
                      className={`btn btn-lg w-100 fw-bold ${
                        editVenueId ? "btn-warning" : "btn-primary"
                      }`}
                      type="submit"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending
                        ? editVenueId
                          ? "Updating..."
                          : "Saving..."
                        : editVenueId
                          ? "Update"
                          : "Add Venue Type"}
                    </button>
                  </div>
                </form>

                {/* TABLE */}
                <div className="table-responsive">
                  {isLoading ? (
                    <p className="p-3">Loading Venuetypes...</p>
                  ) : (
                    <>
                      <table className="table table-hover align-middle">
                        <thead className="table-light">
                          <tr className="text-uppercase small text-muted">
                            <th className="ps-3">#</th>
                            <th>Venue Type</th>
                            <th className="text-end pe-3">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {venuetype.length === 0 ? (
                            <tr>
                              <td
                                colSpan="3"
                                className="text-center py-4 text-muted"
                              >
                                No venue types found
                              </td>
                            </tr>
                          ) : (
                            venuetype.map((value, index) => (
                              <tr key={value._id}>
                                <td className="ps-3">{index + 1}</td>
                                <td className="fw-bold">{value.name}</td>
                                <td className="text-end pe-3">
                                  <button
                                    className="btn btn-sm btn-light me-2"
                                    onClick={() => {
                                      setVenueName(value.name);
                                      setEditVenueId(value._id);
                                    }}
                                  >
                                    <i className="fa fa-edit text-info"></i>
                                  </button>
                                  <button
                                    className="btn btn-sm btn-light"
                                    onClick={() => deleteVenueType(value._id)}
                                  >
                                    <i className="fa fa-trash text-danger"></i>
                                  </button>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </>
                  )}
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

export default ManageVenueType;
