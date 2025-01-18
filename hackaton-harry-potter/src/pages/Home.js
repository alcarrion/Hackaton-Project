import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Harry Potter API</h1>
        <p className="welcome-text">Bienvenido al Mundo Mágico de Harry Potter</p>
        <p className="description">
          Explora personajes, casas, hechizos y descubre tu casa de Hogwarts con el test.
        </p>
      </div>

      <div className="cards-container">
        <Link to="/characters" className="card personajes">
          <div className="card-content">
            <span className="card-icon">👥</span>
            <h3>Personajes</h3>
          </div>
        </Link>

        <Link to="/houses" className="card casas">
          <div className="card-content">
            <span className="card-icon">🏰</span>
            <h3>Casas</h3>
          </div>
        </Link>

        <Link to="/spells" className="card hechizos">
          <div className="card-content">
            <span className="card-icon">⚡</span>
            <h3>Hechizos</h3>
          </div>
        </Link>

        <Link to="/test" className="card test">
          <div className="card-content">
            <span className="card-icon">🎯</span>
            <h3>Test</h3>
          </div>
        </Link>
      </div>

      <div className="quote-section">
        <p className="quote">"Hogwarts será siempre tu hogar"</p>
      </div>

      
    </div>
  );
};

export default Home;