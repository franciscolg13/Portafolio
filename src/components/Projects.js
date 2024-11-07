import React from 'react';
import styles from '../styles/Projects.module.css';
import { motion } from 'framer-motion';


const projects = [
    { title: 'Precio de coches', description: 'Es un proyecto en el cual tengo en cuenta una base de datos para analizar el precio de coches teniendo en cuenta Kilometros y más casuísticas.' },
    { title: 'Expected Foot', description: 'Se trata de un proyecto realizado con dos personas más donde se tiene en cuenta el analisis de los jugadores partido a partido para crear un chatbot que pueda predecir cuantos goles puede llegar a meter un jugador teniendo en cuenta sus características.' },
    { title: 'Perceptron', description: 'Un proyecto donde el usuario puede poner a prueba una neurona.' },
    { title: 'Salario trabajadores', description: 'El proyecto trata de analizar el salario de unos trabajadores teniendo en cuenta un CSV.'}
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
