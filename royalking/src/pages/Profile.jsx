import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/AxiosConfig";
import CheckRole from "../utils/CheckRole";
import Logout, { LogoutwithoutNotification } from "../utils/Logout";
import { useQuery } from "@tanstack/react-query";

function Profile() {
  // let [userProfile, SetUserProfile] = useState({});
  const role = CheckRole();

  async function FethchUserProfile() {
    if (CheckRole() === "user") {
      try {
        let response = await api.get("/user/profile");
        console.log(response);
        return response.data.users;
      } catch (e) {
        if (e.response.status == 401 && e.response.status == 403) {
          LogoutwithoutNotification();
        }
      }
    } else if (CheckRole() === "manager") {
      try {
        let response = await api.get("/manager/managerprofile");
        console.log(response);
        return response.data.manager;
      } catch (e) {
        if (e.response.status == 401 && e.response.status == 403) {
          LogoutwithoutNotification();
        }
      }
    } else {
      LogoutwithoutNotification();
    }
  }
  // useEffect(() => {
  //   FethchUserProfile();
  // }, []);

   const {
    data: userProfile,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: FethchUserProfile,
  });

;

  return (
    <>
      <div>
        {/* Page Title */}
        <div
          className="page-title"
          style={{
            backgroundImage:
              "url(https://t3.ftcdn.net/jpg/05/15/51/58/360_F_515515800_Dt10H8JBYktfdxCo52pfQzGo27XzMPr6.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="auto-container">
            <h1>Profile Page</h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bredcrumb-wrap">
          <div className="auto-container">
            <ul className="bredcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Profile</li>
            </ul>
          </div>
        </div>
        {/* Profile Section */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="row no-gutters justify-content-center">
              {/* Profile Card */}
              <div className="col-lg-6">
                <div className="form-alt form-alt3 with-shadow">
                  {/* Heading */}
                  <div className="section_heading mb_40 text-center">
                    <span className="section_heading_title_small">
                      {role === "user" ? "Account Details" : "Manager Details"}
                    </span>

                    <h2 className="section_heading_title_big">
                      {role === "user"
                        ? "User Profile"
                        : role === "manager"
                          ? "Manager Profile"
                          : "Profile"}
                    </h2>
                  </div>

                  {/* Profile Details (NO INPUTS) */}
                  <div
                    style={{
                      textAlign: "left",
                      marginLeft:"30px"
                    }}
                  >
                    <p style={{ fontSize: "22px", marginBottom: "10px" }}>
                      <b>Name:</b> {userProfile.username}
                    </p>

                    <p style={{ marginBottom: "15px", fontSize: "22px" }}>
                    <b>  Email:</b> {userProfile.email}
                    </p>

                     <p style={{ marginBottom: "15px", fontSize: "22px" }}>
                     <b>Phone:</b>  {userProfile.phone}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div
                    className="form-group col-md-12"
                    style={{
                      display: "flex",
                      gap: "15px",
                      marginTop: "35px",
                    }}
                  >
                    <Link
                      to={"/editprofile"}
                      state={userProfile}
                      className="btn-1 w-100"
                    >
                      Edit Profile
                    </Link>

                    <Link
                      onClick={() => {
                        Logout();
                      }}
                      className="btn-1 w-100"
                      style={{ backgroundColor: "#d9534f" }}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
