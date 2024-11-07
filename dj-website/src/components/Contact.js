// Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => (
    <motion.div
        className="contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
    >
        <h2>Contact</h2>
        <form>
            <label>Name:</label>
            <input type="text" required />
            <label>Email:</label>
            <input type="email" required />
            <label>Message:</label>
            <textarea required></textarea>
            <button type="submit">Submit</button>
        </form>
    </motion.div>
);

export default Contact;
