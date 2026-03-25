import React, { useState, useEffect } from "react";
import api from "../utils/AxiosConfig";

function Testimonials() {
  // let [feedback , setFeedback] = useState([]);
  const fetchfeedback = async (e) => {
    try {
      const response = await api.get("/user/feedback/");
      console.log(response.data);
      return response.data.data.slice(0,2);
    } catch (e) {
      console.log(e);
    }
  };

  // useEffect(() => {
  //   fetchfeedback();
  // }, []);

    const {
    data: feedback,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["feedback"],
    queryFn:fetchfeedback ,
  });


  console.log(feedback);

  return (
    <section className="section-padding">
      <div className="auto-container">
        <div className="row">
          {/* LEFT SIDE   */}
          <div className="col-lg-4">
            <div className="section_heading mb_20">
              <span className="section_heading_title_small">User Feedback</span>
              <h2 className="section_heading_title_big">
                What Our <br /> Logged-In Users <br /> Say About Us
              </h2>
            </div>

            <p className="testimonial-1-desc">
              Hear from users who have successfully explored venues, submitted
              enquiries, and planned memorable events and stays using our
              seamless hotel and venue management platform.
            </p>

            <div className="slider-nav-style-2 testimonial-1-nav">
              <div
                className="slider-control slider-button-prev"
                // onClick={handlePrev}
              >
                <span>
                  <i className="icon-3" />
                </span>
              </div>

              <div
                className="slider-control slider-button-next"
                // onClick={handleNext}
              >
                <span>
                  <i className="icon-2" />
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-8">
            <div className="testimonial-1-block-wrap">
              <div className="row">
                {feedback.map((item) => (
                  <div
                    className="col-md-6" 
                    key={item.id}
                  >
                    <div className="testimonial-1-block">
                      <div className="testimonial-1-quote-icon">
                        <i className="icon-18" />
                      </div>

                      <p className="testimonial-1-review-desc">
                        “{item.message}”
                      </p>

                      <h4 className="testimonial-1-name mb-1">{item.name}</h4>
                      <p className="testimonial-1-designation mb-1">{item.email}</p>
                      <p className="testimonial-1-designation">TotalRating: {item.rating}</p>

                      <div className="testimonial-1-author-thumb">
                        <img
                          src={`https://ui-avatars.com/api/?name=${item.name}&background=c5a059&color=fff`}
                          alt="User"
                          style={{ borderRadius: "30px", height: "70px" }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
