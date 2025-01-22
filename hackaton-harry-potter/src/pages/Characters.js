import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Characters.css';

const Characters = () => {
// Estado para almacenar los personajes obtenidos de la API.
  const [personajes, setPersonajes] = useState([]);
 // Estado para manejar el indicador de carga mientras se obtienen los datos. 
  const [cargando, setCargando] = useState(true);


  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar los personajes");
        }
        return response.json();
      })
      .then(data => {
        setPersonajes(data.slice(0, 20));
      })
      .catch(error => console.error("Error al cargar los personajes:", error))
      .finally(() => {
        setCargando(false);
      });
  }, []);

 // Función para obtener el color de la casa basado en el nombre de la casa.
  const obtenerColorCasa = (casa) => {
    switch (casa?.toLowerCase()) {
      case 'gryffindor': return 'var(--gryffindor)';
      case 'slytherin': return 'var(--slytherin)';
      case 'hufflepuff': return 'var(--hufflepuff)';
      case 'ravenclaw': return 'var(--ravenclaw)';
      default: return 'var(--unknown-house)';
    }
  };

// Función para traducir el nombre de la casa al español. 
  const traducirCasa = (casa) => {
    switch (casa?.toLowerCase()) {
      case 'gryffindor': return 'Gryffindor';
      case 'slytherin': return 'Slytherin';
      case 'hufflepuff': return 'Hufflepuff';
      case 'ravenclaw': return 'Ravenclaw';
      default: return 'Casa Desconocida';
    }
  };

// Función para traducir el nombre de la especie al español.
  const traducirEspecie = (especie) => {
    switch (especie?.toLowerCase()) {
      case 'human': return 'Humano';
      case 'half-giant': return 'Semi-Gigante';
      case 'werewolf': return 'Hombre Lobo';
      case 'ghost': return 'Fantasma';
      case 'house-elf': return 'Elfo Doméstico';
      case 'goblin': return 'Duende';
      default: return especie || 'Desconocida';
    }
  };

  return (
    <div className="characters-container">
      <Link to="/" className="boton-regresar">
        <span className="flecha">←</span> Regresar al Inicio
      </Link>

      <div className="characters-header">
        <h1>Personajes de Harry Potter</h1>
        <div className="magic-separator"></div>
      </div>

      {cargando ? (
        <div className="loading-container">
          <div className="loading-wand">
            <span>¡Accio Personajes!</span>
          </div>
        </div>
      ) : (
        <div className="characters-grid">
          {personajes.map(personaje => (
            <div 
              key={personaje.id || personaje.name} 
              className="character-card"
              style={{'--house-color': obtenerColorCasa(personaje.house)}}
            >
              <div className="character-image-container">
                <img
                  src={personaje.image || 'https://via.placeholder.com/150x200.png?text=Sin+Imagen'}
                  alt={personaje.name}
                  className="character-image"
                />
              </div>
              <div className="character-info">
                <h3>{personaje.name}</h3>
                <div className="character-details">
                  <span className="house-badge">
                    {traducirCasa(personaje.house)}
                  </span>
                  {personaje.alive !== undefined && (
                    <span className={`status-badge ${personaje.alive ? 'alive' : 'deceased'}`}>
                      {personaje.alive ? 'Vivo' : 'Fallecido'}
                    </span>
                  )}
                </div>
                <div className="character-meta">
                  {personaje.species && (
                    <p>Especie: {traducirEspecie(personaje.species)}</p>
                  )}
                  {personaje.patronus && (
                    <p>Patronus: {personaje.patronus}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;


