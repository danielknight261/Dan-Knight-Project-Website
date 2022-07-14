import "./HeroImg.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"

export const HeroImg = () => {
  return (
  <div className="hero">
        <div className="mask">
        <img  className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
    </div>
  );
};

export default HeroImg;

/*hosting image as background in componenets also upto 53 mins. */