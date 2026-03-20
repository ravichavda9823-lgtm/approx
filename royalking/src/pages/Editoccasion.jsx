import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";

import { Link, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";


function EditOccasion() {
  let occasion = useLocation().state;
  let [occasiondata, setOccasionData] = useState(occasion);

  console.log(occasiondata);

  function handelInputChange(e) {
    let { name, value } = e.target;

    setOccasionData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handelSubmit(e) {
    e.preventDefault();

    try {
      let response = await api.put(
        `/manager/occasion/update/${occasiondata._id}`,
        occasiondata,
      );
      if (response.status == 200) {
        toast.success("Occasion updated successfully..");
        window.location.href = "/manageroccasion";
      }
    } catch (e) {
      console.log(e);
      toast.error("Updated Failed...")
    }
  }
  return (
    <>
      {/* PAGE TITLE */}
      <div
        className="page-title"
        style={{
          backgroundImage: "url(assets/images/background/page-title-6.jpg)",
        }}
      >
        <div className="auto-container">
          <h1>Edit Occasion</h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Edit Occasion</li>
          </ul>
        </div>
      </div>

      {/* FORM SECTION */}
      <section className="section-padding">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-alt form-alt3 with-shadow">
                <form onSubmit={handelSubmit}>
                  <div className="section_heading mb_30 text-center">
                    <span className="section_heading_title_small">
                      Occasion Management
                    </span>
                    <h2 className="section_heading_title_big">Edit Occasion</h2>
                  </div>

                  {/* MANAGER ID */}
                  <input
                    type="hidden"
                    name="_id"
                    defaultValue={occasiondata._id}
                  />

                  {/* NAME */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Occasion Name"
                      defaultValue={occasiondata.name}
                      onChange={handelInputChange}
                      required
                    />
                  </div>

                  {/* DESC */}
                  <div className="form-group col-md-12">
                    <textarea
                      name="desc"
                      placeholder="Occasion Description"
                      rows="4"
                      id="desc"
                      defaultValue={occasiondata.desc}
                      onChange={handelInputChange}
                      required
                    />
                  </div>

                  {/* IMAGE */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="image"
                      id="image"
                      placeholder="Occasion Image URL"
                      defaultValue={occasiondata.image}
                      onChange={handelInputChange}
                      required
                    />

                    {occasion.image && (
                      <img
                        src={occasion.image}
                        alt="Preview"
                        style={{
                          marginTop: "10px",
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />
                    )}
                  </div>

                  {/* SUBMIT */}
                  <div className="form-group col-md-12">
                    <button className="btn-1 w-100" type="submit">
                      Update Occasion <span />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditOccasion;
