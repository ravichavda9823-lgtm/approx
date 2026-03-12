import React, { useEffect, useState } from "react";
import api from "../utils/AxiosConfig";
import cookie from "js-cookie";
import { LogoutwithoutNotification } from "../utils/Logout";
import CheckRole from "../utils/CheckRole";
import { Link, useNavigate } from "react-router-dom";

function AddHotel() {
  const [userProfile, setUserProfile] = useState({});
  const[Preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [hotel, setHotel] = useState({
    name: "",
    city: "",
    type: "",
    price: "",
    image: "",
    shortdesc: "",
    desc: "",
    status: "Active",
    managerId: "",
  });
  const FetchUserProfile = async () => {
    if (CheckRole() === "manager") {
      try {
        const response = await api.get("/manager/managerprofile");

        setUserProfile(response.data.manager);
        console.log(response.data.manager);

        setHotel((prev) => ({
          ...prev,
          managerId: response.data.manager.id,
        }));
      } catch (error) {
        console.log(error);
        if (error.response.status === 401) {
          LogoutwithoutNotification();
        }
      }
    } else {
      LogoutwithoutNotification();
    }
  };

  console.log(hotel);

  useEffect(() => {
    FetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotel((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", hotel.name);
      formData.append("city", hotel.city);
      formData.append("type", hotel.type);
      formData.append("price", hotel.price);
      formData.append("shortdesc", hotel.shortdesc);
      formData.append("desc", hotel.desc);
      formData.append("status", hotel.status);
      formData.append("managerId", hotel.managerId);

      // 🔥 important
      formData.append("image", selectedFile);

      const response = await api.post("/manager/hotel/addhotel", formData);

      if (response.data.token) {
        cookie.set("token", response.data.token);
      }

      alert("Hotel Added Successfully");

      setHotel({
        name: "",
        city: "",
        type: "",
        price: "",
        image: "",
        shortdesc: "",
        desc: "",
        status: "Active",
        managerId: userProfile._id,
      });

      window.location.href = "/managerviewhotel";
    } catch (error) {
      console.log(error);

      //  window.location.href = "/addhotel";
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
          <h1>Add Hotel</h1>
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
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                  <div className="section_heading mb_30 text-center">
                    <span className="section_heading_title_small">
                      Hotel Management
                    </span>
                    <h2 className="section_heading_title_big">Add New Hotel</h2>
                  </div>

                  {/* MANAGER ID (HIDDEN) */}
                  <input
                    type="hidden"
                    name="managerId"
                    value={hotel.managerId}
                  />

                  {/* HOTEL NAME */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Hotel Name"
                      value={hotel.name}
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
                      value={hotel.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* HOTEL TYPE */}
                  <div className="form-group col-md-12">
                    <select
                      name="type"
                      value={hotel.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Hotel Type</option>
                      <option>Standard</option>
                      <option>Deluxe</option>
                      <option>Luxury</option>
                      <option>Suite</option>
                    </select>
                  </div>

                  {/* PRICE */}
                  <div className="form-group col-md-12">
                    <input
                      type="number"
                      name="price"
                      placeholder="Price Per Night"
                      value={hotel.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* SHORT DESCRIPTION */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="shortdesc"
                      placeholder="Short Description"
                      value={hotel.shortdesc}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* LONG DESCRIPTION */}
                  <div className="form-group col-md-12">
                    <textarea
                      name="desc"
                      placeholder="Hotel Description"
                      rows="4"
                      value={hotel.desc}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* IMAGE URL */}
                  <div className="form-group col-md-12">
                    <input
                      type="file"
                      name="image"
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
                      Add Hotel <span />
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

export default AddHotel;
