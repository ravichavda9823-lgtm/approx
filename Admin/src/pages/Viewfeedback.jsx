import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import api from "../utils/AxiosConfig";
import Header from "../common/Header";
import { toast } from "react-toastify";

function ViewFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [replyText, setReplyText] = useState("");

  const fetchFeedback = async () => {
    try {
      const response = await api.get("/admin/feedback");

      setFeedbacks(
        (response.data.data || []).map((value) => ({
          ...value,
          id: value._id,
          isVisible: value.isVisible ?? false,
          status: value.status ?? "Pending",
        }))
      );
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const toggleVisibility = async (id) => {
    setFeedbacks((prev) =>
      prev.map((value) => {
        if (value.id === id) {
          const newVisible = !value.isVisible;
          return {
            ...value,
            isVisible: newVisible,
            status: newVisible ? "Published" : "Hidden",
          };
        }
        return value;
      })
    );

    try {
      await api.put(`/admin/feedback/visibility/${id}`, {
        isVisible: !feedbacks.find((f) => f.id === id)?.isVisible,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleReplySubmit = async () => {
    setFeedbacks((prev) =>
      prev.map((f) =>
        f.id === selectedFeedback.id
          ? { ...f, reply: replyText, status: "Replied", isVisible: true }
          : f
      )
    );

    try {
      await api.put(`/admin/feedback/reply/${selectedFeedback.id}`, {
        reply: replyText,
      });
    } catch (e) {
      console.log(e);
    }

    setSelectedFeedback(null);
    setReplyText("");
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fa fa-star ${
          i < rating ? "text-warning" : "text-light border"
        }`}
        style={{ fontSize: "11px" }}
      ></i>
    ));
  };

  const FetchDeleteFeedback = async (id) => {
    try {
      let response = await api.delete(`/admin/delete/${id}`);
      if (response.status === 200) {
        toast.success("Feedback Deleted Successfully");
        fetchFeedback();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page-wrapper bg-light">
      <Header/>
      <div className="page-content container-fluid py-4">

        <div className="row mb-4 align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold text-dark mb-0">
              Guest Feedback & Reviews
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
                  Feedback
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="card border-0 shadow-sm rounded-4">

          <div
            className="table-responsive"
            style={{ overflow: "visible" }}
          >
            <table className="table table-hover align-middle mb-0">

              <thead className="bg-light border-bottom small fw-bold text-uppercase text-muted">
                <tr>
                  <th className="ps-4 py-3">User Details</th>
                  <th>Review Content</th>
                  <th>Rating</th>
                  <th>Date</th>
                  <th>Visibility</th>
                  <th className="text-end pe-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 ">
                      Loading feedback...
                    </td>
                  </tr>
                ) : feedbacks.length > 0 ? (
                  feedbacks.map((value) => (
                    <tr
                      key={value.id}
                      className={!value.isVisible ? "bg-light-subtle" : ""}
                    >
                      <td className="ps-4">
                        <div className="fw-bold">{value.user}</div>
                        <div
                          className="text-muted"
                          style={{ fontSize: "11px" }}
                        >
                          {value.name}
                        </div>
                      </td>

                      <td>
                        <div className="mb-1">
                          {renderStars(value.rating)}
                        </div>

                        <p className="small text-secondary mb-0">
                          "{value.message}"
                        </p>
                      </td>

                      <td>{value.rating}</td>

                      <td>
                        <div className="fw-semibold small">
                          {value.hotel}
                        </div>

                        <div className="text-muted small">
                          <i className="fa fa-calendar-alt me-1"></i>
                          {formatDate(value.createdAt)}
                        </div>
                      </td>

                      <td>
                        <span
                          className={`badge rounded-pill px-3 py-2 fw-normal ${
                            value.status === "Replied"
                              ? "bg-success bg-opacity-10 text-success"
                              : value.status === "Published"
                              ? "bg-primary bg-opacity-10 text-primary"
                              : "bg-warning bg-opacity-10 text-warning"
                          }`}
                        >
                          {value.status}
                        </span>
                      </td>

                      <td className="text-end pe-4">
                        <div className="d-flex justify-content-end gap-2">

                          <button
                            className="btn btn-sm btn-light"
                            onClick={() => {
                              setSelectedFeedback(value);
                              setReplyText(value.reply || "");
                            }}
                          >
                            <i className="fa fa-reply text-warning"></i>
                          </button>

                          <button
                            className={`btn btn-sm btn-light ${
                              value.isVisible
                                ? "text-success"
                                : "text-warning"
                            }`}
                            onClick={() =>
                              toggleVisibility(value.id)
                            }
                          >
                            <i
                              className={`fa ${
                                value.isVisible
                                  ? "fa-eye"
                                  : "fa-eye-slash"
                              }`}
                            ></i>
                          </button>

                          <button
                            className="btn btn-sm btn-light"
                            onClick={() =>
                              FetchDeleteFeedback(value._id)
                            }
                          >
                            <i className="fa fa-trash text-danger"></i>
                          </button>

                        </div>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      No feedback found
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>

        <Footer />
      </div>

      {selectedFeedback && (
        <div
          className="modal fade show d-block"
          style={{
            background: "rgba(15, 23, 42, 0.6)",
            overflow: "hidden",
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg rounded-4">

              <div className="modal-header bg-primary text-white">
                <h6 className="modal-title fw-bold">
                  Manage Guest Response
                </h6>

                <button
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedFeedback(null)}
                ></button>
              </div>

              <div className="modal-body p-4">
                <textarea
                  className="form-control"
                  rows="6"
                  value={replyText}
                  onChange={(e) =>
                    setReplyText(e.target.value)
                  }
                ></textarea>
              </div>

              <div className="modal-footer">

                <button
                  className="btn btn-light"
                  onClick={() => setSelectedFeedback(null)}
                >
                  Close
                </button>

                <button
                  className="btn btn-primary"
                  onClick={handleReplySubmit}
                  disabled={!replyText}
                >
                  Send Reply
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewFeedback;