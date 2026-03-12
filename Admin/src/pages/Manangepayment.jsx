import React, { useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

function ManagePayment() {
  const [payments, setPayments] = useState([
    {
      id: "PAY-9901",
      user: "Rahul Patel",
      venue: "Royal Palace Banquet",
      totalAmount: 250000,
      paidAmount: 250000,
      dueAmount: 0,
      method: "HDFC Bank Transfer",
      date: "2026-01-20",
      status: "Successful",
    },
    {
      id: "PAY-9902",
      user: "Amit Shah",
      venue: "Ocean View Lawn",
      totalAmount: 85000,
      paidAmount: 35000,
      dueAmount: 50000,
      method: "UPI (Google Pay)",
      date: "2026-01-22",
      status: "Partial",
    },
    {
      id: "PAY-9903",
      user: "Sneha Gupta",
      venue: "Grand Ballroom",
      totalAmount: 120000,
      paidAmount: 0,
      dueAmount: 120000,
      method: "Pending",
      date: "2026-01-25",
      status: "Failed",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);

  const filteredPayments = payments.filter(
    (p) =>
      p.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-wrapper bg-light min-vh-100">
      <Header/>
      <div className="page-content container-fluid py-4">
        {/* HEADER */}
        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold text-dark mb-0">
              {isDetailView ? "Transaction Details" : "Manage Payments"}
            </h3>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-start mt-2 mt-md-0">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0 small">
                <li className="breadcrumb-item"><a href="#" className="text-decoration-none text-muted">Dashboard</a></li>
                <li className="breadcrumb-item active fw-medium text-primary">Payment</li>
              </ol>
            </nav>
          </div>
        </div>

        {!isDetailView ? (
          <>
            {/* QUICK STATS */}
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3 border-start border-primary border-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted small mb-1 uppercase">Total Collections</h6>
                      <h4 className="fw-bold mb-0 text-primary">₹2,85,000</h4>
                    </div>
                    <div className="bg-primary bg-opacity-10 p-2 rounded text-primary">
                      <i className="fa fa-wallet fs-4"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3 border-start border-warning border-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted small mb-1 uppercase">Outstanding Dues</h6>
                      <h4 className="fw-bold mb-0 text-warning">₹1,70,000</h4>
                    </div>
                    <div className="bg-warning bg-opacity-10 p-2 rounded text-warning">
                      <i className="fa fa-clock fs-4"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm p-3 border-start border-success border-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted small mb-1 uppercase">Today's Profit</h6>
                      <h4 className="fw-bold mb-0 text-success">₹35,000</h4>
                    </div>
                    <div className="bg-success bg-opacity-10 p-2 rounded text-success">
                      <i className="fa fa-chart-line fs-4"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SEARCH & FILTERS */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5">
                    <div className="input-group bg-light rounded border px-2">
                      <span className="input-group-text bg-transparent border-0">
                        <i className="fa fa-search text-muted"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control bg-transparent border-0 shadow-none"
                        placeholder="Search by ID or Customer..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PAYMENTS TABLE */}
            <div className="card border-0 shadow-sm overflow-hidden">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="bg-light">
                    <tr className="text-muted small uppercase">
                      <th className="ps-4 py-3">Transaction</th>
                      <th>Customer & Venue</th>
                      <th>Total</th>
                      <th>Paid</th>
                      <th>Balance</th>
                      <th>Status</th>
                      <th className="text-end pe-4">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPayments.map((p) => (
                      <tr key={p.id}>
                        <td className="ps-4">
                          <div className="fw-bold text-dark small">{p.id}</div>
                          <div className="text-muted x-small">{p.date}</div>
                        </td>
                        <td>
                          <div className="fw-semibold text-dark">{p.user}</div>
                          <div className="text-muted small">{p.venue}</div>
                        </td>
                        <td className="fw-semibold text-dark">₹{p.totalAmount.toLocaleString()}</td>
                        <td className="text-success fw-semibold">₹{p.paidAmount.toLocaleString()}</td>
                        <td className={p.dueAmount > 0 ? "text-danger fw-bold" : "text-muted"}>
                          ₹{p.dueAmount.toLocaleString()}
                        </td>
                        <td>
                          <span className={`badge px-3 py-2 rounded-pill ${
                            p.status === "Successful" ? "bg-success text-white" : 
                            p.status === "Partial" ? "bg-warning text-dark" : "bg-danger text-white"
                          }`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="text-end pe-4">
                          <button 
                            className="btn btn-sm btn-outline-primary border-0 shadow-none bg-primary bg-opacity-10"
                            title="View Details"
                            onClick={() => { setSelectedPayment(p); setIsDetailView(true); }}
                          >
                            <i className="fa fa-eye"></i>
                          </button>
                          <button className="btn btn-sm btn-outline-secondary border-0 ms-1 shadow-none bg-light" title="Print Receipt">
                            <i className="fa fa-print"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          /* ================= DETAIL VIEW ================= */
          <div className="card border-0 shadow-sm rounded-4">
             <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
              <h5 className="mb-0 fw-bold"><i className="fa fa-receipt me-2 text-primary"></i>Transaction Summary</h5>
              <button className="btn btn-sm btn-secondary" onClick={() => setIsDetailView(false)}>
                <i className="fa fa-arrow-left me-2"></i> Back
              </button>
            </div>
            {/* Detail UI content same as before but inside this clean container */}
            <div className="card-body p-4">
                <div className="row">
                   <div className="col-md-7 border-end">
                      <div className="mb-4">
                        <label className="text-muted small uppercase">Customer Info</label>
                        <h4 className="fw-bold">{selectedPayment.user}</h4>
                        <p className="text-muted mb-0">{selectedPayment.venue}</p>
                      </div>
                      <div className="row g-3">
                         <div className="col-6">
                            <label className="text-muted small d-block">Method</label>
                            <span className="fw-bold">{selectedPayment.method}</span>
                         </div>
                         <div className="col-6">
                            <label className="text-muted small d-block">Transaction Date</label>
                            <span className="fw-bold">{selectedPayment.date}</span>
                         </div>
                      </div>
                   </div>
                   <div className="col-md-5 ps-md-5">
                      <div className="bg-light p-4 rounded-4 shadow-sm border">
                         <div className="d-flex justify-content-between mb-2">
                            <span>Total Bill</span>
                            <span className="fw-bold">₹{selectedPayment.totalAmount.toLocaleString()}</span>
                         </div>
                         <div className="d-flex justify-content-between mb-2 text-success">
                            <span>Paid Amount</span>
                            <span className="fw-bold">₹{selectedPayment.paidAmount.toLocaleString()}</span>
                         </div>
                         <hr />
                         <div className="d-flex justify-content-between mb-0 text-danger fs-5 fw-bold">
                            <span>Balance Due</span>
                            <span>₹{selectedPayment.dueAmount.toLocaleString()}</span>
                         </div>
                      </div>
                      <button className="btn btn-dark w-100 mt-4 py-2 rounded-3 shadow-sm">
                        <i className="fa fa-print me-2"></i> Download Receipt
                      </button>
                   </div>
                </div>
            </div>
          </div>
        )}

        <div className="mt-5 text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ManagePayment;