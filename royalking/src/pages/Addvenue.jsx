import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import cookie from "js-cookie";
import CheckRole from "../utils/CheckRole";
import { LogoutwithoutNotification } from "../utils/Logout";

function AddVenue() {
  const [userProfile, setUserProfile] = useState({});
  const [Preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [occasion, setOccasion] = useState([]);

  const [venue, setVenue] = useState({
    name: "",
    city: "",
    type: "",
    price: "",
    image: "",
    shortdesc: "",
    desc: "",
    occasionId: "",
    status: "Active",
    managerId: "",
  });

  /* FETCH MANAGER */
  const FetchUserProfile = async () => {
    if (CheckRole() === "manager") {
      try {
        const response = await api.get("/manager/managerprofile");
        setUserProfile(response.data.manager);

        setVenue((prev) => ({
          ...prev,
          managerId: response.data.manager.id,
        }));
      } catch (error) {
        if (error.response?.status === 401) {
          LogoutwithoutNotification();
        }
      }
    } else {
      LogoutwithoutNotification();
    }
  };

  const FetchOccasion = async () => {
    try {
      const response = await api.get("/manager/occasion/alloccasion");
      setOccasion(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchUserProfile();
    FetchOccasion();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVenue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  /* SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const formData = new FormData();
    formData.append("name", venue.name);
    formData.append("city", venue.city);
    formData.append("type", venue.type);
    formData.append("price", venue.price);
    formData.append("shortdesc", venue.shortdesc);
    formData.append("desc", venue.desc);
    formData.append("status", venue.status);
    formData.append("managerId", venue.managerId);
    formData.append("occasionId", venue.occasionId);

    formData.append("image", selectedFile);

    const response = await api.post("/manager/venue/addvenue", formData);

    if (response.data.token) {
      cookie.set("token", response.data.token);
    }

    alert("Venue Added Successfully");

    setVenue({
      name: "",
      city: "",
      type: "",
      price: "",
      image: "",
      shortdesc: "",
      desc: "",
      occasionId: "",
      status: "Active",
      managerId: userProfile._id,
    });

    window.location.href = "/managervenue";
    } catch (e) {
      console.log(e);
      alert("Invalid Details");
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
          <h1>Add Venue</h1>
        </div>
      </div>

      {/* FORM */}
      <section className="section-padding">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-alt form-alt3 with-shadow">
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                  <div className="section_heading mb_30 text-center">
                    <span className="section_heading_title_small">
                      Venue Management
                    </span>
                    <h2 className="section_heading_title_big">Add New Venue</h2>
                  </div>

                  {/* MANAGER ID */}
                  <input
                    type="hidden"
                    name="managerId"
                    value={venue.managerId}
                  />

                  {/* OCCASION */}
                  <div className="form-group col-md-12">
                    <select
                      name="occasionId"
                      value={venue.occasionId}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Occasion</option>
                      {occasion.map((item) => (
                        <option key={item._id} value={item._id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* VENUE NAME */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Venue Name"
                      value={venue.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* CITY */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      value={venue.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* VENUE TYPE */}
                  <div className="form-group col-md-12">
                    <select
                      name="type"
                      value={venue.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Venue Type</option>
                      <option>Luxury</option>
                      <option>Premium</option>
                      <option>Standard</option>
                      <option>Basic</option>
                    </select>
                  </div>

                  {/* PRICE */}
                  <div className="form-group col-md-12">
                    <input
                      type="number"
                      name="price"
                      placeholder="Price Per Event"
                      value={venue.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* SHORT DESC */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="shortdesc"
                      placeholder="Short Description"
                      value={venue.shortdesc}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* FULL DESC */}
                  <div className="form-group col-md-12">
                    <textarea
                      name="desc"
                      placeholder="Venue Description"
                      rows="4"
                      value={venue.desc}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* IMAGE */}
                  <div className="form-group col-md-12">
                    <input
                      type="file"
                      name="image"
                      placeholder="Venue Image URL"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                    />

                    {Preview && (
                      <img
                        src={Preview}
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
                      Add Venue <span />
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

export default AddVenue;
