import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import momImage from "../assets/mamadarken.jpg";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>
          Terapia logopedyczna - poznaj moje przygotowanie do pracy z dziećmi
        </title>
        <meta
          name="description"
          content="Dowiedz się więcej o mojej pasji i zaangażowaniu jako logopeda dla dzieci. Odkryj, jak pomagam najmłodszym poprawić mowę i zdolności komunikacyjne. Zapraszam do zapoznania się z moją pracą!"
        />
        <meta
          name="keywords"
          content="Terapia mowy dla dzieci, Czechowice-Dziedzice,Profesjonalny logopeda dziecięcy,Zajęcia logopedyczne dla dzieci"
        />
        <link rel="canonical" href="https://www.logopeda-czechowice.pl/o-mnie"></link>
      </Helmet>
      <Navbar />
      {/* <Hero 
        cName="hero-mid"
        heroImage={momImage}
        title="Kim jestem?"
        btnClass="hide"
      /> */}
      <AboutMe />
      <Footer />
    </>
  );
};

export default About;
