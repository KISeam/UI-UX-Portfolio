import React from "react";
import { FiFolder, FiMail } from "react-icons/fi";
import heroImage from "../assets/images/hero-background.jpg";

const Hero = () => {
  return (
    <section
    id="home"
      className="relative h-[80vh] bg-cover bg-center scroll-smooth"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Headings */}
        <h1 className="text-5xl md:text-6xl font-bold text-amber-200 drop-shadow-lg">
          Hi, I'm Jayed Uddin
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300">
          A passionate UI/UX designer crafting seamless digital experiences
          through modern design thinking.
        </p>

        {/* CTA Cards */}
        <div className="mt-10 flex flex-col md:flex-row gap-6">
          {/* Portfolio */}
          <a
            href="#portfolio"
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg text-left hover:bg-white/20 transition-all w-64"
          >
            <div className="flex items-center gap-4 mb-4">
              <FiFolder className="text-3xl text-white" />
              <h2 className="text-2xl font-semibold text-white">Portfolio</h2>
            </div>
            <p className="text-sm text-gray-300">
              Explore selected case studies and recent design projects.
            </p>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg text-left hover:bg-white/20 transition-all w-64"
          >
            <div className="flex items-center gap-4 mb-4">
              <FiMail className="text-3xl text-white" />
              <h2 className="text-2xl font-semibold text-white">Contact</h2>
            </div>
            <p className="text-sm text-gray-300">
              Let's connect and bring your next digital idea to life.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
