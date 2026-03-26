import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import api from "../utils/AxiosConfig";
import Header from "../common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function ManageInquiry() {



  const fetchInquiry = async () => {
    try {
      const response = await api.get("/admin/inquiry");
      return response.data.data || [];
    } catch (e) {
      console.log(e);
    }
  };

 const { data:inquiry  = [], isLoading,isError,error } = useQuery({
   queryKey: ["inquiry"],
    queryFn: fetchInquiry,
 
  });

  const deleteInquiry = async (id) => {
    try {
      const response = await api.delete(`/admin/inquiry/delete/${id}`);

      if (response.status === 200) {
        toast.success("Inquiry Deleted Successfully");
        fetchInquiry();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page-wrapper">
      <Header/>
      <div className="page-content">
        <div className="container-fluid mt-4">

      <div className="row mb-4 align-items-center">
            <div className="col-md-6">
              <h3 className="fw-bold text-dark mb-0"> Manage Inquiry</h3>
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
                    Inquiry
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="card-body p-0">

              {isLoading ? (
                <p className="p-3">Loading inquiry...</p>
              ) : (
                <div className="table-responsive">
                  <table className="table mb-0 align-middle">

                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Date</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {inquiry.length > 0 ? (
                        inquiry.map((value, index) => (
                          <tr key={value._id}>
                            <td>{index + 1}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.subject}</td>
                            <td>{value.message}</td>
                            <td>{value.createdAt.split("T")[0]}</td>

                            <td className="text-end pe-3">
                              <button
                                className="btn btn-sm btn-light"
                                onClick={() => deleteInquiry(value._id)}
                              >
                                <i className="fa fa-trash text-danger"></i>
                              </button>
                            </td>

                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6" className="text-center py-3">
                            No Inquiry Found
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

export default ManageInquiry;