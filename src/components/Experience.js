// src/components/Experience.js

import React from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
    const experiences = [
        { position: 'Tecnico de Información', company: 'Disofic', year: 'Dic. 2020 - Jun. 2021' },
        { position: 'Cybersecurity - SOC Analyst at Babel', company: 'Babel', year: 'Mar. 2022 - Jun 2023' },
        { position: 'Full Stack LLM Development Analyst', company: 'Accenture', year: 'Jun, 2024 - Act' },
    ];

    return (
        <div className={styles.experience} id="experience">
            <h2>Experiencia</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div className={styles.timelineItem} key={index}>
                        <div className={styles.timelineMarker}></div>
                        <div className={styles.timelineContent}>
                            <h3>{exp.position}</h3>
                            <p>{exp.company}</p>
                            <p>{exp.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
