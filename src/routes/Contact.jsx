import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactImage from '../assets/contact.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Action from '../components/Action';

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
      <Action
      first="Numer telefonu: 600377044"
      second="Adres email: wiolaczech@gmail.com"
      />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact