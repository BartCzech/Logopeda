import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import momImage from '../assets/mama.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImage={momImage}
        title="O mnie"
        btnClass="hide"
      />
    </>
  );
};

export default About;
