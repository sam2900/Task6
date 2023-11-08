import React from 'react';
import './App.css';
import Header from './Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

import Projects from './components/Projects';
import Contact from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Skills />
      <Certifications />

      <Projects />
      <Contact />
    </div>
  );
}

export default App;
