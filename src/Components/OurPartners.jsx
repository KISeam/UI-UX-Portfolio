import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// Import required Swiper modules
import { Autoplay } from "swiper/modules";

const partners = [
  {
    logo: "https://www.bdcallingacademy.com/images/assest/assosiate/concerns/1_softvence.png ",
    name: "Partner 1",
  },
  {
    logo: "https://www.bdcallingacademy.com/images/assest/assosiate/concerns/2_sm_technology.png ",
    name: "Partner 2",
  },
  {
    logo: "https://www.bdcallingacademy.com/images/assest/assosiate/concerns/3_backbencher_studio.png ",
    name: "Partner 3",
  },
  {
    logo: "https://www.bdcallingacademy.com/images/assest/assosiate/concerns/4_sparktech.png ",
    name: "Partner 4",
  },
  {
    logo: "https://www.bdcallingacademy.com/images/assest/assosiate/concerns/5_scaleup.png ",
    name: "Partner 5",
  },
  {
    logo: "https://www.bdcallingacademy.com/images/assest/assosiate/concerns/6_Data-insight.png ",
    name: "Partner 6",
  },
];

const OurPartners = () => {
  return (
    <section className="lg:py-20 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#4A060D] mb-12">
          Our Partners
        </h1>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={4}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          loop={true}
          pagination={{ clickable: true }}
          className="mySwiper"
          breakpoints={{
            320: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-24 p-4 rounded-lg shadow-sm bg-white hover:shadow-2xl transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurPartners;