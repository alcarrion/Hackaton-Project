import React, { useEffect, useState } from 'react';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar los personajes");
        }
        return response.json();
      })
      .then(data => {
        setCharacters(data.slice(0, 20)); // Limitar a los primeros 20 personajes
      })
      .catch(error => console.error("Error al cargar los personajes:", error))
      .finally(() => {
        setLoading(false); 
      });
  }, []);

  return (
    <div>
      <h1>Personajes de Harry Potter</h1>
      {loading ? (
        <p>Cargando personajes...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {characters.map(character => (
            <div key={character.id || character.name} style={{ margin: '10px', textAlign: 'center' }}>
              <img
                src={character.image}
                alt={character.name}
                style={{ width: '150px', borderRadius: '10px' }}
              />
              <h3>{character.name}</h3>
              <p>Casa: {character.house || 'N/A'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;
