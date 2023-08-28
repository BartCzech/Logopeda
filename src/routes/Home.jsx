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
        title="Odkryj piękno w swoim głosie!"
        text="Niech każde słowo stanie się przygodą, a każda rozmowa doświadczeniem pełnym radości."
        btnText="Plan"
        url="/"
        btnClass="show"
      />
      <Value/>
      <Offer/>
      <Footer/>
    </>
  );
};

export default Home;
