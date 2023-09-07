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
        <title>Logopeda Wioletta Czech - Czechowice-Dziedzice</title>
        <meta
          name="description"
          content="Wioletta Czech - Logopeda specjalizująca się w pracy z dziećmi. Oferuje diagnozę oraz terapię logopedyczną, pomoc logopedyczną dla dzieci oraz rozwój płynnej mowy u dziecka w Czechowicach-Dziedzicach."
        />
        <meta
          name="keywords"
          content="logopeda, Wioletta Czech, terapia logopedyczna, pomoc logopedyczna dla dzieci, rozwój mowy, specjalista Czechowice"
        />
      </Helmet>
      <Navbar />
      {/* <Hero
        cName="hero"
        heroImage={officeImage}
        title="Logopeda"
        text="Wioletta Czech"
        btnText1="Kim jestem?"
        btnText2="Oferta zajęć"
        url1="/o-mnie"
        url2="/oferta"
        btnClass="show"
      /> */}
      <Offer />
      <Value />
      <Footer />
    </>
  );
};

export default Home;
