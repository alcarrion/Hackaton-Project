import React, { useState, useEffect } from "react";
import "./Test.css";
import { Link } from "react-router-dom";
import backgroundVideo from "../assets/videos/background.mp4";

const Test = () => {
  const questions = [
        {
          id: 1,
          question: "¿Cuál es tu color favorito?",
          options: [
            { text: "Rojo", house: "Gryffindor" },
            { text: "Amarillo", house: "Hufflepuff" },
            { text: "Azul", house: "Ravenclaw" },
            { text: "Verde", house: "Slytherin" },
          ],
        },
        {
          id: 2,
          question: "¿Qué cualidad valoras más?",
          options: [
            { text: "Valentía", house: "Gryffindor" },
            { text: "Lealtad", house: "Hufflepuff" },
            { text: "Sabiduría", house: "Ravenclaw" },
            { text: "Astucia", house: "Slytherin" },
          ],
        },
        {
          id: 3,
          question: "¿Cuál es tu animal favorito?",
          options: [
            { text: "León", house: "Gryffindor" },
            { text: "Tejón", house: "Hufflepuff" },
            { text: "Águila", house: "Ravenclaw" },
            { text: "Serpiente", house: "Slytherin" },
          ],
        },
        {
          id: 4,
          question: "¿Qué prefieres hacer en tu tiempo libre?",
          options: [
            { text: "Explorar nuevos lugares", house: "Gryffindor" },
            { text: "Ayudar a tus amigos", house: "Hufflepuff" },
            { text: "Leer y aprender cosas nuevas", house: "Ravenclaw" },
            { text: "Planear estrategias", house: "Slytherin" },
          ],
        },
        {
          id: 5,
          question: "¿Cuál es tu clase favorita en Hogwarts?",
          options: [
            { text: "Defensa Contra las Artes Oscuras", house: "Gryffindor" },
            { text: "Cuidado de Criaturas Mágicas", house: "Hufflepuff" },
            { text: "Encantamientos", house: "Ravenclaw" },
            { text: "Pociones", house: "Slytherin" },
          ],
        },
        {
          id: 6,
          question: "¿Qué tipo de amigos prefieres?",
          options: [
            { text: "Valientes y decididos", house: "Gryffindor" },
            { text: "Amables y confiables", house: "Hufflepuff" },
            { text: "Inteligentes y curiosos", house: "Ravenclaw" },
            { text: "Ambiciosos y astutos", house: "Slytherin" },
          ],
        },
        {
          id: 7,
          question: "¿Qué harías en una situación de peligro?",
          options: [
            { text: "Enfrentar el peligro de inmediato", house: "Gryffindor" },
            { text: "Proteger a los demás", house: "Hufflepuff" },
            { text: "Analizar la situación antes de actuar", house: "Ravenclaw" },
            { text: "Buscar una solución estratégica", house: "Slytherin" },
          ],
        },
        {
          id: 8,
          question: "¿Cuál es tu estación favorita?",
          options: [
            { text: "Verano", house: "Gryffindor" },
            { text: "Primavera", house: "Hufflepuff" },
            { text: "Otoño", house: "Ravenclaw" },
            { text: "Invierno", house: "Slytherin" },
          ],
        },
        {
          id: 9,
          question: "¿Qué valoras más en una aventura?",
          options: [
            { text: "El coraje", house: "Gryffindor" },
            { text: "La amistad", house: "Hufflepuff" },
            { text: "El conocimiento", house: "Ravenclaw" },
            { text: "El éxito", house: "Slytherin" },
          ],
        },
        {
          id: 10,
          question: "¿Qué posición te gustaría jugar en Quidditch?",
          options: [
            { text: "Cazador", house: "Gryffindor" },
            { text: "Buscador", house: "Hufflepuff" },
            { text: "Golpeador", house: "Ravenclaw" },
            { text: "Guardián", house: "Slytherin" },
          ],
        },
      ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [housePoints, setHousePoints] = useState({
    Gryffindor: 0,
    Hufflepuff: 0,
    Ravenclaw: 0,
    Slytherin: 0,
  });
  const [result, setResult] = useState("");

  const handleAnswer = (house) => {
    const nextPoints = {
      ...housePoints,
      [house]: housePoints[house] + 1,
    };

    setHousePoints(nextPoints);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const sortedHouses = Object.entries(nextPoints).sort((a, b) => b[1] - a[1]);
      setResult(sortedHouses[0][0]);
    }
  };

  // Agregar y limpiar clase al body
  useEffect(() => {
    document.body.classList.add("test-page");
    return () => {
      document.body.classList.remove("test-page");
    };
  }, []);

  return (
    <div className="test-container">
      <Link to="/" className="back-button">
        <span className="back-arrow">←</span> Regresar al Inicio
      </Link>

      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={backgroundVideo} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>

      {result ? (
        <div className={`result-container ${result.toLowerCase()}`}>
          <h1>¡Felicidades! Perteneces a {result}</h1>
          <button
            className="restart-button"
            onClick={() => window.location.reload()}
          >
            Realizar el test nuevamente
          </button>
        </div>
      ) : (
        <div className="question-container">
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <h2 className="question-number">
            Pregunta {currentQuestion + 1} de {questions.length}
          </h2>
          <h1 className="question-text">{questions[currentQuestion].question}</h1>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${option.house.toLowerCase()}`}
                onClick={() => handleAnswer(option.house)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
