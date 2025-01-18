import React from "react";

const Houses = () => {
  const houses = [
    { name: "Gryffindor", color: "red" },
    { name: "Slytherin", color: "green" },
    { name: "Ravenclaw", color: "blue" },
    { name: "Hufflepuff", color: "yellow" },
  ];

  return (
    <div>
      <h2>Casas de Hogwarts</h2>
      <div>
        {houses.map((house) => (
          <div key={house.name} style={{ backgroundColor: house.color }}>
            <h3>{house.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Houses;
