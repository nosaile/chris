import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Projects from './components/pages/Projects';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </Router>
      
    </>
  );
}

export default App;
