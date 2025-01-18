import React, { useState } from "react";

const Test = () => {
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    setResult(randomHouse);
  };

  return (
    <div>
      <h2>Test: Descubre tu Casa</h2>
      <p>Responde preguntas y descubre a qué casa perteneces.</p>
      <button onClick={handleSubmit}>Descubre tu casa</button>
      {result && <h3>¡Tu casa es: {result}!</h3>}
    </div>
  );
};

export default Test;
