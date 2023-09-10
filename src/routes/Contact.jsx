import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImage from "../assets/contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Action from "../components/Action";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Skontaktuj się z Logopedą - Profesjonalna Pomoc w Poprawie Mowy i Komunikacji</title>
        <meta
          name="description"
          content="Potrzebujesz pomocy logopedy? Skorzystaj z mojej ekspertyzy w terapii mowy i komunikacji. Skontaktuj się ze mną już dziś, aby umówić się na konsultację. Jestem tu, aby pomóc!"
        />
        <meta
          name="keywords"
          content="Logopeda,Kontakt,Umów się na wizytę,Zajęcia logopedyczne,Konsultacja logopedyczna,Terapia mowy"
        />
        <link
          rel="canonical"
          href="https://www.logopeda-czechowice.pl/kontakt"
        ></link>
      </Helmet>
      <Navbar />
      {/* <Hero 
        cName="hero-mid"
        heroImage={contactImage}
        title="Skontaktuj się ze mną!"
        btnClass="hide"
      /> */}
      <Action first="Numer telefonu: " second="Adres email: " />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
