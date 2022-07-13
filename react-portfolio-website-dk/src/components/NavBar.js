import "./NavBarStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/project">Project</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger">
        <FaBars size={20} style={{color: "#1D3557" }
        } />
      </div>
    </div>
  );
};

export default NavBar;
