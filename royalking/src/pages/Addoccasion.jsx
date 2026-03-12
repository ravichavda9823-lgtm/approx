import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import cookie from "js-cookie";
import { LogoutwithoutNotification } from "../utils/Logout";
import CheckRole from "../utils/CheckRole";
import { Link } from "react-router-dom";

function AddOccasion() {
  const [userProfile, setUserProfile] = useState({});

  const [occasion, setOccasion] = useState({
    name: "",
    desc: "",
    image: "",
    managerId: "",
  });
  const FetchUserProfile = async () => {
    if (CheckRole() === "manager") {
      try {
        const response = await api.get("/manager/managerprofile");

        setUserProfile(response.data.manager);

        setOccasion((prev) => ({
          ...prev,
          managerId: response.data.manager.id, 
        }));
      } catch (error) {
        console.log(error);
        if (error.response?.status === 401) {
          LogoutwithoutNotification();
        }
      }
    } else {
      LogoutwithoutNotification();
    }
  };

  useEffect(() => {
    FetchUserProfile();
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOccasion((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/manager/occasion/addoccasion", occasion);

      if (response.data.token) {
        cookie.set("token", response.data.token);
      }

      alert("Occasion Added Successfully");

      setOccasion({
        name: "",
        desc: "",
        image: "",
        managerId: userProfile._id,
      });

      window.location.href = "/manageroccasion";
    } catch (error) {
      console.log(error);
      alert("Invalid Details");
       window.location.href = "/addoccasion";

    }
  };

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
          <h1>Add Occasion</h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bredcrumb-wrap">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Manager Panel</li>
          </ul>
        </div>
      </div>

      {/* FORM SECTION */}
      <section className="section-padding">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-alt form-alt3 with-shadow">
                <form onSubmit={handleSubmit}>
                  <div className="section_heading mb_30 text-center">
                    <span className="section_heading_title_small">
                      Occasion Management
                    </span>
                    <h2 className="section_heading_title_big">
                      Add New Occasion
                    </h2>
                  </div>

                  {/* MANAGER ID */}
                  <input
                    type="hidden"
                    name="managerId"
                    value={occasion.managerId}
                  />

                  {/* OCCASION NAME */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Occasion Name"
                      value={occasion.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                
                  {/* LONG DESC */}
                  <div className="form-group col-md-12">
                    <textarea
                      name="desc"
                      placeholder="Occasion Description"
                      rows="4"
                      value={occasion.desc}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* IMAGE URL */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="image"
                      placeholder="Occasion Image URL"
                      value={occasion.image}
                      onChange={handleInputChange}
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
                      Add Occasion <span />
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

export default AddOccasion;
