// src/components/Special.js

import React from 'react';
import styles from '../styles/Special.module.css';

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

    return (
        <div className={styles.special} id="special"> {/* Agregar id aquí */}
            <h2>Herramientas en las que estoy especializado</h2>
            <ul className={styles.toolList}>
                {tools.map((tool, index) => (
                    <li key={index} className={styles.toolItem}>
                        {tool.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Special;
