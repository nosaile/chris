import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/welcome"  element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      </Router>
      
    </>
  );
}

export default App;
