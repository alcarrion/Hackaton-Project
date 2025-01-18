import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Houses from "./pages/Houses";
import Spells from "./pages/Spells";
import Test from "./pages/Test";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;

