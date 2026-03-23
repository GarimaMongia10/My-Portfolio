import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css'; 

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <a href="#" className="logo">GM.</a>
        </div>
        
        <nav className="sidebar-nav">
          <ul className="nav-links">
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>HOME</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>SKILLS</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>EXPERIENCE</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>PROJECTS</a></li>
            <li><a href="#certifications" onClick={() => setMenuOpen(false)}>CERTIFICATIONS</a></li>
            <li><a href="#achievements" onClick={() => setMenuOpen(false)}>ACHIEVEMENTS</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}>EDUCATION</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</a></li>
          </ul>
        </nav>


      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
