import React from 'react';
import { Link } from 'react-router-dom';
import './Houses.css';

const Houses = () => {
  const houses = [
    {
      name: 'Gryffindor',
      description: 'Los valientes y determinados. Siempre listos para la aventura.',
      values: ['Coraje', 'Determinación', 'Caballerosidad'],
      color: '#740001',
      borderColor: '#D3A625',
      icon: '🦁',
      backgroundImage: 'url(/gryffindor-bg.jpg)'
    },
    {
      name: 'Hufflepuff',
      description: 'Los leales y trabajadores. La amistad es su mayor fortaleza.',
      values: ['Lealtad', 'Paciencia', 'Justicia'],
      color: '#FFD800',
      borderColor: '#000000',
      icon: '🦡',
      backgroundImage: 'url(/hufflepuff-bg.jpg)'
    },
    {
      name: 'Ravenclaw',
      description: 'Los sabios y creativos. Siempre buscando el conocimiento.',
      values: ['Inteligencia', 'Creatividad', 'Sabiduría'],
      color: '#0E1A40',
      borderColor: '#946B2D',
      icon: '🦅',
      backgroundImage: 'url(/ravenclaw-bg.jpg)'
    },
    {
      name: 'Slytherin',
      description: 'Los astutos y ambiciosos. Siempre pensando en grande.',
      values: ['Astucia', 'Ambición', 'Determinación'],
      color: '#1A472A',
      borderColor: '#5D5D5D',
      icon: '🐍',
      backgroundImage: 'url(/slytherin-bg.jpg)'
    }
  ];

  return (
    <div className="houses-container">
      <Link to="/" className="back-button">
        <span className="back-arrow">←</span> Regresar al Inicio
      </Link>

      <h1 className="houses-title">Casas de Hogwarts</h1>
      <div className="magic-divider"></div>

      <div className="houses-grid">
        {houses.map((house) => (
          <div 
            key={house.name}
            className="house-card"
            style={{
              '--house-color': house.color,
              '--house-border': house.borderColor,
              '--house-bg': house.backgroundImage
            }}
          >
            <div className="house-content">
              <div className="house-header">
                <span className="house-icon">{house.icon}</span>
                <h2 className="house-name">{house.name}</h2>
              </div>
              
              <p className="house-description">{house.description}</p>
              
              <div className="house-values">
                {house.values.map((value, index) => (
                  <span key={index} className="value-badge">
                    {value}
                  </span>
                ))}
              </div>

              <div className="house-overlay"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="hogwarts-quote">
        "Hogwarts será siempre tu hogar"
      </div>
    </div>
  );
};

export default Houses;