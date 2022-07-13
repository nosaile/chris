import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import About from './components/about/About';
import Projects from './components/projects/Projects';


function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
    </div>

  );
}

export default App;
