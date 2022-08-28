import "./AboutContentStyles.css"
import React from "react"
import { Link } from "react-router-dom";

const AboutContent = () => {
    return (
        <div className="about">
          <div className="about-me">
            <h1>Who Am I ?</h1>
            <p>Im a full stack developer</p>
            <Link to="/contact">
                <button className="button">Contact</button>
            </Link>
          </div>
          <div className="right"></div>
        </div>
    )
};

export default AboutContent;