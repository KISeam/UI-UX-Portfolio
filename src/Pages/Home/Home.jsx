import React, { useEffect } from "react";
import Hero from "../../Components/Hero";
import Portfolio from "../../Components/Portfolio";
import ContactCTA from "../../Components/ContactCTA";
import Pricing from "../../Components/Pricing";
import TestimonialCarousel from "../../Components/TestimonialCarousel";
import Blog from "../../Components/Blog";
import About from "../../Components/About";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="scroll-smooth">
        <Hero />
        <Portfolio />
        <ContactCTA />
        <Pricing />
        <About />
        <Blog />
        <TestimonialCarousel />
      </div>
    </>
  );
};

export default Home;
