import "./NavBarStyles.css";
import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";


const NavBar = () => {

  const[click, setClick] = useState(false);
  const handleClick = () => setClick (!click);

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
      <div className="hamburger" onClick={handleClick}k>
      {click ? (
        <FaTimes size={20} style={{color: "#1D3557" }} />
      ) : (
        <FaBars size={20} style={{color: "#1D3557" } } />
      )}
      </div>
    </div>
  );
};

export default NavBar;
