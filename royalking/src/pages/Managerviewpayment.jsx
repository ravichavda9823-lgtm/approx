import React, { useState } from "react";
import { Link } from "react-router-dom";

function ViewPaymentsManager() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const [payments, setPayments] = useState([
    { id: "TXN-9901", user: "Rahul Sharma", venue: "Grand Royal Plaza", date: "2024-05-15", method: "UPI", status: "Success", amount: "5000", refId: "123456789012" },
    { id: "TXN-9902", user: "Amit Patel", venue: "Sea View Resort", date: "2024-05-18", method: "Credit Card", status: "Success", amount: "12000", refId: "987654321098" },
    { id: "TXN-9903", user: "Sneha Reddy", venue: "Business Suites", date: "2024-05-20", method: "Net Banking", status: "Failed", amount: "3500", refId: "N/A" },
    { id: "TXN-9904", user: "Priya Singh", venue: "Grand Royal Plaza", date: "2024-05-22", method: "UPI", status: "Pending", amount: "7800", refId: "PENDING" },
  ]);

  const filteredPayments = payments.filter(p => {
    const matchesSearch = p.user.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || p.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <>
    

      {/* Header Section */}
    {/* 1. Page Title */}
          <div className="page-title" style={{ backgroundImage: "url(assets/images/background/page-title-6.jpg)" }}>
            <div className="auto-container">
              <h1>View Payment</h1>
            </div>
          </div>
    
          {/* 2. Breadcrumbs */}
          <div className="bredcrumb-wrap">
            <div className="auto-container">
              <ul className="bredcrumb-list">
                <li><Link to="/">Home</Link></li>
             
                <li>View Payment</li>
              </ul>
            </div>
          </div>

      <section className="section-padding bg-light pt-5">
        <div className="auto-container">
          
          {/* Filters and Search */}
          <div className="payment-card mb-4">
            <div className="row g-3 align-items-center">
              <div className="col-md-4">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0"><i className="fa fa-search text-muted"></i></span>
                  <input 
                    type="text" 
                    className="form-control border-start-0 ps-0" 
                    placeholder="Search Transaction ID..." 
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-3">
                <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
                  <option value="All">All Status</option>
                  <option value="Success">Success</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                </select>
              </div>
              <div className="col-md-5 text-md-end">
                <button className="btn btn-outline-primary me-2"><i className="fa fa-download me-1"></i> Export PDF</button>
                <button className="btn btn-success"><i className="fa fa-file-excel me-1"></i> Export Excel</button>
              </div>
            </div>
          </div>

          {/* Payments Table */}
          <div className="payment-card">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Transaction ID</th>
                    <th>User / Client</th>
                    <th>Payment Method</th>
                    <th>Date</th>
                    <th>Reference No.</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.map((pay) => (
                    <tr key={pay.id}>
                      <td><span className="txn-id">{pay.id}</span></td>
                      <td>
                        <div className="fw-bold">{pay.user}</div>
                        <div className="small text-muted">{pay.venue}</div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="method-icon"><i className={`fa ${pay.method === 'UPI' ? 'fa-mobile-alt' : 'fa-credit-card'}`}></i></div>
                          <span className="small fw-600">{pay.method}</span>
                        </div>
                      </td>
                      <td>{pay.date}</td>
                      <td className="small text-uppercase">{pay.refId}</td>
                      <td><span className="amount-text">₹{pay.amount}</span></td>
                      <td>
                        <span className={`pay-status status-${pay.status.toLowerCase()}`}>
                          {pay.status}
                        </span>
                      </td>
                      <td className="text-center">
                        <button className="btn btn-sm btn-light border" title="View Invoice">
                          <i className="fa fa-file-invoice text-primary"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredPayments.length === 0 && (
                    <tr>
                      <td colSpan="8" className="text-center py-5">No payment records found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default ViewPaymentsManager;