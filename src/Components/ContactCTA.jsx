import React from "react";
import contactImage from "../assets/images/contact_us.jpg";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="relative h-64 md:h-80 bg-cover bg-center flex items-center justify-center scroll-smooth"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <a
          href="#contact"
          className="bg-[#5b2400] hover:bg-[#7a3411] text-white font-medium px-6 py-3 rounded-full transition duration-300 text-sm md:text-base lg:text-lg"
        >
          Make an Online Enquiry
        </a>
        <a href="tel:+61402655311">
          <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-white">
            or <br />
            Call{" "}
            <span className="text-white font-semibold text-sm md:text-base lg:text-lg">
              +61 40265 5311
            </span>
          </p>
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
