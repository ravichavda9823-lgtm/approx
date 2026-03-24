import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import api from "../utils/AxiosConfig";
import Header from "../common/Header";
import { toast } from "react-toastify";

function ManageVenueBooking() {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);

  const fetchBookings = async () => {
    try {
      const response = await api.get("/admin/booking");
      setBookings(response.data.data || []);
    } catch (error) {
      console.log("Booking fetch error", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleStatusChange = (id, field, value) => {
    setBookings(
      bookings.map((b) => (b.id === id ? { ...b, [field]: value } : b)),
    );
  };

  const updateStatus = async (id, status) => {
  try {
    let response = await api.put(`/admin/booking/status/${_id}`, {
      status: status,
    });

    toast.success("Status updated successfully...");
    fetchBookings();
  } catch (error) {
    console.log(error);
    toast.error("Failed to update status...");
  }
};

  const DeleteBooking = async (id) => {
    try {
      await api.delete(`/admin/booking/delete/${id}`);
      toast.success("Booking Deleted Successfully...");
      fetchBookings();
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setIsDetailView(true);
  };

  // const filteredBookings = bookings.filter(
  //   (b) =>
  //     b.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     b.user.toLowerCase().includes(searchTerm.toLowerCase()),
  // );

  return (
    <div className="page-wrapper bg-light min-vh-100">
      <Header/>
      <div className="page-content container-fluid py-4">
        {/* HEADER SECTION */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold text-dark mb-0">
              {isDetailView ? "Booking Details" : "Manage Booking Venue"}
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
                  Booking
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {!isDetailView ? (
          <>
            <div className="card shadow-sm border-0 rounded-4 overflow-hidden mt-5">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                      <tr className="text-muted small text-uppercase">
                        <th className="ps-4">Venue & Event</th>
                        <th>Customer Details</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th className="text-end pe-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings.map((value) => (
                        <tr key={value.id}>
                          <td className="ps-4">
                            <div className="fw-bold text-dark">
                              {value.hotel_name}
                            </div>
                            <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary fw-normal small">
                              {value.message}
                            </span>
                          </td>
                          <td>
                            <div className="fw-semibold text-dark">
                              {value.user_name}
                            </div>
                            <div className="small text-muted">
                              {value.user_email}
                            </div>
                          </td>
                          <td>
                            <div className="fw-bold text-success">
                              ₹{value.totalAmount}
                            </div>
                            <div className="small text-muted">
                              {value.checkin.split("T")[0]}
                            </div>
                          </td>
                          <td>
                            <select
                              className={`form-select form-select-sm border-0 fw-bold bg-opacity-10 ${
                                value.status === "Confirmed"
                                  ? "bg-success text-success"
                                  : value.status === "Cancelled"
                                    ? "bg-danger text-danger"
                                    : "bg-warning text-dark"
                              }`}
                              value={value.status}
                              onChange={(e) => updateStatus( value._id,e.target.value)
                              }
                            >
                              <option value="Confirmed">Confirmed</option>
                              <option value="Pending">Pending</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>
                          <td className="text-end pe-4">
                            <button
                              className="btn btn-sm btn-light me-2"
                              onClick={() => handleViewDetails(value)}
                            >
                              <i className="fa fa-eye text-info"></i>
                            </button>
                            <button
                              className="btn btn-sm btn-light me-2"
                              onClick={() => DeleteBooking(value._id)}
                            >
                              <i className="fa fa-trash text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* ================= DETAILS PAGE VIEW ================= */
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center border-bottom">
              <h5 className="mb-0 fw-bold text-dark">
                Booking ID #{selectedBooking._id.slice(0, 4)}
              </h5>
              <button
                className="btn btn-outline-secondary btn-sm px-3"
                onClick={() => setIsDetailView(false)}
              >
                <i className="fa fa-arrow-left me-2"></i> Back to List
              </button>
            </div>
            <div className="card-body p-4">
              <div className="text-center mb-5">
                <div
                  className={`mx-auto rounded-circle d-flex align-items-center justify-content-center mb-3 shadow-sm ${
                    selectedBooking.status === "Confirmed"
                      ? "bg-success text-white"
                      : selectedBooking.status === "Cancelled"
                        ? "bg-danger text-white"
                        : "bg-warning text-dark"
                  }`}
                  style={{ width: "80px", height: "80px", fontSize: "32px" }}
                >
                  <i
                    className={`fa ${selectedBooking.status === "Confirmed" ? "fa-check" : selectedBooking.status === "Cancelled" ? "fa-times" : "fa-clock"}`}
                  ></i>
                </div>
                <h2 className="fw-bold mb-1">
                  Booking {selectedBooking.status}
                </h2>
                <p className="text-muted">Transaction and Event Overview</p>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <div className="p-4 border rounded-3 bg-light h-100">
                    <h6 className="fw-bold text-primary text-uppercase mb-3 border-bottom pb-2">
                      Customer Information
                    </h6>
                    <p className="mb-2">
                      <strong>Full Name:</strong> {selectedBooking.user_name}
                    </p>
                    {/* <p className="mb-2">
                      <strong>Phone Number:</strong> {selectedBooking.phone}
                    </p> */}
                    <p className="mb-0">
                      <strong>Email ID:</strong> {selectedBooking.user_email}
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 border rounded-3 bg-light h-100">
                    <h6 className="fw-bold text-success text-uppercase mb-3 border-bottom pb-2">
                      Event Information
                    </h6>
                    <p className="mb-2">
                      <strong>Hotel Name:</strong> {selectedBooking.name}
                    </p>
                    <p className="mb-2">
                      <strong>Event Type:</strong> {selectedBooking.message}
                    </p>
                    <p className="mb-2">
                      <strong>CheckIn Date:</strong>{" "}
                      <span className="text-danger fw-bold">
                        {selectedBooking.checkin.split("T")[0]}
                      </span>
                    </p>
                    <p className="mb-2">
                      <strong>CheckIn Date:</strong>{" "}
                      <span className="text-danger fw-bold">
                        {selectedBooking.checkout.split("T")[0]}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="col-12">
                  <div className="p-4 border rounded-3 shadow-sm">
                    <div className="row align-items-center mb-3">
                      <div className="col-md-6">
                        <h4 className="mb-0 fw-bold">
                          Total Amount:{" "}
                          <span className="text-success">
                            ₹{selectedBooking.totalAmount}
                          </span>
                        </h4>
                      </div>
                      <div className="col-md-6 text-md-end">
                        <span
                          className={`badge px-3 py-2 fs-6 ${selectedBooking.payment === "Paid" ? "bg-success" : "bg-warning"}`}
                        >
                          Payment Status: {selectedBooking.status}
                        </span>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ManageVenueBooking;
