import React from "react";
import Footer from "../common/Footer";

function Sweetalerts() {

  const executeExample = (type) => {
    switch (type) {
      case "success":
        Swal.fire("Success!", "This is a success alert", "success");
        break;

      case "error":
        Swal.fire("Error!", "Something went wrong", "error");
        break;

      case "warning":
        Swal.fire("Warning!", "Be careful!", "warning");
        break;

      case "info":
        Swal.fire("Info", "Some information for you", "info");
        break;

      case "question":
        Swal.fire("Question", "Are you sure?", "question");
        break;

      case "basicMessage":
        Swal.fire("Hello!");
        break;

      case "titleText":
        Swal.fire(
          "The Internet?",
          "That thing is still around?",
          "question"
        );
        break;

      case "warningConfirm":
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
        break;

      default:
        Swal.fire("Demo Alert");
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <div className="container-fluid">

            {/* Page Title */}
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box d-flex justify-content-between align-items-center">
                  <h4 className="page-title">Sweetalerts</h4>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Icons</h4>
                  </div>
                  <div className="card-body">
                    <button className="btn btn-success btn-sm me-2" onClick={() => executeExample("success")}>Success</button>
                    <button className="btn btn-danger btn-sm me-2" onClick={() => executeExample("error")}>Error</button>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => executeExample("warning")}>Warning</button>
                    <button className="btn btn-info btn-sm me-2" onClick={() => executeExample("info")}>Info</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => executeExample("question")}>Question</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Examples Table */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Examples</h4>
                  </div>
                  <div className="card-body">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>A basic message</td>
                          <td>
                            <button className="btn btn-primary btn-sm" onClick={() => executeExample("basicMessage")}>
                              Click me
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Title with text</td>
                          <td>
                            <button className="btn btn-primary btn-sm" onClick={() => executeExample("titleText")}>
                              Click me
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>Confirm Dialog</td>
                          <td>
                            <button className="btn btn-primary btn-sm" onClick={() => executeExample("warningConfirm")}>
                              Click me
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Sweetalerts;
