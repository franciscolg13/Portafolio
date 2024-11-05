import React from 'react';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <motion.h2 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                Contacto
            </motion.h2>
            <p>Conéctame a través de las redes sociales o envíame un correo:</p>
            <div className={styles.icons}>
                <motion.a 
                    href="https://www.linkedin.com/in/tu-perfil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }} 
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                </motion.a>
                <motion.a 
                    href="https://github.com/tu-usuario" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }} 
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                </motion.a>
                <motion.a href="mailto:tucorreo@example.com">
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                </motion.a>
            </div>
        </section>
    );
};

export default Contact;
