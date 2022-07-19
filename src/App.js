import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>

  );
}

export default App;
