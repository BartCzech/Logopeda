import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import booksImage from '../assets/books.jpg';
import Footer from '../components/Footer';
import Offer from '../components/Offer';
import { Helmet } from "react-helmet";

const Lessons = () => {
  return (
    <>
    <Helmet>
        <title>
        Logopeda dla Dzieci - Oferta Zajęć Logopedycznych
        </title>
        <meta
          name="description"
          content="Oferuję kompleksową gamę zajęć logopedycznych, aby poprawić mowę i rozwijać umiejętności komunikacyjne Twojego dziecka."
        />
        <meta
          name="keywords"
          content="Logopeda dla dzieci, Czechowice-Dziedzice,Oferta zajęć logopedycznych, Terapia mowy dla dzieci,Rozwój komunikacji u dzieci, Poprawa wymowy dzieci,Zajęcia logopedyczne"
        />
        <link rel="canonical" href="https://www.logopeda-czechowice.pl/oferta"></link>
      </Helmet>
      <Navbar />
      {/* <Hero 
        cName="hero-mid"
        heroImage={booksImage}
        title="Zapisz się na zajęcia ze mną!"
        btnClass="hide"
      /> */}
      <Offer/>
      <Footer/>

    </>
  )
}

export default Lessons