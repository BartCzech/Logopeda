import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import momImage from '../assets/mamadarken.jpg';
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";

const About = () => {
  return (
    <>
      <Navbar />
      {/* <Hero 
        cName="hero-mid"
        heroImage={momImage}
        title="Kim jestem?"
        btnClass="hide"
      /> */}
      <AboutMe/>
      <Footer/>
    </>
  );
};

export default About;
