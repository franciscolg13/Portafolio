// src/components/Experience.js

import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Experience.module.css';

const experiences = [
    { year: 'Jun, 2024 - Act', title: 'Full Stack LLM Development Analyst', description: 'Accenture' },
    { year: 'Mar. 2022 - Jun 2023', title: 'Cybersecurity - SOC Analyst at Babel', description: 'Babel' },
    { year: 'Dic. 2020 - Jun. 2021', title: 'Tecnico de Información', description: 'Disofic' }
];

// Subcomponente para cada elemento de la experiencia
const ExperienceItem = ({ year, title, description }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div 
            ref={ref} 
            className={`${styles.timelineItem} ${inView ? styles.show : ''}`}
        >
            <div className={styles.timelineContent}>
                <span className={styles.year}>{year}</span>
                <div className={styles.experienceCard}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <div id="experience" className={styles.experience}>
            <h2>Experiencia</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <ExperienceItem 
                        key={index} 
                        year={exp.year} 
                        title={exp.title} 
                        description={exp.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Experience;