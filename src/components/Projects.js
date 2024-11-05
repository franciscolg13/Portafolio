import React from 'react';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';

const projects = [
    { title: 'Proyecto 1', description: 'Portafolio.' },
    { title: 'Proyecto 2', description: 'Descripción del proyecto 2.' },
    { title: 'Proyecto 3', description: 'Descripción del proyecto 3.' },
];

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <motion.h2 
                initial={{ y: 100, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                Mis Proyectos
            </motion.h2>
            <div className={styles.projectList}>
                {projects.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className={styles.projectCard} 
                        initial={{ scale: 0.9, opacity: 0 }} 
                        whileInView={{ scale: 1, opacity: 1 }} 
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
