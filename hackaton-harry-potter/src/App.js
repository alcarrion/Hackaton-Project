
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Houses from './pages/Houses';
import Spells from './pages/Spells';
import Test from './pages/Test';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;