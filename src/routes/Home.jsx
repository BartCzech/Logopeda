import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import therapistImage from "../assets/therapist.jpg";
import officeImage from "../assets/office.jpg";
import Value from "../components/Value";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Logopeda Czechowice</title>
        <meta
          name="description"
          content="This is the description of my home page."
        />
      </Helmet>
      <Navbar />
      <Hero
        cName="hero"
        heroImage={officeImage}
        title="Logopeda"
        text="Wioletta Czech"
        btnText1="Kim jestem?"
        btnText2="Oferta zajęć"
        url1="/o-mnie"
        url2="/oferta"
        btnClass="show"
      />
      <Offer />
      <Value />
      <Footer />
    </>
  );
};

export default Home;
