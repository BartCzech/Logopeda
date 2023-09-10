import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import therapistImage from "../assets/therapistdarken.jpg";
import officeImage from "../assets/office.jpg";
import Value from "../components/Value";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Logopeda Czechowice-Dziedzice. Specjalista Logopedii Wioletta Czech</title>
        <meta
          name="description"
          content="Skuteczna terapia logopedyczna w Czechowicach-Dziedzicach. Popraw mowę i komunikację. Indywidualne sesje z doświadczonym logopedą. Zadzwoń już dziś!"
        />
        <meta
          name="keywords"
          content="Logopeda Czechowice-Dziedzice,Terapia Logopedyczna,Logopeda dla dzieci,Pomoc logopedyczna,Terapia mowy,Korekcja Wad Mowy"
        />
        <link rel="canonical" href="https://www.logopeda-czechowice.pl/"></link>
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
