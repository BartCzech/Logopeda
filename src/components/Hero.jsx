import React from 'react'
import './Hero.css'
import therapistImage from '../assets/therapist.jpg';
import momImage from '../assets/mama.jpg';

const Hero = (props) => {
  return (
  <>
    <div className={props.cName}>
        <img src={props.heroImage} alt="heroImg" />
    </div>
    <div className='hero-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.btnText}</a>
    </div>
  </>
  )
}

export default Hero