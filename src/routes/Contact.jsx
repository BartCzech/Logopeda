import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImage from '../assets/contact.jpg';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImage={contactImage}
        title="Skontaktuj się ze mną!"
        btnClass="hide"
      />
    </>
  )
}

export default Contact