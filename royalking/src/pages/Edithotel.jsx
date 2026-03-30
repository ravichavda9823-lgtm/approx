import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import api from "../utils/AxiosConfig";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";

function EditHotel() {
  let hotel = useLocation().state;
  let [hoteldata, setHoteldata] = useState(hotel);
  const [Preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  console.log(hoteldata);

  function handelInputChange(e) {
    let { name, value } = e.target;

    setHoteldata((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const edithotel = async (formData) => {
    const response = await api.put(
      `/manager/hotel/update/${hoteldata._id}`,
      formData,
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: edithotel,

    onSuccess: () => {
      toast.success("Hotel updated successfully..", {
        onClose: () => {
          window.location.href = "/managerviewhotel";
        },
      });
    },

    onError: () => {
      toast.error("Updated Failed...", {
        onClose: () => {
          window.location.href = "/edithotel/:id";
        },
      });
      return;
    },
  });

  async function handelSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", hotel.name);
    formData.append("city", hotel.city);
    formData.append("type", hotel.type);
    formData.append("price", hotel.price);
    formData.append("shortdesc", hotel.shortdesc);
    formData.append("desc", hotel.desc);
    formData.append("image", selectedFile);

    mutation.mutate(formData);
  }

  return (
    <>
      <div
        className="page-title"
        style={{
          backgroundImage: "url(../assets/images/background/page-title-6.jpg)",
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
            <li> Edit Hotel</li>
          </ul>
        </div>
      </div>

      {/* FORM */}
      <section className="section-padding ">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-alt form-alt3 with-shadow">
                <form onSubmit={handelSubmit} enctype="multipart/form-data">
                  <div className="section_heading mb_30 text-center">
                    <span className="section_heading_title_small">
                      Hotel Management
                    </span>
                    <h2 className="section_heading_title_big">Edit Hotel</h2>
                  </div>

                  <input
                    type="hidden"
                    name="_id"
                    defaultValue={hoteldata._id}
                  />

                  {/* HOTEL NAME */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="name"
                      placeholder="Hotel Name"
                      defaultValue={hoteldata.name}
                      onChange={handelInputChange}
                      required
                    />
                  </div>

                  {/* CITY */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      defaultValue={hoteldata.city}
                      onChange={handelInputChange}
                      required
                    />
                  </div>

                  {/* HOTEL TYPE */}
                  <div className="form-group col-md-12">
                    <select
                      name="type"
                      defaultValue={hoteldata.type}
                      onChange={handelInputChange}
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
                      defaultValue={hoteldata.price}
                      onChange={handelInputChange}
                      required
                    />
                  </div>

                  {/* SHORT DESCRIPTION */}
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      name="shortdesc"
                      placeholder="Short Description"
                      defaultValue={hoteldata.shortdesc}
                      onChange={handelInputChange}
                      required
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div className="form-group col-md-12">
                    <textarea
                      name="desc"
                      placeholder="Hotel Description"
                      rows="4"
                      defaultValue={hoteldata.desc}
                      onChange={handelInputChange}
                      required
                    />
                  </div>

                  {/* IMAGE */}
                  <div className="form-group col-md-12">
                    <input
                      type="file"
                      name="image"
                      placeholder="Hotel Image URL"
                      accept="image/*"
                      onChange={handleFileChange}
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
                    <button className="btn-1 w-100" type="submit" disabled={mutation.isPending} >
                      {mutation.isPending ? "Updateing..." : "Update Hotel"} <span />
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

export default EditHotel;
