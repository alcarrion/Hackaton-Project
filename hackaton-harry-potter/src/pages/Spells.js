import React, { useEffect, useState } from "react";

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch("https://hp-api.herokuapp.com/api/spells");
        if (!response.ok) {
          throw new Error("Error al obtener los hechizos");
        }
        const data = await response.json();
        setSpells(data.slice(0, 20)); // Limitar a los primeros 20 hechizos
      } catch (error) {
        console.error("Error al obtener los hechizos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpells();
  }, []);

  return (
    <div>
      <h2>Hechizos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {spells.map((spell) => (
            <li key={spell.name}>
              <strong>{spell.name}</strong>: {spell.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Spells;
