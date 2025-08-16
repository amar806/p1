import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Services</a>
      </div>
    </div>
  );
}

export default Navbar;
