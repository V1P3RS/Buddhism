import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";
import { a } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src="logo.png" alt="logo" style={{ maxWidth: "25%" }} />
        </a>
        {/* <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div> */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a className="nav-line" href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-line" href="/" onClick={closeMenu}>
              Misc Notes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-line" href="/" onClick={closeMenu}>
              Path of Buddha
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
