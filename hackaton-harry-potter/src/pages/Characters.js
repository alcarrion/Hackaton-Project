import React, { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://hp-api.herokuapp.com/api/characters")
      .then((response) => setCharacters(response.data))
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  const filteredCharacters = characters.filter((char) =>
    char.house.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Personajes</h2>
      <input
        type="text"
        placeholder="Filtrar por casa"
        onChange={(e) => setFilter(e.target.value)}
      />
      <div>
        {filteredCharacters.map((char) => (
          <div key={char.name}>
            <h3>{char.name}</h3>
            <p>Casa: {char.house}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;

