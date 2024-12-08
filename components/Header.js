import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Charulatha Tammana</div>
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
