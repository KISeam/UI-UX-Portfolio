import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import aboutImage from "../assets/images/about-us.jpg";

const About = () => {
  return (
    <section
        id="about"
      className="relative bg-cover bg-center py-24 px-6 h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-white">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="mb-5 text-gray-300 leading-relaxed">
            I’m a passionate UI/UX designer dedicated to crafting intuitive and
            visually appealing digital experiences. I specialize in transforming
            complex ideas into seamless, elegant user interfaces.
          </p>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Proficient in Figma, Adobe XD, and responsive frameworks, I thrive
            in collaborative environments where creativity and usability
            intersect.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a
              href="mailto:youremail@example.com"
              className="hover:text-[#CFA670] transition"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CFA670] transition"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CFA670] transition"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CFA670] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative flex justify-center">
          <div className="relative w-[250px] h-[360px] group">
            {/* Main Image */}
            <img
              src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?uid=R130411112&semt=ais_hybrid&w=740"
              alt="Profile"
              className="rounded-xl shadow-2xl w-full h-full object-cover relative z-20"
            />

            {/* Hover Image */}
            <img
              src="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?uid=R130411112&semt=ais_hybrid&w=740"
              alt="Secondary"
              className="absolute -bottom-6 -right-6 rounded-xl border-4 border-white opacity-80 w-[90%] h-[90%] object-cover z-10 transition-all duration-300 group-hover:z-30 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
