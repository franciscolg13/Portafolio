import React, { useEffect } from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    useEffect(() => {
        const smoothScroll = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector(`.${styles.header}`).offsetHeight; // Altura del header
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', smoothScroll);
        });

        // Cleanup: remove event listeners on unmount
        return () => {
            links.forEach(link => {
                link.removeEventListener('click', smoothScroll);
            });
        };
    }, []);

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li><a href="#about">Sobre mí</a></li>
                    <li><a href="#special">Herramientas</a></li>
                    <li><a href="#experience">Experiencia</a></li>
                    <li><a href="#projects">Proyectos</a></li> 
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
