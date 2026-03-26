import React, { useState, useEffect } from "react";
import Footer from "../common/Footer";
import api from "../utils/AxiosConfig";
import Header from "../common/Header";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

function ManageBookingHistory() {
  const [isDetailView, setIsDetailView] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const fetchBookings = async () => {
    try {
      const response = await api.get("/admin/booking");
      console.log(response.data);
      return response.data.data || [];
    } catch (error) {
      console.log("Booking fetch error", error);
    }
  };

  const {
    data: bookings = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
  });

  const DeleteBooking = async (id) => {
    try {
      await api.delete(`/admin/booking/delete/${id}`);
      toast.success("Booking Deleted Successfully");
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const handleView = (booking) => {
    setSelectedBooking(booking);
    setIsDetailView(true);
  };

  return (
    <div className="page-wrapper bg-light min-vh-100 ">
      <Header />
      <div className="page-content container-fluid py-4">
        {/* HEADER */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold text-dark mb-0">
              {isDetailView
                ? "Booking History Detail"
                : "Manage Booking History"}
            </h3>
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
                  Booking History
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {!isDetailView ? (
          <>
            {/* STATS */}

            {/* TABLE */}
            <div className="card border-0 shadow-sm overflow-hidden mt-4">
              {isLoading ? (
                <p className="p-3">Loading bookings...</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                      <tr>
                        <th className="ps-4">ID</th>
                        <th>User</th>
                        <th>Hotel</th>
                        <th>CheckIn</th>
                        <th>CheckOut</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th className="text-end pe-4">Actions</th>
                      </tr>
                    </thead>

                    <tbody>
                      {bookings.length > 0 ? (
                        bookings.map((value) => (
                          <tr key={value._id}>
                            <td className="ps-4 fw-bold">
                              #{value._id.slice(0, 4)}
                            </td>

                            <td>{value.user_name}</td>

                            <td>
                              {value.hotel_name} <br />
                              <small className="text-muted">
                                {value.message}
                              </small>
                            </td>

                            <td>{value.checkin.split("T")[0]}</td>
                            <td>{value.checkout.split("T")[0]}</td>

                            <td className="fw-bold">₹{value.totalAmount}</td>

                            <td>
                              <span
                                className={`badge rounded-pill ${
                                  value.status === "Completed"
                                    ? "bg-success"
                                    : "bg-danger"
                                }`}
                              >
                                {value.status}
                              </span>
                            </td>

                            <td className="text-end pe-4">
                              <button
                                className="btn btn-sm btn-light me-2"
                                onClick={() => handleView(value)}
                              >
                                <i className="fa fa-eye text-info"></i>
                              </button>

                              <button
                                className="btn btn-sm btn-light"
                                onClick={() => DeleteBooking(value._id)}
                              >
                                <i className="fa fa-trash text-danger"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td
                            colSpan="8"
                            className="text-center py-4 text-muted"
                          >
                            No bookings found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        ) : (
          selectedBooking && (
            <div className="card border-0 shadow-sm p-4">
              <h5 className="fw-bold mb-3">
                Booking Detail #{selectedBooking._id.slice(0, 6)}
              </h5>

              <p>
                <strong>User:</strong> {selectedBooking.user_name}
              </p>
              <p>
                <strong>Hotel:</strong> {selectedBooking.hotel_name} <br />
              </p>
              <p>
                <strong>Venue:</strong> {selectedBooking.message} <br />
              </p>

              <p>
                <strong>CheckIn:</strong>
                {selectedBooking.checkin.split("T")[0]}
              </p>
              <p>
                <strong>CheckOut:</strong>{" "}
                {selectedBooking.checkout.split("T")[0]}
              </p>
              <p>
                <strong>Status:</strong> {selectedBooking.status}
              </p>
              <p>
                <strong>Total:</strong> ₹{selectedBooking.totalAmount}
              </p>

              <button
                className="btn btn-secondary mt-3"
                onClick={() => setIsDetailView(false)}
              >
                Back
              </button>
            </div>
          )
        )}

        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ManageBookingHistory;
