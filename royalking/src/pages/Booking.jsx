import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import api from "../utils/AxiosConfig";
import CheckRole from "../utils/CheckRole";
import { LogoutwithoutNotification } from "../utils/Logout";

function Booking() {
 
   const today = new Date().toISOString().split("T")[0];
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});

  const location = useLocation();

  const hotelPrice = location.state?.price || 0;

  const [totalDays, setTotalDays] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const [formData, setFormData] = useState({
    hotelId: id,
    loginId: "",
    checkin: "",
    checkout: "",
    message: "",
    status: "pending",
  });

  const FetchUserProfile = async () => {
    if (CheckRole() === "user") {
      try {
        const response = await api.get("/user/profile");
        console.log(response);

        setUserProfile(response.data.user);
        console.log(response.data.user);

        setFormData((prev) => ({
          ...prev,
          loginId: response.data.user.id,
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

  useEffect(() => {
    FetchUserProfile();
  }, []);

  useEffect(() => {
    if (formData.checkin && formData.checkout) {
      const checkinDate = new Date(formData.checkin);
      const checkoutDate = new Date(formData.checkout);

      const diffTime = checkoutDate - checkinDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      if (diffDays > 0) {
        setTotalDays(diffDays);
        setTotalAmount(diffDays * hotelPrice);
      } else {
        setTotalDays(0);
        setTotalAmount(0);
      }
    }
  }, [formData.checkin, formData.checkout, hotelPrice]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userProfile);

  const handlePayment = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post("/user/payment/createorder", {
        amount: totalAmount,
      });

      console.log(response);

      const { id: order_id, amount } = response.data.data;
      const options = {
        key: "rzp_test_VQhEfe2NCXbbwI", // Replace with your RazorPay Key ID
        amount: amount,
        currency: "INR",
        name: "Occazone",
        description: "Test Transaction",
        order_id: order_id,
        handler: async (response) => {
          try {
            const response = await api.post(
              "/user/booking/booking",
             {...formData,totalDays,
              totalAmount}
            );
            console.log(response.data);
            alert("Booking Successfully... ");
            setFormData({
              hotelId: id,
              type: "",
              checkin: "",
              checkout: "",
              message: "",
            });

            window.location.href = "/bookinghistory";
          } catch (error) {
            console.log(error);
          }
        },
        prefill: {
          name: userProfile?.name,
          email: userProfile?.email,
          contact: userProfile?.phone,
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  };

  console.log(formData);


  return (
    <>
      <div>
        {/* Page Title */}
        <div
          className="page-title"
          style={{
            backgroundImage:
              "url(https://thumbs.dreamstime.com/b/defocused-abstract-luxury-living-room-elegant-furniture-soft-lighting-ideal-as-high-end-design-background-blurred-photo-374465668.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="auto-container">
            <h1>Booking Page</h1>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bredcrumb-wrap">
          <div className="auto-container">
            <ul className="bredcrumb-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Booking</li>
            </ul>
          </div>
        </div>

        {/* Booking Section */}
        <section className="section-padding">
          <div className="auto-container">
            <div className="row no-gutters justify-content-center">
              {/* Booking Form */}
              <div className="col-lg-6">
                <div className="form-alt form-alt3 with-shadow">
                  <form>
                    <div className="section_heading mb_30 text-center">
                      <span className="section_heading_title_small">
                        Reserve Your Stay
                      </span>
                      <h2 className="section_heading_title_big">
                        Book Your Venue
                      </h2>
                    </div>

                     <h5 className="mb-4">Hotel Price Per Day: ₹ {hotelPrice}</h5>

                    <div className="form-group col-md-12">
                      <label className="fw-bold text-dark mb-2 d-block">
                        Check-In Date:
                      </label>

                      <input
                        type="date"
                         min={today}
                        name="checkin"
                        value={formData.checkin}
                        onChange={handleChange}
                        className="underline-input"
                      />
                    </div>

                    <div className="form-group col-md-12 mt-4">
                      <label className="fw-bold text-dark mb-2 d-block">
                        Check-Out Date:
                      </label>

                      <input
                        type="date"
                        min={today}
                        name="checkout"
                        value={formData.checkout}
                        onChange={handleChange}
                        className="underline-input"
                      />
                    </div>

                    <div>
                      <p>Total Days: {totalDays}</p>
                      <h4>Total Amount: ₹{totalAmount}</h4>
                    </div>

                    <div className="form-group col-md-12">
                      <textarea
                        rows="2"
                        name="message"
                        placeholder="Special Request"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="form-group col-md-12">
                      <button
                        className="btn-1 w-100"
                        type="submit"
                        onClick={handlePayment}
                      >
                        Confirm Booking <span />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Booking;
