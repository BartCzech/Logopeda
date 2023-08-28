import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import booksImage from '../assets/books.jpg';
import Footer from '../components/Footer';
import Offer from '../components/Offer';

const Lessons = () => {
  return (
    <>
      <Navbar />
      <Hero 
        cName="hero-mid"
        heroImage={booksImage}
        title="Zapisz się na darmową lekcję!"
        btnClass="hide"
      />
      <Offer/>
      <Footer/>

    </>
  )
}

export default Lessons