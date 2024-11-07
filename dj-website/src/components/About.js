// About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>About the DJ</h2>
            <p>Not so good DJ but I heard DJ makes money.</p>
        </motion.div>
    );
};

export default About;
