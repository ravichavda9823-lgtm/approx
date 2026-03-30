import React, { useState } from "react";
import api from "../utils/AxiosConfig";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

function EditVenue() {
  const venue = useLocation().state;
  const [venuedata, setVenueData] = useState(venue);
  const [Preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

    let navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVenueData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

    const editvenue = async (formData) => {
     const response = await api.put(
        `/manager/venue/update/${venuedata._id}`,
        formData,
      );
    return response.data;
    
  };

   const mutation = useMutation({
    mutationFn: editvenue,

    onSuccess: () => {
      toast.success("Venue updated successfully...", {
          onClose: () => {
          navigate("/managervenue");
          },
        });
    },
    onError: () => {
       toast.error("Updated Failed...", {
        onClose: () => {
        navigate("/editvenue/:id");
        },
      });
      return;
    },
  });




  const handleSubmit = async (e) => {
    e.preventDefault();
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

      mutation.mutate(formData);

     
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
          <h1>Edit Venue</h1>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="bredcrumb-wrap pt-5">
        <div className="auto-container">
          <ul className="bredcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Edit Venue</li>
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
                      Venue Management
                    </span>
                    <h2 className="section_heading_title_big">Edit Venue</h2>
                  </div>

                  {/* ID */}
                  <input type="hidden" name="_id" value={venuedata._id} />

                  {/* VENUE NAME */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Venue Name"
                      value={venuedata.name}
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
                      value={venuedata.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* VENUE TYPE */}
                  <div className="form-group col-md-12">
                    <select
                      name="type"
                      value={venuedata.type}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Venue Type</option>
                      <option>Banquet</option>
                      <option>Wedding Hall</option>
                      <option>Conference Hall</option>
                      <option>Outdoor Lawn</option>
                    </select>
                  </div>

                  {/* PRICE */}
                  <div className="form-group col-md-12">
                    <input
                      type="number"
                      name="price"
                      placeholder="Price Per Event"
                      value={venuedata.price}
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
                      value={venuedata.shortdesc}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* FULL DESCRIPTION */}
                  <div className="form-group col-md-12">
                    <textarea
                      name="desc"
                      placeholder="Venue Description"
                      rows="4"
                      value={venuedata.desc}
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

                  {/* STATUS */}
                  <div className="form-group col-md-12">
                    <select
                      name="status"
                      value={venuedata.status}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  {/* SUBMIT */}
                  <div className="form-group col-md-12">
                    <button className="btn-1 w-100" type="submit"  disabled={mutation.isPending}>
                     {mutation.isPending ? "Updateing..." : "Update Venue"} <span />
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

export default EditVenue;
