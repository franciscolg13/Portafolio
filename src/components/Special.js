// src/components/Special.js

import React from 'react';
import styles from '../styles/Special.module.css';
import { motion } from 'framer-motion';

const Special = () => {
    const tools = [
        { name: 'AWS' },
        { name: 'Lambda' },
        { name: 'Python' },
        { name: 'LLM Analyst' },
        { name: 'IBM QRadar' },
        { name: 'Network' },
        { name: 'Blue Teams' },
        { name: 'MongoDB' },
        { name: 'OSINT' },
        { name: 'Autopsy' },
    ];

    // Configuración de variantes para las animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div 
            className={styles.special} 
            id="special"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Para que se anime cada vez que entra en el viewport
            variants={containerVariants} // Aplica la animación al contenedor
        >
            <motion.h2 variants={itemVariants}>Herramientas en las que estoy especializado</motion.h2>
            <motion.ul className={styles.toolList} variants={containerVariants}>
                {tools.map((tool, index) => (
                    <motion.li 
                        key={index} 
                        className={styles.toolItem}
                        variants={itemVariants} // Aplica la animación individualmente a cada herramienta
                    >
                        {tool.name}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default Special;
