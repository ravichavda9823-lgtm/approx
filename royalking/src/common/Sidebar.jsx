import React, { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

Swiper.use([Autoplay, Navigation]);

function ProjectSlider() {
  useEffect(() => {
    const swiper = new Swiper(".single-item-carousel", {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      allowTouchMove: false,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
    });

    return () => {
      swiper.destroy(true, true);
    };
  }, []);

  return (
    <section className="section-padding p-0">
  <div className="auto-container">
    <div className="project-1-wrapper">

      <div className="swiper single-item-carousel">
        <div className="swiper-wrapper">

          {/* SLIDE 1 – WEDDING */}
          <div className="swiper-slide">
            <div
              className="project-1-image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg)",
              }}
            >
              <div className="project-1-block content-down">
                <span>Celebrate</span>
                <h2>Grand Wedding Venue</h2>
                <p>
                  Elegant banquet halls designed for royal weddings,
                  receptions, and unforgettable celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* SLIDE 2 – SOCIAL EVENTS */}
          <div className="swiper-slide">
            <div
              className="project-1-image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/5610325/pexels-photo-5610325.jpeg)",
              }}
            >
              <div className="project-1-block content-down">
                <span>Celebrate</span>
                <h2>Birthday Celebrations</h2>
                <p>
                  Perfect venue for birthdays, anniversaries,
                  and intimate gatherings with premium service.
                </p>
              </div>
            </div>
          </div>

          {/* SLIDE 3 – CORPORATE */}
          <div className="swiper-slide">
            <div
              className="project-1-image"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg)",
              }}
            >
              <div className="project-1-block content-down">
                <span>Host</span>
                <h2>Corporate & Conferences</h2>
                <p>
                  Modern conference spaces equipped for meetings,
                  seminars, and professional corporate events.
                </p>
              </div>
            </div>
          </div>

        </div>

       
        {/* <div className="slider-nav-style-1 project-1-nav">
          <div className="slider-control slider-button-prev">◀</div>
          <div className="slider-control slider-button-next">▶</div>
        </div> */}

      </div>
    </div>
  </div>
</section>

  );
}

export default ProjectSlider;
