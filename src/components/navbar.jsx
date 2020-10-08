///Navbar component helps to comeback in people list page
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logostarwars.png";
const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo clickable" />
      </NavLink>
    </nav>
  );
};

export default NavBar;
