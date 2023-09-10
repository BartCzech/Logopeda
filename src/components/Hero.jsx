import React from "react";
import "./Hero.css";
import therapistImage from "../assets/therapist.jpg";
import { Link } from "react-router-dom";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImage} alt="logopeda-zdj" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <h2>{props.text}</h2>
          <div className="buttons">
            <a href={props.url1} className={props.btnClass}>
              <Link className="link" to={props.url1}>
                {props.btnText1}
              </Link>
            </a>
            <a href={props.url2} className={props.btnClass}>
              <Link className="link" to={props.url2}>
                {props.btnText2}
              </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
