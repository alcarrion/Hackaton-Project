import React, { useEffect, useState } from "react";
import axios from "axios";

const Spells = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    axios.get("https://hp-api.herokuapp.com/api/spells")
      .then((response) => setSpells(response.data))
      .catch((error) => console.error("Error fetching spells:", error));
  }, []);

  return (
    <div>
      <h2>Hechizos</h2>
      <ul>
        {spells.map((spell) => (
          <li key={spell.name}>
            <strong>{spell.name}</strong>: {spell.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Spells;
