import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import momImage from '../assets/mama.jpg';
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImage={momImage}
        title="Kim jestem?"
        btnClass="hide"
      />
      <Footer/>
    </>
  );
};

export default About;
