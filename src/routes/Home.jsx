import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import therapistImage from '../assets/therapist.jpg';
import Value from "../components/Value";
import Offer from "../components/Offer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero"
        heroImage={therapistImage}
        title='"Mowa otwiera drzwi...'
        text='... które wcześniej były przed dzieckiem zamknięte". ~ Barry J. Wadsworth'
        btnText="Kim jestem?"
        url="/o-mnie"
        btnClass="show"
      />
      <Value/>
      <Offer/>
      <Footer/>
    </>
  );
};

export default Home;
