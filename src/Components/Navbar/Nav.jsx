import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/all-images/bita-logo.png";
import { Link } from "react-router-dom";
import { ShiftingDropDown } from "../Services/ShiftingDropDown"; // Import ShiftingDropDown component

import "./Nav.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="aboutus" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item ">
            {/* Render ShiftingDropDown component */}
            <Link onClick={closeMenu}>
              <ShiftingDropDown />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/technologies" onClick={closeMenu}>
              Technologies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" onClick={closeMenu}>
              Solution
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contactus" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
