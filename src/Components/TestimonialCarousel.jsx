import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import reviewImage from "../assets/images/review.jpg";

const testimonials = [
  {
    name: "Sarah Taylor",
    img: "https://randomuser.me/api/portraits/women/44.jpg ",
    quote:
      "Working with this UI/UX developer was seamless. They brought our vision to life with elegance and usability.",
  },
  {
    name: "James Carter",
    img: "https://randomuser.me/api/portraits/men/45.jpg ",
    quote:
      "Their eye for detail and user-first design approach significantly improved our product’s experience.",
  },
  {
    name: "Emily Chen",
    img: "https://randomuser.me/api/portraits/women/46.jpg ",
    quote:
      "Excellent communication, fast delivery, and a beautiful, intuitive final design. Highly recommended!",
  },
];

const TestimonialCarousel = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-center bg-cover py-20"
      style={{ backgroundImage: `url(${reviewImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          What Clients Say About Me
        </h2>

        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={6000}
          transitionTime={800}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
              >
                <MdArrowBackIosNew />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                onClick={onClickHandler}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-20"
              >
                <MdArrowForwardIos />
              </button>
            )
          }
        >
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-white shadow mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <p className="text-lg italic leading-relaxed max-w-xl mb-2">
                “{t.quote}”
              </p>
              <span className="text-sm font-semibold text-[#CFA670]">
                — {t.name}
              </span>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;