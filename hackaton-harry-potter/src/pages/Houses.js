import gryffindorBg from "../assets/images/gryffindor-bg.png";
// import hufflepuffBg from "../assets/images/hufflepuff-bg.jpg";
// import ravenclawBg from "../assets/images/ravenclaw-bg.jpg";
// import slytherinBg from "../assets/images/slytherin-bg.jpg";


import React from "react";
import "./Houses.css"; 

const houses = {
  Gryffindor: {
    name: "Gryffindor",
    description: "Los valientes y determinados. Siempre listos para la aventura.",
    // color: "#ae0001",
    backgroundImage: gryffindorBg, // Fondo personalizado
    traits: ["Coraje", "Determinación", "Caballerosidad"],
    specialEffect: "🔥",
  },
  Hufflepuff: {
    name: "Hufflepuff",
    description: "Los leales y trabajadores. La amistad es su mayor fortaleza.",
    color: "#ffdb00",
    backgroundImage: "/path-to-hufflepuff-bg.jpg",
    traits: ["Lealtad", "Paciencia", "Justicia"],
    specialEffect: "🌼",
  },
  Ravenclaw: {
    name: "Ravenclaw",
    description: "Los sabios y creativos. Siempre buscando el conocimiento.",
    color: "#0e1a40",
    backgroundImage: "/path-to-ravenclaw-bg.jpg",
    traits: ["Inteligencia", "Creatividad", "Sabiduría"],
    specialEffect: "🦅",
  },
  Slytherin: {
    name: "Slytherin",
    description: "Los astutos y ambiciosos. Siempre pensando en grande.",
    color: "#2a623d",
    backgroundImage: "/path-to-slytherin-bg.jpg",
    traits: ["Astucia", "Ambición", "Determinación"],
    specialEffect: "🐍",
  },
};

const Houses = () => {
  return (
    <div className="houses-page">
      <h1 className="page-title">Casas de Hogwarts</h1>
      <div className="houses-container">
        {Object.values(houses).map((house, index) => (
          <div
            key={index}
            className="house-card"
            style={{
              backgroundColor: house.color,
              backgroundImage: `url(${house.backgroundImage})`,
              backgroundSize: "cover",
              backgroundBlendMode: "multiply",
            }}
          >
            <div className="house-content">
              <h2 className="house-title">
                {house.specialEffect} {house.name}
              </h2>
              <p className="house-description">{house.description}</p>
              <ul className="house-traits">
                {house.traits.map((trait, i) => (
                  <li key={i}>{trait}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Houses;
