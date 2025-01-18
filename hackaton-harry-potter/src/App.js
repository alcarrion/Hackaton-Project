// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Characters from './pages/Characters';
// import Houses from './pages/Houses';
// import Spells from './pages/Spells';
// import Quiz from './pages/Quiz';
// import Login from './pages/Login';
// import Register from './pages/Register';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/characters" element={<Characters />} />
//         <Route path="/houses" element={<Houses />} />
//         <Route path="/spells" element={<Spells />} />
//         <Route path="/quiz" element={<Quiz />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;








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

