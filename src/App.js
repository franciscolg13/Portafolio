// src/App.js

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Special from './components/Special';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import './styles/App.css';
import Experience from './components/Experience';

const App = () => {
    return (
        <div className="App scrollbar">
            <Header />
            <About />
            <Special /> {/* Sección de herramientas */}
            <Experience/>
            <Projects /> {/* Sección de proyectos */}
            <Hobbies />
            <Contact />
        </div>
    );
};

export default App;
