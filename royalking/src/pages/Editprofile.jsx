import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import api from "../utils/AxiosConfig";

function EditProfile() {

    let profile = useLocation().state;
    let[profiledata, setProfiledata ] = useState(profile);

    console.log(profiledata._id);


  function handelInputChange(e) {
    const { name, value } = e.target;

    setProfiledata((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  
  async function handelSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.put(
        `/user/update/${profiledata._id}`,
        profiledata
      );

      if (response.data.status) {
        alert("Profile Updated Successfully...");
      }
      window.location.href = "/profile"
    } catch (error) {
      console.error(error);
      alert("Update failed");
    }
  }

  const user = {
    name : profiledata.username,
    email: profiledata.email,
    phone: profiledata.phone
  }

  return (
    <>
      <div className="section-padding">
        <div className="auto-container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="form-alt with-shadow">
                <form onSubmit={handelSubmit}>
                  <h2 className="text-center mb_30">Edit Profile</h2>

                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      placeholder="Full Name"
                      value={user.name}
                      onChange={handelInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={handelInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={user.phone}
                      onChange={handelInputChange}
                    />
                  </div>

                   {/* <div className="form-group">
                    <select
                      name="role"
                      value={user.role}
                      onChange={handelInputChange}
                    >
                      <option value="">-- Select Role --</option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="manager">Manager</option>
                    </select>
                  </div> */}

                  <div className="form-group">
                    <button className="btn-1 w-100" type="submit">
                      Update Profile
                    </button>
                  </div>

                  <div className="text-center mt_20">
                    <Link to="/profile">Back</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
