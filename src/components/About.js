import React from 'react';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <motion.h2 
                initial={{ y: -100, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
            >
                Acerca de mí
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
            >
                Soy un chico FullStack Development dispuesto a aprender y acceder a cualquier reto nuevo.
            </motion.p>
        </section>
    );
};

export default About;
