import "./HeroImg.css"
import React from 'react'
import IntroImg from "../assets/background.jpg"
import { Link } from "react-router-dom";

export const HeroImg = () => {
  return (
  <div className="hero">
        <div className="mask">
        <img  className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div  className="content">
          <p>Hi, I'm a Full-Stack Engineer</p>
          <h1>React Developer</h1>
          <div>
          <Link to="/project" className="button">Projects</Link>
          <Link to="/contact" className="button-light">Contact</Link>
          </div>
        </div>
    </div>
  );
};

export default HeroImg;

/*hosting image as background in components also upto 53 mins. */