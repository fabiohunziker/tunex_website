// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
        const [show, setShow] = useState(true);
        let lastScrollY = window.scrollY;

        const controlNavbar = () => {
                if (window.scrollY > lastScrollY) {
                        setShow(false);
                } else {
                        setShow(true);
                }
                lastScrollY = window.scrollY;
        };

        useEffect(() => {
                window.addEventListener('scroll', controlNavbar);
                return () => {
                        window.removeEventListener('scroll', controlNavbar);
                };
        }, [lastScrollY]);

        return (
            <nav className={`navbar ${show ? '' : 'hidden'}`}>
                    <img src="logo.png" alt="DJ Logo" className="logo" />
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                    <Link to="tour-dates" smooth={true} duration={500}>Tour Dates</Link>
                    <Link to="about" smooth={true} duration={500}>About</Link>
                    <Link to="music" smooth={true} duration={500}>Music</Link>
                    <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </nav>
        );
};

export default Navbar;
