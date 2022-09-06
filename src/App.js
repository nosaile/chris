import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Trails from './components/pages/Trails';


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/welcome"  element={<Home />} />
        <Route path="/trails" element={<Trails />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
