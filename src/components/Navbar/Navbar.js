import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="container">
        <div className="nav-bar">
          <Link to="/">
            <img src={logo} alt="logo" width={50} />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/">
                Strona Główna
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/pizza">
                Pizza
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/sushi">
                Sushi
              </NavLink>
            </li>
            <li onClick={handleClick}>
              <NavLink className="nav-link" to="/burger">
                Burger
              </NavLink>
            </li>
          </ul>

          <div className="hamburger" onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={20} style={{ color: "#fff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
