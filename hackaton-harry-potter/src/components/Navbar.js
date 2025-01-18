import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Harry Potter API</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/characters">Personajes</Link></li>
        <li><Link to="/houses">Casas</Link></li>
        <li><Link to="/spells">Hechizos</Link></li>
        <li><Link to="/test">Test</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

