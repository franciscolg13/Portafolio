// src/components/Experience.js

import React from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
    const experiences = [
        { position: 'Desarrollador Frontend', company: 'Empresa A', year: '2021 - Presente' },
        { position: 'Desarrollador Backend', company: 'Empresa B', year: '2020 - 2021' },
        { position: 'Practicante de Desarrollo', company: 'Empresa C', year: '2019 - 2020' },
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
