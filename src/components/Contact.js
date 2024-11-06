import React from 'react';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Contact = () => {
    // Configuraciones de animación para los elementos individuales
    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Comienza invisible y desplazado hacia abajo
        visible: { opacity: 1, y: 0 } // Termina visible y en su posición normal
    };

    return (
        <motion.section 
            id="contact" 
            className={styles.contact}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Inicia animación cuando el 20% del elemento es visible
            transition={{ staggerChildren: 0.15 }} // Añade un pequeño retraso entre elementos
        >
            {/* Título de contacto */}
            <motion.h2 
                variants={itemVariants}
                transition={{ duration: 0.6 }}
            >
                Contacto
            </motion.h2>
            
            {/* Texto de introducción */}
            <motion.p 
                variants={itemVariants}
                transition={{ duration: 0.6 }}
            >
                Conéctame a través de las redes sociales o envíame un correo:
            </motion.p>
            
            {/* Iconos de redes sociales */}
            <div className={styles.icons}>
                <motion.a 
                    href="https://www.linkedin.com/in/francisco-lópez-gonzález-638730182/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }} 
                    transition={{ type: 'spring', stiffness: 300 }}
                    variants={itemVariants}
                >
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                </motion.a>
                
                <motion.a 
                    href="https://github.com/franciscolg13" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }} 
                    transition={{ type: 'spring', stiffness: 300 }}
                    variants={itemVariants}
                >
                    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                </motion.a>
                
                <motion.a 
                    href="mailto:franciscolopez1300@gmail.com"
                    variants={itemVariants}
                >
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                </motion.a>
            </div>
            
            {/* Pie de página */}
            <div 
                className={styles.footer}
                variants={itemVariants}
            >
                <p>Built and designed by Francisco López</p>
                <p>All rights reserved. © {new Date().getFullYear()}</p>
            </div>
        </motion.section>
    );
};

export default Contact;
