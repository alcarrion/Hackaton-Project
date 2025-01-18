import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Spells.css';

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch("https://hp-api.herokuapp.com/api/spells");
        if (!response.ok) {
          throw new Error("Error al obtener los hechizos");
        }
        const data = await response.json();
        setSpells(data);
      } catch (error) {
        console.error("Error al obtener los hechizos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpells();
  }, []);

  const filteredSpells = spells.filter(spell =>
    spell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spell.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="spells-container">
      <Link to="/" className="back-button">
        <span className="back-arrow">←</span> Regresar al Inicio
      </Link>

      <h1 className="spells-title">Libro de Hechizos</h1>
      <div className="magic-separator"></div>

      {loading ? (
        <div className="loading-container">
          <div className="wand-loader">
            <span className="loader-text">Accio Hechizos!</span>
          </div>
        </div>
      ) : (
        <>
          <div className="search-container">
            <div className="search-box">
              <input
                type="text"
                placeholder="Buscar hechizos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">⚡</span>
            </div>
          </div>

          <div className="spells-grid">
            {filteredSpells.map((spell, index) => (
              <div 
                key={spell.name}
                className="spell-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="spell-content">
                  <div className="spell-icon">✨</div>
                  <h3 className="spell-name">{spell.name}</h3>
                  <div className="magic-line"></div>
                  <p className="spell-description">{spell.description}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      
    </div>
  );
};

export default Spells;