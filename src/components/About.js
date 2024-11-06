import React, { useEffect, useState } from 'react';
import styles from '../styles/About.module.css';
import { motion } from 'framer-motion';

const About = () => {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // Obtener la altura del header
        const header = document.querySelector('header');
        if (header) {
            setHeaderHeight(header.offsetHeight); // Establecer la altura del header en el estado
        }

        // Añadir event listener para recalcular en caso de que cambie el tamaño de la ventana
        const handleResize = () => {
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        // Limpiar el event listener al desmontar
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id="about" className={styles.about} style={{ marginTop: `${headerHeight - 20}px` }}> {/* Resta un pequeño valor para el margen superior */}
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
