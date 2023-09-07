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
        <title>Logopeda Czechowice-Dziedzice. Specjalista Logopedii. Wioletta Czech</title>
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
      <Hero
        cName="hero"
        heroImage={therapistImage}
        title="Profesjonalna terapia logopedyczna dla Najmłodszych"
        text="Wsparcie w rozwoju mowy dla Twojego dziecka"
        btnText1="Umów się na konsultację"
        btnText2="Oferta zajęć"
        url1="/kontakt"
        url2="/oferta"
        btnClass="show"
      />
      <Value />
      <Offer />
      <Footer />
    </>
  );
};

export default Home;
