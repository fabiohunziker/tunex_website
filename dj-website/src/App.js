// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TourDates from './components/TourDates';
import About from './components/About';
import Music from './components/Music';
import Contact from './components/Contact';
import './App.css';
import Gallery from "./components/Gallery";

function App() {
    return (
        <div className="App">
            <Navbar />
            <section id="home">
                <Home />
            </section>
            <section id="tour-dates">
                <TourDates />
            </section>
            <section id="gallery">
                     <Gallery />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="music">
                <Music />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default App;
