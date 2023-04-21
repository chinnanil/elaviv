 

import React, { useState } from "react";
import { FaBars, FaTimes , FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
        <img src="/logo.png" alt="logo" className="logo" />
        <span className="company-name">EA Labs</span>
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-links" onClick={closeMobileMenu}>
            EA Labs Advantages
            <FaAngleDown className="arrow-icon" />
          </Link>
          <ul className="sub-menu">
            <li className="sub-menu-item">
              <Link to="/" className="sub-menu-link" onClick={closeMobileMenu}>
                Advantage 1
              </Link>
            </li>
            <li className="sub-menu-item">
              <Link to="/" className="sub-menu-link" onClick={closeMobileMenu}>
                Advantage 2
              </Link>
            </li>
            <li className="sub-menu-item">
              <Link to="/" className="sub-menu-link" onClick={closeMobileMenu}>
                Advantage 3
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="#" className="nav-links" onClick={closeMobileMenu}>
            Solutions
            <FaAngleDown className="arrow-icon" />
          </Link>
          <ul className="sub-menu">
            <li className="sub-menu-item">
              <Link to="/" className="sub-menu-link" onClick={closeMobileMenu}>
                Solution 1
              </Link>
            </li>
            <li className="sub-menu-item">
              <Link to="/" className="sub-menu-link" onClick={closeMobileMenu}>
                Solution 2
              </Link>
            </li>
            <li className="sub-menu-item">
              <Link to="/" className="sub-menu-link" onClick={closeMobileMenu}>
                Solution 3
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
