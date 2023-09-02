import React from "react";
import "./Hero.css";
import therapistImage from "../assets/therapist.jpg";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImage} alt="heroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <h2>{props.text}</h2>
          <div className="buttons">
            <a href={props.url1} className={props.btnClass}>
              {props.btnText1}
            </a>
            <a href={props.url2} className={props.btnClass}>
              {props.btnText2}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
