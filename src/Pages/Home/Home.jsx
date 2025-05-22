import React from "react";
import Header from "../../Components/Header";
import Hero from "../../Components/Hero";
import Portfolio from "../../Components/Portfolio";
import ContactCTA from "../../Components/ContactCTA";
import Pricing from "../../Components/Pricing";
import TestimonialCarousel from "../../Components/TestimonialCarousel";
import Blog from "../../Components/Blog";
import About from "../../Components/About";
import Footer from "../../Components/Footer";

const Home = () => {
  return (
    <>
      <div className="scroll-smooth">
        <Header />
        <Hero />
        <Portfolio />
        <ContactCTA />
        <Pricing />
        <About />
        <Blog />
        <TestimonialCarousel />
        <Footer />
      </div>
    </>
  );
};

export default Home;
